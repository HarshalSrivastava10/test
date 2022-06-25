const express = require("express")
const app = express();
//const data = require("./data.json");
const nodemailer = require("nodemailer");
let PORT = process.env.PORT || 3000;


let transporter = nodemailer.createTransport({
    service:"",
    auth: {
        user: "pshrey714@gmail.com",
        pass: "fiyhlnlpyvfisptj"
    },
    tls: {
        rejectUnauthorized: false,
    }
})

let mailOptions = {
    from: "pshrey714@gmail.com",
    to: "aryashahi2002@gmail.com",
    subject: "Registered Successfully",
    text: "hello",
    html:"<h3>Congratulation, you are registered successfully</h3>",
}


transporter.sendMail(mailOptions, function(err, success){
    if(err){
        console.log(err)
    }else{
        console.log("email sent", res)
    }
})




// app.get("/api", (req,res) => {
//     res.send(data);
// });

app.get(PORT, () => {
    console.log('listening on port ${PORT}');
});
