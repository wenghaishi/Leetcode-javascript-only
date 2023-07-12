import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Link to="/user">
        <div className="flex flex-col items-center justify-center">
          <img
            src={user.picture}
            alt={user.name}
            className="rounded-full h-10"
          />
        </div>
      </Link>
    )
  );
};

export default Profile;
