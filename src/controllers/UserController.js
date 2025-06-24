import { UserOTPService } from "../services/UserService.js";

export const UserOTP = async (req, res) => {
  let result = await UserOTPService(req);
  
  return res.status(200).json(result);
};

// export const CreateReview = async (req, res) => {
//   let result = await CreateReviewService(req);
//   return res.status(200).json(result);
// };

// export const CreateReview = async (req, res) => {
//   let result = await CreateReviewService(req);
//   return res.status(200).json(result);
// };
