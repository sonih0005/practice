import { Menu } from "./models/menu.model.js";
import { RegisterUser } from "./models/resgisterUser.model.js";
import { User } from "./models/user.model.js";

const userFilter = async (req, res) => {
  try {
    const { workType } = req.params;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const filterUser = await User.find({ work: workType });
      res.status(200).json(filterUser);
    } else {
      res.status(400).json({ error: "invalid work type" });
    }
  } catch (error) {
    console.log(error);
  }
};

const home = async (req, res) => {
  try {
    console.log("this is home page");
    res.send("success");
  } catch (error) {
    console.log(error);
  }
};

const savedToDb = async (req, res) => {
  try {
    const userData = req.body;
    const newUserData = new User(userData);

    const savedUserData = await newUserData.save();
    res.status(200).json(savedUserData);
  } catch (error) {
    console.log(error);
  }
};

const menu = async (req, res) => {
  try {
    const menuData = req.body;
    const newMenuData = new Menu(menuData);

    const savedMenuData = await newMenuData.save();
    res.status(200).json(savedMenuData);
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUserData = new RegisterUser(userData);

    const savedRegisterUser = await newUserData.save();
    res.status(200).json(savedRegisterUser);
  } catch (error) {
    console.log(error)
  }
}

const data = async (req, res) => {
  const dataObj = {
    name: "harshit",
    age: 22,
    email: "harshit@example.com",
    address: "knineeineinieniidnein",
  };
  res.send(dataObj);
};

const userDetails = async (req, res) => {
  try {
    const data = await User.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
};

const menuDetails = async (req, res) => {
    try {
        const data = await Menu.find();
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'})
    }
}


const updateDetails = async (req, res) => {
    try {
        const {id} = req.params;
        const updateData = req.body;

        const response = await User.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true

        })
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500  ).json({error: 'internal server error'})
    }
}

const deleteUser = async(req,res) => {
    try {
        const {userId} = req.params;
        const response = await User.findByIdAndDelete(userId);
        res.status(200).send('success')
    } catch (error) {
        console.log(error);
        res.status(500  ).json({error: 'internal server error'})
    }
}

export { home, userFilter, savedToDb, menu, data, userDetails, menuDetails, updateDetails, deleteUser,registerUser };
