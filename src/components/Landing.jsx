import Question from "./Question";
import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";

const Landing = (props) => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleShowLogin = () => {
    setShowLogin(prev => !prev)
  }
  return (
    <>
      {showLogin && <Login showLogin={toggleShowLogin}/>}
      {/* navbar */}
      <nav className="flex flex-row items-center justify-between px-4 mb-8 w-full h-16  border-b-2 shadow-sm">
        <Link to="/">
          <img src="/code.png" className="h-10" />
        </Link>
        <div className="flex flex-row px-4"></div>
        <button onClick={() => setShowLogin(prev=> !prev)}>Log in/ sign-up</button>
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
