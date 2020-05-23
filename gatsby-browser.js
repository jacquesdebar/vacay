/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { IdentityContextProvider } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"

export const wrapRootElement = ({ element }) => (
  <IdentityContextProvider url="https://hungry-yonath-ed6433.netlify.com/">
    {element}
  </IdentityContextProvider>
)
