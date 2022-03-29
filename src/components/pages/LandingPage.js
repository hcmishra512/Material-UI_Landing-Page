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
  Tooltip,
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
import RoomIcon from "@material-ui/icons/Room";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";

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
    color: "#3d5afe",
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
  avtarBox: {
    justifyContent: "center",
    display: "flex",
    marginTop: "1rem",
  },
  tooltipBox: {
    backgroundColor: "#efebe9",
    color: "#424242",
    margin: "1rem",
    padding: "10px",
    fontSize: "12px",
  },
  tooltipItem: {
    padding: "4px",
  },
  tooltipBtn: {
    margin: "15px",
    backgroundColor: "#3d5afe",
    paddingLeft: "4.3rem",
    paddingRight: "4.3rem",
    color: "#fafafa",
    "&:hover": {
      backgroundColor: "#ef5350",
    },
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
  },

  roomIcon: {
    width: "15px",
    height: "12px",
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    // align: "center",
  },

  itemIcom: {
    paddingTop: "3rem",
    paddingLeft: "5px",
    fontSize: "large",
  },
  aerrow: {
    width: "3rem",
    height: "3rem",
    "&:hover": {
      color: "#3d5afe",
    },
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
    color: "#3d5afe",
    textTransform: "none",
    marginRight: "10px",
    "&:hover": {
      color: "#212121",
    },
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
      color: "#3d5afe",
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
      backgroundColor: "#3d5afe",
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
      backgroundColor: "#3d5afe",
    },
  },
  rightContainer: {
    width: "279px",
    minHeight: "3147.200px",
    position: "relative",
    overflow: "visible",
    // float: "rigth",
    display: "flex",
    boxSizing: "border-box",
    minHeight: "1px",
    // [theme.breakpoints.down("md")]: {
    //   xs: 12,
    // },
  },

  tab: {
    fontFamily: "Robodo",
    display: "absolute",
    textTransform: "none",
    fontWeight: "900",
    fontSize: "0.95rem",
    minWidth: "0px",
    marginLeft: "-10px",
  },
  // itemIcon: {
  //   display: "block",
  //   marginTop: "3rem",
  //   [theme.breakpoints.down("md")]: {
  //     // display: "flex",
  //     direction: "row",
  //     marginTop: "0rem",
  //     marginLeft: "3rem",
  //   },
  // },
  // smallContainer: {
  //   direction: "column",
  //   xs: 2,
  //   [theme.breakpoints.down("md")]: {
  //     direction: "column",
  //     display: "contents",
  //     height: "70px",
  //     minWidth: "320px",
  //     xs: 12,
  //   },
  // },
}));

const StyleTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 280,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #283593",
    borderRadius: "10px",
  },
}))(Tooltip);

const message = "Sorry, you cannot vote the same question more then once.";

