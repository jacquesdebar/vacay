import React from "react"
import styled from '@emotion/styled'

const OverallFooter = styled.footer`
    background-color: #022842;
    border-top: 3.5px solid #F03265;
    color: white;
    height: 100%;
`
const FooterDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-start;

    width: 90%;
    padding: 24px;
    padding-bottom: 12px;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`

const FooterArea = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 24px;
    max-width: 500px;
`

const FooterHeading = styled.h3`
    color: #F03265
`

const FooterBody = styled.p`
    color: white;
`

const FooterLink = styled.a`
    color: white;
    text-decoration: none;

    :hover {
        color: #F03265;
    }
`

const Footer = () => (
  <OverallFooter>
    <FooterDiv>
        <FooterArea>
            <FooterHeading>Join the list</FooterHeading>
            <FooterBody>
                Need more information? Subscribe to our monthly newsletter to recieve updates
                on upcoming trips and the latest from Vacay for Democracy.
            </FooterBody>
        </FooterArea>
        <FooterArea>
            <FooterHeading>Contact</FooterHeading>
            <FooterBody>
                1411 4th Avenue Suite 1000 <br/>
                Seattle, WA 98101 <br/>
                <br/>
                <FooterLink href="mailto:hello@commonpurposenow.org" target="_top">hello@cpnxt.org</FooterLink>
            </FooterBody>
        </FooterArea>
        <FooterArea>
            <FooterHeading>Follow us</FooterHeading>
            <FooterBody>
                <FooterLink href="https://www.instagram.com/cpnxt/" target="_top">Instagram</FooterLink><br/>
                <FooterLink href="https://twitter.com/cpnxt" target="_top">Twitter</FooterLink><br/>
                <FooterLink href="https://www.moreperfectaf.com/" target="_top">Podcast</FooterLink>
            </FooterBody>
        </FooterArea>
    </FooterDiv>
  </OverallFooter>
)

export default Footer
