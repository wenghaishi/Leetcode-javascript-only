import Editor from "@monaco-editor/react";
import { useState } from "react";


const MonacoEditor = () => {
  const [value, setValue] = useState();
  const [output, setOutput] = useState();
  const handleEditorChange = (value) => {
    setValue(value);
  }

  const handleRunCode = () => {
    setOutput(eval(value))
  }

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="60vh"
        width={`100%`}
        defaultLanguage="javascript"
        defaultValue="// some comment"
        value={value}
        onChange={handleEditorChange}
        theme="oceanic-next"
      />
      <div className="bg-slate-200 h-36 flex flex-col items-center justify-evenly w-full">Output: {output}</div>
      <button onClick={handleRunCode} className="bg-gray-500 text-white py-4 px-8 rounded-lg mt-4 hover:bg-gray-600">Run code</button>
    </div>
  );
};
export default MonacoEditor;
