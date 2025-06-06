// import { useAuthProfile } from "../default";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const AuthProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.password}</p>
      </div>
    )
  );
};

export default AuthProfile;