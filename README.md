## Powered by [Jekyll](https://jekyllrb.com/) and [Jekyll Polymer](http://juliaebert.com/jekyll-polymer)

## Installation instructions

(Instructions are based off of those for the [Polymer Starter Kit](https://github.com/PolymerElements/polymer-starter-kit).)

- Clone this repository or download it as a .zip file and unzip.
- Install jekyll (and any other Ruby gems) with `bundle install`. (Prerequisite: must have Ruby installed; in Ubuntu/Debian, use `sudo apt-get install ruby-dev`. You may also have to install bundler with `gem install bundler`.)
- From the project root folder, run `npm install -g gulp bower && npm install && bower install`. (See the old [Polymer Starter Kit installation instructions](https://github.com/PolymerElements/polymer-starter-kit/blob/5602f0d3352540335eae413ff35d90cbeab9ee72/README.md) for more details or troubleshooting.)

## Structure

- `app/`: All Jekyll content is here. (This is where all the editing happens)
  - `bower_components`: Content installed via bower ends up here
  - `elements/`: Custom web components using Polymer
  - `images/`: User images
  - `media/`: Other user content (PDFs, videos, etc.) for final product
  - `scripts/`: Javascript files
  - `styles/`: Custom CSS
  - `_data/authors.yml`: List of authors for posts and pages
- `dist/`: Built output from Gulp. (Use to publish static content)
- `node_modules`: Content installed via npm goes here

## Deployment

### Serve/watch

`gulp serve`: Starts a jekyll serve process on the default port (4000 or whatever is specified in `_config.yml`).

`gulp serve --port 6666`: Start serving on port `6666`

`gulp serve:dist`: Build as below, and serve the result from the `dist/` directory. (Useful for testing changes to the gulpfile. Currently does not work with a Jekyll baseurl configured.)

### Build and vulcanize

`gulp`: Builds the files with jekyll, vulcanizes, minimizes, and puts the result in the `dist/` directory. (This can be slow.)

## Deploy

`gulp deploy-gh-pages`: Deploy the current build to the gh-pages branch of your repository.

`gulp build-deploy-gh-pages`: Rebuild and then deploy. (Equivalent to `gulp && gulp deploy-gh-pages`)

## License

[MIT License](license.md)