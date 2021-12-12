const mongoose = require('mongoose')
const collegeSchema = new mongoose.Schema(
        {

                name:
                {
                        type: String,
                        required: true,
                        unique:true,
                        trim:true
                },
                fullName:
                {
                        type: String,
                        required: true
                },
                logoLink:
                {
                        type: String,
                       required: true
                },
                isDeleted: 
                {
                        type:Boolean, 
                        default: false
                }

        },

        { timestamps: true }


)

module.exports = mongoose.model('collegeModel_03.12.2021', collegeSchema)

