// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Grid, Header, Message, Segment } from 'semantic-ui-react';

// import JobSearch from '../components/JobSearch';

// const JobSearchPage = () => {
//   return (
//     <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//       <Grid.Column style={{ maxWidth: 500 }}>
//         <Header as='h2' color='pink' textAlign='center'>
//           Job Search
//         </Header>
//         <Segment stacked>
//           <JobSearch />
//         </Segment>
//         <Message>
//           <Link to="/">Back to Home</Link>
//         </Message>
//       </Grid.Column>
//     </Grid>
//   );
// };

// export default JobSearchPage;


import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Perform the search here using searchTerm
  };

  return (
    <div>
      <Input 
        type="text" 
        placeholder="Enter job title, keywords or company name" 
        value={searchTerm} 
        onChange={handleChange} 
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default JobSearch;
