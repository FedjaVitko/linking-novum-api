const mongoose = require("mongoose");

module.exports = function () {
  const modelName = 'section1_section2';

  const Types = mongoose.Schema.Types;

  const Model = {
    Schema: {
      description: {
        type: Types.String
      }
    },
    modelName
  };

  return Model;
};