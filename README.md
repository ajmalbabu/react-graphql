## This project sets up a graphql server and that connects to spacex data over REST API and exposes the data as a set of
## Graphql endpoints. This project is created by watching [this](https://www.youtube.com/watch?v=SEMTj8w04Z8) video
## Space X [API](https://docs.spacexdata.com/?version=latest#bc65ba60-decf-4289-bb04-4ca9df01b9c1)
 
## Also it sets up a react client that connects to the above graphql server using apollo client using apollo graphql react hooks
## react application uses react-router, most of react components are developed using functional Javascript approach rather than class based component
 
## To run server
 
npm install
npm run server
 
## To run client
 
npm run client
 
### access client ui at http://localhost:3000/
### Following articles are referred while building this application
 
[JavaScript fundamentals before learning React](https://www.robinwieruch.de/javascript-fundamentals-react-requirements#react-class-component-syntax)
[React Conditional Rendering](https://www.robinwieruch.de/conditional-rendering-react)
[React Function Components](https://www.robinwieruch.de/react-function-component#react-function-component-example)
[From Class Components to Function Components](https://www.robinwieruch.de/react-hooks-migration)
[Bootstrap is copied as CSS into /public/index.css from bootswatch](https://bootswatch.com/cyborg/)
 
To find process id of running process on Mac at PORT ```lsof -i :5000```
 
to hit graphiql end, point at http://localhost:5000/graphql
 
use below GraphQL queries to retrieve data
 
```
{
 launches {
   flight_number
   mission_name
   launch_year
   launch_success
   launch_date_local
   rocket {
     rocket_id
     rocket_name
     rocket_type
   }
 }
}
 
 
{
 launch (flight_number: 2) {
   mission_name
   launch_year
   rocket {
     rocket_id
     rocket_name
     rocket_type
   }       
 }
}
 
 
{
 rockets {
   rocket_name
 }
}
```
 
 

