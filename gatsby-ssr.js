/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { IdentityContextProvider } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"

export const wrapRootElement = ({ element }) => (
  <IdentityContextProvider url="https://vacay-dem.netlify.app/">
    {element}
  </IdentityContextProvider>
)
