## Local Environment Setup
For development, this project contains a gulp build and server system. Gulp is a node based task runner that performs tasks such as CSS pre-processing, template compilation, and running a local web server.  

### Git
If you do not yet have Git installed on your computer, download and install the Github desktop app from

https://desktop.github.com/

#### Node
If you do not yet have Node installed on your computer, download and install the package from the following address

https://nodejs.org/download/

#### Dependencies

Install all the dependencies from NPM by running the following command:

```
npm install
```

#### Build & Run

Build the project and start the web server by running the gulp. This will also automatically watch your source files and re-build the app every time one of your source files changes. In addition, the build system includes liveReload functionality, so development changes are reflected immediately in the web browser without refreshing the page.

```
gulp
```

To view the website, go to http://localhost:3333

## File Structure
The project separates the source files from the build files located in the 'www' directory.  Developers should only ever change the source files, never the files inside the 'www' build directory.

#### SASS
The CSS source files (in .scss format) are contained in this directory.  See http://sass-lang.com/ for details.

#### Jade
The HTML templates use Jade templating and are contained in the 'jade' directory. See http://jade-lang.com/ for details.
