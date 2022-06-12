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
})