const Course = require("../models/Course");

class SiteController {
  //  [GET] /
  async index(req, res) {
    try {
      const courses = await Course.find({});
      return res.json(courses);
    } catch (error) {
      return res.status(400).json({ error: "ERROR!" });
    }

    res.json({
      name: "test",
    });
    // res.render('home');
  }

  //   [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
