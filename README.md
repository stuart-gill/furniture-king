# DocSearch
#### Stuart Gill
#### 1/18/2019


### Description
This is a program that allows the user to enter either an ailment or a doctor name and receive a list of doctors matching the entered criteria. Clicking on the individual doctor's name brings up detail about the doctor and their practice. 

### Specs
1. On page loading, user may input either an ailment, or a doctor. 
2. Then they click the corresponding button. 
3. This will return a list of 15 doctors in the Portland Oregon area who match the entered criteria. 
4. The user may click on any one of the names. 
5. Clicking on a name will print to the page detailed information about the doctors, including their full name, the phone number and address of their practice, and whether or not they are taking new patients.
6. Clicking on another doctor's name will replace the detail information with the corresponding new doctor's information. 
7. Entering another search term and clicking the corresponding search button will clear the list of doctors and replace it with a new list of doctors resulting from the new search. 
 

### Setup Instructions
- Install Node.js
- Download or clone this repository
- Navigate to the project folder in the command line
- From the command line: Enter _npm install_  then _npm run start_ after install has completed. This will spin up a chrome browser. 
- Go to developer.betterdoctor.com and request your own API key
- Create an .env file in the project directory and type the following: "exports.apiKey = [YOUR API KEY HERE]"
- You can view your results by right clicking, choosing "inspect", and checking the console. 
- To run tests, enter _npm test_ in the command line. 

### Technologies Used
- JavaScript (ES6)
- Node.js
- Webpack
- Jasmine
- Karma

#### Copyright(c) 2019 by Stuart Gill
