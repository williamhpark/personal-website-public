import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Components
import NavbarComp from "./components/NavbarComp/NavbarComp";
import Post from "./components/Post/Post";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Unauthorized from "./components/Unauthorized/Unauthorized";
// Pages
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CreatePostPage from "./pages/CreatePostPage/CreatePostPage";
import UploadPage from "./pages/UploadPage/UploadPage";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };

  const routes = [
    {
      name: "Home",
      Component: HomePage,
      path: "/",
    },
    {
      name: "Post",
      Component: Post,
      path: "/blog/:id",
    },
    {
      name: "Blog",
      Component: BlogPage,
      path: "/blog",
    },
    {
      name: "Contact",
      Component: ContactPage,
      path: "/contact",
    },
    {
      name: "Unauthorized",
      Component: Unauthorized,
      path: "/auth/unauthorized",
    },
    {
      name: "Upload",
      Component: UploadPage,
      path: "/upload",
    },
  ];

  // Collapses the expanded navbar when the user clicks outside of it
  let navbarRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const renderRoutes = () => {
    return routes.map(({ path, Component }) => {
      return (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={450}
              classNames="fade"
              unmountOnExit
            >
              <div className="page">
                <Component match={match} />
              </div>
            </CSSTransition>
          )}
        </Route>
      );
    });
  };

  return (
    <Router>
      <div className="app">
        <div ref={navbarRef}>
          <NavbarComp expanded={expanded} setExpanded={setExpanded} />
        </div>
        {renderRoutes()}
        <Route
          exact
          path="/auth"
          handleLogin={handleLogin}
          render={(props) => (
            <LoginPage
              {...props}
              loggedIn={loggedIn}
              handleLogin={handleLogin}
            />
          )}
        />
        <ProtectedRoute
          exact
          path="/auth/createpost"
          loggedIn={loggedIn}
          handleLogout={handleLogout}
          component={CreatePostPage}
        />
      </div>
    </Router>
  );
};

export default App;
