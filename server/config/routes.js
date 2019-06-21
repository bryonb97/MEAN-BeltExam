var pets = require('../controllers/controllers'); // replace model with name of your controller file 

module.exports = (app) => {
    // API routes here
    // example:
    app.get('/allpets', (req, res) => pets.index(req, res));
    // CRUD routing examples
    // Create
    app.post('/pets', (req, res) => pets.create(req, res));
    // Read
    app.get('/pets/:id', (req, res) => pets.read(req, res));
    // Update
    app.put('/pets/:id', (req, res) => pets.update(req, res));
    // Destroy
    app.delete('/pets/:id', (req, res) => pets.destroy(req, res));

    // Like
    app.put('/petlike/:id', (req, res) => pets.updateLike(req, res));
}