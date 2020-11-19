[![Beaver Builder Docs](https://raw.githubusercontent.com/beaverbuilder/documentation/master/static/img/index-beaver-builder--hero.jpg)](https://docs.wpbeaverbuilder.com/)

# Beaver Builder Docs

[![Netlify Status](https://api.netlify.com/api/v1/badges/349c6d6d-3c39-4dba-b3b7-2b867a74f1fa/deploy-status)](https://app.netlify.com/sites/angry-gates-bead98/deploys)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/beaverbuilder/documentation/issues/new/choose)

This repository contains the source of the Beaver Builder knowledge base, which can be viewed at [https://docs.wpbeaverbuilder.com/](https://docs.wpbeaverbuilder.com/). The article content for the knowledge base lives within the [docs/](https://github.com/beaverbuilder/documentation/tree/master/docs) directory.

The Beaver Builder knowledge base is built using [Docusaurus 2](https://v2.docusaurus.io/), with search powered by [Algolia DocSearch](https://docsearch.algolia.com/) running our own [crawler](https://docsearch.algolia.com/docs/run-your-own).

## Contributing
Feel free to contribute to the Beaver Builder knowledge base by forking the repository and submitting pull requests.
You are also very welcome to make any suggestions or report any kind of problem with the documentation by opening a [new issue](https://github.com/beaverbuilder/documentation/issues/new/choose).

#### Caveat

Articles are written using [Markdown](https://daringfireball.net/projects/markdown/syntax) plus the [Docusaurus markdown guide](https://v2.docusaurus.io/docs/docs-introduction).

**Note:** Issues in this repo are for documentation issues, and any issue not related to documentation will be closed as not relevant. Contact [Beaver Builder Support](https://www.wpbeaverbuilder.com/beaver-builder-support/) for other product issues.

### Installation
To get started with a local environment, first clone the repository, using the following commands. In this example, `beaverbuilder-docs` was used to create the cloned directory, but you can substitute any other name.

```script
$ git clone git@github.com:beaverbuilder/documentation.git beaverbuilder-docs
$ cd beaverbuilder-docs
```

Run the following command to build locally:

```script
$ yarn
```

Then run the following command to start a local development server and open a browser window showing the knowledge base in localhost.

```script
$ yarn start
```

Most of your saved changes are reflected live without having to restart the local server.

meh
