// Write your solution in this file!
function updateEmployeeWithKeyAnd Balue(obj, key, value) {
}
    return Object.assign( {}, obj, { [key] : value});
    const employee = {name:'Sam' streetAddress: '12 Brodway'}

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
    }

    function deleteFromEmplyeeByKey(obj, key, value) {
        return Object.assign({}, obj, {[key] : value});
    }

    function destructivelyDeleteFromEmployeeByKey(employee, key) {
        return delete employee[key];
    }