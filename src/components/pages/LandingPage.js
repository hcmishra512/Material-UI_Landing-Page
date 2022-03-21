import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, CssBaseline, Grid, Typography } from "@material-ui/core";
import actionPic from "../../assets/action.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.transparent,
    width: "100%",
    height: "232px",
    position: "relative",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      marginLeft: "14px",
    },
  },
  mainPic: {
    width: "100%",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
    },
  },
  mainContainer: {
    position: "absolute",
    justify: "center",
  },
  mainItem: {
    direction: "column",
    marginLeft: "174.6px",
    marginRight: "174.6px",
    height: "232px",
    [theme.breakpoints.down("md")]: {
      margin: "0px 20px",
      direction: "row",
    },
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.95rem",
    fontWeight: "bold",
    paddingTop: "50px",
    paddingBottom: "50px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 0px",
    },
  },
  blog: {
    marginTop: "3rem",
    marginLeft: "15rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "0px ",
      marginLeft: "0px",
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid container className={classes.mainContainer}>
        <Grid container className={classes.mainItem}>
          <Grid item lg={6} md={12}>
            <Grid container>
              <Grid item className={classes.link}>
                <h2>Share & grow the world's knowledge!</h2>
                <p>
                  "We want to connect the people who have knowledge to the
                  people who need it, to bring together people with different
                  perspectives so they can understand each other better, and to
                  empower everyone to share their knowledge."
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={12}>
            <Grid container>
              <Grid item className={classes.link}>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to="/"
                  className={classes.blog}
                >
                  Create A New Account
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img src={actionPic} alt="Main Pic" className={classes.mainPic} />
    </Grid>
  );
}

{
  /* <Grid item className={classes.root}>
  <img src={actionPic} alt="Main Pic" className={classes.actionPic} />
  <Grid
    container
    display="flex"
    justifyContent="space-between"
    className={classes.mainContainer}
  >
    <Grid container className={classes.subContainer}>
      <Grid item>
        <Grid
          container
          box="border-box"
          alignItems="center"
          className={classes.blogContainer}
        >
          <Grid item container className={classes.blog}>
            <h2>Share & grow the world's knowledge!</h2>
            <p>
              "We want to connect the people who have knowledge to the people
              who need it, to bring together people with different perspectives
              so they can understand each other better, and to empower everyone
              to share their knowledge."
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Grid container className={classes.blogContainer}>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/"
            className={classes.blog}
          >
            Create A New Account
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>; */
}
// root: {
//     width: "100%",
//     height: "232px",
//     position: "relative",
//     display: "flex",

//     [theme.breakpoints.down("md")]: {
//       width: "720px",
//       height: "190px",
//     },
//   },
//   actionPic: {
//     width: "100%",
//     height: "232px",
//   },
//   mainContainer: {
//     position: "absolute",
//     // padding: "50px 10px",
//     [theme.breakpoints.down("md")]: {
//       padding: "0",
//     },
//   },
//   subContainer: {
//     marginLeft: "174.6px",
//     marginRight: "174.6px",

//     [theme.breakpoints.down("md")]: {
//       marginLeft: "0px",
//       marginRight: "0px",
//     },
//   },
//   blogContainer: {
//     // alignItems: "center",
//     // justify: "center",
//     padding: "0px 20px",
//   },
//   blog: {
//     // justify: "space-between",
//     // textAlign: "center",
//     color: "white",
//     fontFamily: "Arial",
//     fontSize: "1rem",
//     fontWeight: "bold",
//     textDecoration: "none",
//     width: "max-width",
//   },

//   gridItem: {
//     // justifyContent: "space-between",
//     marginTop: "5rem",
//     paddingLeft: "15rem",
//     [theme.breakpoints.down("md")]: {
//       marginTop: "0px",
//       paddingLeft: "0px",
//     },
//   },
