# MP Editor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Installing Locally

This project requires both [Node.js](https://nodejs.org/) and the command line version of Git to be installed.
Navigate to the directory where this repository was cloned, and run `npm install` to install the editor's dependencies.
This may take some time.

## Rebuilding the GitHub Pages Version

This editor is hosted through GitHub pages in the `docs` directory. To rebuild the editor and make a commit so the public version updates, it is necessary to run the convenience script for rebuilding (`npm run rebuild`) and then commit and push the changes. While any Git client can be used to commit and push, the command line version is used in the script to ensure the CNAME entry is not deleted.

## Angular Instructions

### Trying it Out

To try this out, ensure you have [Node.js](https://nodejs.org/) installed.

#### Angular CLI

In the development stage, this uses [Angular CLI](https://github.com/angular/angular-cli) to run. To install it globally (on your entire system), run
```shell
npm install -g @angular/cli
```

#### Running the Editor

To run the editor, run `npm install` and then `ng serve` from where this README is. Then open [http://localhost:4200](http://localhost:4200) in the browser.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
