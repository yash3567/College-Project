import { useState } from "react";
import Layout from "./../../components/layouts/Layout";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import axios from "axios";

const ProjectForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [abstract, setAbstract] = useState("");
  const [degree, setDegree] = useState("");
  const [password, setPassword] = useState("");
  const [projectname, setProjectName] = useState("");
  const [type, setType] = useState("student");
  const [projectfile, setProjectFile] = useState(null);
  const [link, setLink] = useState("");
  const [techused, setTechUsed] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleFileChange = (e) => {
    setProjectFile(e.target.files[0]); // Store the selected file in state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("abstract", abstract);
    formData.append("degree", degree);
    formData.append("password", password);
    formData.append("projectname", projectname);
    formData.append("type", type);
    formData.append("link", link);
    formData.append("techused", techused);
    formData.append("price", price);
    formData.append("projectfile", projectfile);

    try {
      const projectResult = await axios.post(
        "http://localhost:5000/api/projects",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("status", projectResult.data);
      if (projectResult.data.success) {
        alert("Project Pushed Successfully");
        navigate("/project"); // Replace '/projectpage' with the actual route to your project page
      }
    } catch (error) {
      console.log(error);
    }
    // Handle form submission logic, including project file and deploy link
    // console.log({
    //   name,
    //   email,
    //   abstract,
    //   degree,
    //   password,
    //   projectname,
    //   type,
    //   projectfile,
    //   link,
    //   price,
    // });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-lightTheme-secondary dark:bg-darkTheme-secondary dark:text-darkTheme-text grid lg:grid-cols-2">
        {/* Image Background */}
        <div className="hidden lg:flex items-center px-20">
          <img src="/svg/register.svg" alt="Register Illustration" />
        </div>

        {/* Form Starting */}
        <form
          className="w-3/4 h-full mx-auto flex flex-col justify-center lg:justify-start lg:pt-2 mt-2"
          onSubmit={handleSubmit}
          style={{ border: "1px solid black" }}
        >
          <h2 className="text-3xl font-semibold mb-4">Add Your Projects</h2>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-[320px] text-black border rounded px-3 py-2 outline-none focus:border-blue-500"
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={
                type === "student" ? "Enter your name" : "Enter college name"
              }
            />
          </div>

          {/* Project NAME */}
          {type === "student" && (
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="rollNo">
                Project Name
              </label>
              <input
                className="w-[320px] text-black border rounded px-3 py-2 outline-none focus:border-blue-500"
                type="text"
                id="rollNo"
                value={projectname}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Enter Your Project Name"
              />
            </div>
          )}

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Domain-Email
            </label>
            <input
              className="w-[320px] text-black border rounded px-3 py-2 outline-none focus:border-blue-500"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={
                type === "student" ? "Enter your email" : "Enter college email"
              }
            />
          </div>

          {/* Abstract Field */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="AISHE">
              Abstract
            </label>
            <input
              className="w-[320px] text-black border rounded px-3 py-2 outline-none focus:border-blue-500"
              type="text"
              id="AISHE"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              placeholder="Enter Your Project Abstract Or Summary"
            />
          </div>
          {/* Technoloies Used */}
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="Technologies"
            >
              Technologies Used
            </label>
            <input
              className="w-[320px] text-black border rounded px-3 py-2 outline-none focus:border-blue-500"
              type="text"
              id="Technologies"
              value={techused}
              onChange={(e) => setTechUsed(e.target.value)}
              placeholder="Enter Technologies Used In Development"
            />
          </div>
          {/* Price User should Give */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="Price">
              Price
            </label>
            <input
              className="w-[320px] text-black border rounded px-3 py-2 outline-none focus:border-blue-500"
              type="text"
              id="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Set Valuable Price For Your Project"
            />
          </div>

          {/* Degree (Student Only) */}
          {type === "student" && (
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="degree">
                Degree
              </label>
              <select
                className="w-[320px] text-black border rounded px-3 py-2 outline-none focus:border-blue-500"
                id="degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              >
                <option value="">Select your degree</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Diploma">Diploma</option>
                <option value="Doctorate">Doctorate</option>
              </select>
            </div>
          )}

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-[320px] text-black border rounded px-3 py-2 outline-none focus:border-blue-500"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Login Password"
            />
          </div>

          {/* Project File Upload */}
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="projectFile"
            >
              Upload Project File
            </label>
            <div className="relative">
              <input
                className="hidden"
                type="file"
                id="projectFile"
                onChange={handleFileChange}
              />
              <label
                htmlFor="projectFile"
                className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
              >
                Upload Project
              </label>
            </div>
          </div>

          {/* Deploy Link Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="deployLink"
            >
              Deployed Project URL
            </label>
            <input
              className="w-[320px] text-black border rounded px-3 py-2 outline-none focus:border-blue-500"
              type="url"
              id="deployLink"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter the deployed URL"
              required
            />
          </div>

          {/* Uploading as Student/Institute */}
          <div className="mb-2 flex items-center gap-3">
            <p className="inline">Upload as </p>
            <div>
              <input
                onChange={() => setType("student")}
                checked={type === "student"}
                id="student"
                type="radio"
                name="type"
              />
              <label htmlFor="student">Student</label>
            </div>
            <div>
              <input
                onChange={() => setType("institute")}
                type="radio"
                id="institute"
                checked={type === "institute"}
                name="type"
              />
              <label htmlFor="institute">Institute</label>
            </div>
          </div>

          {/* Submit Button */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded">
            Add Project
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProjectForm;
