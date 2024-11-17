import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"


export const sendVerificationEmail =async (email,verificationToken)=>{
const recipient = [{email}];

try {
    const response = await mailtrapClient.send({
        from:sender,
        to:recipient,
        subject:"Daddy ne hello bol",
        html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
        category:"Email verification",
        
        
    })
    console.log("Email sent succesfully:" , response);
} catch (error) {
 console.log(`Error sendinf verification `, error);
 throw new Error(` Error sending verification email : ${error}`);
    
}
}

export const sendWelcomeEmail = async (email , name)=>{
    const recipient =[{email}];
    
    try {
        
   const response= await mailtrapClient.send({
     from:sender,
     to:recipient,
     template_uuid:"111db748-7a7d-47d7-acc4-59df9d295199",
     template_variables:{
        "company_info_name": "Byte Sonic",
      "name": name,
     },


   });
   console.log("Welcome email send successul" ,response);
   

    } catch (error) {
        console.error(`Error sending welcome email`,error);

        throw new Error(`Error sending Welcome email:  ${error}`)
        
    }
}