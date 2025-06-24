import UserModel from "../models/UserModel.js"
import { EmailSend } from "../utils/EmailHelper.js"

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

// export const CategoryListService = async ()=>{
//     try {
//         const data = await CategoryModel.find();
//         return {status: "success", data: data};
//     } catch (err) {
//         return {status: "fail", data: err}.toString();
//     }
// }

// export const CategoryListService = async ()=>{
//     try {
//         const data = await CategoryModel.find();
//         return {status: "success", data: data};
//     } catch (err) {
//         return {status: "fail", data: err}.toString();
//     }
// }