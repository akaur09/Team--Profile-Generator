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
        expect(typeof janeDoe).toEqual(`object`);
    })

    // test if employee exists
    describe('JaneDoe employee exists',() => {
        it("Confirms Jane Doe is an instance of employee class", ()=> {
            expect(janeDoe).toBeDefined();
        })
    })
    // get name test
    describe('function getName', ()=> {
        it("returns name of employee object", () => {
            expect(janeDoe.getName()).toEqual("This is JaneDoe")
        })
    })
    // getId test
    describe('function getId', ()=> {
        it("returns Id of employee", () => {
            expect(janeDoe.getId()).toEqual("My employee ID is 9")
        })
    })
    // getEmail test
    describe('function getEmail', () => {
        it("returns employees email", () => {
            expect(janeDoe.getEmail()).toEqual("My work email is JaneDoe@gmail.com")
        })
    })
    // getRole funciton test
    describe('function getRole', () => {
        it("returns employee role", () => {
            expect(janeDoe.getRole()).toEqual("My role here is Employee")
        })
    })
})