const request = require('supertest')
const app = require ('../app.js')


describe('Test de la route POST "/users/add"', () => {
    it('erreur données', async () => {
      const userData = {
        
      };
  
      const response = await request(app)
        .post('/users/add')
        .send(userData)
        .expect(400); 
  
    });
  });