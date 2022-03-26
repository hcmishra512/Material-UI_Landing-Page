import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Tabs,
  Tab,
  Grid,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { Menu, MenuItem, Hidden, List, ListItem } from "@material-ui/core";
import actionPic from "../../assets/action.png";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded";
import GroupIcon from "@material-ui/icons/Group";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Avatar from "@material-ui/core/Avatar";
import teamTwo from "../../assets/team-2-42x42.jpg";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ChildCareIcon from "@material-ui/icons/ChildCare";

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
    marginLeft: "21rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "0px ",
      marginLeft: "0px",
    },
  },
  blogHead: {
    minHeight: "3147.200px",
    width: "100%",
  },
  sideMargin: {
    marginLeft: "172.600px",
    marginRight: "172.600px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px",
      marginRight: "0px",
    },
  },
  leftContainer: {
    width: "200px",
    minHeight: "3147.200px",
    position: "relative",
    overflow: "visible",
    float: "left",
    display: "flex",
    boxSizing: "border-box",
    minHeight: "1px",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "black",
    paddingLeft: "0px",
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
    color: "#03a9f4",
  },
  nestedItem: {
    // ...theme.typography.tab,
    paddingLeft: theme.spacing(6),
    color: "black",
    opacity: 0.7,
  },
  centerBox: {
    paddingTop: "28px ",
    paddingBottom: "30px",
    border: 1,
  },
  tabContainer: {
    paddingLeft: "30px",
    paddingRight: "30px",
    minHeight: "55px",
  },
  centerContainer: {
    width: "691px",
    minHeight: "3147.200px",
    position: "relative",
    overflow: "visible",
    float: "center",
    display: "flex",
    boxSizing: "border-box",
    minHeight: "1px",
  },
  section: {
    marginTop: "30px",
    minHeight: "3037.200px",
  },
  centerTwo: {
    minHeight: "2967.200px",
  },
  innerTwo: {
    minHeight: "320.400px",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "30px",
    marginBottom: "30px",
  },
  box: {
    border: "1px",
    borderColor: "text.primary",
    width: "5rem",
    height: "5rem",
  },
  martin: {
    marginBottom: "2rem",
  },
  itemIcom: {
    paddingTop: "3rem",
    paddingLeft: "5px",
    fontSize: "large",
  },
  aerrow: {
    width: "3rem",
    height: "3rem",
  },
  num: {
    paddingLeft: "7px",
    fontSize: "22px",
    fontWeight: 900,
  },
  blogUp: {
    width: "563px",
    height: "96px",
  },
  questionHeader: {
    display: "flex",
  },
  authorHope: {
    // color: "secondary",
    // textTransform: "none",
    // paddingRight: "20px",
  },
  quest: {
    width: "497px",
    height: "27px",
  },
  span: {
    backgroundColor: "#d9a34a",
    marginRight: "15px",
    marginLeft: "5px",
    paddingTop: "1px",
    paddingBottom: "2px",
    paddingLeft: "2px",
    paddingRight: "2px",
    color: "white",
  },
  statement: {
    fontSize: "19px",
    lignHeight: "27px",
    marginTop: "5px",
    fontWeight: 900,
    "&:hover": {
      color: "#03a9f4",
    },
  },
  subtitle: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  btn: {
    marginRight: "1rem",
    textTransform: "none",
    marginBottom: "2rem",
    "&:hover": {
      backgroundColor: "#03a9f4",
    },
  },
  footer: {
    padding: "15px",
    width: "533px",
    height: "31.4px",
    display: "flex",
    backgroundColor: "#e0f2f1",
  },
  buttenIcon: {
    backgroundColor: "#fafafa",
    textTransform: "none",
  },
  spanFoo: {
    backgroundColor: "#fafafa",
    borderColor: "#9e9e9e",
    marginLeft: "10px",
    paddingTop: "3px",
    paddingBottom: "6px",
    paddingLeft: "5px",
    paddingRight: "5px",
    borderRadius: "5px",
  },
  lastBtn: {
    marginLeft: "15rem",
    backgroundColor: "#212121",
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#03a9f4",
    },
  },
  rightContainer: {
    width: "279px",
    minHeight: "3147.200px",
    position: "relative",
    overflow: "visible",
    float: "rigth",
    display: "flex",
    boxSizing: "border-box",
    minHeight: "1px",
    // [theme.breakpoints.down("md")]: {
    //   xs: 12,
    // },
  },

  // tab: {
  //   fontFamily: "Robodo",
  //   textTransform: "none",
  //   fontWeight: "700",
  //   fontSize: "1rem",
  //   minWidth: 5,
  //   marginLeft: "-10px",
  // },
  // indicator: {
  //   backgroundColor: "secondary",
  //   height: ".5rem",
  //   maxWidth: 50,
  // },
}));
const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "transparent",
    // padding: "5px",
    height: ".2rem",
    "& > span": {
      maxWidth: "60",
      maxHeiht: ".5rem",
      width: "100%",
      backgroundColor: "#635ee7",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    borderBottom: "2px solid #e8e8e8",
    textTransform: "none",
    color: "inherit",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginLeft: "-10px",
    // marginRight: theme.spacing(1),
    minWidth: 5,
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

export default function LandingPage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuQuestions = [
    {
      name: "New Questions",
      link: "/?show=recent-questions",
      activeIndex: 5,
      selectedQuestionIndex: 0,
    },
    {
      name: "Trending Questions",
      link: "/?show=most-voted",
      activeIndex: 5,
      selectedQuestionIndex: 1,
    },
    {
      name: "Must read Questions",
      link: "/?show=most-visited",
      activeIndex: 5,
      selectedQuestionIndex: 2,
    },
    {
      name: "Hot Questions",
      link: "/?show=most-answered",
      activeIndex: 5,
      selectedQuestionIndex: 3,
    },
  ];

  const routeDrawers = [
    { icon: <HomeIcon />, name: "Home", link: "/", activeIndex: 0 },
    {
      icon: <FolderSharedIcon />,
      name: "Communities",
      link: "/communities",
      activeIndex: 4,
    },
    {
      icon: <MenuBookIcon />,
      name: "Questions",
      link: "/questions",
      activeIndex: 5,
    },
    {
      icon: <VolumeDownRoundedIcon />,
      name: "Polls",
      link: "/question/polls",
      activeIndex: 6,
    },
    { icon: <GroupIcon />, name: "Group", link: "/group-page", activeIndex: 7 },
    {
      icon: <GroupAddIcon />,
      name: "Add group",
      link: "/add-group",
      activeIndex: 8,
    },
    { icon: <LocalOfferIcon />, name: "Tags", link: "/tags", activeIndex: 9 },
    {
      icon: <EmojiEventsIcon />,
      name: "Badges",
      link: "/badges",
      activeIndex: 10,
    },
    {
      icon: <SupervisedUserCircleIcon />,
      name: "Users",
      link: "/users",
      activeIndex: 11,
    },
    { icon: <DonutSmallIcon />, name: "Help", link: "/faqs", activeIndex: 12 },
    {
      icon: <ShoppingCartIcon />,
      name: "Buy Theme",
      link: "/buy-theme",
      activeIndex: 13,
    },
  ];

  return (
    <Grid>
      {/********* Landing page pic area ***********/}
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
                    perspectives so they can understand each other better, and
                    to empower everyone to share their knowledge."
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
      {/*********Left Container Landing page area ***********/}
      <Grid item>
        <Grid container className={classes.blogHead}>
          <Grid container className={classes.sideMargin}>
            <Hidden mdDown>
              <Grid container className={classes.leftContainer}>
                <Box
                  border={0}
                  marginTop={"2em"}
                  width={200}
                  className={classes.leftBox}
                >
                  {routeDrawers.map((routeDrawer, index) => (
                    <List>
                      <ListItem
                        disableRipple
                        button
                        key={`${routeDrawer} ${routeDrawer.activeIndex}`}
                        component={Link}
                        to={routeDrawer.link}
                        selected={value === routeDrawer.activeIndex}
                        // onClick={() =>
                        //   setOpenDrawer((routeDrawer) =>
                        //     index === 2
                        //       ? setOpenDrawer(true)
                        //       : setOpenDrawer(false) &&
                        //         setValue(routeDrawer.activeIndex)
                        //   )
                        // }
                      >
                        <ListItemIcon
                          disableRipple

                          // className={
                          //   value === routeDrawer.activeIndex
                          //     ? [classes.drawerItem, classes.drawerItemSelected]
                          //     : classes.drawerItem
                          // }
                        >
                          {routeDrawer.icon}
                        </ListItemIcon>
                        <ListItemText
                          disableRipple
                          className={
                            value === routeDrawer.activeIndex
                              ? [classes.drawerItem, classes.drawerItemSelected]
                              : classes.drawerItem
                          }
                          disableTypography
                        >
                          {routeDrawer.name}
                        </ListItemText>
                      </ListItem>
                      {index === 2
                        ? menuQuestions.map((option, i) => (
                            <ListItem
                              key={`${option} ${i}`}
                              component={Link}
                              to={option.link}
                              className={classes.nestedItem}
                              onClick={(event) => {
                                // handleDrawerQuestionClick(event, i);
                                setValue(5);
                                setOpenDrawer(false);
                              }}
                              // selected={i === selectedQuestionIndex}
                            >
                              {option.name}
                            </ListItem>
                          ))
                        : null}
                    </List>
                  ))}
                </Box>
              </Grid>
            </Hidden>

            {/***************  center container area **************/}

            <Grid container className={classes.centerContainer}>
              <Box display="flex" justifyContent="center">
                <Box boxShadow={4} width={689} className={classes.centerBox}>
                  <Box borderBottom={1} borderColor="grey.500">
                    <StyledTabs
                      className={classes.tabContainer}
                      value={1}
                      // value={value}
                      // onChange={handleChange}
                      // indicatorColor="secondary"
                      textColor="primary"
                    >
                      <StyledTab
                        className={classes.tab}
                        label="Recent Questions"
                      />
                      <StyledTab
                        className={classes.tab}
                        label="Most Answered"
                      />
                      <StyledTab
                        className={classes.tab}
                        label="Bump Question"
                      />
                      <StyledTab className={classes.tab} label="Answers" />
                      <StyledTab className={classes.tab} label="Most Visited" />
                      <IconButton
                        aria-label="display more actions"
                        edge="end"
                        color="inherit"
                        onClick={handleClick}
                      >
                        <MoreHorizIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>Most Voted</MenuItem>
                        <MenuItem onClick={handleClose}>No Answer</MenuItem>
                      </Menu>
                    </StyledTabs>
                  </Box>

                  {/************* First center starting Blog ****************/}

                  <section className={classes.section}>
                    <Box className={classes.centerTwo}>
                      <Box
                        display={"flex"}
                        container
                        borderBottom={1}
                        className={classes.innerTwo}
                      >
                        <Grid container direction="column" xs={2}>
                          <Grid container className={classes.martin}>
                            <Box
                              border={2}
                              width="2.5rem"
                              height="2.5rem"
                              borderRadius="50%"
                              padding="2px"
                            >
                              <Avatar alt="Martin Hope" src={teamTwo} />
                            </Box>
                          </Grid>

                          <Grid
                            item
                            display="block"
                            marginTop="3rem"
                            className={classes.itemIcon}
                          >
                            <ArrowDropUpIcon className={classes.aerrow} />
                            <Typography className={classes.num}>603</Typography>
                            <ArrowDropDownIcon className={classes.aerrow} />
                          </Grid>
                        </Grid>
                        <Grid container direction="column" sx={10}>
                          <Grid item className={classes.blogUp}>
                            <Grid item>
                              <Box item className={classes.quest}>
                                <Button
                                  classesName={classes.authorHope}
                                  color="secondary"
                                  marginRight="10px"
                                >
                                  Martin Hope
                                </Button>
                                <span
                                  variant="contained"
                                  className={classes.span}
                                >
                                  Enlightened
                                </span>
                              </Box>
                              <Typography
                                button
                                variant="h2"
                                className={classes.statement}
                              >
                                Is this statement, "i see him last night" can be
                                understood as "I saw him last night"?
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item className={classes.subtitle}>
                            <Typography variant="subtitle2">
                              "In my local language (Bahasa Indonesia) there are
                              no verb-2 or past tense form as time tracker. So,
                              I often forget to use the past form of verb when
                              speaking english. I saw him last night (correct) I
                              see him last night..."
                            </Typography>
                          </Grid>
                          <Grid>
                            <Button
                              size="small"
                              variant="outlined"
                              className={classes.btn}
                            >
                              English
                            </Button>
                            <Button
                              size="small"
                              variant="outlined"
                              className={classes.btn}
                            >
                              Language
                            </Button>
                          </Grid>
                          <Box container className={classes.footer}>
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<InsertCommentIcon />}
                              className={classes.buttenIcon}
                            >
                              3 Ansewrs
                            </Button>
                            <Box
                              border={1}
                              variant="contained"
                              display="flex"
                              className={classes.spanFoo}
                            >
                              {<ChildCareIcon />}
                              12k Views
                            </Box>
                            <Button
                              size="small"
                              variant="contained"
                              className={classes.lastBtn}
                            >
                              Answer
                            </Button>
                          </Box>
                        </Grid>
                      </Box>
                    </Box>
                  </section>
                </Box>
              </Box>
            </Grid>

            <Grid container className={classes.rightContainer}>
              <Box
                boxShadow={4}
                marginLeft={1.5}
                width={279}
                className={classes.rightBox}
              >
                Container Three right
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
