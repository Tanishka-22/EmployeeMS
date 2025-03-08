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
            const userRef = doc(db, "Users", uid);
            const userSnap = await getDoc(userRef);
            
            if (userSnap.exists()) {
                const userData = userSnap.data();
                console.log("User data:", userData);
    
                if (userData.role) {
                    setRole(userData.role);
                } else {
                    console.error("No role field in user document");
                    toast.error("Access denied: No role assigned");
                    setUser(null);
                    setRole(null);
                }
            } else {
                console.error("User document not found for UID:", uid);
                toast.error("Access denied: User not found");
                setUser(null);
                setRole(null);
            }
        } catch (error) {
            console.error("Error fetching role:", error);
            toast.error("Error accessing user data");
            setUser(null);
            setRole(null);
        } finally {
            setLoading(false);
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