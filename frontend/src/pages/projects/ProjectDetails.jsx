import React, { useState, useEffect } from "react";
import Layout from "../../components/layouts/Layout";
import { Link, useLocation } from "react-router-dom";
import "./ProjectDetails.css";
import axios from "axios";
const ProjectDetails = () => {
  const { state } = useLocation();
  const { projectdetails } = state;

  const [email, setEmail] = useState("");
  const [verificationstatus, setVerificationStatus] = useState(null);

  // Fallback if projectdetails is still undefined
  if (!projectdetails) {
    return (
      <div>
        Error: Project details not found. Please go back to the home page.
      </div>
    );
  }
  // console.log("projectfile", projectdetails.projectfile);

  const handleVerification = async () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    try {
      const sendingEmail = await axios.post(
        "http://localhost:5000/api/verifyemail",
        { email }
      );

      if (sendingEmail.data.success) {
        setVerificationStatus("Domain Match");
        alert("Free Project File");
        setEmail("");
      } else {
        setVerificationStatus("Domain Not Match");
        alert("Redirecting To Payment Methods");
        setEmail("");
      }
    } catch (error) {
      console.log("verification Failed", error);
    }
  };

  return (
    <>
      <Layout>
        <div className="container">
          <div className="row">
            {/* ########## Project Image Or Video ######### */}
            <div className="col-6">
              {/* <img
                // src={projectdetails.projectfile}
                src={`http://localhost:8000${projectdetails.projectfile}`}
                height={400}
                width={300}
                alt=""
              /> */}
            </div>
            {/* *************** Project Details ********** */}

            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Email Verification
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  {/* Email Verification Form */}
                  <form action="">
                    <div className="modal-body">
                      <label
                        className="block text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-[350px] text-black border rounded px-3 py-2 outline-none focus:border-blue-500"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter The Email For Verification"
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary m-3 px-4 py-2"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn_color m-3 px-4 py-2"
                        onClick={handleVerification}
                      >
                        Verify
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Here is project detail Biro */}
            <div className="col-6 p-4 mt-3 mb-3 details">
              <p className="fs-3 mt-2 ">
                Owner: {projectdetails.name}{" "}
                <span className="fs-6 mt-2">
                  ( {projectdetails.type}:- {projectdetails.degree} )
                </span>
              </p>
              <p className=" fs-3 mt-2">{projectdetails.projectname}</p>
              <p className="fs-6 mt-2">Tech-Stack: {projectdetails.techused}</p>
              <p className="mt-4 abstract">
                <span className="fs-3">Abstract</span>:
                <p className="fs-5 ">{projectdetails.abstract}</p>
              </p>
              <div className="btn-div flex justify-content-between">
                <Link to={projectdetails.link} target="_blank">
                  <button className="btn btn_color m-3 px-4 py-2">
                    Visit to see
                  </button>
                </Link>
                {/* Model Button */}
                <button
                  type="button"
                  className="btn btn_color  m-3 px-4 py-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Buy {projectdetails.price} ₹
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProjectDetails;
