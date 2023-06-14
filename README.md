# University of Helsinki - Full Stack Open

### Certificates:

Certificates of completion Full Stack Web Development **IN PROGRESS**
~~Certificates of completion Full Stack Web extensions 1~~
~~Certificates of completion Full Stack Web extensions 2~~
~~Certificate of completion GraphQL~~
~~Certificate of completion Typescript~~
~~Certificate of completion React Native~~
~~Certificate of completion CI/CD~~
~~Certificate of completion Containers~~
~~Certificate of completion Relational databases~~

### About the course

The course introduce to modern JavaScript-based web development. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js. This course covers: React, Redux, Node.js, MongoDB, GraphQL and TypeScript.

### About this repository

This repository contains my own exercise solutions to the 2021/22 edition of the Full Stack Open course from the University of Helsinki.

#### [Part 0 - Fundamentals of Web apps](https://fullstackopen.com/en/part0)

An overall introduction to the course. It introduces to some concepts like HTTP requests, how traditional web apps work, DOM, CSS and Single Page Applications.

    - new note - The diagram shows how communicate the browser and the server when user added a note to a page containing JavaScript.
    - single page app - The diagram shows the communication between the browser and the server when user opened single page app on the browser.
    - new note (single page app) - The diagram shows how communicate the browser and the server when user added a note to a single page app.

#### [Part 1 - Introduction to React](https://fullstackopen.com/en/part1)

This part introduces to React concepts. It covers the basics: components, props, JSX and more advanced concepts: Javascript functionalities that are used a lot in React (.map(), .filter(), .reduce()), destructuring, event handlers in React and passing state to child components, spread operator, hooks and their rules and conditional rendering.

    - courseinfo - Simple course information page which counts total number of exercises of the course.
    - unicafe - This app gathers feedbacks and makes statistic.
    - anecdotes - This app provides to vote for a random anecdote, also shows the most voted anecdote.

#### [Part 2 - Communicating with server](https://fullstackopen.com/en/part2)

This part covers how to display list items in React and how to handle forms. Introduces JSON server and fetching data from it, axios for sending GET, PUT, POST and DELETE requests and how to style your React app (CSS).

    - courseinfo - Extended Course info app from part 1.
    - phonebook - Phonebook, add/delete contacts with numbers, edit numbers.
    - dataforcountries - A react app that fetches and displays information form the REST Countries and Weatcher Stack API's.

#### [Part 3 - Programming a server with NodeJS and Express](https://fullstackopen.com/en/part3)

This part is focused on the backend. How to: implement a simple REST API in Node.js using Express, connect to a database (MongoDB) to store and retrieve data, deploy your app.

    - phonebook - The app source backend code.
    - phonebook - The app deployed on Heroku. Frontend from part 2 and Backend from part 3 works together.

#### [Part 4 - Testing Express servers, user administration](https://fullstackopen.com/en/part4)

This part is focused on testing Node.js applications, async/await, user administration, references across collections, token based authentication.

    - bloglist - Allows users to save information (blog author, title, url, and amount of upvotes from users) about interesting blogs they have - stumbled across on the internet.

#### [Part 5 - Testing React apps](https://fullstackopen.com/en/part5)

This part is focused on token based authentication and testing the React components using Jest, React Testing Library and Cypress.

    - bloglist-frontend - The app frontend code.

#### [Part 6 - State management with Redux](https://fullstackopen.com/en/part6)

This part is focused on Redux, which can be used for more complex state management of your React app (covers concepts like immutability, global store, actions and reducers). Also this chapter covers how to use Redux with hooks, and how to use the old connect higher order component when you work on older code bases, and redux thunk for asynchronous code.

    - unicafe-redux - The app source code.
    - redux-anecdotes - The app source code.

#### [Part 7 - React router, custom hooks, styling app with CSS and webpack](https://fullstackopen.com/en/part7)

This part handles a lot of different subjects. Such as React router (with hooks) which used to navigate in React apps, how to create custom hooks, ways to style an app and which UI libraries can be used. This part also covers how to use Webpack instead of Create-React-App to setup an app, and gives a short overview of class components.

    - routed-anecdotes - The app source code.
    - ultimate-hooks - The app source code.
    - country-hook - The app source code.
    - bloglist-frontend - The app source code.
    - bloglist-backend - The app source code.

#### [Part 8 - GraphQL](https://fullstackopen.com/en/part8)

This part is about GraphQL, Facebook's alternative to REST API for communication between browser and server. In this parts covered basic GraphQL concepts like schema, queries and resolver also how to setup and use Apollo's ApolloServer and ApolloClient.

#### [Part 9 - TypeScript](https://fullstackopen.com/en/part9)

This part is all about TypeScript: an open-source typed superset of JavaScript developed by Microsoft that compiles to plain JavaScript.

In this part, we will be using the tools previously introduced to build end-to-end features to an existing ecosystem with linters predefined and an existing codebase writing TypeScript. After doing this part, you should be able to understand, develop and configure projects using TypeScript.

#### [Part 10 - React Native](https://fullstackopen.com/en/part10)

This part is about how to build native Android and iOS mobile applications with JavaScript and React using the React Native framework. By developing an entire mobile application from scratch this part gives a good dive into the React Native ecosystem. It covers concepts such as how to render native user interface components with React Native, how to create beautiful user interfaces, how to communicate with a server, and how to test a React Native application.

    rate-repository-app - The app source code.

#### [Part 11 - CI/CD](https://fullstackopen.com/en/part11)

In this part, you will gain an understanding of why you should use a CI/CD system, what can one do for you, and how to get started with GitHub Actions which is available to all GitHub users by default.

    - full-stack-open-pokedex - Exercise repository.
    - full-stack-open-pokedex - Deployed app.
    - phonebook-cicd - Exercice repository. Pipeline for another project.
    - phonebook-cicd - Deployed app.

#### [Part 12 - Containers ](https://fullstackopen.com/en/part12)

In this part, we will learn how to package code into standard units of software called containers. These containers can help us develop software faster and easier than before. Along the way, we will also explore a completely new viewpoint for web development outside of the now-familiar Node.js backend and React frontend.

We will utilize containers to create immutable execution environments for our Node.js and React projects. Containers also make it easy to include multiple services with our projects. With the flexibility, we will explore and experiment with many different and popular tools by utilizing containers.

#### [Part 13 - Using relational databases](https://fullstackopen.com/en/part13)

Relational databases have since then experienced a new beginning. Problems with scalability have been partially resolved and they have also adopted some of the features of NoSQL databases. In this section we explore different NodeJS applications that use relational databases, we will focus on using the database PostgreSQL which is the number one in the open source world.

---
