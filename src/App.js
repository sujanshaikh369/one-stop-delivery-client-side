import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./components/AuthContext/AuthProvider";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Service from "./components/Service/Service";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AllOrders from "./components/AllOrders/AllOrders";
import MyOrder from "./components/MyOrder/MyOrder";
import About from "./components/About/About";
import Testimonial from "./components/News/Testimonial";
import AddServices from "./components/AddServices/AddServices";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute path="/allOrders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/addservices">
              <AddServices></AddServices>
            </PrivateRoute>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/testimonial">
              <Testimonial />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