export default function LandingPage(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(0);
  const [number, setNumber] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (e, value) => {
    setValue(value);
  };
  const handleQuestionClick = (e, i) => {
    setQuestionIndex(i);
  };

  const increment = () => {
    if (number <= 2) {
      setNumber(number + 1);
    } else {
      alert(message);
      setNumber(2);
    }
  };
  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      alert(message);
      setNumber(0);
    }
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
                        onClick={() => setValue(routeDrawer.activeIndex)}
                      >
                        <ListItemIcon
                          disableRipple
                          className={
                            value === routeDrawer.activeIndex
                              ? [classes.drawerItem, classes.drawerItemSelected]
                              : classes.drawerItem
                          }
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
                                handleQuestionClick(event, i);
                                setValue(5);
                                // setOpenDrawer(false);
                              }}
                              selected={i === questionIndex}
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
                    <Tabs
                      disableRipple
                      className={classes.tabContainer}
                      value={value}
                      onChange={handleChange}
                      textColor="primary"
                    >
                      <Tab
                        className={classes.tab}
                        component={Link}
                        to="/recent-questions"
                        label="Recent Questions"
                      />
                      <Tab
                        className={classes.tab}
                        component={Link}
                        to="/most-answered"
                        label="Most Answered"
                      />
                      <Tab
                        className={classes.tab}
                        component={Link}
                        to="/bump-question"
                        label="Bump Question"
                      />
                      <Tab
                        className={classes.tab}
                        component={Link}
                        to="/answers"
                        label="Answers"
                      />
                      <Tab
                        className={classes.tab}
                        component={Link}
                        to="/most-visited"
                        label="Most Visited"
                      />

                      <IconButton
                        aria-owns={anchorEl ? "sample-menu" : undefined}
                        area-haspopup={anchorEl ? "true" : undefined}
                        className={classes.tab}
                        component={Link}
                        onMouseOver={(event) => handleClick(event)}
                      >
                        <MoreHorizIcon />
                      </IconButton>

                      <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        MenuListProps={{ onMouseLeave: handleClose }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleClose();
                            setValue(5);
                          }}
                          className={classes.tab}
                          component={Link}
                          to="/most-voted"
                        >
                          Most Voted
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClose();
                            setValue(5);
                          }}
                          className={classes.tab}
                          component={Link}
                          to="/no-answer"
                        >
                          No Answer
                        </MenuItem>
                      </Menu>
                    </Tabs>
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
                        <Grid
                          container
                          direction="column"
                          xs={2}
                          className={classes.smallContainer}
                        >
                          <Grid container className={classes.martin}>
                            {/* *************Tooltip Area start************** */}
                            <StyleTooltip
                              title={
                                <React.Fragment>
                                  <Box
                                    item
                                    display="flex"
                                    className={classes.avtarBox}
                                  >
                                    <Box
                                      item
                                      border={2}
                                      width="4.5rem"
                                      height="4.5rem"
                                      borderRadius="50%"
                                      color="#3d5afe"
                                      padding="2px"
                                    >
                                      <Avatar
                                        alt="Martin Hope"
                                        src={teamTwo}
                                        className={classes.large}
                                      />
                                    </Box>
                                  </Box>
                                  <Box
                                    container
                                    direction="column"
                                    className={classes.avtarBox}
                                  >
                                    <Box item>
                                      <Button className={classes.authorHope}>
                                        Martin Hope
                                      </Button>
                                      <h2 className={classes.avtarBox}>
                                        <RoomIcon
                                          className={classes.roomIcon}
                                        />
                                        Damita, Egypt
                                      </h2>
                                    </Box>
                                  </Box>
                                  <Box
                                    container
                                    direction="column"
                                    className={classes.tooltipBox}
                                  >
                                    <Box item className={classes.tooltipItem}>
                                      <MenuBookIcon
                                        className={classes.roomIcon}
                                      />
                                      3 Questions
                                    </Box>
                                    <Box item className={classes.tooltipItem}>
                                      <InsertCommentIcon
                                        className={classes.roomIcon}
                                      />
                                      0 Answers
                                    </Box>
                                    <Box item className={classes.tooltipItem}>
                                      <HowToRegIcon
                                        className={classes.roomIcon}
                                      />
                                      0 Best Answers
                                    </Box>
                                    <Box item className={classes.tooltipItem}>
                                      <AssignmentReturnedIcon
                                        className={classes.roomIcon}
                                      />
                                      756 Points
                                    </Box>
                                  </Box>

                                  <Button
                                    variant="Contained"
                                    className={classes.tooltipBtn}
                                  >
                                    View Profile
                                  </Button>
                                </React.Fragment>
                              }
                              Add
                              arrow
                              interactive
                            >
                              <Box
                                border={2}
                                width="2.5rem"
                                height="2.5rem"
                                borderRadius="50%"
                                padding="2px"
                              >
                                <Avatar alt="Martin Hope" src={teamTwo} />
                              </Box>
                            </StyleTooltip>

                            {/* ************ Tooltip area End ********** */}
                          </Grid>

                          <Grid
                            item
                            display="block"
                            marginTop="3rem"
                            className={classes.itemIcon}
                          >
                            <ArrowDropUpIcon
                              className={classes.aerrow}
                              onClick={increment}
                            />
                            <Typography className={classes.num}>
                              {603 + number}
                            </Typography>
                            <ArrowDropDownIcon
                              className={classes.aerrow}
                              onClick={decrement}
                            />
                          </Grid>
                        </Grid>
                        <Grid container direction="column" sx={10}>
                          <Grid item className={classes.blogUp}>
                            <Grid item>
                              <Box item className={classes.quest}>
                                <Button className={classes.authorHope}>
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

                      {/************* First center End Blog ****************/}

                      {/************* Second center starting Blog ****************/}

                      <Box
                        display={"flex"}
                        container
                        borderBottom={1}
                        className={classes.innerTwo}
                      >
                        <Grid container direction="column" xs={2}>
                          <Grid container className={classes.martin}>
                            {/* *************Tooltip Area start************** */}
                            <StyleTooltip
                              title={
                                <React.Fragment>
                                  <Box
                                    item
                                    display="flex"
                                    className={classes.avtarBox}
                                  >
                                    <Box
                                      item
                                      border={2}
                                      width="4.5rem"
                                      height="4.5rem"
                                      borderRadius="50%"
                                      color="#3d5afe"
                                      padding="2px"
                                    >
                                      <Avatar
                                        alt="Martin Hope"
                                        src={teamTwo}
                                        className={classes.large}
                                      />
                                    </Box>
                                  </Box>
                                  <Box
                                    container
                                    direction="column"
                                    className={classes.avtarBox}
                                  >
                                    <Box item>
                                      <Button className={classes.authorHope}>
                                        Martin Hope
                                      </Button>
                                      <h2 className={classes.avtarBox}>
                                        <RoomIcon
                                          className={classes.roomIcon}
                                        />
                                        Damita, Egypt
                                      </h2>
                                    </Box>
                                  </Box>
                                  <Box
                                    container
                                    direction="column"
                                    className={classes.tooltipBox}
                                  >
                                    <Box item className={classes.tooltipItem}>
                                      <MenuBookIcon
                                        className={classes.roomIcon}
                                      />
                                      3 Questions
                                    </Box>
                                    <Box item className={classes.tooltipItem}>
                                      <InsertCommentIcon
                                        className={classes.roomIcon}
                                      />
                                      0 Answers
                                    </Box>
                                    <Box item className={classes.tooltipItem}>
                                      <HowToRegIcon
                                        className={classes.roomIcon}
                                      />
                                      0 Best Answers
                                    </Box>
                                    <Box item className={classes.tooltipItem}>
                                      <AssignmentReturnedIcon
                                        className={classes.roomIcon}
                                      />
                                      756 Points
                                    </Box>
                                  </Box>

                                  <Button
                                    variant="Contained"
                                    className={classes.tooltipBtn}
                                  >
                                    View Profile
                                  </Button>
                                </React.Fragment>
                              }
                              Add
                              arrow
                              interactive
                            >
                              <Box
                                border={2}
                                width="2.5rem"
                                height="2.5rem"
                                borderRadius="50%"
                                padding="2px"
                              >
                                <Avatar alt="Martin Hope" src={teamTwo} />
                              </Box>
                            </StyleTooltip>

                            {/* ************ Tooltip area End ********** */}
                          </Grid>

                          <Grid
                            item
                            // display="block"
                            // marginTop="3rem"
                            className={classes.itemIcon}
                          >
                            <ArrowDropUpIcon
                              className={classes.aerrow}
                              onClick={increment}
                            />
                            <Typography className={classes.num}>
                              {603 + number}
                            </Typography>
                            <ArrowDropDownIcon
                              className={classes.aerrow}
                              onClick={decrement}
                            />
                          </Grid>
                        </Grid>
                        <Grid container direction="column" sx={10}>
                          <Grid item className={classes.blogUp}>
                            <Grid item>
                              <Box item className={classes.quest}>
                                <Button className={classes.authorHope}>
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
                      {/************* Second center End Blog ****************/}
                    </Box>
                  </section>
                </Box>
              </Box>
            </Grid>
            {/* **********Right side third container area********** */}
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
