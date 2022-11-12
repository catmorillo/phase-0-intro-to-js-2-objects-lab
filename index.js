const employee = {
    name: "Cat", 
    "streetAddress": "123 Fair ave"
}

function updateEmployeeWithKeyAndValue(empObject,key,value) {
    //console.log("empObject",empObject) 
    //console.log("key",key)  
    //console.log("value",value)   
    // const copy = Object.assign({},empObject)
    let copy = {...empObject};
    copy[key]= value 
    return copy 
}
function destructivelyUpdateEmployeeWithKeyAndValue (empObject,key,value) {
    empObject[key] = value; 
    return empObject;
}

function deleteFromEmployeeByKey (empObject, key) {
    let newEmployee = {...empObject}
    delete newEmployee[key]
    return newEmployee;

}
function destructivelyDeleteFromEmployeeByKey (empObject, key) { 
    //console.log("empObject=>",empObject) 
    //console.log("key=>",key)
//let newEmployee = {...empObject}
delete empObject[key] 
    return empObject;
}




// function deleteFromEmployeeByKey (object, key) {
//     let newEmployee = {...object} 
//     delete newEmployee[key] 
//     return newEmployee;
// }

