import Question from "./Question";

const Landing = (props) => {


  return (
    <>
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
