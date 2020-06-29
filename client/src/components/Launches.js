import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  return (
    <Fragment>
      <h1 className="display-4 my-3">LAUNCHES</h1>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>loading.... hahahaha</h4>;
          if (error) console.log(error);
          console.log(data);
          return (
            <Fragment>
              {data.launches.map(
                (launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))
              )}
            </Fragment>
          );
        }}
      </Query>
    </Fragment>
  );
};

export default Launches;
