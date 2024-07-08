import getStudents from "../services/students.js";

const loginController = async (req, res, next) => {
    try {
      //mongo stuff here
      console.log(req.body);
      res.json({ data: await getStudents()[0] });
    } catch (error) {
      next(error);
    }
  };

export default loginController;