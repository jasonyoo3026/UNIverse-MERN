import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS, QUERY_USER, QUERY_ME } from '../utils/queries';

const Home = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const { loading_profile, data_profile } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const thoughts = data?.thoughts || [];

  const user = data_profile?.me || data_profile?.user || {};

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px #1a1a1a' }}
        >
          <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
