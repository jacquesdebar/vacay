import React from "react";
import SEO from "../components/seo"
import styled from '@emotion/styled'
import Layout from "../components/layout";
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const TrainingContainer = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 0;
`

const TrainingHeader = styled.h1`
    color: #06182a;
`

const TrainingCardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
`

const CardLink = styled(Link)`
    text-decoration: none;
    margin: 24px;
`

const TrainingCard = styled.div`
    max-width: 600px;
    border-radius: 10px;
    background-color: #023660;
    color: white;
    font-family: Helvetica, sans-serif;

    :hover {
        background-color: #F03265;
    }
`

const TrainingCardTopHalf = styled(Img)`
    height: 160px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

const TrainingCardBottomHalf = styled.div`
    padding: 18px;
`

const TrainingCardTitle = styled.h2`
    font-weight: bold;
`

const TrainingCardDescription = styled.p`
    font-weight: normal;
`

const TrainingPage = ({ data }) => (
    <Layout>
        <SEO title="Testimonials" />
        <TrainingContainer>
            <TrainingHeader>
                Training modules
            </TrainingHeader>
            <TrainingCardsContainer>
                <CardLink to="/module-2">
                    <TrainingCard>
                        <TrainingCardTopHalf fluid={data.m1bg.childImageSharp.fluid} />
                        <TrainingCardBottomHalf>
                            <TrainingCardTitle>
                                Module 1: Packing
                            </TrainingCardTitle>
                            <TrainingCardDescription>
                                Learn some tips for packing, as well as how to mentally prepare for the trip
                            </TrainingCardDescription>
                        </TrainingCardBottomHalf>
                    </TrainingCard>
                </CardLink>
                <CardLink to="/module-2">
                    <TrainingCard>
                        <TrainingCardTopHalf fluid={data.m2bg.childImageSharp.fluid} />
                        <TrainingCardBottomHalf>
                            <TrainingCardTitle>
                                Module 2: Canvassing
                            </TrainingCardTitle>
                            <TrainingCardDescription>
                                Learn about what canvassing is, how to interact with locals,
                                and what a day looks like on the trip
                            </TrainingCardDescription>
                        </TrainingCardBottomHalf>
                    </TrainingCard>
                </CardLink>
                <CardLink to="/module-2">
                    <TrainingCard>
                        <TrainingCardTopHalf fluid={data.m3bg.childImageSharp.fluid} />
                        <TrainingCardBottomHalf>
                            <TrainingCardTitle>
                                Module 3: Vacationing
                            </TrainingCardTitle>
                            <TrainingCardDescription>
                                Learn more about the community and culture surrounding your trip destination
                            </TrainingCardDescription>
                        </TrainingCardBottomHalf>
                    </TrainingCard>
                </CardLink>
                <CardLink to="/module-2">
                    <TrainingCard>
                        <TrainingCardTopHalf fluid={data.m4bg.childImageSharp.fluid} />
                        <TrainingCardBottomHalf>
                            <TrainingCardTitle>
                                Module 4: Gamplanning
                            </TrainingCardTitle>
                            <TrainingCardDescription>
                                Learn how your team leads will go about planning and what you can do to coordinate with them
                            </TrainingCardDescription>
                        </TrainingCardBottomHalf>
                    </TrainingCard>
                </CardLink>
            </TrainingCardsContainer>
        </TrainingContainer>
    </Layout>
)

export const query = graphql`
{
  m1bg: file(relativePath: { eq: "m1bg.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  m2bg: file(relativePath: { eq: "m2bg.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  m3bg: file(relativePath: { eq: "m3bg.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  m4bg: file(relativePath: { eq: "m4bg.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  },
}
`

export default TrainingPage