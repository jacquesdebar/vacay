import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby";
import styled from '@emotion/styled'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ModuleCard from "../components/ModuleCard"

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
    color: #022842;
`

const TrainingCardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
`

const CMSTraining = ({ data }) => {
    const modules = data.allNodeModule.nodes;

    return (
        <Layout>
            <SEO title="CMS Training" />
        <TrainingContainer>
            <TrainingHeader>
                Training modules
            </TrainingHeader>
            <TrainingCardsContainer>
                {modules.map(module => (
                    <ModuleCard
                        key={module.id}
                        title={module.title}
                        number={module.field_module_number}
                        image={module.relationships.field_module_cover_image.localFile.childImageSharp.fluid}
                        alt={module.field_module_cover_image.alt}
                        summary={module.body.summary}
                    />
                ))}
            </TrainingCardsContainer>
        </TrainingContainer>
            
        </Layout>
    )
}

CMSTraining.propTypes = {
    data: PropTypes.object.isRequired


}

export const data = graphql`
    {
        allNodeModule(sort: {fields: field_module_number, order: ASC}) {
            nodes {
                title
                body {
                    summary
                }
                field_module_number
                field_module_cover_image {
                    alt
                }
                relationships {
                    field_module_cover_image {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 1500) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default CMSTraining