import Editor from "@monaco-editor/react";

import "./App.css";

function App() {


  return (
    <>
      <Editor
        height="90vh"
        width="90vw"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </>
  );
}

export default App;
