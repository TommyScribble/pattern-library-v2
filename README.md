# React / Typescript Biolerplater
This starter project is meant to get you up and running with all the essentails to start building your project immediatley. It contains all the basic building blocks to get started in minutes.

Includes:
- Typescript
- Atomic components
- Unit tests (Jest & React Testing Library)
- CSS modules (using SCSS)
- Base styles (globals/mixins/functions/component)
- Folder structure
- Linting (eslint/stylelint) - using precommmit hook

## Table of Contents

- [Installation](#installation)
- [SCSS](#SCSS)
- [Components](#Components)
- [Scripts](#Scripts)
- [Support](#support)
- [Contributing](#contributing)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) so all the usual scripts apply. This project has not been ejected.

## Installation
To get up and running just pull the repo and run it using the script commands below.

## SCSS
There are two types of style file, *Global* and *Local*. 

### Global stylesheets
These are all kept in the *styles* folder as partials and imported to the global stylesheet for use throughout the entire site.

### Local stylesheets
These are all kept in the folder with the component they belong to and imported only into that component. If you also need access to, for example, a mixin, make sure to import that into your local stylesheet.

## Components
The folder structure I prefer for components follows the Atomic design principles explained by Brad Frost very well [here](https://bradfrost.com/blog/post/atomic-web-design/)  

I prefer a different naming convention to his beautiful abstract / natural world one but use the same pattern.

***Atoms***  
The smallest component, usually comprised of a single HTML element, eg. ```<button></button>```

***Objects***  
Comprised of one or more atoms and building something else that will be used to build one of the sections. This is usually the hardest of the components to define as it sits between sections and atoms, for eg. a  ```<IconText />``` component would be two atoms, an icon and some text but in itself could not be used as a section in a site.

***Sections***  
These are most easily defined as they can be used as the main building blocks of the site, eg. ```<Footer />``` or ```<Hero />```

***Templates***  
These are configurable page templates and should be the main import in pages.

***Pages***  
I think these are fairly self expanatory....

## Scripts
In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`
Launches the test runner in the interactive watch mode.

### `yarn build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Support
Please [open an issue](https://github.com/TommyScribble/react-typescript-biolerplate/issues/new) for support.

## Contributing
Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and open a pull request.
