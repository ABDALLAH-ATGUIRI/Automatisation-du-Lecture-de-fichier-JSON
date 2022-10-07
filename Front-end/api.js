/**
 * Get API from table WatchTopic the list of Watch Subject Draw
 */
const fileID = "data"
 function getDrawList(fileID) {
    return fetch("http://localhost:3000/jsonfile/"+fileID, {
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