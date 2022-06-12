// require manager.js
const man = require('../js/manager')
// descibe test
describe('Manager subclass', () => {
    // define name id email, and office number
    var name = `JaneDoe`;
    var id = 9;
    var email = `JaneDoe@gmail.com`;
    var officeNumber = 7;
    janeDoe = new man.Manager(name, id, email, officeNumber);
    it('creates a new manager object', () => {
        expect(typeof janeDoe).toEqual("object");
    })
    // if nmae already exists
    describe('JaneDoe Manager already exists', () => {
        it("Confirms that JaneDoe is in instance of maganer class", () => {
            expect(janeDoe).toBeDefined();
        })
    })
     // get name test
     describe('function getName', ()=> {
        it("returns name of manager object", () => {
            expect(janeDoe.getName()).toEqual("This is JaneDoe")
        })
    })
    // getId test
    describe('function getId', ()=> {
        it("returns Id of manager", () => {
            expect(janeDoe.getId()).toEqual("My employee ID is JaneDoe@gmail.com")
        })
    })
    // getEmail test
    describe('function getEmail', () => {
        it("returns managers email", () => {
            expect(janeDoe.getEmail()).toEqual("My work email is JaneDoe@gmail.com")
        })
    })
    // getOfficeNumber funciton test
    describe('function getOfficeNumber', () => {
        it("returns managers office", () => {
            expect(janeDoe.getOfficeNumber()).toEqual("my office number is 7")
        })
    })
    // getRole funciton test
    describe('function getRole', () => {
        it("returns manager role", () => {
            expect(janeDoe.getRole()).toEqual(" my role is Manager")
        })
    })
})