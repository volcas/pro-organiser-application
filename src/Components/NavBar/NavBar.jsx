import React from "react";
import Style from "./NavBar.module.scss";
import { Link, NavLink } from "react-router-dom";
// import { auth } from "../../Firebase/firebase.utils";
import swal from "sweetalert";
const NavBar = ({ currentUser }) => {
  // let handleSignOut = () => {
  //   swal({
  //     title: "Are you sure?",
  //     text: " Do you Want to Sign Out??",
  //     icon: "warning",
  //     buttons: ["Oh noez!", "yup!"],
  //     dangerMode: true,
  //   }).then((willDelete) => {
  //     if (willDelete) {
  //       auth.signOut();
  //     } else {
  //       return;
  //     }
  //   });
  // };
  return (
    <div className={Style.container}>
      <h2 className={Style.brand}>
        Pro-Organizer{" "}
        <i
          style={{ fontSize: "35px", color: "#546de5" }}
          class="fab fa-stack-overflow"
        ></i>
      </h2>
      <ul>
        <NavLink
          to="/"
          exact
          activeClassName={Style.active}
          style={{ textDecoration: "none" }}
        >
          <li className={Style.item1}>Home</li>

          {/* <li  onClick={()=>{!currentUser && swal("You haven't Signed In!", "Please Sign In with registered Email or with Google",'info')}} className={Style.item1}>Home</li> */}
        </NavLink>
        <NavLink
          to="/createboard"
          activeClassName={Style.active}
          style={{ textDecoration: "none" }}
        >
          <li>Create a board</li>
          {/* <li
            // onClick={() => {
            //   !currentUser &&
            //     swal(
            //       "You haven't Signed In!",
            //       "Please Sign In with registered Email or with Google",
            //       "info"
            //     );
            // }}
          >
            Create a board
          </li> */}
        </NavLink>
        {/* {currentUser ? (
          <li onClick={handleSignOut}>Sign Out</li>
        ) : (
          <NavLink
            to="/signin"
            exact
            activeClassName={Style.active}
            style={{ textDecoration: "none" }}
          >
            <li className={Style.item1}>Sign In</li>
          </NavLink>
        )} */}
      </ul>
    </div>
  );
};

export default NavBar;
