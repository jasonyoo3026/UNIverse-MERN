// import React, { useEffect, useState } from 'react';
// require("dotenv").config();

// const JobSearch = () => {
//   const [jobs, setJobs] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [location, setLocation] = useState('');

//   const handleSearch = async () => {
//     const url = 'https://linkedin-jobs-search.p.rapidapi.com/';
//     const options = {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//         'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
//         'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
//       },
//       body: JSON.stringify({
//         search_terms: searchTerm,
//         location: location,
//         page: '1'
//       })
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       setJobs(result);
//     } catch (error) {
//       setError(error);
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <input 
//         type="text"
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//         placeholder="Job title"
//       />
//       <input 
//         type="text"
//         value={location}
//         onChange={e => setLocation(e.target.value)}
//         placeholder="Location"
//       />
//       <button onClick={handleSearch}>Search</button>
//       {error && <div>Error: {error.message}</div>}
//       {jobs.length === 0 && <div>Loading...</div>}
//       {jobs.map((job, index) => (
//         <div key={index}>
//           <h2>{job.title}</h2>
//           <p>{job.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JobSearch;
