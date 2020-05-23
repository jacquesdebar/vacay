import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from "../components/seo"
import styled from '@emotion/styled'

import Layout from '../components/layout';

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
    color: #022842;
`

const ModuleBody = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    max-width: 900px;
    color: #022842;
`


const Module = ({ data }) => {
    const post = data.nodeModule;

    return (
        <Layout>
            <SEO title={`Module ${post.field_module_number}: ${post.title}`} />
            <ModuleContainer>
                <ModuleHeader>{post.title}</ModuleHeader>
                <ModuleBody dangerouslySetInnerHTML={{ __html: post.body.processed}} />
            </ModuleContainer>
        </Layout>
    );
};

Module.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
    query($ModuleId: String!) {
        nodeModule(id: { eq: $ModuleId }) {
            id
            field_module_number
            body {
                processed
            }
            title
            relationships {
                field_module_body_images {
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
`;

export default Module;