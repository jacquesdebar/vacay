import React from "react"
import styled from '@emotion/styled'
import TextField from "@material-ui/core/TextField"
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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

const FooterEmailInput2 = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
    },
  })(TextField);

const FooterEmailInput = styled(TextField)`
    margin-top: 0px;

    :hover {
        border-color: white;
        color: white;
    }
`

const FooterLink = styled.a`
    color: white;
    text-decoration: none;

    :hover {
        color: #F03265;
    }
`

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  
    cssLabel: {
      color : 'white'
    },
  
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: `white !important`,
      }
    },
  
    cssFocused: {
        color: 'white'
    },
  
    notchedOutline: {
      borderWidth: '1px',
      borderColor: 'white !important'
    },
  
  });

const Footer = ({ classes }) => {

    return (
        <OverallFooter>
            <FooterDiv>
                <FooterArea>
                    <FooterHeading>Join the list</FooterHeading>
                    <FooterBody>
                        Need more information? Subscribe to our monthly newsletter to recieve updates
                        on upcoming trips and the latest from Vacay for Democracy.
                    </FooterBody>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                        id="newsletter"
                        label="Email"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            classes: {
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                            },
                        }}
                        InputProps={{
                            classes: {
                            root: classes.cssOutlinedInput,
                            focused: classes.cssFocused,
                            notchedOutline: classes.notchedOutline,
                            },
                        }}
                        />
                    </form>
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
}

FooterEmailInput.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Footer)
