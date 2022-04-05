import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box, Button, Tabs } from "@material-ui/core";
import { ListItemIcon, Typography, Tooltip } from "@material-ui/core";
import { Tab, Grid, ListItemText } from "@material-ui/core";
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
import teamThree from "../../assets/team-7-42x42.jpg";
import teamFour from "../../assets/team-1-42x42.jpg";
import teamFive from "../../assets/team-4-42x42.jpg";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import RoomIcon from "@material-ui/icons/Room";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.transparent,
    // width: "100%",
    height: "232px",
    position: "relative",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      marginLeft: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
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
    // height: "232px",
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
    // marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      marginTop: "0px ",
      marginLeft: "0px",
    },
  },
  mainPic: {
    width: "100%",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
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
    // minHeight: "3147.200px",
    // position: "relative",
    // overflow: "visible",
    float: "left",
    display: "flex",
    boxSizing: "border-box",
    // minHeight: "1px",
  },
  leftBox: {
    marginTop: "2rem",
    width: "200",
  },
  centerContainer: {
    maxWidth: "691px",
    minHeight: "3147.200px",
    position: "relative",
    overflow: "visible",
    float: "center",
    display: "flex",
    boxSizing: "border-box",
    minHeight: "1px",
    // [theme.breakpoints.down("md")]: {
    //   position: "absolute",
    // },
  },

  tabContainer: {
    paddingLeft: "30px",
    paddingRight: "30px",
    minHeight: "55px",
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
  formControl: {
    margin: theme.spacing(0),
    minWidth: 380,
  },
  selectMenu: {
    "&:hover": {
      backgroundColor: "#33bfff",
    },
  },
  selectEmpty: {
    margin: theme.spacing(0),
  },
  section: {
    marginTop: "30px",
    maxHeight: "3037.200px",
    [theme.breakpoints.down("md")]: {
      marginTop: "0px",
    },
  },
  centerBox: {
    maxHeight: "2967.200px",
  },
  innerItem: {
    minHeight: "320.400px",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "30px",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "2rem",
    },
  },
  quest: {
    marginTop: "-10px",
    // width: "497px",
    height: "27px",
  },
  authorName: {
    color: "#3d5afe",
    textTransform: "none",
    marginLeft: "5px",
    "&:hover": {
      color: "#212121",
    },
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
  boldItem: {
    marginLeft: "2rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: "1.2rem",
    },
  },
  statement: {
    width: "100%",
    fontSize: "19px",
    lignHeight: "27px",
    marginTop: "5px",
    marginBottom: "1em",
    fontWeight: 900,
    marginLeft: "-5px",
    "&:hover": {
      color: "#3d5afe",
    },
  },
  gridContainer: {
    // width: "48px",
    height: "48px",
    [theme.breakpoints.down("md")]: {
      // direction: "row",
      // display: "contents",
      // height: "50px",
      // maxWidth: "480px",
      // xs: 12,
    },
  },
  martin: {
    marginBottom: "0rem",
    height: "3rem",
    // [theme.breakpoints.down("md")]: {
    //   marginTop: "10px",
    //   marginLeft: "20px",
    //   width: "48px",
    //   height: "48px",
    // },
  },
  // drawerItem: {
  //   ...theme.typography.tab,
  //   color: "black",
  //   paddingLeft: "0px",
  //   opacity: 0.7,
  // },
  // drawerItemSelected: {
  //   opacity: 1,
  //   color: "#3d5afe",
  // },
  // nestedItem: {
  //   // ...theme.typography.tab,
  //   paddingLeft: theme.spacing(6),
  //   color: "black",
  //   opacity: 0.7,
  // },
  // box: {
  //   border: "1px",
  //   borderColor: "text.primary",
  //   width: "5rem",
  //   height: "5rem",
  // },

  avtarBox: {
    justifyContent: "center",
    display: "flex",
    marginTop: "1rem",
  },
  tooltipList: {
    lineHeight: "0px",
  },
  tooltipBox: {
    backgroundColor: "#efebe9",
    color: "#424242",
    margin: "1rem",
    padding: "10px",
    fontSize: "12px",
  },

  insideBtn: {
    textTransform: "none",
    backgroundColor: "transparent",
    "&:hover": {
      color: "#3d5afe",
    },
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
  // tooltip: {
  //   backgroundColor: theme.palette.common.white,
  // },

  roomIcon: {
    width: "35px",
    height: "15px",
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    // align: "center",
  },

  itemArrow: {
    marginTop: "-2rem",
    display: "block",
    maxHeight: "100%",
    [theme.breakpoints.down("md")]: {
      // marginTop: "-1rem",
      marginLeft: "1rem",
    },
  },
  aerrow: {
    width: "3em",
    height: "3em",
    marginLeft: "-20px",
    [theme.breakpoints.down("md")]: {
      width: "2rem",
      height: "2rem",
      marginLeft: "1rem",
      paddingTop: "10px",
    },
    "&:hover": {
      color: "#3d5afe",
    },
  },

  num: {
    fontSize: "20px",
    marginLeft: "-3px",
    fontWeight: 900,
    lineHeight: 0.2,
    [theme.breakpoints.down("md")]: {
      marginLeft: "15px",
      fontWeight: 400,
    },
  },
  btn: {
    marginRight: "1rem",
    textTransform: "none",
    marginTop: "2rem",
    marginBottom: "2rem",
    "&:hover": {
      backgroundColor: "#3d5afe",
    },
  },
  footer: {
    padding: "15px",
    maxWidth: "533px",
    height: "31.4px",
    display: "flex",
    backgroundColor: "#e0f2f1",
    [theme.breakpoints.down("md")]: {
      backgroundColor: "transparent",
    },
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
    marginLeft: "auto",
    backgroundColor: "#212121",
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#3d5afe",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
    },
  },

  // blogUp: {
  //   maxWidth: "563px",
  //   height: "96px",
  // },
  // questionHeader: {
  //   display: "flex",
  // },

  // [theme.breakpoints.down("md")]: {
  //   marginTop: "50px",
  //   width: "100%",
  // },

  // subtitle: {
  //   marginTop: "1rem",
  //   marginBottom: "1rem",
  // },

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

  // testItem: {
  //   position: "absolute",
  //   direction: "row",
  //   [theme.breakpoints.down("sm")]: {
  //     direction: "column",
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
  const [newValue, setNewValue] = useState("");
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
  const handleClickChange = (event) => {
    setNewValue(event.target.value);
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
                  // marginTop={"2em"}
                  // width={200}
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
            {/***************  center container area ****************/}

            <Grid item className={classes.centerContainer}>
              <Box
                boxShadow={4}
                maxWidth="689px"
                height="3147.2px"
                className={classes.centerBox}
              >
                <Hidden mdDown>
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
                </Hidden>
                <Hidden mdUp>
                  <Box
                    boxShadow={0}
                    border={1}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    pl={2}
                    display="absolute"
                    marginLeft="2rem"
                    marginRight="2rem"
                  >
                    <FormControl className={classes.formControl}>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={newValue}
                        onChange={handleClickChange}
                        label="NewValue"
                      >
                        <MenuItem
                          component={Link}
                          to="/recent-questions"
                          value="recent-question"
                          className={classes.selectMenu}
                        >
                          Recent Question
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/most-answered"
                          value="most-answered"
                          className={classes.selectMenu}
                        >
                          Most Answered
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/bump-question"
                          value="bump-question"
                          className={classes.selectMenu}
                        >
                          Bump Question
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/answers"
                          value="answers"
                          className={classes.selectMenu}
                        >
                          Answers
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/most-visited"
                          value="most-visited"
                          className={classes.selectMenu}
                        >
                          Most Visited
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/most-answered"
                          value="most-voted"
                          className={classes.selectMenu}
                        >
                          Most Voted
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/no-answers"
                          value="no-answers"
                          className={classes.selectMenu}
                        >
                          No Answers
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Hidden>

                {/************* First center starting Blog ****************/}

                <section className={classes.section}>
                  {/* ***-------First Container start------*** */}
                  <Box container borderBottom={1} className={classes.innerItem}>
                    <Grid container>
                      <Box item>
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
                                <Box item className={classes.tooltipList}>
                                  <Button className={classes.authorName}>
                                    Martin Hope
                                  </Button>
                                  <Typography
                                    variant="subtitle2"
                                    className={classes.avtarBox}
                                  >
                                    <RoomIcon className={classes.roomIcon} />
                                    Damita, Egypt
                                  </Typography>
                                </Box>
                              </Box>
                              <Box
                                container
                                direction="column"
                                className={classes.tooltipBox}
                              >
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <MenuBookIcon
                                      className={classes.roomIcon}
                                    />
                                    3 Questions
                                  </Button>
                                </Box>
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <InsertCommentIcon
                                      className={classes.roomIcon}
                                    />
                                    0 Answers
                                  </Button>
                                </Box>
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <HowToRegIcon
                                      className={classes.roomIcon}
                                    />
                                    0 Best Answers
                                  </Button>
                                </Box>
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <AssignmentReturnedIcon
                                      className={classes.roomIcon}
                                    />
                                    756 Points
                                  </Button>
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
                            item
                            border={2}
                            marginLeft="-5px"
                            width="2.5rem"
                            height="2.5rem"
                            borderRadius="50%"
                            padding="2px"
                          >
                            <Avatar alt="Martin Hope" src={teamTwo} />
                          </Box>
                        </StyleTooltip>

                        {/* ************ Tooltip area End ********** */}
                      </Box>
                      <Hidden mdUp>
                        <Grid className={classes.itemArrow}>
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
                        <Box container marginLeft={2} className={classes.quest}>
                          <Button className={classes.authorName}>
                            Martin Hope
                          </Button>
                          <span variant="contained" className={classes.span}>
                            Enlightened
                          </span>
                        </Box>
                      </Hidden>

                      <Grid item xs={12} sm={11}>
                        <Hidden mdDown>
                          <Box
                            container
                            marginLeft={2}
                            className={classes.quest}
                          >
                            <Button className={classes.authorName}>
                              Martin Hope
                            </Button>
                            <span variant="contained" className={classes.span}>
                              Enlightened
                            </span>
                          </Box>
                        </Hidden>
                        <Box className={classes.boldItem}>
                          <Typography
                            button
                            variant="h4"
                            className={classes.statement}
                          >
                            Is this statement, "i see him last night" can be
                            understood as "I saw him last night"?
                          </Typography>
                        </Box>
                      </Grid>
                      <Hidden mdDown>
                        <Grid>
                          <Grid className={classes.itemArrow}>
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
                      </Hidden>

                      <Grid xs={12} sm={11}>
                        <Box marginLeft={2} item className={classes.subtitle}>
                          <Typography variant="subtitle2">
                            In my local language (Bahasa Indonesia) there are no
                            verb-2 or past tense form as time tracker. So, I
                            often forget to use the past form of verb when
                            speaking english. I saw him last night (correct) I
                            see him last night...
                          </Typography>
                          <Grid>
                            <Button
                              size="small"
                              variant="outlined"
                              className={classes.btn}
                            >
                              english
                            </Button>
                            <Button
                              size="small"
                              variant="outlined"
                              className={classes.btn}
                            >
                              language
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
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* ***-------First Container End------*** */}

                  {/* ***-------Second Container start------*** */}
                  <Box container borderBottom={1} className={classes.innerItem}>
                    <Grid container>
                      <Box item>
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
                                    alt="Ahmed Hassan"
                                    src={teamThree}
                                    className={classes.large}
                                  />
                                </Box>
                              </Box>
                              <Box
                                container
                                direction="column"
                                className={classes.avtarBox}
                              >
                                <Box item className={classes.tooltipList}>
                                  <Grid item style={{ marginLeft: "5em" }}>
                                    <Button
                                      marginLeft="5rem"
                                      className={classes.authorName}
                                    >
                                      Ahmed Hassan
                                    </Button>
                                  </Grid>
                                  <Typography
                                    variant="body2"
                                    className={classes.avtarBox}
                                  >
                                    Software Developer at HCL Technologies
                                  </Typography>
                                </Box>
                              </Box>
                              <Box
                                container
                                direction="column"
                                className={classes.tooltipBox}
                              >
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <MenuBookIcon
                                      className={classes.roomIcon}
                                    />
                                    0 Questions
                                  </Button>
                                </Box>
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <InsertCommentIcon
                                      className={classes.roomIcon}
                                    />
                                    9 Answers
                                  </Button>
                                </Box>
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <HowToRegIcon
                                      className={classes.roomIcon}
                                    />
                                    5 Best Answers
                                  </Button>
                                </Box>
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <AssignmentReturnedIcon
                                      className={classes.roomIcon}
                                    />
                                    487 Points
                                  </Button>
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
                            item
                            border={2}
                            marginLeft="-5px"
                            width="2.5rem"
                            height="2.5rem"
                            borderRadius="50%"
                            padding="2px"
                          >
                            <Avatar alt="Ahmed Hassan" src={teamThree} />
                          </Box>
                        </StyleTooltip>

                        {/* ************ Tooltip area End ********** */}
                      </Box>
                      <Hidden mdUp>
                        <Grid className={classes.itemArrow}>
                          <ArrowDropUpIcon
                            className={classes.aerrow}
                            onClick={increment}
                          />
                          <Typography className={classes.num}>
                            {235 + number}
                          </Typography>
                          <ArrowDropDownIcon
                            className={classes.aerrow}
                            onClick={decrement}
                          />
                        </Grid>
                        <Box container marginLeft={2} className={classes.quest}>
                          <Button className={classes.authorName}>
                            Ahmed Hassan
                          </Button>
                          <span variant="contained" className={classes.span}>
                            Enlightened
                          </span>
                        </Box>
                      </Hidden>

                      <Grid item xs={12} sm={11}>
                        <Hidden mdDown>
                          <Box
                            container
                            marginLeft={2}
                            className={classes.quest}
                          >
                            <Button className={classes.authorName}>
                              Ahmed Hassan
                            </Button>
                            <span variant="contained" className={classes.span}>
                              Enlightened
                            </span>
                          </Box>
                        </Hidden>
                        <Box className={classes.boldItem}>
                          <Typography
                            button
                            variant="h4"
                            className={classes.statement}
                          >
                            How do native speakers tell I'm foreign based on my
                            English alone?
                          </Typography>
                        </Box>
                      </Grid>
                      <Hidden mdDown>
                        <Grid>
                          <Grid className={classes.itemArrow}>
                            <ArrowDropUpIcon
                              className={classes.aerrow}
                              onClick={increment}
                            />
                            <Typography className={classes.num}>
                              {235 + number}
                            </Typography>
                            <ArrowDropDownIcon
                              className={classes.aerrow}
                              onClick={decrement}
                            />
                          </Grid>
                        </Grid>
                      </Hidden>

                      <Grid xs={12} sm={11}>
                        <Box marginLeft={2} item className={classes.subtitle}>
                          <Typography variant="subtitle2">
                            I'm a 19-year-old student from Malaysia. I've been
                            introduced to the language at a very young age and
                            I'm capable of conducting any type of conversation.
                            However, some of my English-speaking friends on the
                            internet didn't take too long to ...
                          </Typography>
                          <Grid>
                            <Button
                              size="small"
                              variant="outlined"
                              className={classes.btn}
                            >
                              english
                            </Button>
                          </Grid>

                          <Box container className={classes.footer}>
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<InsertCommentIcon />}
                              className={classes.buttenIcon}
                            >
                              6 Ansewrs
                            </Button>
                            <Box
                              border={1}
                              variant="contained"
                              display="flex"
                              className={classes.spanFoo}
                            >
                              {<ChildCareIcon />}
                              3k Views
                            </Box>
                            <Button
                              size="small"
                              variant="contained"
                              className={classes.lastBtn}
                            >
                              Answer
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* ***-------Second Container End------*** */}

                  {/* ***-------Third Container start------*** */}
                  <Box container borderBottom={1} className={classes.innerItem}>
                    <Grid container>
                      <Box item>
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
                                    alt="Aaron Aiken"
                                    src={teamFour}
                                    className={classes.large}
                                  />
                                </Box>
                              </Box>
                              <Box
                                container
                                direction="column"
                                className={classes.avtarBox}
                              >
                                <Box item className={classes.tooltipList}>
                                  <Grid item style={{ marginLeft: "0em" }}>
                                    <Button
                                      style={{ marginLeft: "1em" }}
                                      className={classes.authorName}
                                    >
                                      Aaron Aiken
                                    </Button>
                                  </Grid>
                                  <Typography
                                    variant="body2"
                                    className={classes.avtarBox}
                                  >
                                    <RoomIcon className={classes.roomIcon} />
                                    Cairo, Egypt
                                  </Typography>
                                </Box>
                              </Box>
                              <Box
                                container
                                direction="column"
                                className={classes.tooltipBox}
                              >
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <MenuBookIcon
                                      className={classes.roomIcon}
                                    />
                                    0 Questions
                                  </Button>
                                </Box>
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <InsertCommentIcon
                                      className={classes.roomIcon}
                                    />
                                    10 Answers
                                  </Button>
                                </Box>
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <HowToRegIcon
                                      className={classes.roomIcon}
                                    />
                                    0 Best Answers
                                  </Button>
                                </Box>
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <AssignmentReturnedIcon
                                      className={classes.roomIcon}
                                    />
                                    13 Points
                                  </Button>
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
                            item
                            border={2}
                            marginLeft="-5px"
                            width="2.5rem"
                            height="2.5rem"
                            borderRadius="50%"
                            padding="2px"
                          >
                            <Avatar alt="Aaron Aiken" src={teamFour} />
                          </Box>
                        </StyleTooltip>

                        {/* ************ Tooltip area End ********** */}
                      </Box>
                      <Hidden mdUp>
                        <Grid className={classes.itemArrow}>
                          <ArrowDropUpIcon
                            className={classes.aerrow}
                            onClick={increment}
                          />
                          <Typography className={classes.num}>
                            {140 + number}
                          </Typography>
                          <ArrowDropDownIcon
                            className={classes.aerrow}
                            onClick={decrement}
                          />
                        </Grid>
                        <Box container marginLeft={2} className={classes.quest}>
                          <Button className={classes.authorName}>
                            Aaron Aiken
                          </Button>
                          <span variant="contained" className={classes.span}>
                            Beginner
                          </span>
                        </Box>
                      </Hidden>

                      <Grid item xs={12} sm={11}>
                        <Hidden mdDown>
                          <Box
                            container
                            marginLeft={2}
                            className={classes.quest}
                          >
                            <Button className={classes.authorName}>
                              Aaron Aken
                            </Button>
                            <span variant="contained" className={classes.span}>
                              Beginner
                            </span>
                          </Box>
                        </Hidden>
                        <Box className={classes.boldItem}>
                          <Typography
                            button
                            variant="h4"
                            className={classes.statement}
                          >
                            Why are the British confused about us calling bread
                            rolls "biscuit" when they call bread rolls
                            "puddings"?
                          </Typography>
                        </Box>
                      </Grid>
                      <Hidden mdDown>
                        <Grid>
                          <Grid className={classes.itemArrow}>
                            <ArrowDropUpIcon
                              className={classes.aerrow}
                              onClick={increment}
                            />
                            <Typography className={classes.num}>
                              {140 + number}
                            </Typography>
                            <ArrowDropDownIcon
                              className={classes.aerrow}
                              onClick={decrement}
                            />
                          </Grid>
                        </Grid>
                      </Hidden>

                      <Grid xs={12} sm={11}>
                        <Box marginLeft={2} item className={classes.subtitle}>
                          <Typography variant="subtitle2">
                            (Why I darest say, they darest not get offended when
                            they so indeed have examples that violate their own
                            use and nomenclature!) IE: pudding as a specific
                            dessert, puddings as a general term for desserts.
                            Calling something a Yorkshire pudding ...
                          </Typography>
                          <Grid>
                            <Button
                              size="small"
                              variant="outlined"
                              className={classes.btn}
                            >
                              british
                            </Button>
                            <Button
                              size="small"
                              variant="outlined"
                              className={classes.btn}
                            >
                              english
                            </Button>
                          </Grid>

                          <Box container className={classes.footer}>
                            <Button
                              size="small"
                              variant="outlined"
                              color="secondary"
                              startIcon={<InsertCommentIcon />}
                              className={classes.buttenIcon}
                            >
                              5 Ansewrs
                            </Button>
                            <Box
                              border={1}
                              variant="contained"
                              display="flex"
                              className={classes.spanFoo}
                            >
                              {<ChildCareIcon />}
                              2k Views
                            </Box>
                            <Button
                              size="small"
                              variant="contained"
                              className={classes.lastBtn}
                            >
                              Answer
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* ***-------Third Container End------*** */}

                  {/* ***-------Four Container start------*** */}
                  <Box container borderBottom={1} className={classes.innerItem}>
                    <Grid container>
                      <Box item>
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
                                    alt="Marko Smith"
                                    src={teamFive}
                                    className={classes.large}
                                  />
                                </Box>
                              </Box>
                              <Box
                                container
                                direction="column"
                                className={classes.avtarBox}
                              >
                                <Box item className={classes.tooltipList}>
                                  <Grid item style={{ marginLeft: "0em" }}>
                                    <Button
                                      style={{ marginLeft: "1em" }}
                                      className={classes.authorName}
                                    >
                                      Marko Smith
                                    </Button>
                                  </Grid>
                                  <Typography
                                    variant="body2"
                                    className={classes.avtarBox}
                                  >
                                    <RoomIcon className={classes.roomIcon} />
                                    Cairo, Egypt
                                  </Typography>
                                </Box>
                              </Box>
                              <Box
                                container
                                direction="column"
                                className={classes.tooltipBox}
                              >
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <MenuBookIcon
                                      className={classes.roomIcon}
                                    />
                                    3 Questions
                                  </Button>
                                </Box>
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <InsertCommentIcon
                                      className={classes.roomIcon}
                                    />
                                    0 Answers
                                  </Button>
                                </Box>
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <HowToRegIcon
                                      className={classes.roomIcon}
                                    />
                                    3 Best Answers
                                  </Button>
                                </Box>
                                <Box item>
                                  <Button className={classes.insideBtn}>
                                    <AssignmentReturnedIcon
                                      className={classes.roomIcon}
                                    />
                                    399 Points
                                  </Button>
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
                            item
                            border={2}
                            marginLeft="-5px"
                            width="2.5rem"
                            height="2.5rem"
                            borderRadius="50%"
                            padding="2px"
                          >
                            <Avatar alt="Marko Smith" src={teamFive} />
                          </Box>
                        </StyleTooltip>

                        {/* ************ Tooltip area End ********** */}
                      </Box>
                      <Hidden mdUp>
                        <Grid className={classes.itemArrow}>
                          <ArrowDropUpIcon
                            className={classes.aerrow}
                            onClick={increment}
                          />
                          <Typography className={classes.num}>
                            {51 + number}
                          </Typography>
                          <ArrowDropDownIcon
                            className={classes.aerrow}
                            onClick={decrement}
                          />
                        </Grid>
                        <Box container marginLeft={2} className={classes.quest}>
                          <Button className={classes.authorName}>
                            Marko Smith
                          </Button>
                          <span variant="contained" className={classes.span}>
                            Enlightened
                          </span>
                        </Box>
                      </Hidden>

                      <Grid item xs={12} sm={11}>
                        <Hidden mdDown>
                          <Box
                            container
                            marginLeft={2}
                            className={classes.quest}
                          >
                            <Button className={classes.authorName}>
                              Marko Smith
                            </Button>
                            <span variant="contained" className={classes.span}>
                              Enlightened
                            </span>
                          </Box>
                        </Hidden>
                        <Box className={classes.boldItem}>
                          <Typography
                            button
                            variant="h4"
                            style={{ paddingTop: "5px" }}
                            className={classes.statement}
                          >
                            Google Analytic reads like a seismic chart lately
                          </Typography>
                        </Box>
                      </Grid>
                      <Hidden mdDown>
                        <Grid>
                          <Grid className={classes.itemArrow}>
                            <ArrowDropUpIcon
                              className={classes.aerrow}
                              onClick={increment}
                            />
                            <Typography
                              style={{ paddingLeft: "5px" }}
                              className={classes.num}
                            >
                              {51 + number}
                            </Typography>
                            <ArrowDropDownIcon
                              className={classes.aerrow}
                              onClick={decrement}
                            />
                          </Grid>
                        </Grid>
                      </Hidden>

                      <Grid xs={12} sm={11}>
                        <Box marginLeft={2} item className={classes.subtitle}>
                          <Typography
                            variant="subtitle2"
                            style={{ paddingTop: "5px" }}
                          >
                            Anyone else seeing dramatic ranking shakeups lately?
                            Thankfully, this client is the blue line, but that's
                            a serious drop and recovery. We don't operate at all
                            in the black hat world, so our links and content
                            should be in good shape. ...
                          </Typography>
                          <Grid>
                            <Button
                              size="small"
                              variant="outlined"
                              className={classes.btn}
                            >
                              analytics
                            </Button>
                            <Button
                              size="small"
                              variant="outlined"
                              className={classes.btn}
                            >
                              google
                            </Button>
                          </Grid>

                          <Box container className={classes.footer}>
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<InsertCommentIcon />}
                              className={classes.buttenIcon}
                            >
                              2 Ansewrs
                            </Button>
                            <Box
                              border={1}
                              variant="contained"
                              display="flex"
                              className={classes.spanFoo}
                            >
                              {<ChildCareIcon />}
                              1k Views
                            </Box>
                            <Button
                              size="small"
                              variant="contained"
                              className={classes.lastBtn}
                            >
                              Answer
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* ***-------Four Container End------*** */}
                </section>
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
