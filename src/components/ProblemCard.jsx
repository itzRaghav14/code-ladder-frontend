import React from "react";

const ProblemCard = ({ id, name, solvedCount, rating, contestId, index, verdict }) => {
  const difficulty =
    rating <= 1200
      ? "Easy"
      : rating <= 1600
      ? "Medium"
      : rating <= 2000
      ? "Hard"
      : "Very Hard";

  const link = `https://codeforces.com/problemset/problem/${contestId}/${index}`

  if(verdict === 'OK') verdict = 'AC';
  const bgColor = verdict === 'AC' ? 'bg-green-500' : verdict !== 'UNSOLVED' ? 'bg-red-500' : '';

  return (
    <a href={link} className={`relative grid grid-cols-12 p-2 ${bgColor} before:absolute before:w-full before:h-full before:opacity-20 hover:before:bg-black duration-150`}>
      <div className="col-span-1 text-center">{contestId + index}</div>
      <div className="col-span-5 text-center">{name}</div>
      <div className="col-span-2 text-center">{solvedCount}</div>
      <div className="col-span-2 text-center">{rating}</div>
      <div className="col-span-2 text-center">{verdict}</div>
    </a>
  );
};

export default ProblemCard;
