import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

const UserPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  return (
    <>
      {/* nav component */}
      <nav className="flex flex-row items-center justify-between px-4 w-full h-16 border-b-2 shadow-sm">
        <Link to="/" className="">
          <img src="/code.png" className="h-10" />
        </Link>
        <div className="flex flex-row">
          {isAuthenticated && (
            <button
              className="mr-4"
              onClick={() =>
                logout({
                  logoutParams: {
                    returnTo: "https://leetcode-javascript-only.vercel.app/",
                  },
                })
              }
            >
              Log Out
            </button>
          )}
          <Profile />
        </div>
      </nav>
      {/* end of nav component */}

      <div>
        <h1 className="text-2xl my-6">The profile page of {user.name}</h1>
        <h1>Work in progress</h1>
      </div>
    </>
  );
};
export default UserPage;
