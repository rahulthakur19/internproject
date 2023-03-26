const detailService = require("./detailservice");
 
exports.getDetails = async (req, res) => {
  try {
    const blogs = await detailService.getDetails();
    res.json({ data: blogs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createDetail = async (req, res) => {
  try {
    const detail = await detailService.createDetail(req.body);
    res.json({ data: detail, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getDetailById = async (req, res) => {
  try {
    const detail = await detailService.getDetailById(req.params.id);
    res.json({ data: detail, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateDetail = async (req, res) => {
  try {
    const detail = await detailService.updateDetail(req.params.id, req.body);
    res.json({ data: detail, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deletedetail = async (req, res) => {
  try {
    const detail = await detailService.deleteDetail(req.params.id);
    res.json({ data: detail, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};