import React from "react";
/* import {
  Home,
  Cart,
  Ipad,
  Iphone,
  Mac,
  Music,
  Tv,
  Watch,
  Support,
  Nav
} from "./components"; */
import Home from "./components/Home";
import Cart from "./components/Cart";
import Ipad from "./components/Ipad";
import Iphone from "./components/Iphone";
import Mac from "./components/Mac";
import Music from "./components/Music";
import Tv from "./components/Tv";
import Watch from "./components/Watch";
import Support from "./components/Support";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";

const App = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto" }}>
    <Nav />
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/cart">
      <Cart />
    </Route>
    <Route exact path="/ipad">
      <Ipad />
    </Route>
    <Route exact path="/iphone">
      <Iphone />
    </Route>
    <Route exact path="/mac">
      <Mac />
    </Route>
    <Route exact path="/music">
      <Music />
    </Route>
    <Route exact path="/tv">
      <Tv />
    </Route>
    <Route exact path="/watch">
      <Watch />
    </Route>
    <Route exact path="/support">
      <Support />
    </Route>
  </div>
);

export default App;
