import express from "express";
import multer from "multer";
import { handleProjects, projectData } from "../controllers/project-controller.js";

const router = express.Router();

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});


const upload = multer({ storage: storage });

// Post Routes hai projects to push krne k liye
// upload.single("name of the variable")
router.post("/projects", upload.single("projectfile"), handleProjects);
// get Route for Project Getting from DB
router.get("/projectpage", projectData);

export default router;
