import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  fetchProblemsService,
  fetchSolvedProblemsService,
} from "../codeforcesServices";
import ProblemCard from "./ProblemCard";

const ProblemSet = () => {
  const username = useSelector((state) => state.user.username);
  const startRating = useSelector((state) => state.search.startRating);
  const endRating = useSelector((state) => state.search.endRating);

  const [problemStatus, setProblemStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblemset = async () => {
      setLoading(true);
      const res = await fetchProblemsService({
        startRating,
        endRating,
        tags: [],
      });
      setLoading(false);
      setProblems(res.data);
      console.log({ problems: res.data });
    };

    const fetchSolvedProblems = async () => {
      const res = await fetchSolvedProblemsService({ username: "itzzRaghav" });
      setProblemStatus(res.data);
      console.log({ solvedProblems: res.data });

    };

    fetchProblemset();
    fetchSolvedProblems();
  }, [startRating, endRating]);

  const findVerdict = (problem) => {
    if(!problemStatus || !problemStatus.has(problem.name)) return 'UNSOLVED';
    return problemStatus.get(problem.name);
  }

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
              verdict={findVerdict(problem)}
            />
          );
        })}
    </div>
  );
};

export default ProblemSet;
