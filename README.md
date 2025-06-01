# Blake Thollaug's Portfolio Repository

**Developer:** Blake Thollaug

**Purpose:** While the primary purpose of this repository is version management for my front end code, it also serves to display information about the code otherwise inaccessible through the interface itself to showcase my technological know-how.

**Overview:** This repository contains the code to my portfolio website front end. It utilzes MERN stack technologies (MongoDB, Express, React, Node) to create a GUI that is as easy on the eye as its development environment is manageable. Being a single page application (SPA), the GUI is composed of a template layout with content components that are conditionally rendered for lightning-fast client-side page handlng. As such, the GUI is both scalable, relying on clients to render content, and extensible, adding content is as simple as creating a new content component configured in accordance with program convention. The GUI connects to my fully functional portfolio backend to CRUD data in a cloud database (MongoDB) for full-stack features that require data between sessions and for every session. A production build of the project is deployed using Salesforce's own Heroku cloud service provider, and feature development is ongoing.

https://blakethollaugportfolio.herokuapp.com/

*Dev Note*: `npm run devStart 3000` = development server, `npm start` = production server, `npm run build` = creates production build