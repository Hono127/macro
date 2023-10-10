import React from "react";

const Activity = () => {
  return (
    <section className="activity mb-20">
      <h2 className="text-center text-4xl mb-7">活動指標の選択</h2>
      <div>
        <ul className="flex flex-col items-center justify-center gap-5">
          <li className="w-full">
            <input id="static" type="checkbox" className="hidden peer" />
            <label
              className="border-collapse border-slate-400 border-2 block peer-checked:bg-sky-500 h-11 p-2 rounded-md"
              htmlFor="static"
            >
              座り仕事が多く、1日運動はたまに歩いたり階段を登ったりする程度である
            </label>
          </li>
          <li className="w-full">
            <input id="normal" type="checkbox" className="hidden peer" />
            <label
              className="border-collapse border-slate-400 border-2 block peer-checked:bg-sky-500 h-11 p-2 rounded-md"
              htmlFor="normal"
            >
              立ち仕事や重労働が多く、比較的一日中動き回ってる
            </label>
          </li>
          <li className="w-full">
            <input id="active" type="checkbox" className="hidden peer" />
            <label
              className="border-collapse border-slate-400 border-2 block peer-checked:bg-sky-500 h-11 p-2 rounded-md"
              htmlFor="active"
            >
              立ち仕事や重労働が多く、それに加えジムでトレーニングを行ったり運動をしている
            </label>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Activity;
