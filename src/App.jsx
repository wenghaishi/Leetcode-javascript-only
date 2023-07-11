import "./App.css";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import MonacoEditor from "./components/MonacoEditor";

function App() {
  const questions = [
    {
      id: 1,
      title: "Two Sum",
      description:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      example: [
        "Input: nums = [2, 7, 11, 15],\n\ntarget = 9,\n\nOutput: [0, 1]\n\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1]",
      ],
      difficulty: "Easy",
      code: "\nconst arr = [2, 7, 11, 15]\nconst target = 9\nconst twoSum = function(arr, target) {\n // write your code here\n}\ntwoSum(arr, target)"
    },

    {
      id: 2,
      title: "Palindrone Number",
      description:
        "Given an integer x, return true if x is a palindrome, and false otherwise.",
      example: [
        "Input: x = 121.\n\nOutput: true. \n\nExplanation: 121 reads as 121 from left to right and from right to left.",
      ],
      difficulty: "Easy",
      code: "\nconst num = 12321\nconst isPalindrome = function(x) {\n // write your code here\n}\nisPalindrome(num)"
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<Landing questions={questions}/>} />
      <Route path="/:id" element={<MonacoEditor questions={questions}/>} />
    </Routes>
  );
}

export default App;
