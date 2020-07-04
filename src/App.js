import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Pages/Homepage/Homepage";
import Board_Page from "./Pages/Create_Board_Page/Board_Page";
import MyBoard_Page from "./Pages/Individual_Board_Page/MyBoard";
// import SignIn_SignUp_Page from "./Pages/SignIn_SignUp _Page/SignIn_SignUp";
// import { auth, createUserProfileDocument } from "./Firebase/firebase.utils"; //so that our appn listens to user state changes from firebase

const App = () => {
  // const [currentUser, setCurrentUser] = useState(null);
  // let unSubscribeFromAuth = null;
  // useEffect(() => {
  //   unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     // setCurrentUser(user);
  //     // createUserProfileDocument(user);
  //     // console.log(user);
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);
  //       userRef.onSnapshot((snapShot) => {
  //         // console.log(snapShot.data());
  //         setCurrentUser({ id: snapShot.id, ...snapShot.data() });
  //       });
  //     } else {
  //       setCurrentUser(userAuth);
  //     }
  //   });
  //   return () => {
  //     console.log("it works as component will unmount.");
  //     unSubscribeFromAuth(); //it will close the subscription
  //   };
  // }, []);
  // console.log(currentUser);
  return (
    <div className="App">
      <NavBar /*currentUser={currentUser} *//>
      <Switch>
        {/* <Route path="/signin" component={SignIn_SignUp_Page} /> */}
        {/* <Route path="/" exact render={()=>currentUser?<Homepage/>:<Redirect to="/signin"/>} />
        <Route path="/createboard" exact strict render={()=>currentUser?<Board_Page/>:<Redirect to="/signin"/>} />
        <Route path="/:boardName" render={()=>currentUser?<MyBoard_Page/>:<Redirect to="/signin"/>}/> */}
        <Route path="/" exact component={Homepage} />
        <Route path="/createboard" exact strict component={Board_Page} />
        <Route path="/:boardName" component={MyBoard_Page} />
      </Switch>
    </div>
  );
};
export default App;
