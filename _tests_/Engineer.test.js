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
})