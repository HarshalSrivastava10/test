const mongoose = require('mongoose')
const teamSchema = new mongoose.Schema(
    {
        teamName: {
            type: String
        },
        password:{
            type: String,
     
        }
    }
)