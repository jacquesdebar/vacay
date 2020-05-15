import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F9F8F8",
    //minHeight: "74vh",
  },
  media:{
    height:140,
  },
  pageTitle: {
    textAlign: "center",
    margin: 48,
    fontWeight: "bold",
    fontStyle: "italic",
    fontWeight:"bold"
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
    maxWidth: 500,

    // width: 275,
    // height: 300,
    display: "inline-block",
    margin: 16,
    backgroundColor: "#014378",
    color:"white",
    "&:hover": {
      color: "white",
      backgroundColor: "##F03265"
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
    <div className={classes.root}>
      <div style={{ height: 100 }} />
      <Typography variant="h2" className={classes.pageTitle}>
        Training Modules
      </Typography>
      <Box className={classes.cardsDiv}>
        <a href="/module-01">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://imgur.com/Pk9nTvA.jpg"
                title="Packing"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Module 1: Packing
                </Typography>
                <Typography>
                  Learn some tips for packing, as well as how to mentally prepare for the trip
                </Typography>
              </CardContent>
            </CardActionArea>
          {/* <CardActions>
            <Button size="small" color="white">
              Learn More
            </Button>        
           </CardActions> */}
          </Card> 
        </a>
        <a href="/module-02">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://imgur.com/dW4ILMh.jpg"
                title="Canvassing"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Module 2: Canvassing
                </Typography>
                <Typography>
                  Learn about what canvassing is, how to interact with locals,
                  and what a day looks like on the trip
                </Typography>
              </CardContent>
            </CardActionArea>
          {/* <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>        
           </CardActions> */}
          </Card> 
        </a>
        <a href="/module-03">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://imgur.com/Ci2x3bG.jpg"
                title="Things to do"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Module 3: Vacationing
                </Typography>
                <Typography>
                  Learn more about the community and culture surrounding your trip destination
                </Typography>
              </CardContent>
            </CardActionArea>
          {/* <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>        
           </CardActions> */}
          </Card> 
        </a>
        <a href="/module-04">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://imgur.com/f3w3L5z.jpg"
                title="planning"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Module 4: Gameplanning
                </Typography>
                <Typography>
                  Learn how your team leads will go about planning and what you can do to coordinate with them
                </Typography>
              </CardContent>
            </CardActionArea>
          {/* <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>        
           </CardActions> */}
          </Card>
        </a>
      </Box>
    </div>
  );
}