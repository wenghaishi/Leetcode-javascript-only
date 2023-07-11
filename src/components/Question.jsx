import { Link } from "react-router-dom";
const Question = ({ question }) => {
  const { id, title, difficulty } = question;

  const difficultyClasses = {
    Easy: "text-green-500",
    Medium: "text-orange-300",
    Hard: "text-red-500",
  };

  const color = difficultyClasses[difficulty];

  const handleClick = () => {

  }

  return (
    <Link to={`/${id}`} onClick={handleClick} className="flex flex-row w-4/6 h-20 m-2 bg-slate-300 items-center justify-between px-6 hover:bg-slate-200">
      <div className="flex flex-row items-center">
        <h1 className="text-2xl pr-4">{id}</h1>
        <h1 className="text-xl">{title}</h1>
      </div>
      <h1 className={`text-xl ${color}`}>{difficulty}</h1>
    </Link>
  );
};
export default Question;
