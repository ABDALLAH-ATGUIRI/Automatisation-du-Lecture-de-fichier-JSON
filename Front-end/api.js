/**
 * Get API from table WatchTopic the list of Watch Subject Draw
 */
const fileID = "1664882324159";
function getDrawList(fileID) {
  return fetch("http://localhost:3000/jsonfile/" + fileID, {
    method: "GET"
  })
    .then((res) => res.json())
    .then((json) => {
      if (json) return json;
      return false;
    })
    .catch(() => {
      console.error();
    });
}
