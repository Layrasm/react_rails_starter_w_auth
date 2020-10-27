import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ImageUploader from '../images/ImageUploader';


const MyAccount = (props) => {

  const { user } = useContext(AuthContext);
  const [image, setImage] = useState([]);

  useEffect(() => {
  
  
  }, []); 

  function refreshPage() {
    window.location.reload(false);
  }

  return(
    <div>
      <h1>User Profile</h1>
      <h3>Name: {user.first_name} {user.last_name}</h3>
      <h3>Email: {user.email}</h3>
     
      <img src={user.image}/>
      <button>Edit Info</button>
      
      {/* {displayImage()} */}
      <br/>
      <br/>
      <br/>
      Add or update current photo
      <ImageUploader userID={user.id}/>
      
    </div>
  );
};

export default MyAccount;