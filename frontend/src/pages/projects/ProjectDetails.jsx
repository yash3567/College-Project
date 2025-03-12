// import React, { useState, useEffect } from "react";
// import Layout from "../../components/layouts/Layout";
// import { Link, useLocation } from "react-router-dom";
// import "./ProjectDetails.css";
// import axios from "axios";
// const ProjectDetails = () => {
//   const { state } = useLocation();
//   const { projectdetails } = state;

//   const [email, setEmail] = useState("");
//   const [verificationstatus, setVerificationStatus] = useState(null);

//   // Fallback if projectdetails is still undefined
//   if (!projectdetails) {
//     return (
//       <div>
//         Error: Project details not found. Please go back to the home page.
//       </div>
//     );
//   }
//   // console.log("projectfile", projectdetails.projectfile);

//   const handleVerification = async () => {
//     if (!email || !email.includes("@")) {
//       alert("Please enter a valid email address.");
//       return;
//     }
//     try {
//       const sendingEmail = await axios.post(
//         "http://localhost:5000/api/verifyemail",
//         { email }
//       );

//       if (sendingEmail.data.success) {
//         setVerificationStatus("Domain Match");
//         alert("Free Project File");
//         setEmail("");
//       } else {
//         setVerificationStatus("Domain Not Match");
//         alert("Redirecting To Payment Methods");
//         setEmail("");
//       }
//     } catch (error) {
//       console.log("verification Failed", error);
//     }
//   };

//   return (
//     <>
//       <Layout>
//         <div className="container">
//           <div className="row">
//             {/* ########## Project Image Or Video ######### */}
//             <div className="col-6">
//               {/* <img
//                 // src={projectdetails.projectfile}
//                 src={`http://localhost:8000${projectdetails.projectfile}`}
//                 height={400}
//                 width={300}
//                 alt=""
//               /> */}
//             </div>
//             {/* *************** Project Details ********** */}

//             {/* Modal */}
//             <div
//               className="modal fade"
//               id="exampleModal"
//               tabIndex={-1}
//               aria-labelledby="exampleModalLabel"
//               aria-hidden="true"
//             >
//               <div className="modal-dialog">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <h1 className="modal-title fs-5" id="exampleModalLabel">
//                       Email Verification
//                     </h1>
//                     <button
//                       type="button"
//                       className="btn-close"
//                       data-bs-dismiss="modal"
//                       aria-label="Close"
//                     />
//                   </div>
//                   {/* Email Verification Form */}
//                   <form action="">
//                     <div className="modal-body">
//                       <label
//                         className="block text-sm font-bold mb-2"
//                         htmlFor="email"
//                       >
//                         Email
//                       </label>
//                       <input
//                         className="w-[350px] text-black border rounded px-3 py-2 outline-none focus:border-blue-500"
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Enter The Email For Verification"
//                       />
//                     </div>
//                     <div className="modal-footer">
//                       <button
//                         type="button"
//                         className="btn btn-secondary m-3 px-4 py-2"
//                         data-bs-dismiss="modal"
//                       >
//                         Close
//                       </button>
//                       <button
//                         type="button"
//                         className="btn btn_color m-3 px-4 py-2"
//                         onClick={handleVerification}
//                       >
//                         Verify
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//             {/* Here is project detail Biro */}
//             <div className="col-6 p-4 mt-3 mb-3 details">
//               <p className="fs-3 mt-2 ">
//                 Owner: {projectdetails.name}{" "}
//                 <span className="fs-6 mt-2">
//                   ( {projectdetails.type}:- {projectdetails.degree} )
//                 </span>
//               </p>
//               <p className=" fs-3 mt-2">{projectdetails.projectname}</p>
//               <p className="fs-6 mt-2">Tech-Stack: {projectdetails.techused}</p>
//               <div className="mt-4 abstract">
//                 <span className="fs-3">Abstract:</span>
//                 <p className="fs-5">{projectdetails.abstract}</p>  {/* ✅ No longer nested */}
//               </div>

//               <div className="btn-div flex justify-content-between">
//                 <Link to={projectdetails.link} target="_blank">
//                   <button className="btn btn_color m-3 px-4 py-2">
//                     Visit to see
//                   </button>
//                 </Link>
//                 {/* Model Button */}
//                 <button
//                   type="button"
//                   className="btn btn_color  m-3 px-4 py-2"
//                   data-bs-toggle="modal"
//                   data-bs-target="#exampleModal"
//                 >
//                   Buy {projectdetails.price} ₹
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default ProjectDetails;



// import React, { useState } from "react";
// import Layout from "../../components/layouts/Layout";
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";

// const ProjectDetails = () => {
//   const { state } = useLocation();
//   const { projectdetails } = state;

//   const [email, setEmail] = useState("");
//   const [verificationstatus, setVerificationStatus] = useState(null);

//   if (!projectdetails) {
//     return <div className="text-center text-red-600 text-lg">Error: Project details not found. Please go back to the home page.</div>;
//   }

