import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Button from "@material-ui/core/Button"

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        mic: file(relativePath: { eq: "mic.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.mic.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
            <TextFlex>
                <WhyText>
                    Why Vacay for Democracy?<br /><span role="img" alt="thinking emoji" aria-label="emoji">🤔</span>
                </WhyText>
                <Button 
                    color="primary" 
                    css="" // <-- DO NOT REMOVE
                    href="/about"
                    style={{
                        backgroundColor: `#F03265`,
                        padding: `12px 24px`,
                    }}
                    variant="contained" 
                >
                    Learn More
                </Button>
            </TextFlex>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  padding: 30vh 0;
  background-position: center;
  background-size: cover;
`
const TextFlex = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    // background-color: yellow;
    // padding-top: 10vh;
`

const WhyText = styled.h2`
    width: 90%;
    color: white;
    font-size: 50px;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 900px) {
        font-size: 24px;
    }
`

export default StyledBackgroundSection