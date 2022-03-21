import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import footerPic from "../../assets/logo-footer.png";
import { ListItemIcon } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.black,
    width: "100%",
    height: "28rem",

    [theme.breakpoints.down("md")]: {
      minHeight: "48rem",
    },
  },
  mainBox: {
    flexWrap: "nowrap",
    [theme.breakpoints.down("md")]: {
      display: "row",
    },
  },

  mainContainer: {
    display: "inline-flex",
    marginLeft: "174.6px",
    marginRight: "174.6px",
    position: "relative",
    flexWrap: "nowrap",
    marginTop: "2rem",
    marginBottom: "2rem",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginLeft: "1rem",
      paddingBottom: "0rem",
      // Height: "100vh",
      paddingTop: "0rem",
      display: "flex",
      alignItem: "flex-start",
    },
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "Bold",
    opacity: 0.6,
    textDecoration: "none",
    "&:hover, &:focus": {
      color: "#03a9f4",
    },
  },
  firstItem: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "1rem",
    fontWeight: "Bold",
    textDecoration: "none",
    opacity: 1,
  },
  gridItem: {
    display: "flex",
    flexWrap: "nowrap",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "0rem",
      paddingBottom: "0rem",
    },
  },
  gridLogo: {
    padding: "1rem",
    marginTop: "3em",
    width: "460px",
    margin: "0px",
    // flexWrap: "nowrap",
    marginBottom: "2rem",
    // display: "-nline-flex",
    [theme.breakpoints.down("md")]: {
      marginTop: "0rem",
      marginBottom: "0rem",
    },
  },
  footerIcon: {
    display: "flex",
    flexWrap: "nowrap",
    width: "236px",
    margin: "0em",
    padding: "0px",
    color: "white",
    opacity: 0.6,
    display: "flex-wrap",
  },
  listItem: {
    padding: "0em",
    paddingBottom: "1em",
  },
  icon: {
    color: "white",
    display: "flex",

    "&:hover, &:focus": {
      color: "#03a9f4",
    },
  },
  reserved: {
    position: "absolute",
    display: "flex",
    color: "white",
    marginTop: "12em",
    width: "20em",
    textAlign: "flex-end",
  },
  rest: {
    paddingTop: "2.5rem",
    paddingBottom: "1rem",
    textAlign: "center",
    marginBottom: "2rem",
    color: "white",

    [theme.breakpoints.down("md")]: {
      paddingTop: "0rem",
      marginLeft: "2.2rem",
      textAlign: "left",
    },
  },
}));

const message = `Discy is a social questions & Answers Engine  which will help you establis your community and connect with other people.`;

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box
        bgcolor="inherit"
        color="white"
        display="flex"
        flexDirection="row"
        className={classes.mainBox}
      >
        <Grid
          display="flex"
          container
          justify="center"
          flexWrap="nowrap"
          className={classes.mainContainer}
          spacing={2}
        >
          <Grid
            border="1"
            item
            spacing={2}
            flexDirection="row"
            flexWrap="wrap"
            flexGrow={1}
            // direction="column"
            // display="block"
            className={classes.gridLogo}
          >
            <Grid
              container
              spacing={1}
              flexWrap="nowrap"
              className={classes.gridItem}
            >
              <Grid item>
                <img
                  src={footerPic}
                  alt="Footer logo"
                  className={classes.logo}
                />
              </Grid>
              <Grid item sx={10}>
                {message}
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.firstItem}>
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(11)}
                to="/users"
                className={classes.link}
              >
                Meet The Team
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/blog"
                className={classes.link}
              >
                Blog
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(1)}
                to="/about-us"
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/contact-us"
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.firstItem}>
                Legal Stuff
              </Grid>
              <Grid item component={Link} to="/feqs" className={classes.link}>
                Terms of Use
              </Grid>
              <Grid item component={Link} to="/feqs" className={classes.link}>
                Privacy policy
              </Grid>
              <Grid item component={Link} to="/feqs" className={classes.link}>
                Cookie Policy
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.firstItem}>
                Help
              </Grid>
              <Grid item component={Link} to="/feqs" className={classes.link}>
                Knowledge Base
              </Grid>
              <Grid
                item
                component={Link}
                to="/contact-us"
                className={classes.link}
              >
                Support
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={1}>
              <Grid item className={classes.firstItem}>
                Follow
              </Grid>
              <Grid container spacing={1} item className={classes.footerIcon}>
                <Grid
                  item
                  component={"a"}
                  href="http://www.facebook.com"
                  rel="facebook"
                  // rel="noopener noreferrer"
                  target="_blank"
                >
                  <ListItem button disableRipple className={classes.listItem}>
                    <ListItemIcon item className={classes.icon}>
                      <FacebookIcon />
                    </ListItemIcon>
                  </ListItem>
                </Grid>
                <Grid
                  item
                  component={"a"}
                  href="http://www.twitter.com"
                  rel="twitter"
                  // rel="noopener noreferrer"
                  target="_blank"
                >
                  <ListItem button disableRipple className={classes.listItem}>
                    <ListItemIcon item className={classes.icon}>
                      <TwitterIcon />
                    </ListItemIcon>
                  </ListItem>
                </Grid>
                <Grid
                  item
                  component={"a"}
                  href="http://www.linkedin.com"
                  rel="linkedin"
                  // rel="noopener noreferrer"
                  target="_blank"
                >
                  <ListItem button disableRipple className={classes.listItem}>
                    <ListItemIcon item className={classes.icon}>
                      <LinkedInIcon />
                    </ListItemIcon>
                  </ListItem>
                </Grid>
                <Grid
                  item
                  component={"a"}
                  href="http://www.cloud.google.com"
                  rel="cloud-google"
                  // rel="noopener noreferrer"
                  target="_blank"
                >
                  <ListItem button disableRipple className={classes.listItem}>
                    <ListItemIcon item className={classes.icon}>
                      <CloudQueueIcon />
                    </ListItemIcon>
                  </ListItem>
                </Grid>
              </Grid>
              <Grid container spacing={1} item className={classes.footerIcon}>
                <Grid
                  item
                  component={"a"}
                  href="http://www.rss.com"
                  rel="rss-feed"
                  // rel="noopener noreferrer"
                  target="_blank"
                >
                  <ListItem button disableRipple className={classes.listItem}>
                    <ListItemIcon item className={classes.icon}>
                      <RssFeedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Grid>
                <Grid
                  item
                  component={"a"}
                  href="http://tiktok.com"
                  rel="tiktok"
                  // rel="noopener noreferrer"
                  target="_blank"
                >
                  <ListItem button className={classes.listItem} disableRipple>
                    <ListItemIcon item className={classes.icon}>
                      <MusicNoteOutlinedIcon />
                    </ListItemIcon>
                  </ListItem>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box
        container
        className={classes.rest}
        pt={{ sx: 5, sm: 10 }}
        direction="column"
      >
        <Grid item>
          &copy; {new Date().getFullYear()} Discy. All Rights Reserved <br />
          With Love by 2Code
        </Grid>
      </Box>
    </footer>
  );
}
