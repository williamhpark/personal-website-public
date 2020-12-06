import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./App.css";
// Components
import NavbarComp from "./components/NavbarComp/NavbarComp";
import Post from "./components/Post/Post";
// Pages
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CreatePostPage from "./pages/CreatePostPage";

const App = () => {
  const routes = [
    { name: "Home", Component: HomePage, path: "/" },
    { name: "Post", Component: Post, path: "/blog/:id" },
    { name: "Blog", Component: BlogPage, path: "/blog" },
    { name: "Contact", Component: ContactPage, path: "/contact" },
    { name: "Create Post", Component: CreatePostPage, path: "/createpost" },
  ];

  const renderRoutes = () => {
    return routes.map(({ path, Component }) => {
      return (
        <Route key={path} path={path} exact>
          {(props) => (
            <CSSTransition
              in={props.match != null}
              timeout={450}
              classNames="fade"
              unmountOnExit
            >
              <div className="page">
                <Component {...props} />
              </div>
            </CSSTransition>
          )}
        </Route>
      );
    });
  };

  return (
    <BrowserRouter>
      <div id="app">
        <NavbarComp />
        {renderRoutes()}
      </div>
    </BrowserRouter>
  );
};

export default App;
