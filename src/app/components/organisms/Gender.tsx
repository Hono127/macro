"use client";
import React, { FC } from "react";

const Gender: FC = () => {
  return (
    <section className="gender mb-20 text-center">
      <h2 className="text-center text-4xl mb-7">性別の選択</h2>
      <div>
        <ul className="flex items-center justify-center gap-5">
          <li className="w-full">
            <input
              id="female"
              type="radio"
              className="hidden peer"
              name="gender"
            />
            <label
              className="border-collapse border-slate-400 border-2 block peer-checked:bg-pink-500 h-11 p-2 rounded-md"
              htmlFor="female"
            >
              女性
            </label>
          </li>
          <li className="w-full">
            <input
              id="male"
              type="radio"
              className="hidden peer"
              name="gender"
            />
            <label
              className="border-collapse border-slate-400 border-2 block peer-checked:bg-sky-500 h-11 p-2 rounded-md"
              htmlFor="male"
            >
              男性
            </label>
          </li>

        </ul>
      </div>
    </section>
  );
};

export default Gender;
