const {PlayerCharacter} = require("../models/PlayerCharacter.model");

module.exports = {
    create: (request, response) => {

        PlayerCharacter.create(request.body)
            .then(newCharacter => response.json(newCharacter))
            .catch(err => response.json({message: "Problem with creating new character",  error: err}))
    }
}