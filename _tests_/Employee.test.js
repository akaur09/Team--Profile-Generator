// call on employee js
const ployee = require('../js/employee');

// describe test
describe('Employee', () => {
    // define name id and email
    var name = `JaneDoe`;
    var id = 9;
    var email = `JaneDoe@gmail.com`;
    // call on name id email into employee object
    janeDoe = new ployee(name, id, email);
    it("Makes new employee object", () => {
        expect(typeof janeDoe).toEqual(`objecct`);
    })

    // test if employee exists
    describe('JaneDoe employee exists',() => {
        it("Confirms Jane Doe is an instance of employee class", ()=> {
            expect(janeDoe).toBeDefined();
        })
    })
    // get name test
})