# Blake Thollaug's Portfolio Website

https://blakethollaugportfolio.herokuapp.com/

**Developer:** Blake Thollaug

**Stack**: MongoDB, Express.js, React, Node (MERN)

**Purpose:** While the primary purpose of this repository is version management for the front end codebase of my portfolio website, it also serves to provide additional information about my development process and relevant technologies contained therein.

## Overview
This repository contains the front end code to my portfolio website, which utilzes MERN stack technologies (MongoDB, Express, React, Node) to create a GUI that is as easy on the eye as its development environment is manageable. Being a single page application (SPA), the GUI is composed of a template layout with content components that are conditionally rendered for lightning-fast client-side page handlng. As such, the GUI is both scalable, relying on clients to render content, and extensible, adding content is as simple as creating a new content component configured in accordance with website convention. The GUI connects to my fully functional portfolio backend to CRUD data in a cloud database (MongoDB) for full-stack features that require data between sessions and for every session. A production build of the project is deployed using Salesforce's own Heroku cloud service provider, and feature development is ongoing.

## Developer Reference

**Commands**:
 - start development server     : `$npm run devStart`
 - start production server      : `$npm start` 
 - create production build      : `$npm run build`


**setup new dev environ**
 - install node
 - `$npm run build`
 - `$npm install -g serve`
 - test production server: `$serve -s build`
