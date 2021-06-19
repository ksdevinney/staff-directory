// everything goes on this page
import React, { Component } from "react";
import './App.css';
import Title from "./components/Title";
// in time-out
// import Wrapper from "./components/Wrapper";
// import List from "./components/List";
// import ListItem from "./components/ListItem";
// import StaffCard from "./components/StaffCard";
// import employees from "./employees.json";

const App = () => {
  return (
    <>
    <Title />
    <Wrapper />
    </>
  );
};

// put this away for later bc it displays something, at least
// function App() {
//   return (
//     <div className="App">
//       <Title />
//       <h1>Hello</h1>
//         <StaffCard 
//         id={employees.id}
//         name={employees.name}
//         />
//       ))
//     </div>
//   );
// }

export default App;
