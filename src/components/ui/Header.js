import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Collapse,
  Grid,
} from "@material-ui/core";
import { makeStyles, alpha, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import DehazeIcon from "@material-ui/icons/Dehaze";
import LockIcon from "@material-ui/icons/Lock";
import ClearIcon from "@material-ui/icons/Clear";
import HomeIcon from "@material-ui/icons/Home";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded";
import GroupIcon from "@material-ui/icons/Group";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    morginBottom: "2em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
  },
  logo: {
    height: "3em",
    [theme.breakpoints.down("md")]: {
      align: "center",
    },
  },
  logoContainer: {
    paddingTop: " 20px",
    paddingBottom: "20px",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "130px",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#000000",
      height: "20px",
    },
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "2px",
    marginLeft: "20px",
    marginRight: "20px",
    height: "2rem",
    width: "8em",
    paddingLeft: "25px",
    paddingRight: "25px",

    "&:hover": {
      backgroundColor: "rgb(251, 105, 98)",
    },
  },
  root: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
  contain: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "174.6px",
      marginRight: "174.6px",
    },
  },

  search: {
    position: "relative",
    paddingLeft: "5px",
    color: "white",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,

    width: "100%",
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 18),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  minuIcon: {
    height: "30px",
    width: "30px",
    marginRight: "auto",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&: hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    // backgroundColor: theme.palette.common.blue,
    width: "350px",
  },
  drawerButton: {
    paddingLeft: theme.spacing(9.4),
    paddingRight: theme.spacing(9.4),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: "white",
    backgroundColor: "#03a9f4",
    textTransform: "none",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "black",
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
    color: "#03a9f4",
  },
  lockIcon: {
    height: "30px",
    width: "30px",
  },
  lockContainer: {
    marginLeft: "auto",
    "&: hover": {
      backgroundColor: "transparent",
    },
  },
  listItem: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  nestedItem: {
    ...theme.typography.tab,
    paddingLeft: theme.spacing(9),
    color: "black",
    opacity: 0.7,
  },
  arrowIcon: {
    marginLeft: theme.spacing(20),
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setOpenQuestion(!openQuestion);
  };

  const handleDrawerQuestionClick = (e, i) => {
    setSelectedQuestionIndex(i);
  };

  const menuQuestions = [
    {
      name: "New Questions",
      link: "/?show=recent-questions",
      activeIndex: 11,
      selectedQuestionIndex: 0,
    },
    {
      name: "Trending Questions",
      link: "/?show=most-voted",
      activeIndex: 11,
      selectedQuestionIndex: 1,
    },
    {
      name: "Must read Questions",
      link: "/?show=most-visited",
      activeIndex: 11,
      selectedQuestionIndex: 2,
    },
    {
      name: "Hot Questions",
      link: "/?show=most-answered",
      activeIndex: 11,
      selectedQuestionIndex: 3,
    },
  ];

  const routeApps = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "About Us", link: "/about-us", activeIndex: 1 },
    { name: "Blog", link: "/blog", activeIndex: 2 },
    { name: "Contact Us", link: "/contact-us", activeIndex: 3 },
  ];

  const routeDrawers = [
    { name: "Home", Link: "/", activeIndex: 0 },
    { name: "Communities", link: "/communities", activeIndex: 4 },
    { name: "Group", link: "/group-page", activeIndex: 5 },
    { name: "Add group", link: "/add-group", activeIndex: 6 },
    { name: "Tags", link: "/tags", activeIndex: 7 },
    { name: "Badges", link: "/badges", activeIndex: 8 },
    { name: "Users", link: "/users", activeIndex: 9 },
    { name: "Help", link: "/faqs", activeIndex: 10 },
    { name: "Polls", link: "/question/polls", activeIndex: 10 },
  ];

  useEffect(() => {
    [...menuQuestions, ...routeApps].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (
              route.selectedQuestionIndex &&
              route.selectedQuestionIndex !== selectedQuestionIndex
            ) {
              setSelectedQuestionIndex(route.selectedQuestionIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuQuestions, selectedQuestionIndex, routeApps]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          className={classes.tab}
          component={Link}
          to="/about-us"
          label="About Us"
        />
        <Tab className={classes.tab} component={Link} to="/blog" label="Blog" />
        <Tab
          className={classes.tab}
          component={Link}
          to="/contact-us"
          label="Contact Us"
        />
      </Tabs>

      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Type Search Words"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <Box marginLeft="50px">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Sign-In
        </Button>
        <Button variant="contained" color="tersary" className={classes.button}>
          Sign-Up
        </Button>
      </Box>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List className={classes.listItem}>
          {/* {routeDrawers.map((routeDrawer) => (
            <ListItem
              divider
              button
              component={Link}
              to={routeDrawer.link}
              selected={value === routeDrawer.activeIndex}
              onClick={() => {
                setOpenDrawer(false);
                setValue(routeDrawer.activeIndex);
              }}
            >
              <ListItemIcon> </ListItemIcon>
              <ListItemText
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
          ))} */}
          <ListItem
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(11);
            }}
          >
            <ListItemIcon>
              <ClearIcon />
            </ListItemIcon>
          </ListItem>
          <Toolbar />
          <Button variant="contained" className={classes.drawerButton}>
            Ask A Question
          </Button>

          <ListItem
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              className={
                value === 0
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            to="/communities"
            selected={value === 4}
          >
            <ListItemIcon>
              <FolderSharedIcon />
            </ListItemIcon>
            <ListItemText
              className={
                value === 4
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
              primary="Communities"
            />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={
                value === 11
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              primary="Questions"
            />
            <ListItemIcon
              button
              onClick={handleClick}
              className={classes.arrowIcon}
            >
              {!openQuestion ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </ListItemIcon>
          </ListItem>
          <Collapse in={openQuestion}>
            {menuQuestions.map((option, i) => (
              <ListItem
                key={option}
                component={Link}
                to={option.link}
                className={classes.nestedItem}
                onClick={(event) => {
                  handleDrawerQuestionClick(event, i);
                  setValue(11);
                  setOpenDrawer(false);
                }}
                selected={i === selectedQuestionIndex}
              >
                {option.name}
              </ListItem>
            ))}
          </Collapse>
          <Divider />
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(12);
            }}
            button
            component={Link}
            to="/questions/?type=poll"
            selected={value === 12}
          >
            <ListItemIcon>
              <VolumeDownRoundedIcon />
            </ListItemIcon>
            <ListItemText
              className={
                value === 12
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
              primary="Polls"
            />
          </ListItem>
          <Divider />
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            button
            component={Link}
            to="/group-page"
            selected={value === 5}
          >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText
              className={
                value === 5
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
              primary="Groups"
            />
          </ListItem>
          <Divider />
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(6);
            }}
            divider
            button
            component={Link}
            to="/add-group"
            selected={value === 6}
          >
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText
              className={
                value === 6
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
              primary="Add group"
            />
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(7);
            }}
            divider
            button
            component={Link}
            to="/tags"
            selected={value === 7}
          >
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText
              className={
                value === 7
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
              primary="Tags"
            />
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(8);
            }}
            divider
            button
            component={Link}
            to="/badges"
            selected={value === 8}
          >
            <ListItemIcon>
              <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText
              className={
                value === 8
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
              primary="Badges"
            />
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(9);
            }}
            divider
            button
            component={Link}
            to="/users"
            selected={value === 9}
          >
            <ListItemIcon>
              <SupervisedUserCircleIcon />
            </ListItemIcon>
            <ListItemText
              className={
                value === 9
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
              primary="Users"
            />
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(10);
            }}
            divider
            button
            component={Link}
            to="/faqs"
            selected={value === 10}
          >
            <ListItemIcon>
              <DonutSmallIcon />
            </ListItemIcon>
            <ListItemText
              className={
                value === 10
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
              primary="Help"
            />
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(13);
            }}
            divider
            button
            component={Link}
            to="/buy-theme"
          >
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText
              className={
                value === 13
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
              primary="Buy Theme"
            />
          </ListItem>
          <Box>
            <Grid item sm={6}>
              <InputBase
                variant="contained"
                placeholder="Hit enter to Search"
                inputProps={{ "aria-label": "search" }}
              ></InputBase>
            </Grid>
            <Grid item sm={6}>
              <Button variant="contained" className={classes.drawerButton}>
                Search
              </Button>
            </Grid>
          </Box>
        </List>
      </SwipeableDrawer>
      <div className={classes.div}>
        <IconButton
          color="inherit"
          className={classes.drawerIconContainer}
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple
        >
          <DehazeIcon className={classes.minuIcon} />
        </IconButton>
      </div>
    </React.Fragment>
  );

  const lock = (
    <React.Fragment>
      <IconButton color="inherit" className={classes.lockContainer}>
        <LockIcon className={classes.lockIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar position="fixed">
          <Box className={classes.contain}>
            <Toolbar disableGutters>
              {matches ? drawer : null}
              <Button
                component={Link}
                to="/"
                disableRipple
                onClick={() => setValue(0)}
                className={classes.logoContainer}
              >
                <img src={logo} alt="Company logo" className={classes.logo} />
              </Button>

              {matches ? lock : tabs}
            </Toolbar>
          </Box>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />

      <Container>
        <div className={classes.extra}>
          <IconButton>
            <searchIcon />
          </IconButton>
        </div>
        {/* <Box my={4}>
          {[...new Array(50)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box> */}
      </Container>
      <ScrollTop {...props}>
        <Fab
          color="secondary"
          size="medium"
          aria-label="scroll back to top"
          variant="circular"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      {/* <div className={classes.toolbarMargin}/> */}
    </React.Fragment>
  );
}
