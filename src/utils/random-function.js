function testFunction() {

    const obj = {
        name: 'Anton',
        lastName: 'Burkun'

    }
    const { name } = obj;

    console.log('Test');
    console.log(name);
}

module.exports = {
    testFunction: testFunction
}