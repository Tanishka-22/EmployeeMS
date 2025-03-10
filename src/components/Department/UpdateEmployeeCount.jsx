import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase';

export const UpdateEmployeeCount = async (deptName) => {
  try{
    const employeeRef = collection(db,"Employees");
    const q = query(employeeRef,where("Department","==",deptName));
    const querySnapshot = await getDocs(q);
    const count = querySnapshot.size;

    const deptRef = collection(db,"Departments");
    const deptQuery = query(deptRef, where("name", "==", departmentName));
    const deptSnapshot = await getDocs(deptQuery);
    
    deptSnapshot.forEach(async(document) => {
      await updateDoc(doc(db, "Departments", document.id), {
        employeeCount: count,
        updatedAt: new Date().toISOString(),
      });
    });

    return count;
  }catch(error){
    console.log("Error updating employee count:", error);
    throw error;
  }
};

export default UpdateEmployeeCount