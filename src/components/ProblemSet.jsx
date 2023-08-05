import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchProblems } from "../codeforcesServices";
import ProblemCard from "./ProblemCard";

const ProblemSet = () => {
  let startRating = useSelector((state) => state.search.startRating);
  let endRating = useSelector((state) => state.search.endRating);
  const [loading, setLoading] = useState(false);
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    console.log(startRating, endRating);
    const fetchProblemset = async () => {
      setLoading(true);
      let res = await fetchProblems({ startRating, endRating, tags: [] });
      setLoading(false);
      setProblems(res.data);
      console.log(res.data);
    };
    fetchProblemset();
  }, [startRating, endRating]);

  return (
    <div className="container max-w-4xl my-8 mx-auto bg-white shadow-2xl border-2 border-gray-300 rounded-lg">
      {/* Table Header */}
      <div className="grid grid-cols-12 px-2 py-3 border-b border-gray-200 text-xl font-semibold">
        <div className="col-span-1 text-center">Index</div>
        <div className="col-span-5 text-center">Problem</div>
        <div className="col-span-2 text-center">Frequency</div>
        <div className="col-span-2 text-center">Rating</div>
        <div className="col-span-2 text-center">Difficulty</div>
      </div>

      {loading === false &&
        problems.map((problem) => {
          return (
            <ProblemCard
              key={problem.id}
              id={problem.id}
              name={problem.name}
              solvedCount={problem.solvedCount}
              rating={problem.rating}
              contestId={problem.contestId}
              index={problem.index}
            />
          );
        })}
    </div>
  );
};

export default ProblemSet;
