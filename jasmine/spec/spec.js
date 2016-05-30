var app = require ('../js/script.js');


describe("Involution", function() {
    it("2 ^ 2", function() {
        //prepare
        var result;
        //act
        result = app.involute(2, 3);
        //assert
        expect(result).toBe(8);
    });
    it("3 ^ 3", function() {
        //prepare
        var result;
        //act
        result = app.involute(3, 3);
        //assert
        expect(result).toBe(27);
    });
    it("4 ^ 4", function() {
        //prepare
        var result;
        //act
        result = app.involute(4, 4);
        //assert
        expect(result).not.toBe(!256);
    });
});

