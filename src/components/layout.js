/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 // COLORS:
 // blue: #023660
 // pink: #F03265
 // white: #F2F2F2
 // darkblue: #022842
 // lightpink: #EF6791
 // darkwhite: #C6C6C6

import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import "./layout.css"
import Navbar from "./Navbar/Navbar"

const Layout = ({ children }) => (
  <>
    <Navbar />
    { /* <Header siteTitle={data.site.siteMetadata.title} /> */ }
    <div
      style={{
        margin: `0 auto`,
        // maxWidth: 960,
        // padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <main>{children}</main>
    </div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
