import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#F9F8F8"
    },
    heading: {
      margin: "0px",
      marginTop: "20px"
    },
    row: {
      marginBottom: "40px"
    },
    h1: {
      color: "#061B4A"
    },
    missionParagraph: {
      fontWeight: "bold",
      color: "#F03265"
    },
    demImg: {
      height: "auto",
      width: "450px",
      marginTop: "50px",
     // marginRight: "20",
     // marginLeft: "50px",
      position: "relative",
      zIndex: "2"
    },
    textBox: {
      width: "475px",
      display: "inline-block",
      //flexDirection: "row",
      //flexWrap: "wrap-reverse",
      marginRight: "15px",
      marginLeft: "15px",
      position: "relative",
      zIndex: "2"
    }
}));

export default function About() {
    const classes = useStyles();
    return (<Layout className={classes.root}>
        
      <SEO title="About" />

        <Box
          className={classes.heading}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
          }}
        ></Box>

        <Box
          className={classes.row}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
          }}
        >

          <div className={classes.textBox}>
            <p>
            <h1 className={classes.h1}>Why Vacay for Democracy?</h1>
              In 2016, 131.7 million out of 213 million eligible voters in the
              United States cast a ballot in the presidential election; a
              turnout rate of 57%, with even lower rates in swing states.
              Studies show disinterest and apathy played a large role in why
              eligible Americans chose to forfeit their vote. Experts believe
              that some Americans are politically disengaged due to lack of
              education about the importance of democracy and candidates running
              for election.
            </p>
            <img
            className={classes.demImg}
            src="https://i.imgur.com/9zii9E7.jpg"
            alt="democracy"
          />
          </div>

          </Box>

        <Box
          className={classes.row}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div className={classes.textBox}>
          <img
            className={classes.demImg}
            src="https://i.imgur.com/P2fgX4h.jpg"
            alt="democracy"
          />
            <p>
              Democracy is based on the principle of “people’s sovereignty”, in
              other words, citizens in America can form and diffuse authority of
              their government through their elected representatives. Democracy
              allows citizens to have a voice in decision-making and guarantees
              enhanced livelihoods for it’s people. The only way to achieve
              democracy is for all citizens to participate in their elections
              and make informed decisions that impact their lives and our
              communities.
              <p className={classes.missionParagraph}>
              Vacay for Democracy sends canvassers to swing states, working to
              equip voters with the tools and information they need to vote with
              confidence in the 2020 election.
              </p>
            </p>
          </div>
        </Box>
</Layout>
);}