import api from "./api";
import { GenerateOtp } from "./endpoints";

export const GenerateOtpApi = (data) => {
  return api.post(`${generateOtp}/`, data);
};