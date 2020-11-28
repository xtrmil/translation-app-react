# American Sign Language Translation App

Deployed on Heroku: http://asl-translation-app.herokuapp.com/

## About Project

The application was made to enable translation from english letters to American sign language letters. It consists of four pages: the register page(login), the translation page, the history(profile) and a NotFound page. 
Through the login page, the user will create a session which stores the username and when the user later translates letters on the translation page, it is this session which stores the last ten translation which then is shown on the history(profile) page.

On the translation page, the user can translate up to 40 letters at a time, the translation will then be displayed on the page as well as stored in the localstorage.

On the history page, the latest ten translations are displayed in the form of a table.

Lastly, we have a NotFound page for cases where the user has typed in a wrong url, which then gives them a link which they can use to redirect to the translation page or the register page.

### Usage

#### Screenshot of register page

![Login Page](https://i.gyazo.com/f05f6b7ddceea874a50c36753dfedf6c.png)
#### Screenshot of translation page

Before translation:
![Before translation on Translation page](https://i.gyazo.com/1e1cab8a02b590c07fe88ab1fd65f073.png)

After translation:
![After translation on Translation page](https://i.gyazo.com/2b126815df8acec9dcaf8d75d88c1bb0.png)
#### Screenshot of history page

![History page](https://i.gyazo.com/04fcae7fca9913cead445689c9f2f054.png)

#### Screenshot of NotFound page

![Not Found Page](https://i.gyazo.com/fee4a495b12c41386f8815eaee81c3b4.png)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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


## Created by

[Oscar Dahlquist](https://github.com/Vattenkruka), [Emil Oja](https://github.com/xtrmil)
