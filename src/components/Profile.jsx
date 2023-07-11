import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center justify-center">
        <img src={user.picture} alt={user.name} className="rounded-full h-10" />
      </div>
    )
  );
};

export default Profile;