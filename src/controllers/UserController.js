import { SaveProfileService, UserOTPService, VerifyOTPService } from "../services/UserService.js";

export const UserOTP = async (req, res) => {
  let result = await UserOTPService(req);
  
  return res.status(200).json(result);
};

export const VerifyLogin = async (req, res) => {
  let result = await VerifyOTPService(req);

  if(result.status == "success"){

    const cookieOptions = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: false,
    }

    res.cookie('token', result.token, cookieOptions);

     return res.status(200).json(result);
       

  }else{
     return res.status(200).json(result);
  }

};

export const UserLogout = async (req, res) => {

   const cookieOptions = {
      expires: new Date(Date.now() - 24 * 60 * 60 * 1000),
      httpOnly: false,
    }

    res.cookie('token', "", cookieOptions);
  
   return res.status(200).json({status: "success"});
};

export const CreateProfile = async (req, res) => {
  let result = await SaveProfileService(req);
  return res.status(200).json(result);
};


export const ReadProfile  = async (req, res) => {
  let result = await CreateReviewService(req);
  return res.status(200).json(result);
};

export const UpdateProfile  = async (req, res) => {
  let result = await SaveProfileService(req);
  return res.status(200).json(result);
};