//   const handleVerification = async () => {
//     if (!email || !email.includes("@")) {
//       alert("Please enter a valid email address.");
//       return;
//     }
//     try {
//       const sendingEmail = await axios.post(
//         "http://localhost:5000/api/verifyemail",
//         { email }
//       );

//       if (sendingEmail.data.success) {
//         setVerificationStatus("Domain Match");
//         alert("Free Project File");
//         setEmail("");
//       } else {
//         setVerificationStatus("Domain Not Match");
//         alert("Redirecting To Payment Methods");
//         setEmail("");
//       }
//     } catch (error) {
//       console.log("Verification Failed", error);
//     }
//   };

//   return (
//     <Layout>
//       <div className="container mx-auto p-6">
//         <div className="border-double border-4 border-gray-600 p-6 rounded-lg shadow-lg bg-white max-w-4xl mx-auto">
//           {/* ########## Project Details Row ######### */}
//           <div className="grid grid-cols-2 gap-6">
//             {/* ########## Project Image Or Video ######### */}
//             <div className="flex justify-center items-center">
//               {/* Uncomment this when you have image URL */}
//               {/* <img 
//                 src={`http://localhost:8000${projectdetails.projectfile}`} 
//                 alt="Project Preview" 
//                 className="h-80 w-60 object-cover rounded-lg shadow-md"
//               /> */}
//               <div className="h-80 w-60 flex items-center justify-center border border-gray-400 rounded-lg bg-gray-100">
//                 <p className="text-gray-600">Project Image Placeholder</p>
//               </div>
//             </div>

//             {/* *************** Project Details ********** */}
//             <div className="p-4">
//               <h2 className="text-2xl font-bold">{projectdetails.projectname}</h2>
//               <p className="text-gray-700 text-lg mt-1">
//                 <span className="font-semibold">Owner:</span> {projectdetails.name}{" "}
//                 <span className="text-sm">({projectdetails.type} - {projectdetails.degree})</span>
//               </p>
//               <p className="text-gray-700 text-lg mt-2">
//                 <span className="font-semibold">Tech Stack:</span> {projectdetails.techused}
//               </p>

//               {/* Abstract Section */}
//               <div className="mt-4">
//                 <h3 className="text-xl font-semibold">Abstract:</h3>
//                 <p className="text-gray-600 mt-2">{projectdetails.abstract}</p>
//               </div>

//               {/* Buttons */}
//               <div className="mt-6 flex justify-between">
//                 {projectdetails.link ? (
//                   <Link to={projectdetails.link} target="_blank" rel="noopener noreferrer">
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
//                       Visit Project
//                     </button>
//                   </Link>
//                 ) : (
//                   <button
//                     className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow cursor-not-allowed"
//                     disabled
//                   >
//                     No Project Link Available
//                   </button>
//                 )}

//                 <button
//                   type="button"
//                   className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
//                   data-bs-toggle="modal"
//                   data-bs-target="#exampleModal"
//                 >
//                   Buy {projectdetails.price} ₹
//                 </button>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Modal */}
//         <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h1 className="modal-title fs-5" id="exampleModalLabel">Email Verification</h1>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               {/* Email Verification Form */}
//               <form>
//                 <div className="modal-body">
//                   <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
//                   <input
//                     className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter The Email For Verification"
//                   />
//                 </div>
//                 <div className="modal-footer">
//                   <button type="button" className="btn btn-secondary px-4 py-2" data-bs-dismiss="modal">Close</button>
//                   <button type="button" className="btn btn-primary px-4 py-2" onClick={handleVerification}>Verify</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ProjectDetails;





// import React, { useState } from "react";
// import Layout from "../../components/layouts/Layout";
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";

// const ProjectDetails = () => {
//   const { state } = useLocation();
//   const { projectdetails } = state;

//   const [email, setEmail] = useState("");
//   const [verificationstatus, setVerificationStatus] = useState(null);

//   if (!projectdetails) {
//     return <div className="text-center text-red-600 text-lg">Error: Project details not found. Please go back to the home page.</div>;
//   }

//   const isZipFile = projectdetails.projectfile?.endsWith(".zip");

//   const handleDownload = () => {
//     if (isZipFile) {
//       const link = document.createElement("a");
//       link.href = projectdetails.projectfile; // Assuming this is the correct URL from Cloudinary
//       link.download = projectdetails.projectname + ".zip";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   };

//   const handleVerification = async () => {
//     if (!email || !email.includes("@")) {
//       alert("Please enter a valid email address.");
//       return;
//     }
//     try {
//       const sendingEmail = await axios.post(
//         "http://localhost:5000/api/verifyemail",
//         { email }
//       );

//       if (sendingEmail.data.success) {
//         setVerificationStatus("Domain Match");
//         alert("Free Project File");
//         setEmail("");
//       } else {
//         setVerificationStatus("Domain Not Match");
//         alert("Redirecting To Payment Methods");
//         setEmail("");
//       }
//     } catch (error) {
//       console.log("Verification Failed", error);
//     }
//   };

