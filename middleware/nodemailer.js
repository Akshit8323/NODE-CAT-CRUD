const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport ({
    service: "gmail" , 
    auth:{
        user:"mr.akpatel6585@gmail.com" ,
        pass: "ybdnatvssotjyvbs"
    },
});

module.exports.sendOtp = (to,otp) => {
    let mailOption ={
        from: "mr.akpatel6585@gmail.com",
        to:to,
        subject: "Your OTP is Here",
        text: `Your OTP is ${otp}`,
    };

    transport.sendMail(mailOption,(err)=>{
        err && console.log(err);
        
    });
};