import Editor from "@monaco-editor/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const MonacoEditor = (props) => {
  const [value, setValue] = useState();
  const [output, setOutput] = useState();
  const handleEditorChange = (value) => {
    setValue(value);
  };

  const handleRunCode = () => {
    setOutput(eval(value));
  };

  const { id } = useParams();
  const questions = props.questions
  const currentQuestion = questions[id-1]

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <div className="flex flex-row">
        <div className="w-1/2 bg-slate-100 p-6">
          <h1 className=" text-xl font-bold ">{currentQuestion.title}</h1>
          <p className="text-left	 px-2 my-4">{currentQuestion.description}</p>
          <h2 className="text-left font-bold px-2 pb-2">Example</h2>
          <p className="text-left display-linebreak px-2"> {currentQuestion.example}</p>
        </div>
        <Editor
          height="70vh"
          width={`100%`}
          defaultLanguage="javascript"
          defaultValue={`${currentQuestion.code}`}
          value={value}
          onChange={handleEditorChange}
          theme="oceanic-next"
        />
      </div>

      <div className="bg-slate-200 h-20 flex flex-col items-center justify-evenly w-full">
        Output: {output}
      </div>
      <button
        onClick={handleRunCode}
        className="bg-gray-500 text-white py-4 px-8 rounded-lg mt-4 hover:bg-gray-600"
      >
        Run code
      </button>

    </div>
  );
};
export default MonacoEditor;
