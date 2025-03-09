import { checkHashedPassword, hashPassword } from "../authentication/auth-helper.js";
import projects from "../models/projects-Schema.js";
import usersPassword from "../models/user.model.js";
import path from "path";

// ########################## Function to handle project uploads
export const handleProjects = async (req, res) => {
  try {
    const {
      name,
      email,
      projectname,
      abstract,
      link,
      password,
      degree,
      type,
      techused,
      price,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    // Encrypt password before saving
    const encryptedPassword = await hashPassword(password);
    const imageName = req.file.filename;

    // Create project entry in the database
    const projt = await projects.create({
      name,
      email,
      projectname,
      abstract,
      link,
      password: encryptedPassword,
      degree,
      type,
      techused,
      price,
      projectfile: imageName,
    });

    // ##### Verify user and password #######
    const userData = await usersPassword.findOne({ email });

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found with the provided email",
      });
    }

    const passwordVerify = await checkHashedPassword(password, userData.password);

    if (!passwordVerify) {
      return res.json({
        success: false,
        message: "Password Not Verified, Please Check Again",
      });
    }

    // If verification is successful, send success response
    res.json({
      success: true,
      message: "Project Uploaded Successfully",
      projt,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to Upload the project",
      error: error.message,
    });
  }
};

// ********* Function to show projects on UI *********
export const projectData = async (req, res) => {
  try {
    const dataProjects = await projects.find({});
    res.json(dataProjects);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
      error: error.message,
    });
  }
};
