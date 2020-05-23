import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from '@emotion/styled'

const CardLink = styled(Link)`
    text-decoration: none;
    margin: 24px;
`

const TrainingCard = styled.div`
    width: 600px;
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

const ModuleCard = ({ title, number, image, alt, summary }) => (
    <CardLink to={`training/${number}`}>
        <TrainingCard>
            <TrainingCardTopHalf fluid={image} alt={alt} />
            <TrainingCardBottomHalf>
                <TrainingCardTitle>
                    {title}
                </TrainingCardTitle>
                <TrainingCardDescription>
                    {summary}
                </TrainingCardDescription>
            </TrainingCardBottomHalf>
        </TrainingCard>
    </CardLink>
)

ModuleCard.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
}

export default ModuleCard