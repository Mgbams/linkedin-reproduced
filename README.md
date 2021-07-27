## EXTENSIONS

- ES7 React/ Redux snippets in vscode extension

# STEPS

- Install react

```bash
$ npx create-react-app linkedin-clone-yt --template redux
```

- Visit **https://console.firebase.google.com/** and create your project
- After creating your app in firebase, click **cloud firestore**

* Click **create database**
* select **start in test mode** and then click **Next** and then click **Enable**
* From the window that opens, click rules and delete the if condition after read, write so you don't get errors from messages sent from your application Then click on **publish**. Though this is not advisable in production mode. So you will have something similar to this:

```bash
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
```

- Then from the left aside bar in firebase, click **authentication**, then click on **Get started**.

* Select your prefered sigin method and enable it. Here i chose email/ password signin.
* Click the gear icon from the left aside bar navigation and select **project settings**, at the bottom of the opened page, click on the icon with this figure **< />**. Enter your app name under register app and also check the box **Also setup firebase hosting for this app**, then click on **register app** and click on **Next**.
* Then in your project terminal on vscode, run the below code

```bash
$ npm install -g firebase-tools
```

- On the firebase website, click **next**, then click **continue to the console**.

* Under Project settings -> General -> Your apps section, select **config** option button and copy the configuration settings there.
* From your vscode project folder, open src folder and delete App.tets.js, logo.svg, setupTests.js
* Delete everything from App.js file to leave only this structure below

```js
import React from "react";
import "./App.css";

function App() {
  return <div className="app"></div>;
}

export default App;
```

- Delete everything from App.css

* In index.css, add the below code at the top of the page

```css
* {
  margin: 0;
}
```

- Visit material ui website in **https://material-ui.com/**
- Install material ui using

```bash
$ npm install @material-ui/core
```

You can type **icons** in the material ui website search box to show the code needed to install material ui icons or you use the code below.
Install material icons using

````bash
$ npm install @material-ui/icons
```
* To select a particular icon, go to the link below **https://material-ui.com/components/material-icons/**
````

## Connect project to firebase

1. Create a file Firebase.js in your project
2. Copy the config settings from of your project from firebase and paste it in the file Firebase.js
3. Open terminal in your project and install firebase e.g

```bash
$ npm install firebase
```
