import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import theme from "./ui/Theme";
import Header from "./ui/Header";

import Footer from "./ui/Footer";
import LandingPage from "./pages/LandingPage";

function App() {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} />
        <LandingPage />
        <Switch>
          {/* <Route exact path="/" component={LandingPage} /> */}
          <Route
            exact
            path="/"
            component={() => <div style={{ height: "2000px" }}>home</div>}
          />

          <Route exact path="/about-us" component={() => <div>About Us</div>} />
          <Route exact path="/blog" component={() => <div>Blog</div>} />
          <Route
            exact
            path="/contact-us"
            component={() => <div>Contact Us</div>}
          />
          <Route
            exact
            path="/communities"
            component={() => <div>Communities</div>}
          />
          <Route exact path="/poll" component={() => <div>Pools</div>} />
          <Route exact path="/group-page" component={() => <div>Group</div>} />
          <Route
            exact
            path="/add-group"
            component={() => <div>Add group</div>}
          />
          <Route exact path="/tags" component={() => <div>Tags</div>} />
          <Route exact path="/badges" component={() => <div>Badges</div>} />
          <Route exact path="/users" component={() => <div>Users</div>} />
          <Route exact path="/faqs" component={() => <div>Help</div>} />

          <Route
            exact
            path="/buy-theme"
            component={() => <div>Buy Theme</div>}
          />
          {/* <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/" component={() => <div>Home</div>} /> */}
        </Switch>
        <Footer value={value} setValue={setValue} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
