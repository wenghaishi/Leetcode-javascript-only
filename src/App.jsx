import "./App.css";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import MonacoEditor from "./components/MonacoEditor";
import UserPage from "./components/UserPage";
import Choices from "./components/Choices";

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
      code: "\nconst arr = [2, 7, 11, 15]\nconst target = 9\nconst twoSum = function(arr, target) {\n // write your code here\n}\ntwoSum(arr, target)",
      testOutput: [0, 1],
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
      code: "\nconst num = 121\nconst isPalindrome = function(x) {\n // write your code here\n}\nisPalindrome(num)",
      testOutput: true,
    },
    {
      id: 3,
      title: "Longest Palindromic Substring",
      description:
        "Given a string s, return the longest palindromic substring in s.",
      example: [
        "Input: s = 'babbd'\nOutput: 'bab'\nExplanation: 'bab' is the longest palaindromic substring",
      ],
      difficulty: "Medium",
      code: "\nconst s = 'babbd'\nconst longestPalindrome = function(s) {\n // write your code here\n}\nlongestPalindrome(s)",
      testOutput: "bab",
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<Choices questions={questions} />} />
      <Route path="/coding" element={<Landing questions={questions} />} />
      <Route path="/coding/:id" element={<MonacoEditor questions={questions} />} />
      <Route path="/user" element={<UserPage questions={questions} />} />
    </Routes>
  );
}

export default App;
