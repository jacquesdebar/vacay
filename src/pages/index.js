import React from "react"
import Layout from "../components/layout"
import ColumnsImage from "../components/ColumnsImage"
import MicImage from "../components/MicImage"
import SEO from "../components/seo"
import Button from "@material-ui/core/Button"
import styled from '@emotion/styled'
import { useIdentityContext } from "react-netlify-identity-widget"

const BlueBlock = styled.div`
    width: 100%;
    background-color: #023660;
    padding: 24px 24px 128px 24px;
`
const CovidBanner = styled.div`
    width: 100%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    background-color: #F03265;
    color: white;
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 24px;
    text-align: center;
    font-weight: bold;
`

const BannerLink = styled.a`
    color: white;

    :hover {
        color: #022842;
    }
`

const ColumnsPart = styled.div`
    width: 100%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 900px) {
        padding-bottom: 24px;
    }
`

const ColumnsImageContainer = styled.div`
    width: 65%;

    @media (max-width: 900px) {
        width: 80%;
    }
`

const TextOverDiv = styled.div`
    width: 60%;
    position: relative;
    float: right;
    top: -120px;

    @media (max-width: 900px) {
        top: -30px;
        width: 90%
    }
`

const TextOver = styled.h1`
    color: white;
    background-color: #F03265;
    border-radius: 5px;
    font-size: 50px;
    font-style: italic;
    padding: 10px;
    margin-bottom: 12px;

    @media (max-width: 900px) {
        font-size: 24px;
    }
`

const MidDiv = styled.div`
    width: 90%;
    max-width: 800px;
    margin: 96px auto;
`

const MidText = styled.h2`
    color: #F03265;
    font-family: Helvetica;
    font-weight: bold;
`


const IndexPage = () => {
    
  const identity = useIdentityContext()
  console.log("This is the index page.")

    return (
  <Layout>
    <SEO title="Home" />
    <div>
        <div>
            <BlueBlock>
                <CovidBanner>
                Beginning May 30th, 2020, the UW iSchool team will no longer be supporting or maintaining 
                this platform. The project owner will be Charles Douglas, who can be reached 
                at <BannerLink href="mailto:charles@commonpurposenow.org">here</BannerLink>.
                </CovidBanner>
                <ColumnsPart>
                    <ColumnsImageContainer>
                        <ColumnsImage />
                    </ColumnsImageContainer>
                    <TextOverDiv>
                        <TextOver>Empowering voters where it matters most.</TextOver>
                        <Button 
                            color="primary" 
                            css="" // <-- DO NOT REMOVE
                            href="/"
                            style={{
                                backgroundColor: `#F03265`,
                                padding: `12px 24px`,
                            }}
                            variant="contained" 
                        >Sign Up</Button>
                    </TextOverDiv>
                </ColumnsPart>

            </BlueBlock>
            <MidDiv>
                <MidText>
                    Vacay for Democracy sends canvassers to swing states, working to equip voters with the 
                    tools and information they need to vote with confidence in the 2020 election.
                </MidText>
            </MidDiv>
            <MicImage />

        </div>
    </div>
  </Layout>
)}

export default IndexPage
