const Details = require("./details");
 
exports.getDetails = async () => {
  return await Details.find();
};
 
exports.createDetail= async (detail) => {
  return await Details.create(blog);
};
exports.getDetail = async (id) => {
  return await Details.findById(id);
};
 
exports.updateDetail = async (id, detail) => {
  return await Details.findByIdAndUpdate(id, detail);
};