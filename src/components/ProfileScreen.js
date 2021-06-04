import React from "react";
import "./ProfileScreen.css";
import Nav from "./NavBar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            alt=""
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <div className="profileScreen_renewal">
                <h4>Renewal date : 04/04/2022</h4>
              </div>
              <div className="profileScreen_netflixstd">
                <h3>Netflix Standard</h3>
                <button className="profileScreen_netflixstd_button">
                  Subscribe
                </button>
              </div>
              <div className="netflix_pixel">
                <h3>1080 p</h3>
              </div>
              <div className="profileScreen_netflixstd">
                <h3>Netflix Basic</h3>
                <button className="profileScreen_netflixstd_button">
                  Subscribe
                </button>
              </div>
              <div className="netflix_pixel">
                <h3>480 p</h3>
              </div>
              <div className="profileScreen_netflixstd">
                <h3>Netflix Premium</h3>
                <button className="profileScreen_netflixstd_button_current">
                  Current Package
                </button>
              </div>
              <div className="netflix_pixel">
                <h3>4K+HDR</h3>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signout"
              >
                SignOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
