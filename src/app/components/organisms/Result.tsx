import React from "react";

const Result = () => {
  return (
    <section className="result mb-20">
      <button className="w-full p-3 bg-sky-400 rounded-md mb-11">
        計算開始
      </button>
      <div>
        <ul className="flex flex-col justify-center items-start w-full gap-8 mb-20">
          <li className="border-2 w-64">タンパク質：500</li>
          <li className="border-2 w-64">炭水化物：500</li>
          <li className="border-2 w-64">脂質：500</li>
        </ul>
        <p>総摂取カロリー</p>
      </div>
    </section>
  );
};

export default Result;
