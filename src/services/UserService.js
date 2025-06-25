import ProfileModel from "../models/ProfileModel.js"
import UserModel from "../models/UserModel.js"
import { EmailSend } from "../utils/EmailHelper.js"
import { EncodeToken } from "../utils/TokenHelper.js"

export const UserOTPService = async (req)=>{
    try {
        let email = req.params.email
        let code = Math.floor (100000 + Math.random()* 900000)

        let emailText = `Your Verification code ${code}`
        let emailSubject = `Email Verification`

        await EmailSend(email, emailText, emailSubject)

        await UserModel.updateOne({email: email}, {$set: {otp: code}}, {upsert: true})

        return {status: 'success', message: "OTP has been send"}
    } catch (err) {
        // return {status: "fail", data: err}.toString();
        return {status: "fail", data: err.message.toString()};
    }
}

export const VerifyOTPService = async (req)=>{


     try {
        let email=req.params.email;
        let otp=req.params.otp;
        // console.log(email, otp);

        // User Count
        let total=await UserModel.find({email:email,otp:otp}).countDocuments();
        
      
        if(total===1){

            // User ID Read
            let user_id=await UserModel.find({email:email,otp:otp}).select('_id');
            
            // User Token Create
            let token=EncodeToken(email,user_id[0]['_id'].toString())
            console.log(token);
            // OTP Code Update To 0
            await UserModel.updateOne({email:email},{$set:{otp:"0"}})

            return {status:"success", message:"Valid OTP",token:token,total:total}

        }
        else{
            return {status:"fail", message:"Invalid OTP",total:total}
        }

        
        

    }catch (e) {
        return {status:"fail", message:"Invalid OTP"}
        
    }

    
    
    

}



export const SaveProfileService = async (req)=>{
    try {
        const user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.user_id = user_id

        await ProfileModel.updateOne({userID: user_id}, {$set: reqBody}, {upsert: true})

        return {status: "success", message: "Profil saved successfully"};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
}

export const ReadProfileService = async ()=>{
    try {
        const data = await CategoryModel.find();
        return {status: "success", data: data};
    } catch (err) {
        return {status: "fail", data: err}.toString();
    }
}