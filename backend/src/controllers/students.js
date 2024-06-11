import getStudents from "../services/students.js";

const studentsController = async (req, res, next) => {
    try {
      res.json({ data: await getStudents() });
    } catch (error) {
      next(error);
    }
  };

export default studentsController;