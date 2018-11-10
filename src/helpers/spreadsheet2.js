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
        range: "Links!A2:T"
      })
      .then(
        response => {
          const data = response.result.values;
          const posts = data.map(post => ({
            title: post[0],
            url: post[1],
            icon: post[2],
            type: post[3],
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
