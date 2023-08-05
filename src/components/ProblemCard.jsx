import React from "react";

const ProblemCard = ({ id, name, solvedCount, rating, contestId, index }) => {
  const difficulty =
    rating <= 1200
      ? "Easy"
      : rating <= 1600
      ? "Medium"
      : rating <= 2000
      ? "Hard"
      : "Very Hard";

  const link = `https://codeforces.com/problemset/problem/${contestId}/${index}`

  return (
    <a href={link} className="grid grid-cols-12 p-2 hover:bg-gray-200 duration-150">
      <div className="col-span-1 text-center">{contestId + index}</div>
      <div className="col-span-5 text-center">{name}</div>
      <div className="col-span-2 text-center">{solvedCount}</div>
      <div className="col-span-2 text-center">{rating}</div>
      <div className="col-span-2 text-center">{difficulty}</div>
    </a>
  );
};

export default ProblemCard;
