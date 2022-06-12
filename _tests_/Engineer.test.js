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
    it("creates new employee object", () => {
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
        it("returns name of employee object", () => {
            expect(janeDoe.getName()).toEqual("this is jane doe")
        })
    })
    // getId test
    describe('function getId', ()=> {
        it("returns Id of employee", () => {
            expect(janeDoe.getId()).toEqual("my id is 9")
        })
    })
    // getEmail test
    describe('function getEmail', () => {
        it("returns employees email", () => {
            expect(janeDoe.getEmail()).toEqual("my email is JaneDoe@gmail.com")
        })
    })
    // getGithub function test
    describe('function getGtihub', () => {
        it("returns engineers github", () => {
            expect(janeDoe.getGithub()).toEqual("my github is JDcode9")
        })
    })
    // getRole funciton test
    describe('function getRole', () => {
        it("returns employee role", () => {
            expect(janeDoe.getRole()).toEqual("my role is employee")
        })
    })
})