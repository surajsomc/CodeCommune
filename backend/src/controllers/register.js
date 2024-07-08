const registerController = async (req, res, next) => {
    try {
       //mongo stuff here
       console.log(req.body);
    } catch (error) {
      next(error);
    }
  };

export default registerController;