
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from './components/LogIn/LogIn';
import BookCourse from './components/BookCourse/BookCourse';
import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddService from './components/AddService/AddService';
import AddReview from './components/Home/Reviews/AddReview';
import BookingList from './components/BookingList/BookingList';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import Orderlist from './components/OrderList/Orderlist';
import ManageService from './components/ManageService/ManageService';
export const userContext = createContext();


function App() {
  const [signedInUser, setSignedInUser] = useState(userContext)
  return (
    <userContext.Provider value = {[signedInUser, setSignedInUser]}>
      {/* name : {signedInUser.displayName} */}
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Home></Home>
        </Route>
        <Route  path = '/logIn'>
          <LogIn></LogIn>
        </Route>
        <PrivateRoute  path = '/addService'>
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute  path = '/addReview'>
          <AddReview></AddReview>
        </PrivateRoute>
        <PrivateRoute  path = '/bookingList'>
          <BookingList></BookingList>
        </PrivateRoute>
        <PrivateRoute  path = '/orderList'>
          <Orderlist></Orderlist>
        </PrivateRoute>
        <PrivateRoute  path = '/manageService'>
          <ManageService></ManageService>
        </PrivateRoute>
        <PrivateRoute  path = '/makeAdmin'>
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute  path = '/BookCourse/:title'>
          <BookCourse></BookCourse>
        </PrivateRoute>
      </Switch>
    </Router>
    </userContext.Provider>
    
  )

}


export default App;
