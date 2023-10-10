import React from "react";

const Result = () => {
  return (
    <section className="result mb-20">
      <button>計算開始</button>
      <div>
        <ul>
          <li>タンパク質：500</li>
          <li>炭水化物：500</li>
          <li>脂質：500</li>
        </ul>
        <p>総摂取カロリー</p>
      </div>
    </section>
  );
};

export default Result;
