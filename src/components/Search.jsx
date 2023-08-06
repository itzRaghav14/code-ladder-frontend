import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setRatingRange } from "../store/searchSlice";
import { setUsername } from "../store/usernameSlice";

const Search = () => {
  const dispatch = useDispatch();
  const startRatingRef = useRef(null);
  const endRatingRef = useRef(null);
  const usernameRef = useRef(null);

  const changeRange = () => {
    const startRating = startRatingRef.current.value;
    const endRating = endRatingRef.current.value;
    if (startRating === undefined || endRating === undefined) return;
    dispatch(setRatingRange({ startRating, endRating }));
  };

  return (
    <div className="">
      <div className="flex items-center justify-center gap-6">
        <input
          type="number"
          ref={startRatingRef}
          placeholder="Min. Rating"
          className="px-2 py-1 bg-white border border-gray-500 rounded-md"
        />
        <input
          type="number"
          ref={endRatingRef}
          placeholder="Max. Rating"
          className="px-2 py-1 bg-white border border-gray-500 rounded-md"
        />
        <button
          onClick={changeRange}
          className="px-2 py-1 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white duration-300 ease-in-out"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
