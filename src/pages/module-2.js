import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from '@emotion/styled'
import Button from "@material-ui/core/Button"

import WhatsNextChartImage from "../components/WhatsNextChartImage"

const ModuleContainer = styled.div`
    width: 90%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 0;
`

const ModuleHeader = styled.h1`
    color: #06182a;
    max-width: 900px;
`

const ModuleVideo = styled.iframe`
    width: 100%;
    max-width: 1100px;
    height: 600px;
`

const ModuleBody = styled.p`
    padding-top: 12px;
    padding-bottom: 12px;
    max-width: 900px;
`

const ModuleSectionHeader = styled.h2`
    font-family: 'Helvetica', sans-serif;
    font-weight: bold;
    margin-bottom: 8px

`

const ModuleImageContainer = styled.div`
    width: 80%;
    margin-top: 24px;
    margin-bottom: 24px;

    @media (max-width: 900px) {
        width: 100%;
    }
`



const Module2 = () => (
    <Layout>
        <SEO title="M2: Canvassing" />
        <ModuleContainer>
            <ModuleHeader>
                Module 2: Canvassing &amp; How to Interact
            </ModuleHeader>
            <ModuleVideo
                src="https://www.youtube.com/embed/sxV5Qmw0fG4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="canvassing video"
            ></ModuleVideo>
            <ModuleBody>
                <ModuleSectionHeader>Knocking on doors</ModuleSectionHeader>
                Canvassing is the systematic initiation of direct contact with
                individuals, commonly used during political campaigns. Canvassing can
                be done for many reasons: political campaigning, grassroots
                fundraising, community awareness, membership drives, and more.
            </ModuleBody>
            <br/>
            <ModuleImageContainer>
                <WhatsNextChartImage />
            </ModuleImageContainer>
            <ModuleBody>
                <ModuleSectionHeader>Let's work</ModuleSectionHeader>
                <ul>
                    <li>
                        We get ready prior to travel, both on our own and with guidance from our local partner orgs. We put together teams,
                        build community in those teams, train together then travel to get the work done.
                    </li>
                    <li>
                        We walk neighborhoods to register new voters or “get-out-the-vote” with existing voters. The partner orgs create 
                        maps for us to use, give us the material we need and process all the data when we’re done. We just work.
                    </li>
                </ul>
            </ModuleBody>
            <Button 
                            color="primary" 
                            css="" // <-- DO NOT REMOVE
                            href="/training"
                            style={{
                                backgroundColor: `#06182a`,
                                padding: `12px 24px 12px 18px`,
                            }}
                            variant="contained" 
                        >&lt;&lt; Back  </Button>
        </ModuleContainer>
    </Layout>
)

export default Module2