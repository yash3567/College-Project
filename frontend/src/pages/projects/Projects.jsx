import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/layouts/Layout";
import Project_Structure from "./Project_Structure";

const Projects = () => {
  const [projectdata, setProjectData] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => {
    return Number(localStorage.getItem("currentPage")) || 1;
  });

  const projectsPerPage = 9;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projectpage")
      .then((result) => {
        setProjectData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Update localStorage when page changes
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  // Get current projects for the page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectdata.slice(indexOfFirstProject, indexOfLastProject);

  // Total Pages
  const totalPages = Math.ceil(projectdata.length / projectsPerPage);

  return (
    <Layout>
      {/* ######## Projects Section ######## */}
      <div className="flex flex-wrap justify-center">
  {currentProjects.map((project, i) => (
    <Project_Structure projects={project} key={i} />
  ))}
</div>


      {/* ######## Pagination Controls ######## */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg shadow ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-800 text-white"
          }`}
        >
          Previous
        </button>

        {/* Page Number Buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 text-lg font-semibold transition ${
              currentPage === index + 1
                ? "bg-blue-800 text-white border-blue-800"
                : "bg-white text-gray-700 border-gray-400 hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage >= totalPages}
          className={`px-4 py-2 rounded-lg shadow ${
            currentPage >= totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-800 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </Layout>
  );
};

export default Projects;
