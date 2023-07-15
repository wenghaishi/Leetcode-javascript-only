import Editor from "@monaco-editor/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as Babel from "@babel/standalone";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";

const MonacoEditor = (props) => {
  const [value, setValue] = useState();
  const [output, setOutput] = useState();
  const [darkMode, setDarkMode] = useState(false);
  const [correct, setCorrect] = useState(false)
  const handleEditorChange = (value) => {
    setValue(value);
  };


  const editorOptions = {
    selectOnLineNumbers: true,
    fontSize: 13,
    automaticLayout: true,
  };
  let theme = "light";
  if (darkMode === true) {
    theme = "vs-dark";
  }

  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleRunCode = () => {
    try {
      const transformedCode = Babel.transform(value, { presets: ["env"] }).code;
      let output = eval(transformedCode);
      if (Array.isArray(output)) {
        output = "[" + output.join(", ") + "]";
        output = output.replace(" ", "")
      }
      setOutput(`${output}`);
      console.log(output)
      console.log(currentQuestion.testOutput)
      if (output == JSON.stringify(currentQuestion.testOutput) || output == currentQuestion.testOutput) {
        setCorrect(true)
      } else {
        setCorrect(false)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { id } = useParams();
  const questions = props.questions;
  const currentQuestion = questions[id - 1];

  const [dragging, setDragging] = useState(false);
  const [width, setWidth] = useState(500); // Initial width of the resizable component

  const handleMouseDown = (e) => {
    setDragging(true);
  };

  const handleMouseUp = (e) => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const containerWidth = document.getElementById("container").offsetWidth;
      const mouseX = e.pageX;
      const newWidth = Math.max(200, Math.min(containerWidth - 200, mouseX));
      setWidth(newWidth);
    }
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      {/* nav component */}
      <nav className="flex flex-row items-center justify-between px-4 w-full h-16 border-b-2 shadow-sm">
        <Link to="/" className="">
          <img src="/code.png" className="h-10" />
        </Link>
        <div className="flex flex-row">
          <button onClick={handleToggleTheme} className="mr-4">
            Toggle editor theme
          </button>
        </div>
      </nav>
      {/* end of nav component */}

      {/* start of question component */}
      <Resizable
        width={width}
        height={Infinity}
        onResizeStop={(event, data) => setWidth(data.size.width)} // Update the width when resizing stops
        minConstraints={[400, Infinity]} // Minimum width of the resizable component
        maxConstraints={[800, Infinity]} // Maximum width of the resizable component
      >
        <div
          id="container"
          className="flex flex-row "
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div
            className="question-container"
            style={{ width: `${width}px` }}
            onMouseDown={handleMouseDown}
          >
            <div className="content">
              <h1 className="text-xl font-bold">{currentQuestion.title}</h1>
              <p className="text-left px-2 my-4">
                {currentQuestion.description}
              </p>
              <h2 className="text-left font-bold px-2 pb-2">Example</h2>
              <p className="text-left display-linebreak px-2">
                {currentQuestion.example}
              </p>
            </div>
          </div>
          {/* end of question component */}

          <div
            className="editor-container"
            style={{ width: `calc(100% - ${width}px)` }}
          >
            <Editor
              height="66vh"
              width="100%"
              defaultLanguage="javascript"
              defaultValue={`${currentQuestion.code}`}
              value={value}
              onChange={handleEditorChange}
              theme={theme}
              options={editorOptions}
            />
          </div>
        </div>
      </Resizable>

      <div className="bg-slate-200 h-24 flex flex-row items-center justify-between px-12 w-full">
        <button
          onClick={handleRunCode}
          className="bg-gray-500 text-white py-4 px-12 rounded-lg hover:bg-gray-600"
        >
          Run code
        </button>
        <h1 className="mr-12 text-xl font-mono">Output: {output}</h1>
        <div>{correct? <h1 className="text-xl font-mono text-green-500">Test passed</h1> : <h1 className="text-xl font-mono text-red-600">Test failed</h1>}</div>
      </div>
    </div>
  );
};

export default MonacoEditor;
