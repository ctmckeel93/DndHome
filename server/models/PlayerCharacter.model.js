const mongoose = require('mongoose');

const PlayerCharacterSchema = new mongoose.Schema({

    name: String,
    race: String,
    playerClass: String,
    level: Number,
    speeds: {
        walking: Number,
        swimming: Number,
        flying: Number,
        climbing: Number,
        burrowing: Number
    },
    stats: {
        strength: Number,
        dexterity: Number,
        constitution: Number,
        intelligence: Number,
        wisdom: Number,
        charisma: Number
    },
    inventory: [],
    spells: []

}, {timestamps: true})

const PlayerCharacter = new mongoose.model("PlayerCharacter",PlayerCharacterSchema);

module.exports = {PlayerCharacter};