const mongoose = require("mongoose");

const settingSchema = mongoose.Schema({
  guildID: String,
  prefix: String,
  logsChannel: String,
  modRole: String,
  adminRole: String,
  disabledCommands: Array,
  ignoredUsers: Array
});

module.exports = mongoose.model("settings", settingSchema);
