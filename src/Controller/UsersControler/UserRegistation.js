const createHttpError = require("http-errors");
const { handleSuccess } = require("../../Services/SuccessError");
const userSchemaModel = require("../../Modele/UsersModel/UsersModel");
const { CreateJsonWebToken } = require("../../helper/createJsonWebTokens");
const { jsonWebTokensKey } = require("../../secret");
const { sendingMail } = require("../../helper/SendMail");

const userRegistation = async (req, res, next) => {
  try {
    const { name, email, dateOfBirth, dateOfDead, password, phone } = req.body;
    const isExists = await userSchemaModel.exists({ email });

    const imageBufferString = req.file.buffer.toString("base64");
    const newUser = {
      name,
      email,
      dateOfBirth,
      dateOfDead,
      password,
      phone,
      // img: imageBufferString,
    };

    if (isExists) {
      throw createHttpError(409, "User already exists");
    }

    //jsonWebToken Creating
    const token = CreateJsonWebToken(newUser, jsonWebTokensKey, "10m");

    //Sending Email to verification
    const emailData = {
      email,
      subject: "Verification Code",
      html: `
<h1>রূপসী বাংলা ক্লাব</h1>
<p>কাদিরদী,বোয়ালমারী,ফরিদপুর </p>
<p>ধন্যবাদ ! আপনি রূপসী বাংলা ক্লাবের দ্বারা পরিচালিত ওয়েবসাইটের ব্যাবহারকারী হতে চেয়েছেন।</p>
<span style="color:red;font-size:20px">হ্যালো ${name}, </span>
<p>আপনার ই-মেইলটি ভেরিফাই করতে <a href="https://rbcwebsite.onrender.com/api/users/activation/${token}" target="_blank">এখানে ক্লিক করুন </a></p>
`,
    };

    try {
      // Sending Mail
      await sendingMail(emailData);
    } catch (error) {
      next(createHttpError(500, "Failed to send Verification Email"));
      return;
    }
    return handleSuccess(res, {
      statusCode: 202,
      message: `Verify Your Requesting process.Please Check Your ${email}`,
      payload: token,
    });
  } catch (error) {
    next(createHttpError(404, "Registation request failed", error));
  }
};

module.exports = { userRegistation };
