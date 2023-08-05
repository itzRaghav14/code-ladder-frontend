import React, { useRef } from "react";
import fetchProblems from "./codeforcesServices";
import Header from "./components/Header";
import Search from "./components/Search";
import ProblemSet from "./components/ProblemSet";

function App() {

  

  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <div className="py-4">
        <Search />
        <ProblemSet />
      </div>
    </div>
  );
}

export default App;
