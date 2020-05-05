var Person = require ("../src/person.js");
let person = new Person('Ryan',30,'male',['being a hardarse','agile','ssd hard drives'])

describe("Person class", function(){
    it("should store persons name in name variable", function(){
        expect(person.name).toBe('Ryan')
    })

    it("should store persons age in the age variable",function(){
        expect(person.age).toBe(30)
    })

    it("should store persons gender in the variable gender",function(){
        expect(person.gender).toBe('male')
    })

    it("should store persons interests in the interests object",function(){
        expect(person.interests).toEqual(['being a hardarse','agile','ssd hard drives'])
    })
});

describe("hello method",function(){
    it("should print out a string greeting",function(){
        expect(person.hello()).toBe("Hello, my name is Ryan and my gender is male, I am 30 years old. My interests are being a hardarse, agile and ssd hard drives.")
    })
})