//   return (
//     <Layout>
//       <div className="container mx-auto p-6">
//         <div className="border-double border-4 border-gray-600 p-6 rounded-lg shadow-lg bg-white max-w-4xl mx-auto">
//           {/* ########## Project Details Row ######### */}
//           <div className="grid grid-cols-2 gap-6">
//             {/* ########## Project Image Or Video ######### */}
//             <div className="flex justify-center items-center">
//               <div className="h-80 w-60 flex items-center justify-center border border-gray-400 rounded-lg bg-gray-100">
//                 <p className="text-gray-600">Project Image Placeholder</p>
//               </div>
//             </div>

//             {/* *************** Project Details ********** */}
//             <div className="p-4">
//               <h2 className="text-2xl font-bold">{projectdetails.projectname}</h2>
//               <p className="text-gray-700 text-lg mt-1">
//                 <span className="font-semibold">Owner:</span> {projectdetails.name}{" "}
//                 <span className="text-sm">({projectdetails.type} - {projectdetails.degree})</span>
//               </p>
//               <p className="text-gray-700 text-lg mt-2">
//                 <span className="font-semibold">Tech Stack:</span> {projectdetails.techused}
//               </p>

//               {/* Abstract Section */}
//               <div className="mt-4">
//                 <h3 className="text-xl font-semibold">Abstract:</h3>
//                 <p className="text-gray-600 mt-2">{projectdetails.abstract}</p>
//               </div>

//               {/* Buttons */}
//               <div className="mt-6 flex justify-between">
//                 {projectdetails.link ? (
//                   <Link to={projectdetails.link} target="_blank" rel="noopener noreferrer">
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
//                       Visit Project
//                     </button>
//                   </Link>
//                 ) : (
//                   <button
//                     className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow cursor-not-allowed"
//                     disabled
//                   >
//                     No Project Link Available
//                   </button>
//                 )}

//                 {isZipFile ? (
//                   <button
//                     className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
//                     onClick={handleDownload}
//                   >
//                     Download ZIP
//                   </button>
//                 ) : (
//                   <button
//                     type="button"
//                     className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
//                     data-bs-toggle="modal"
//                     data-bs-target="#exampleModal"
//                   >
//                     Buy {projectdetails.price} ₹
//                   </button>
//                 )}
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Modal for Email Verification */}
//         <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h1 className="modal-title fs-5" id="exampleModalLabel">Email Verification</h1>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <form>
//                 <div className="modal-body">
//                   <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
//                   <input
//                     className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter The Email For Verification"
//                   />
//                 </div>
//                 <div className="modal-footer">
//                   <button type="button" className="btn btn-secondary px-4 py-2" data-bs-dismiss="modal">Close</button>
//                   <button type="button" className="btn btn-primary px-4 py-2" onClick={handleVerification}>Verify</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ProjectDetails;


import React, { useState } from "react";
import Layout from "../../components/layouts/Layout";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const ProjectDetails = () => {
  const { state } = useLocation();
  const { projectdetails } = state;

  const [email, setEmail] = useState("");
  const [verificationstatus, setVerificationStatus] = useState(null);
  const [showBuyModal, setShowBuyModal] = useState(false);

  if (!projectdetails) {
    return <div className="text-center text-red-600 text-lg">Error: Project details not found. Please go back to the home page.</div>;
  }

  const isZipFile = projectdetails.projectfile?.endsWith(".zip");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = projectdetails.projectfile;
    link.download = projectdetails.projectname + ".zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="border-double border-4 border-gray-600 p-6 rounded-lg shadow-lg bg-white max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex justify-center items-center">
              <div className="h-80 w-60 flex items-center justify-center border border-gray-400 rounded-lg bg-gray-100">
                <p className="text-gray-600">Project Image Placeholder</p>
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-2xl font-bold">{projectdetails.projectname}</h2>
              <p className="text-gray-700 text-lg mt-1">
                <span className="font-semibold">Owner:</span> {projectdetails.name} ({projectdetails.type} - {projectdetails.degree})
              </p>
              <p className="text-gray-700 text-lg mt-2">
                <span className="font-semibold">Tech Stack:</span> {projectdetails.techused}
              </p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Abstract:</h3>
                <p className="text-gray-600 mt-2">{projectdetails.abstract}</p>
              </div>
              <div className="mt-6 flex justify-between">
                {projectdetails.link ? (
                  <Link to={projectdetails.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">Visit Project</button>
                  </Link>
                ) : (
                  <button className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow cursor-not-allowed" disabled>
                    No Project Link Available
                  </button>
                )}

                {isZipFile ? (
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
                    onClick={() => setShowBuyModal(true)}
                  >
                    Download ZIP
                  </button>
                ) : (
                  <button
                    type="button"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Buy {projectdetails.price} ₹
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Buy & Download Modal */}
        {showBuyModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-bold">Buy Project</h2>
              <p className="mt-2">To download this project, please proceed with the payment.</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
                  onClick={() => setShowBuyModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  onClick={() => {
                    setShowBuyModal(false);
                    handleDownload();
                  }}
                >
                  Buy & Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProjectDetails;
