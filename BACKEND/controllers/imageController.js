import axios from "axios"
import userModel from "../models/userModel.js"
import FormData from "form-data"


export const generateImage = async (req,res)=>{
    try {
      const { userID, prompt } = req.body;

      if (!userID) {
        return res.json({ success: false, message: "please login first" });
      }

      if (!prompt || prompt.trim().length === 0) {
        return res.json({
          success: false,
          message: "please describe the image you want",
        });
      }
      const user = await userModel.findById(userID);

      const formData = new FormData();

      formData.append("prompt", prompt);

      const { data } = await axios.post(
        "https://clipdrop-api.co/text-to-image/v1",
        formData,
        {
          headers: {
            "x-api-key": process.env.API_KEY,
          },
          responseType: "arraybuffer",
        }
      );

      if (!data) {
        return res.json({
          success: false,
          message: "Failed to generate image",
        });
      }

      const base64Image = Buffer.from(data, "binary").toString("base64");

      const resultImage = `data:image/png;base64,${base64Image}`;

      const updatedUser = await userModel.findByIdAndUpdate(
        userID,
        {
          creditBalance: user.creditBalance - 1,
        },
        { new: true }
      ); 

      res.json({
        success: true,
        message: "image generated",
        creditBalance: user.creditBalance - 1,
        resultImage,
      });
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
}