import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

export default function Launches() {

  const LAUNCHES_QUERY = gql`
  {
    launches {
        flight_number,
        mission_name,
        launch_date_local,
        launch_success
    }
  }`;

  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  return (

    <>

      <h1 className="display-4 my-3">Launches</h1>

      <MissionKey />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {data &&

        <>
          {data.launches.map(launch => (
            <LaunchItem key={launch.flight_number} launch={launch} />
          ))}
        </>
      }

    </>
  )

}