import React from "react"

import Layout from "../components/layout"
import ColumnsImage from "../components/ColumnsImage"
// import Image from "../components/Image"
import SEO from "../components/seo"
import Button from "@material-ui/core/Button"

import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core';

const BlueBlock = styled.div`
    width: 100%;
    background-color: #023660;
    padding: 48px;
    padding-bottom: 128px;
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
    font-size: 50px;
    font-style: italic;
    padding: 10px;

    @media (max-width: 900px) {
        font-size: 24px;
    }
`

const NewLanding = ({ data }) => (
  <Layout>
    <SEO title="Alternate landing page" />
    <div>
        <div>
            <BlueBlock>
                <ColumnsPart>
                    <ColumnsImage />
                    <TextOverDiv>
                        <TextOver>Empowering voters where it matters most.</TextOver>
                        <Button 
                            color="primary" 
                            style={{
                                backgroundColor: `#F03265`,
                                padding: `12px 24px`,
                            }}
                            variant="contained" 
                        >Sign Up</Button>
                    </TextOverDiv>
                </ColumnsPart>

            </BlueBlock>

        </div>
    </div>
  </Layout>
)

export default NewLanding
