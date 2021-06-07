/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const Layout = require("./src/components/layout")
// Adds a class name to the body element
exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    className: "my-body-class",
  })
}
// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return typeof window !== 'undefined'
  // if window does not exist (its type undefined),
  // we stop here (since this will be `false` and render nothing)
  && Layout
  // ReactMediaPlayer also can be undefined (because of the special loader for html)
  // we don't want that to render either, so we will add a condition
  // if it's undefined, it's falsy so it renders `undefined` (nothing)
  && <Layout {...props}>{element}</Layout>
  // finally if the two earlier conditions are truthy, let's render!
}