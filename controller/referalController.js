import { PrismaClient } from "@prisma/client";
import { sendEmail } from "../utils/features.js";
import { ErrorHandler } from "../utils/utils.js";

const prisma = new PrismaClient();

const addReferral = async (req, res, next) => {
  try {
    const { yourName, friendName, friendEmail, courseRefer } = req.body;

    if (!yourName || !friendName || !friendEmail || !courseRefer) {
      return next(new ErrorHandler("Please fill all the fields", 400));
    }

    

    const emailResult = await sendEmail(
      friendName,
      friendEmail,
      courseRefer,
      yourName
    );

    if (!emailResult.success) {
      return next(new ErrorHandler(emailResult.message, 500));
      }
      
      const result = await prisma.referral.create({
        data: {
          yourName,
          friendEmail,
          friendName,
          courseRefer,
        },
      });

    res.status(201).json({success:true  ,message: emailResult.message, data: result });
  } catch (err) {
    next(new ErrorHandler(err.message, 500));
  }
};

export { addReferral };
