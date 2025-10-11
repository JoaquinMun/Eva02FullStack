import React from "react";

const ProfileImage = () => {
  return (
    <img
      src="/assets/profile.jpg"
      alt="Profile"
      
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        marginRight: "20px",
      }}
    />
  );
};

export default ProfileImage;