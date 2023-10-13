const createHttpError = require("http-errors");
const EventsModel = require("../../Modele/EventModel/EventModel");
const { handleSuccess } = require("../../Services/SuccessError");

const getEventController = async (req, res, next) => {
  try {
    const currentDateTime = new Date();
    const event = await EventsModel.find();
    if (!event) {
      createHttpError("এই মুহুর্তে কোনো উৎসবের নাম খুজে পাওয়া যাচ্ছে না।");
    }
    return handleSuccess(res, {
      statusCode: 201,
      message: "আপনার অনুরোধ সফল হয়েছে",
      payload: { event },
    });
  } catch (error) {}
};
module.exports = { getEventController };
