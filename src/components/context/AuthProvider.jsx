import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUserRole = async (uid) => {
        try {
            console.log("Fetching role for UID:", uid); // Log the UID
            const userRef = doc(db, "users", uid);
            console.log("User reference:", userRef); // Log the document reference
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                const userData = userSnap.data();
                console.log("User data:", userData); // Log the fetched user data

                if (userData.role) {
                    setRole(userData.role);
                } else {
                    setRole('employee'); // Default role
                    toast.warning("Role not specified, defaulting to employee");
                }
            } else {
                setRole('employee'); // Default role
                toast.warning("User data not found, defaulting to employee");
            }
        } catch (error) {
            console.error("Error fetching role:", error);
            setRole('employee'); // Default role
            toast.error("Error fetching role, defaulting to employee");
        } finally {
            setLoading(false); // Ensure loading is set to false in all cases
        }
    };

    const handleLogin = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            await fetchUserRole(userCredential.user.uid);
            return true;
        } catch (error) {
            toast.error("Invalid credentials");
            console.error(error);
            return false;
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setRole(null);
        } catch (error) {
            toast.error("Error logging out");
            console.error(error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                await fetchUserRole(currentUser.uid);
            } else {
                setUser(null);
                setRole(null);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const value = {
        user,
        role,
        loading,
        handleLogin,
        handleLogout,
        userLoggedIn: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};