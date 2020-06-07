## This project sets up a express based graphql server and that connects to spacex data over REST API and exposes the data as a set of
## Graphql endpoints. Also this include a react based client applicaiton that connects to the above graphql server

 
React client that connects to the graphql server using apollo client using apollo graphql react hooks, also application uses react-router, most of react components are developed using functional Javascript approach rather than class based component
 
### To run server
 
1. npm install
2. npm run server
 
### To run client
 
1. cd client
2. npm install
3. cd ..
4. npm run client
 
### access client ui at http://localhost:3000/
### Following articles are referred while building this application

1. This project is created by watching [this](https://www.youtube.com/watch?v=SEMTj8w04Z8) video Space X [API](https://docs.spacexdata.com/?version=latest)
2. [JavaScript fundamentals before learning React](https://www.robinwieruch.de/javascript-fundamentals-react-requirements#react-class-component-syntax)
3. [React Conditional Rendering](https://www.robinwieruch.de/conditional-rendering-react)
4. [React Function Components](https://www.robinwieruch.de/react-function-component)
5. [From Class Components to Function Components](https://www.robinwieruch.de/react-hooks-migration)
6. [Bootstrap is copied as CSS into /public/index.css from bootswatch](https://bootswatch.com/cyborg/)
7. [React official guide, composition over ingeritance and all reaat stuff](https://reactjs.org/docs/thinking-in-react.html)
8. [ES6 video](https://scrimba.com/g/gintrotoes6?utm_source=freecodecamp.org&utm_medium=referral&utm_campaign=gintrotoes6_launch_article)
9. [Understanding JavaScript Function Invocation and "this"](https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/)
10. [ES6 core features]( https://www.youtube.com/watch?v=48Qe0R_VGx4&list=PLC3y8-rFHvwjpiZ3nGb1J0_j2qxFkmHf2&index=5)
11. [Learn these 8 Javascript concepts](https://www.youtube.com/watch?v=06FbxpDYEQY&list=PLC3y8-rFHvwjpiZ3nGb1J0_j2qxFkmHf2&index=4)


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
 
 

