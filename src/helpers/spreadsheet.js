import config from "../config";
/**
 * Load the posts from the spreadsheet
 * Get the right values from it and assign.
 */
export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Projects!A2:T"
      })
      .then(
        response => {
          const data = response.result.values;
          const posts = data.map(post => ({
            date: post[0],
            title: post[1],
            type: post[2],
            using: post[3],
            url: post[4]
          })) || [];
          callback({
            posts
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
