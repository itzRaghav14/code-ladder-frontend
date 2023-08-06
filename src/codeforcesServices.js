import axios from "axios";

const fetchProblemsService = async ({ startRating, endRating, tags }) => {

  if (tags === undefined) tags = [];

  const url = `https://codeforces.com/api/problemset.problems?tags=${tags.join(';')}`;
  const res = await axios.get(url);

  const resData = res.data;
  const status = resData.status;
  const comment = resData.comment;
  const resResult = resData.result;

  const result = {
    status,
    comment,
    data: []
  }

  if (status !== 'OK') {
    return result
  }

  const problemsSet = [];
  const MAX_PROBLEMS_COUNT = 100;

  for (let i = 0; i < resResult.problems.length; i++) {
    let problemRating = resResult.problems[i].rating;
    if (problemRating === undefined || resResult.problems[i].contestId === undefined) continue;
    if (problemRating < startRating || problemRating > endRating) continue;
    if (resResult.problems[i].contestId < 1800) continue;
    problemsSet.push({ ...resResult.problems[i], solvedCount: resResult.problemStatistics[i].solvedCount })
  }

  problemsSet.sort((left, right) => {
    // if (left.rating !== right.rating) return left.rating - right.rating;
    if (left.solvedCount !== right.solvedCount) return right.solvedCount - left.solvedCount;
    return left.name < right.name ? -1 : 1;
  })

  let id = 0;

  for (let i = 0; i < problemsSet.length && result.data.length < MAX_PROBLEMS_COUNT; i++) {

    let contestId = problemsSet[i].contestId;
    let index = problemsSet[i].index;
    let name = problemsSet[i].name;
    let solvedCount = problemsSet[i].solvedCount;
    let rating = problemsSet[i].rating;

    id++;

    result.data.push({
      contestId,
      index,
      name,
      solvedCount,
      rating,
      id
    })
  }

  return result;
}

const fetchSolvedProblemsService = async ({ username }) => {

  const problemStatus = new Map();

  if(!username) {
    return {
      status: 'FAILED',
      comment: 'Username not valid',
      data: problemStatus
    }
  }

  const url = `https://codeforces.com/api/user.status?handle=${username}`;
  const res = await axios.get(url);
  console.log(res);

  if (res.data.status !== 'OK') {
    return {
      status: res.data.status,
      comment: res.data.comment,
      data: problemStatus
    }
  }


  for (let status of res.data.result) {
    let problemName = status.problem.name;
    if(problemStatus.has(problemName) && problemStatus.get(problemName) === 'OK') continue;
    problemStatus.set(problemName, status.verdict);
  }

  console.log(problemStatus);

  return {
    status: res.data.status,
    comment: res.data.comment,
    data: problemStatus
  }

}

export { fetchProblemsService, fetchSolvedProblemsService };