// Write your solution in th
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const  newEmployee ={...employee,[key]: value };
    return newEmployee;
}

const employee ={
    name:"Sam",
    streetAddress :"10 Broadway"
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployeeObject ={...employee,key};
   delete  newEmployeeObject['key']
return newEmployeeObject;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee [key];
    return employee
}