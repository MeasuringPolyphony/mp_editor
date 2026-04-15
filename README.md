# MP Editor

## Structure

The MP Editor has three main phases.

1. During document selection (`src/app/select-document`), the user must enter a URL corresponding to a IIIF manifest. URLs for other sources can also be entered and transformed into the appropriate manifest locator.
2. Following this, an initial score can be input (`src/app/input`) by inserting staves into the document and using the keyboard to add music notation.
3. Finally, the entire score can be viewed and edited in context in the final screen (`src/app/score-editor`).

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
