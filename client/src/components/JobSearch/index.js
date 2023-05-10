import React, { useEffect, useState } from 'react';

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://linkedin-jobs-search.p.rapidapi.com/';
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '4a098933a0msh29ac767534bb523p1ac00djsn2afd9101aa11',
          'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
        },
        body: JSON.stringify({
          search_terms: 'python programmer',
          location: 'Chicago, IL',
          page: '1'
        })
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json(); // Assuming that the API returns JSON
        setJobs(result);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!jobs) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Job Results</h1>
        {jobs.map((job, index) => (
          <div key={index}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default JobSearch;
