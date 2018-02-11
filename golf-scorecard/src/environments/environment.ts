// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: "AIzaSyBPSCvjNwnfnRZzc8z7hyFWMKQlnBelfRs",
    authDomain: "golf-scorecard-d4d90.firebaseapp.com",
    databaseURL: "https://golf-scorecard-d4d90.firebaseio.com",
    projectId: "golf-scorecard-d4d90",
    storageBucket: "golf-scorecard-d4d90.appspot.com",
    messagingSenderId: "604891432705"
  }
};
