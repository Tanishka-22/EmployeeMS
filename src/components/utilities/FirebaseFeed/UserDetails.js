import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(
  readFileSync(new URL('./serviceAccountKey.json', import.meta.url))
);

// Initialize Firebase Admin
initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

// Function to add user data to Firestore
const Employees = [{
    uid: "fnvTO3kjOIgbptWbMelMyFkHrMr1",
    empID: "EMP001",
    email: "emp1@gmail.com",
    password: "A-employee",
    role: "user",
    name: "Employee 1",
    DOB: "2002-05-15",
    Gender: "Female",
    Department: "IT",
    DOJ: "2023-07-01",
    MaritalStatus: "Single",
  },
  { 
    uid: "BWxb3vGwTDSlycXjeRSlz1TFNJ52",
    empID: "EMP002",
    email: "emp2@gmail.com",
    password: "A-employee",
    role: "user",
    name: "Employee 2",
    DOB: "2003-06-15",
    Gender: "Male",
    Department: "Accounts",
    DOJ: "2023-07-01",
    MaritalStatus: "Married",
  },
  {
    uid: "v3L7avgAOhPtvGmgOXxACXRxh3l1",
    empID: "EMP003",
    email: "emp3@gmail.com",
    password: "A-employee",
    role: "user",
    name: "Employee 3",
    DOB: "1995-08-22",
    Gender: "Male",
    Department: "HR",
    DOJ: "2023-08-15",
    MaritalStatus: "Single",
  },
  {
    uid: "s26XHJA3iiOwlqFWGAirkDNGPnb2",
    empID: "EMP004",
    email: "emp4@gmail.com",
    password: "A-employee",
    role: "user",
    name: "Employee 4",
    DOB: "1998-03-10",
    Gender: "Female",
    Department: "Marketing",
    DOJ: "2023-06-01",
    MaritalStatus: "Married",
  },
  {
    uid: "gDNkjIzlTORwHUMeJWwroXrf0b22",
    empID: "EMP005",
    email: "emp5@gmail.com",
    password: "A-employee",
    role: "user",
    name: "Employee 5",
    DOB: "2000-12-30",
    Gender: "Male",
    Department: "IT",
    DOJ: "2023-09-01",
    MaritalStatus: "Single",
  },
];

const uploadUsers = async () => {
    try {
      const batch = db.batch();
      
      for (const employee of Employees) {
        const docRef = db.collection('Employees').doc(employee.uid);
        batch.set(docRef, employee);
      }
      
      await batch.commit();
      console.log('✅ All employees added successfully!');
    } catch (error) {
      console.error("❌ Error adding employees:", error.message);
    } finally {
      process.exit(0);
    }
};

uploadUsers();