import { Link } from "react-router-dom";

const Choices = () => {
  return (
    <>
      {/* navbar */}
      <nav className="flex flex-row items-center justify-between px-4 mb-8 w-full h-16  border-b-2 shadow-sm">
        <Link to="/">
          <img src="/code.png" className="h-10" />
        </Link>
        {/* <div className="flex flex-row px-4"></div>
        <button onClick={() => setShowLogin((prev) => !prev)}>
          Log in/ sign-up
        </button> */}
      </nav>
      {/* end of navbar */}

      <h1 className="text-5xl font-bold text-gray-700 mb-6">JS mastery</h1>
      <h2 className="text-2xl text-gray-700">
        Learn everything, about javascript
      </h2>
      <div className="grid-cols-2 grid place-items-center mt-8 w-full gap-6 px-6">
        <div className="w-full px-2 bg-yellow-300 hover:bg-yellow-200 h-64 self-center rounded-lg flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">JS MCQ</h1>
          <p>Multiple-choice questions for javascript</p>
        </div>

        <Link to='/coding' className="w-full">
          <div className="w-full px-2 bg-slate-300 hover:bg-slate-200 h-64 self-center rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold"> JS LeetCode</h1>
            <p>Leetcode questions for javascript</p>
          </div>
        </Link>

        <Link to='/coding' className="w-full">
          <div className="w-full px-2 bg-green-300 hover:bg-green-200 h-64 self-center rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">CSS trivia</h1>
            <p>Multiple choice questions for CSS</p>
          </div>
        </Link>

        <Link to='/coding' className="w-full">
          <div className="w-full px-2 bg-red-300 hover:bg-red-200 h-64 self-center rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">React madness</h1>
            <p>Multiple choice questions for ReactJs</p>
          </div>
        </Link>

        <Link to='/coding' className="w-full">
          <div className="w-full px-2 bg-orange-300 hover:bg-orange-200 h-64 self-center rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">NextJs</h1>
            <p>Multiple choice questions for Nextjs</p>
          </div>
        </Link>


        <Link to='/coding' className="w-full">
          <div className="w-full px-2 bg-cyan-300 hover:bg-cyan-200 h-64 self-center rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Frontend general</h1>
            <p>General frontend questions</p>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Choices;
