const createHttpError = require("http-errors");
const EventsModel = require("../../Modele/EventModel/EventModel");
const { handleSuccess } = require("../../Services/SuccessError");

const eventsPostController = async (req, res, next) => {
  try {
    const { title, subtitle, about, date } = req.body;
    let image = await req.file;
    if (image) {
      image = await image.buffer.toString("base64");
    }
    const eventDataPass = {
      title,
      subtitle,
      about,
      date,
      image,
    };

    const eventsSaveValue = await EventsModel.create(eventDataPass);
    if (!eventsSaveValue) {
      throw createHttpError(
        "এই মুহুর্তে সংযোজন করা যাচ্ছে না।আবার চেষ্টা করুন"
      );
    }

    return handleSuccess(res, {
      success: true,
      message: "সফলভাবে সংযোজন করা হয়েছে",
      payload: { eventsSaveValue },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { eventsPostController };
