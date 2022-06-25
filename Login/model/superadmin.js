const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema(
    {
        superAdminName: {
            type: String
        },
        password:{
            type: String,
     
        }
    }
)