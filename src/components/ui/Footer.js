import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Box, ListItem } from "@material-ui/core";
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
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "Bold",
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
  },
  gridItem: {
    margin: "2.2em",
    marginTop: "5em",
  },
  gridLogo: {
    marginTop: "7em",
    width: "400px",
    margin: "0px",
  },
  footerIcon: {
    width: "250px",
    margin: "0em",
    color: "white",
  },
  listItem: {
    padding: "0em",
    paddingBottom: "1em",
  },
  icon: {
    color: "white",

    "&:hover, &:focus": {
      color: "#03a9f4",
    },
  },
  reserved: {
    position: "absolute",
    display: "flex",
    marginTop: "20em",
    width: "20em",
    marginLeft: "40em",
  },
}));

const message = `Discy is a social questions & Answers Engine  which will help you establis your community and connect with other people.`;

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box width="100" height="25em" bgcolor="inherit" color="white">
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid
            border="1"
            container
            spacing={4}
            direction="column"
            display="block"
            className={classes.gridLogo}
          >
            <Grid container spacing={1}>
              <Grid item>
                <img
                  src={footerPic}
                  alt="Footer logo"
                  className={classes.logo}
                />
              </Grid>
              <Grid item xs={10}>
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
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.firstItem}>
                Follow
              </Grid>
              <Grid
                container
                spacing={1}
                item
                xs={12}
                className={classes.footerIcon}
              >
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
        <Grid container justify="center" className={classes.reserved}>
          <Grid item>
            &reg; {new Date().getFullYear()} Discy. All Rights Reserved
          </Grid>
          <Grid Item>With Love by 2Code</Grid>
        </Grid>
      </Box>
    </footer>
  );
}
