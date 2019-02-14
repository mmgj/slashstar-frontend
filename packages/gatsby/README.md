![Logo of the project](./static/EvokedSet_logo.png)

# Gatsby Bootstrapper
> For use in Gatsby / Sanity projects

Quickly set up a new Gatsby site with all the defaults set to good.
This version also installs the `gatsby-source-sanity`-plugin and includes some skeleton code for hooking up to Sanity.

## Installing / Getting started

Make sure you have the Gatsby-CLI installed
```shell
npx i -g gatsby-cli
```

Create a new project from this starter:
```shell
gatsby new my-project https://github.com/EvokedSet/gatsby-starter-for-sanity
```
Install dependencies:
```shell
cd my-project
npm install
```
Off you go:
```shell
gatsby develop
```
This will get you up and running with a shiny Gatsby project running on `localhost:8000`.

## Next steps

### Hooking up to Sanity

This starter project is set up to store your Sanity credentials in a `.env` file which does not get checked in to git for fairly obvious reasons. Assuming you already have created a project in Sanity and have deployed a graphql-api for it, perform these steps to get Gatsby hooked up.

  1: Add your details to the `.env-example` file and rename it to `.env`.
  2: Uncomment these lines in `sanity-config.js` (you may leave the `token` line commented out unless you know you'll need it):

```js
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    //     dataset: process.env.GATSBY_SANITY_DATA_SET,
    //     token: process.env.GATSBY_SANITY_TOKEN,
    //     watchMode: false,
    //     overlayDrafts: false,
    //   },
    // },
```

  3: Have a look at the example code in `gatsby-node.js`. This is where you tell Gatsby how to generate content from Sanity input.

