import Question from "./Question";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";

const Landing = (props) => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <nav className="flex flex-row items-center justify-evenly mb-8 w-full h-16  bg-slate-200">
        {!isAuthenticated &&<button onClick={() => loginWithRedirect()}>Log In</button>}
        {isAuthenticated && <button
          onClick={() =>
            logout({ logoutParams: { returnTo: "http://localhost:5173" } })
          }
        >
          Log Out
        </button>}
        <Profile />
      </nav>

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
