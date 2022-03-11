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
  // const [value, setValue] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
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

  const routeApps = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "About Us", link: "/about-us", activeIndex: 1 },
    { name: "Blog", link: "/blog", activeIndex: 2 },
    { name: "Contact Us", link: "/contact-us", activeIndex: 3 },
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

  useEffect(() => {
    [...menuQuestions, ...routeApps, ...routeDrawers].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
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
  }, [
    props.value,
    menuQuestions,
    selectedQuestionIndex,
    routeApps,
    routeDrawers,
    props,
  ]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routeApps.map((routeApp, index) => (
          <Tab
            className={classes.tab}
            component={Link}
            to={routeApp.link}
            label={routeApp.name}
          />
        ))}
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
        <Button variant="contained" className={classes.button}>
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
          <ListItem
            button
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(11);
            }}
          >
            <Toolbar />
            <ListItemIcon>
              <ClearIcon />
            </ListItemIcon>
          </ListItem>

          <Button variant="contained" className={classes.drawerButton}>
            Ask A Question
          </Button>

          <Divider />
          {routeDrawers.map((routeDrawer, index) => (
            <List>
              <ListItem
                divider
                button
                key={`${routeDrawer} ${routeDrawer.activeIndex}`}
                component={Link}
                to={routeDrawer.link}
                selected={props.value === routeDrawer.activeIndex}
                onClick={() =>
                  setOpenDrawer((routeDrawer) =>
                    index === 2
                      ? setOpenDrawer(true)
                      : setOpenDrawer(false) &&
                        props.setValue(routeDrawer.activeIndex)
                  )
                }
              >
                <ListItemIcon
                  className={
                    props.value === routeDrawer.activeIndex
                      ? [classes.drawerItem, classes.drawerItemSelected]
                      : classes.drawerItem
                  }
                >
                  {routeDrawer.icon}
                </ListItemIcon>
                <ListItemText
                  className={
                    props.value === routeDrawer.activeIndex
                      ? [classes.drawerItem, classes.drawerItemSelected]
                      : classes.drawerItem
                  }
                  disableTypography
                >
                  {routeDrawer.name}
                </ListItemText>

                <Box button onClick={handleClick} className={classes.arrowIcon}>
                  {index === 2 ? (
                    openQuestion ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )
                  ) : null}
                </Box>
              </ListItem>

              <Collapse in={openQuestion} timeout="auto" unmountOnExit>
                {index === 2
                  ? menuQuestions.map((option, i) => (
                      <ListItem
                        key={`${option} ${i}`}
                        component={Link}
                        to={option.link}
                        className={classes.nestedItem}
                        onClick={(event) => {
                          handleDrawerQuestionClick(event, i);
                          props.setValue(5);
                          setOpenDrawer(false);
                        }}
                        selected={i === selectedQuestionIndex}
                      >
                        {option.name}
                      </ListItem>
                    ))
                  : null}
              </Collapse>
            </List>
          ))}

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
                onClick={() => props.setValue(0)}
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
            <SearchIcon />
          </IconButton>
        </div>
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
