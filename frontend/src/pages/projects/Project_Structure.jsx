// import React from "react";
import "./ProjectStructure.css";
import { Link } from "react-router-dom";

const Project_Structure = ({ projects }) => {
  return (
    <>
      <div className="main_div col-lg-4 col-sm-6 ">
        {/* <div className="col-6 img_div"> */}
        {/* upper section User Image And Name And Background or || Image*/}
        {/* <div className="imgBG">
            <img src={projects.projectfile} height={400} width={300} alt="" />
          </div> */}
        {/* </div> */}
        <div className="col-6 projectDetails">
          {/* Project Name && Project Technologies Used */}
          <h1 className="projectName mt-3 mb-3 fs-3">{projects.projectname}</h1>
          <h6 className="techStack fs-6 mt-2 mb-3">{projects.techused}</h6>
          <h3 className="abstract mb-3">{projects.abstract}</h3>
          <Link to={"/projectdetails"} state={{ projectdetails: projects }}>
            <button className="btn btn_color mb-3">See Details</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Project_Structure;
