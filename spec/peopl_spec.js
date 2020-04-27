var userDetails = require ("../src/people.js");
let userOne = new userDetails('Ryan',30,'male',['being a hardarse','agile','ssd hard drives'])

describe("Stores string variables", function(){
    it("stores user name into name variable", function(){
        expect(userOne.name).toBe('Ryan')
    })

    it("stores user age into age variable",function(){
        expect(userOne.age).toBe(30)
    })

    it("stores user gender into variable gender",function(){
        expect(userOne.gender).toBe('male')
    })

    it("stores user interests into interests variable",function(){
        expect(userOne.interests.length).toBe(3)
    })
});

describe("To return a string greeting using all input variables",function(){
    it("prints out string greeting",function(){
        expect(userOne.hello()).toBe("Hello, my name is Ryan; my gender is male; I am 30 years old; My interests are being a hardarse; agile and ssd hard drives.")
    })
})
