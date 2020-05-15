import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from '@emotion/styled'

import ColumnsImage from "../components/ColumnsImage"
import MicManImage from "../components/MicManImage"

const AboutContainer = styled.div`
    width: 90%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 0;
`

const AboutHeader = styled.h1`
    color: #06182a;
`

const AboutBody = styled.p`
    padding-top: 12px;
    padding-bottom: 12px;
`
const AboutImageContainer = styled.div`
    width: 80%;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-bottom: 24px;

    @media (max-width: 900px) {
        width: 100%;
    }
`

const MissionText = styled.p`
    color: #F03265;
    font-weight: bold;
`

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <AboutContainer>
            <div>
                <AboutHeader>
                    Why Vacay for Democracy?
                </AboutHeader>
                <AboutBody>
                    In 2016, 131.7 million out of 213 million eligible voters in the
                    United States cast a ballot in the presidential election; a
                    turnout rate of 57%, with even lower rates in swing states.
                    Studies show disinterest and apathy played a large role in why
                    eligible Americans chose to forfeit their vote. Experts believe
                    that some Americans are politically disengaged due to lack of
                    education about the importance of democracy and candidates running
                    for election.
                </AboutBody>
            </div>
            <AboutImageContainer>
                <ColumnsImage />
            </AboutImageContainer>
            <AboutImageContainer>
                <MicManImage />
            </AboutImageContainer>
            <AboutBody>
                Democracy is based on the principle of “people’s sovereignty”, in
                other words, citizens in America can form and diffuse authority of
                their government through their elected representatives. Democracy
                allows citizens to have a voice in decision-making and guarantees
                enhanced livelihoods for it’s people. The only way to achieve
                democracy is for all citizens to participate in their elections
                and make informed decisions that impact their lives and our
                communities.
            </AboutBody>
            <AboutBody>
                <MissionText>
                    Vacay for Democracy sends canvassers to swing states, working to
                    equip voters with the tools and information they need to vote with
                    confidence in the 2020 election.
                </MissionText>
            </AboutBody>
        </AboutContainer>
    </Layout>
)

export default AboutPage