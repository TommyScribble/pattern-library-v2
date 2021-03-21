# React UI component library V2

This is currenly a work in progress.  
I am working on creating a library of basic components. The library itself will display these components with examples for their use and a list of props. Once all the base components are built, I intend to add them to an NPM package and re-import them. They will then be available to any project via NPM

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation
To install this app so you can run it locally, clone the repo into a local folder
```shell
git clone git@github.com:TommyScribble/pattern-library-v2.git
```
then run yarn to install all the dependancies
```shell
yarn
```

## Usage

In the project directory, you can run:
```shell
yarn start
```

Runs the app in the development mode.   
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.   
You will also see any lint errors in the console.
```shell
yarn test
```

Launches the test runner in the interactive watch mode.   
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```shell
yarn build
```

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

## Support

Please [open an issue](https://github.com/TommyScribble/pattern-library/issues/new) for support.

## Contributing
Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and open a pull request.

### Adding component pages
To add a new page follow these steps
- Add a data file to the pageData folder following the ComponentPageProps typing 'src/typings/types.ts'
- Create a page in the '05-Pages' directory using the componentPage template and import your data (add a stylesheet if needed)
- Add the component you want to render examples of to the component builder function (import it, add it to the object)
- Add new route to the Routes.
