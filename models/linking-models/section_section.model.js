const mongoose = require("mongoose");

module.exports = function () {
  const modelName = 'section_section';

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