import mongoose from "mongoose";

const deviceDataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  deviceName: {
    type: String,
    required: true,
  },
  moistureValue: {
    type: Number,
    required: true,
  },
  temperatureValue: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const DeviceDataModel =
  mongoose.models.DeviceData || mongoose.model("DeviceData", deviceDataSchema);

export default DeviceDataModel;
