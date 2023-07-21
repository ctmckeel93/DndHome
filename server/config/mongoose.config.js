const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/ddb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log("Successfully connected to the db"))
    .catch(err => console.log(err));