const PlayerCharacterController = require('../controllers/PlayerCharacter.controller');

module.exports = (app) => {
    app.post("/characters", PlayerCharacterController.create);
}