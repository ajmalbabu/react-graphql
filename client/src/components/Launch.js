import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';

const LAUNCHE_QUERY = gql`
    query Launch($flight_number_arg: Int!) {
        launch(flight_number: $flight_number_arg) {
            mission_name
            flight_number
            launch_year
            launch_success
            launch_date_local 
            rocket {
                rocket_id
                rocket_name
                rocket_type
              }              
        }
    }`;

// export function Launch({ match: { params } }) {
export const Launch = ({ match: { params } }) => {

    let flight_number_arg = parseInt(params.flight_number);

    const { loading, error, data } = useQuery(LAUNCHE_QUERY, {
        variables: { flight_number_arg }
    });

    if (loading) return <p>Loading</p>;
    if (error) return <p>{error.message}:  {error.networkError.toString}: {error.extraInfo}: {error.graphQLErrors.toString}</p>;
    if (!data) return <p>Data not found</p>;

    const { mission_name, flight_number, launch_year, launch_success, rocket: { rocket_id, rocket_name, rocket_type } } = data.launch;

    return (
        <>
            {data &&

                <div className="display-4 my-3">
                    <h1>
                        <span className="text-dark">
                            {/* Mission: {data.launch.mission_name} */}
                            Mission: {mission_name}
                        </span>
                    </h1>

                    <h4 className="mb-3">Launch Details</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            Flight Number: {flight_number}
                        </li>
                        <li className="list-group-item">
                            Launch Year: {launch_year}
                        </li>
                        <li className="list-group-item">
                            Lounch Success: <span className={launch_success ? 'text-success' : 'text-danger'}>{launch_success ? "Yes" : "No"}</span>
                        </li>
                    </ul>
                    <h4 className="my-3">Rocket details </h4>
                    <ul className="list-group">
                        <li className="list-group-item">Rocket id: {rocket_id}</li>
                        <li className="list-group-item">Rocket name: {rocket_name} </li>
                        <li className="list-group-item">Rocket type: {rocket_type}</li>
                    </ul>
                    <hr />
                    <Link to="/" className="btn btn-secondary">Back</Link>
                </div>
            }

        </>
    );
}
