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
        range: "Sheet1!A2:T"
      })
      .then(
        response => {
          const data = response.result.values;
          const posts = data.map(post => ({
            year: post[0],
            make: post[1],
            model: post[2]
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
