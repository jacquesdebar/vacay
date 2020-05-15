import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/layout";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F9F8F8",
    minHeight: "74vh"
  },
  pageTitle: {
    textAlign: "center",
    margin: 48
  },
  cardsDiv: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "48px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center"
  },
  card: {
    width: 275,
    height: 300,
    display: "inline-block",
    margin: 16,
    backgroundColor: "#ddd",
    "&:hover": {
      color: "white",
      backgroundColor: "#014378"
    }
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 24
  }
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <Layout className={classes.root}>
      <Typography variant="h2" className={classes.pageTitle}>
        Training Modules
      </Typography>
      <Box className={classes.cardsDiv}>
        <a href="/module-01">
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Module 01
              </Typography>
              <Typography variant="h5" className={classes.pos} component="h2">
                Packing for the Trip
              </Typography>
              <Typography variant="body2" component="p">
                How to pack for your trip
                <br />
                How to mentally prepare
                <br />
                What to expect
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </a>
        <a href="/module-02">
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Module 02
              </Typography>
              <Typography variant="h5" className={classes.pos} component="h2">
                What to Expect when Canvassing
              </Typography>
              <Typography variant="body2" component="p">
                How to interact with locals
                <br />
                How to approach doors to knock
                <br />
                Things we will do
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </a>
        <a href="/module-03">
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Module 03
              </Typography>
              <Typography variant="h5" className={classes.pos} component="h2">
                Things you'll do on the trip
              </Typography>
              <Typography variant="body2" component="p">
                Culture
                <br />
                Community Outreach
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </a>
        <a href="/module-04">
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Module 04
              </Typography>
              <Typography variant="h5" className={classes.pos} component="h2">
                Planning with your team
              </Typography>
              <Typography variant="body2" component="p">
                How to pack for your trip
                <br />
                What to expect
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </a>
      </Box>
    </Layout>
  );
}
