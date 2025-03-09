import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Layout from "../../components/layouts/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Project_Structure from "./Project_Structure";
const Projects = () => {
  const [projectdata, setProjectData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projectpage")
      .then((result) => {
        console.log("Received Projects Data");
        console.log(result.data);
        setProjectData(result.data);
        //Projects Are Already Stored in ProjecrData using usestate
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Layout>
      {/* <section className="pt-20" id="projects">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="mb-8 text-center text-3xl lg:text-4xl"
        >
          Projects
        </motion.h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0">
            {projectdata.map((project, i) => (
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                key={project.id}
                className="group relative overflow-hidden rounded-3xl"
              >
                <img
                  src={project.image}
                  alt={projectdata.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  key={i}
                />
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
                >
                  <h3 className="mb-2 text-xl" key={i}>
                    {projectdata.name}
                  </h3>
                  <p className="mb-12 p-4">{projectdata.abstract}</p>

                  <div className="flex space-x-4">
                    <a
                      href={projectdata.deployLink} // Add your deploy link here
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                    >
                      <div className="flex items-center">
                        <span>Visit</span>
                        <MdArrowOutward />
                      </div>
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                    >
                      <div className="flex items-center">
                        <span>View on GitHub</span>
                        <MdArrowOutward />
                      </div>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      {/* ################### Here We Get All The Projects ###################### */}
      <div className="row">
        {projectdata.map((project, i) => {
          return <Project_Structure projects={project} key={i} />;
        })}
      </div>
    </Layout>
  );
};

export default Projects;
