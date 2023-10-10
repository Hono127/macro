import React from "react";

const Activity = () => {
  return (
    <section className="activity mb-20">
      <h2 className="text-center text-4xl mb-7">活動指標の選択</h2>
      <label>
        <input type="checkbox" className="hidden" />
        座り仕事が多く、1日運動はたまに歩いたり階段を登ったりする程度である
      </label>
      <br />
      <label>
        <input type="checkbox" className="hidden" />
        立ち仕事や重労働が多く、比較的一日中動き回ってる
      </label>
      <br />
      <label>
        <input type="checkbox" className="hidden" />
        立ち仕事や重労働が多く、それに加えジムでトレーニングを行ったり運動をしている
      </label>
    </section>
  );
};

export default Activity;
