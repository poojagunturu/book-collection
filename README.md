# Book Collection Database

### Application Setup
Original installation was completed with https://www.freecodecamp.org/news/building-an-electron-application-with-create-react-app-97945861647c/. 
* Install Node.js for your OS
	* Run `node -v`
	* Run `npm -v`
* Install React (https://create-react-app.dev/docs/getting-started/)
	* Run `yarn create react-app book-collection`
	* If necessary, move everything created in the sub-`book-collection` to the original `book-collection` folder with the `.git` hidden folder
* Install Electron 
	* [If no `package-lock.json` or `package.json` exists, run `npm init` with all of the defaults]
	* Run `npm install --save-dev electron`
	* Ensure your `.gitignore` includes `node_modules/`
	
### Getting Started
Run `npm start` to launch the application in a browser. If you have already launched the application, just go to `http://localhost:3000/` in a browser.
Run `npm run electron` to launch the application in an Electron window.