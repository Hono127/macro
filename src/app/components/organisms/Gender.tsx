"use client";
import React, { FC, useState } from "react";

type Props = {
  onClick: () => void;
};

const Gender: FC<Props> = (props) => {
  const { onClick } = props;
  const [changeColor, setChangeColor] = useState(false);

  // const eventClick = () => {
  //   alert("クリック");
  // };

  return (
    <section className="gender mb-20">
      <h2 className="text-4xl mb-7">性別</h2>
      <label
        className="border border-solid p-2 hover:bg-sky-400"
        onClick={onClick}
      >
        <input type="checkbox" className="hidden" />
        男性
      </label>
      <label className="border border-solid p-2 ml-1 hover:bg-pink-400">
        <input type="checkbox" className="hidden" />
        女性
      </label>
    </section>
  );
};

export default Gender;
