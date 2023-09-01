const { checkPassword } = require("../utils/utils")



    test('check 8 letters : false',() =>{
        expect(checkPassword("Pa5.")).toBe(false)
    })
    test('check cher spe : false', () => {
        expect(checkPassword("Password123")).toBe(false);
    });
    
    test('check number ; false', () => {
        expect(checkPassword("Password!")).toBe(false);
    });
    
    test('check letters : false', () => {
        expect(checkPassword("12345678!")).toBe(false);
    });

    test('check tt ok : True', () => {
        expect(checkPassword("MotDePasse1!")).toBe(true);
      });
    
