async function verifyUser(userID) {

  // TODO: define API server which calls https://lichess.org/api#tag/Account
  response = await fetch(`https://localhost:3000/verify?hint={userID}`);

  const {bio} = response.data;

  return bio.includes(userID);
}
 
module.exports = { verifyUser };
