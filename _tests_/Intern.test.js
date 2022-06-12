// require intern js
const int = require('../js/intern');

// begin describeing as a mangaer subclass
describe('Manager subclass', () => {
    // define name id email, and github
    var name = `JaneDoe`;
    var id = 9;
    var email = `JaneDoe@gmail.com`;
    var school = `ASU`;
    janeDoe = new int.Intern(name, id, email, school);
    it("creates new employee object", () => {
        expect(typeof janeDoe).toEqual(`object`);
    })
})