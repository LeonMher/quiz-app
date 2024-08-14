import { useNavigate } from "react-router-dom";
import { auth } from "../api/firebase";

import { signOut } from "firebase/auth";
import { Hero } from "./Hero/Hero";

const Profile = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const logoutUser = async (e) => {
    e.preventDefault();

    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="container">
      <Hero />
    </div>
  );
};

export default Profile;
