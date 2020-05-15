import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const AboutImages = () => {
  const data = useStaticQuery(graphql`
    query {
      mic2: file(relativePath: { eq: "mic2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      columns: file(relativePath: { eq: "columns.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <AboutImagesContainer>
      <Img fluid={data.columns.childImageSharp.fluid} style={{width: "100%", marginBottom: "48px"}}/>
      <Img fluid={data.mic2.childImageSharp.fluid} style={{width: "100%"}}/>
    </AboutImagesContainer>
  )
}

const AboutImagesContainer = styled.div`
  width: 80%;
  padding: 64px 0;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export default AboutImages