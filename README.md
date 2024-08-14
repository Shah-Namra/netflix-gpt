# React Movie App with GPT Integration

This project is a movie browsing application built using React and TailwindCSS. It integrates various features including authentication, movie browsing, and a unique NetflixGPT search powered by OpenAI and TMDB APIs. The app is responsive and features a sleek, modern UI, leveraging TailwindCSS for styling.


## Features

Create React App: A standard React project setup.
TailwindCSS Configuration: TailwindCSS is used for styling the application with minimal custom CSS.
Header: A navigation bar for seamless navigation across the app.
App Routing: Implemented using React Router for easy navigation between pages.

## Authentication:

Login Form
Sign Up Form
Form Validation
Firebase Setup for authentication
Create SignUp User Account
Implement Sign In user API
Implemented Sign Out functionality
Update Profile feature for updating user displayName and profile picture.
Redirect functionality for ensuring authenticated access to certain pages.
Unsubscribed to the onAuthStateChanged callback to prevent memory leaks.

## Redux Integration:

Created a Redux store with userSlice and movieSlice.
Used Redux to manage authentication state and movie data.

## Movie Data Integration:

Registered for TMDB API to fetch now playing movies and trailers.
Custom Hook for fetching Now Playing Movies.
Updated the Redux store with movie data and trailer video data.

## UI Components:

Main Container: Displays the main movie with a trailer in the background.
Secondary Container: Displays a list of movies and movie cards.
Movie Card: A component to display individual movie details.
Movie List: A component to display a list of movie cards.
Responsive Design: Ensured compatibility across devices using TailwindCSS.

## GPT Search Feature:

Integrated OpenAI GPT API to provide movie suggestions based on user input.
Created gptSlice to store GPT movie suggestions.
Reused the Movie List component to display GPT-based movie suggestions.

## Multi-language Support:

Implemented as a bonus feature to support multiple languages in the app.

## Environment Variables:

Added .env file for storing API keys securely.
Ensured .env file is ignored by Git using .gitignore.

## Getting Started

### Prerequisites

Node.js installed
Firebase account for authentication
TMDB API Key
OpenAI API Key

## To-Do List

1. **Show Movie Ratings on Browse Page**:
   - [ ] Add a rating display to each movie on the browse page.

2. **Create a Movie Details Component**:
   - [ ] Build a Movie component that takes a movie ID as a prop and displays the movie's details.
   - [ ] Set up routing so that when you click a movie card, it opens the Movie component with the movie's details.

3. **What to Show in the Movie Component**:
   - [ ] Add the movie poster.
   - [ ] Show the length of the movie.
   - [ ] Display the movie's rating.
   - [ ] Add cards for the main cast members.
   - [ ] Include a description of the movie.
   - [ ] Embed a link to the YouTube trailer.
   - [ ] Add buttons for "Favorite" and "Watchlist."
   - [ ] Include a section where users can read and write reviews.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

