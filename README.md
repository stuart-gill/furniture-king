# Furniture King   
#### Stuart Gill
#### 2/10/2019


### Description
This is a sample website for a hypothetical furniture retailer. All information about the company's products are retrieved from an API

### Specs
1. On page loading, user may select from various types of furniture (retrieved from API, not hard coded)
2. Once a furniture type is selected, all items that match that furniture type (ie chairs) will be displayed by name in a list
3. The user may click on any of these furniture item names, and receive all available information about their chosen item of furniture. 
4. Since some furniture items list dimensions and others do not, dimensions is an optional category that will or will not display, as is appropriate
5. Since the API lists all rugs as having the same ID, the ID category held in the API is ignored and assumed to be faulty. The app uses its own ID tracking to ensure that every item of furniture has a unique ID. 
6. The app should work well regardless of additional information added to the furniture company's API, however if more categories are optional (such as dimensions), the code may need to be modified to account for this. 
 

### Setup Instructions
- Install Node.js
- Download or clone this repository
- Navigate to the project folder in the command line
- From the command line: Enter _npm install_  then _npm run start_ after install has completed. This will spin up a chrome browser. 


### Technologies Used
- JavaScript (ES6)
- Node.js
- Webpack
- Jasmine
- Karma

#### Copyright(c) 2019 by Stuart Gill
