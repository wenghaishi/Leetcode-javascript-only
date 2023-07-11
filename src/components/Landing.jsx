import Question from "./Question";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const Landing = (props) => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <>
    {/* navbar */}
      <nav className="flex flex-row items-center justify-between px-4 mb-8 w-full h-16  border-b-2 shadow-sm">
        <Link to="/">
          <img src="/code.png" className="h-10"/>
        </Link>
        <div className="flex flex-row px-4">
          {!isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>Log In</button>
          )}
          {isAuthenticated && (
            <button className="mr-4"
              onClick={() =>
                logout({ logoutParams: { returnTo: "https://leetcode-javascript-only.vercel.app/" } })
              }
            >
              Log Out
            </button>
          )}
          <Profile />
        </div>
      </nav>

      {/* end of navbar */}

      <div className="flex flex-row w-full items-center justify-center">
        <h1 className="text-5xl font-bold text-gray-700 mr-4">
          LeetCode Javascript ONLY
        </h1>
        <img src="/code.png" className="h-16" />
      </div>

      <div className="flex flex-col items-center mt-10">
        {props.questions.map((question) => (
          <Question question={question} key={question.id} />
        ))}
      </div>
    </>
  );
};
export default Landing;
