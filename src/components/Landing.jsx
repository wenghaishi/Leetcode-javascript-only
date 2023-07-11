import Question from "./Question";

const Landing = () => {
  const questions = [
    {
      id: 1,
      title: "Two Sum",
      description:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      example: [
        "Input: nums = [2,7,11,15], target = 9 Output: [0,1] Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]",
      ],
      difficulty: "Easy",
    },

    {
      id: 1,
      title: "Palindrone Number",
      descripton:
        "Given an integer x, return true if x is a palindrome, and false otherwise.",
      example: ["Input: x = 121. Output: true. Explanation: 121 reads as 121 from left to right and from right to left."],
      difficulty: "Easy"
    },
  ];
  return (
    <div>
      <h1 className="text-5xl font-bold text-gray-700">
        LeetCode Javascript ONLY
      </h1>
      {questions.map((question) => <Question question={question} key={question.id}/>)}
    </div>
  );
};
export default Landing;
