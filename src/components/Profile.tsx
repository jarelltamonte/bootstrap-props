import React from "react";
import "./Profile.css";

interface ProfileProps {
  name: string;
  age: number;
  bio: string;
  image: string; // optional prop
}

const Profile: React.FC<ProfileProps> = ({ name, age, bio, image }) => {
  return (
    <div className="profile1-card">
      <div className="profiles">
        <img src={image} alt={`${name}'s profile`} className="profile-img" />
        <p className="profile-name">
          {name} <span className="age">{age}</span>
        </p>
      </div>

      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default Profile;
