import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from '@emotion/styled'

import AboutContent from "../components/AboutContent"
import TestimonialsContent from "../components/TestimonialsContent"

const AboutPageContainer = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-flow: row wrap;
    // align-items: center;
    padding: 48px 0;
`

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <AboutPageContainer>
            <AboutContent />
            <TestimonialsContent />
        </AboutPageContainer>
    </Layout>
)

export default AboutPage