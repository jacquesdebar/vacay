import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 1000,
    padding: 8
    // width: "1000px"
  },
  links: {
    color: "inherit",
    textDecoration: "none",
  },
  pfp:{
    // width: "auto",
    // height: "auto",
    // maxHeight : 100,
    // maxWidth : 100,
    width: 150,
    height: 150,
    objectFit: "cover",
    borderRadius : "50%"
  },
  us:{
    width: 200,
    padding: 15
  }


}));

export default function CapstoneInfo() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h2>About Us</h2>
      <p>
        This project is part of a University of Washington Information School
        <a href="https://ischool.uw.edu/capstone"> capstone project </a> and 
        is sponsored by Common Purpose: Nxt, a local organization focused on reinventing the way the next generation tackles civic action.
      </p>
      <h3>Our Team</h3>
      <Box 
        style = {{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {/* javaria         */}
        <Box 
          className={classes.us}
          style = {{
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <a href="mailto:yousujav@uw.edu?Subject=Capstone%20Work" className={classes.links}>
            Javaria Yousuf
            <p/>
            <img
            className={classes.pfp}
            src = 'https://i.imgur.com/qR0Kmh4.jpg'
            alt="javaria"
            />
            <p>
              Javaria is a database enthusiest who loves to spend time with her family.
            </p>
          </a>
        </Box>
        {/* phoebe */}
        <Box 
          className={classes.us}
          style = {{
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <a href="mailto:png8@uw.edu?Subject=Capstone%20Work" className={classes.links}>
            Phoebe Ng
            <p/>
            <img 
              className={classes.pfp}
              src = 'https://i.imgur.com/C5jJGJr.jpg'
              alt="phoebe"
            />
            <p>
              Phoebe is a UX enthusiest who loves to listen to Ariana Grande.
            </p>
          </a>
        </Box>
        {/* marcus */}
        <Box 
          className={classes.us}
          style = {{
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <a href="mailto:mtghuang@uw.edu?Subject=Capstone%20Work" className={classes.links}>
            Marcus Huang
            <p/>
            <img 
              className={classes.pfp}
              src = 'https://i.imgur.com/OSPv1Fv.png'
              alt="marcus"
            />
            <p>
              Marcus is an average guy who likes to take walks. 
            </p>
          </a>
        </Box>
         {/* jacques */}
         <Box 
          className={classes.us}
          style = {{
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <a href="mailto:jdebar@uw.edu?Subject=Capstone%20Work"className={classes.links}>
            Jacques DeBar
            <p/>
            <img
              className={classes.pfp}
              src="https://i.imgur.com/CxHvqBn.jpg"
              alt="jacques"
          />
          <p>
            Jacques is a music enthusiest who loves to listen to new music. He is also from portland, Maine
          </p>
          </a>
        </Box>
      </Box>
    </Box>
  );
}

































// <Grid container className={classes.gridContainer}>
// <Grid item xs={12} md={3}>
//   <a href="mailto:yousujav@uw.edu?Subject=Capstone%20Work" className={classes.links}>
//     Javaria Yousuf
//     <p/>
//     <img
//     className={classes.pfp}
//     src = 'https://i.imgur.com/qR0Kmh4.jpg'
//     alt="javaria"
//     />
//     <p>
//       Javaria is a database enthusiest who loves to spend time with her family.
//     </p>
//   </a></Grid>
//   <Grid item xs={12} md={3}>
//   <a href="mailto:png8@uw.edu?Subject=Capstone%20Work" className={classes.links}>
//     Phoebe Ng
//     <p/>
//     <img 
//       className={classes.pfp}
//       src = 'https://i.imgur.com/C5jJGJr.jpg'
//       alt="phoebe"
//     />
//     <p>
//       Phoebe is a UX enthusiest who loves to listen to Ariana Grande.
//     </p>
//   </a></Grid>
//   <Grid item xs={12} md={3}>
//   <a href="mailto:mtghuang@uw.edu?Subject=Capstone%20Work" className={classes.links}>
//     Marcus Huang
//     <p/>
//     <img 
//       className={classes.pfp}
//       src = 'https://i.imgur.com/OSPv1Fv.png'
//       alt="marcus"
//     />
//     <p>
//       Marcus is an average guy who likes to take walks.
//     </p>
//   </a></Grid>
//   <Grid item xs={12} md={3}>
//   <a href="mailto:jdebar@uw.edu?Subject=Capstone%20Work"className={classes.links}>
//     Jacques DeBar
//     <p/>
//     <img
//       className={classes.pfp}
//       src="https://i.imgur.com/CxHvqBn.jpg"
//       alt="jacques"
//   />
//   <p>
//     Jacques is a music enthusiest who loves to listen to new music
//   </p>
//   </a></Grid>
// </Grid>
