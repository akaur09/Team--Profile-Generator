// require engineer.js
const neer = require('../js/engineer');

// describe engineer as a subclass with name, id, email and github
describe('Engineer subclass', () => {
    // define name id email, and github
    var name = `JaneDoe`;
    var id = 9;
    var email = `JaneDoe@gmail.com`;
    var gitUsername = `JDcode9`;
    janeDoe = new neer.Engineer(name, id, email, gitUsername);
    it("creates new engineer object", () => {
        expect(typeof janeDoe).toEqual(`object`);
    })
    // if engineer with same name exist
    describe('JaneDoe Engineer exists', () => {
        it('confirms that JaneDoe is an instance of engineer class', () => {
            expect(janeDoe).toBeDefined();
        })
    })
     // get name test
     describe('function getName', ()=> {
        it("returns name of engineer object", () => {
            expect(janeDoe.getName()).toEqual("This is JaneDoe")
        })
    })
    // getId test
    describe('function getId', ()=> {
        it("returns Id of engineer", () => {
            expect(janeDoe.getId()).toEqual("My employee ID is 9")
        })
    })
    // getEmail test
    describe('function getEmail', () => {
        it("returns engineers email", () => {
            expect(janeDoe.getEmail()).toEqual("My work email is JaneDoe@gmail.com")
        })
    })
    // getGithub function test
    describe('function getGtihub', () => {
        it("returns engineers github", () => {
            expect(janeDoe.getGithub()).toEqual(" My github username is JDcode9")
        })
    })
    // getRole funciton test
    describe('function getRole', () => {
        it("returns engineer role", () => {
            expect(janeDoe.getRole()).toEqual("My role is Engineer")
        })
    })
})