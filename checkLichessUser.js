async function verifyUser(userID) {

  // TODO: define API server which calls https://lichess.org/api#tag/Account
  response = await fetch(`https://localhost:3000/verify?hint={userID}`);

  response2 = await fetch('https://lichess.org/api#tag/Account', headers={Authorization: `Bearer ${response.token}`});

  return response2.data.id == userID;
}
 
module.exports = { verifyUser };
