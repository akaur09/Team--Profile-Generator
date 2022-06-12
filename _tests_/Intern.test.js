// require intern js
const Intern = require('../js/intern');

// begin describeing as a mangaer subclass
describe('Intern subclass', () => {
    // define name id email, and github
    var name = `JaneDoe`;
    var id = 9;
    var email = `JaneDoe@gmail.com`;
    var school = `ASU`;
    janeDoe = new Intern (name, id, email, school);
    it("creates new intern object", () => {
        expect(typeof janeDoe).toEqual(`object`);
    })
    // if intern already exists
    describe('JaneDoe Intern already exist', () => {
        it('confirms that JaneDoe is an instance of intern subclass', () => {
            expect(janeDoe).toBeDefined();
        })
    })
     // get name test
     describe('function getName', ()=> {
        it("returns name of intern object", () => {
            expect(janeDoe.getName()).toEqual("This is JaneDoe")
        })
    })
    // getId test
    describe('function getId', ()=> {
        it("returns Id of intern", () => {
            expect(janeDoe.getId()).toEqual("My employee ID is 9")
        })
    })
    // getEmail test
    describe('function getEmail', () => {
        it("returns interns email", () => {
            expect(janeDoe.getEmail()).toEqual("My work email is JaneDoe@gmail.com")
        })
    })
    // getSchool funciton test
    describe('function getSchool', () => {
        it("returns interns school", () => {
            expect(janeDoe.getSchool()).toEqual("My school is ASU")
        })
    })
    // getRole funciton test
    describe('function getRole', () => {
        it("returns intern role", () => {
            expect(janeDoe.getRole()).toEqual("My role is Intern")
        })
    })
})