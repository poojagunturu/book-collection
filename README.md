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
* Setup the Oracle Database Module 
Original setup was completed referencing https://github.com/oracle/node-oracledb.
	* Run `npm install oracledb`
	* Install the Basic Oracle Instant Client ZIP (https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html)
	* Extract the ZIP file to a location on your hard drive that you can remember (for example, `C:\oracle\instantclient_19_3`)
	* Add this directory to the `PATH` environment variable on your system
	* Verify the Visual Studio 2017 Redistributable is installed (other versions: https://oracle.github.io/node-oracledb/INSTALL.html#instwin)
	* Open `src/dbconfig.js` and **type your password in the file**
	
### Getting Started
Run `npm start` to launch the application in a browser. If you have already launched the application, just go to `http://localhost:3000/` in a browser.  
Run `npm run electron` to launch the application in an Electron window.