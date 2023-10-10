"use client";
import React, { FC, useState } from "react";

type Props = {
  onClick: () => void;
};

const Gender: FC<Props> = (props) => {
  const { onClick } = props;
  const [changeColor, setChangeColor] = useState(false);

  return (
    <section className="gender mb-20 text-center">
      <h2 className="text-4xl mb-7">性別</h2>
      <div className="flex justify-center gap-5 text-center">
        <div>
          <label
            className="border border-solid p-2 hover:bg-sky-400"
            onClick={onClick}
          >
            <input type="checkbox" className="hidden rounded-md" />
            男性
          </label>
        </div>
        <div>
          <label className="border border-solid p-2 ml-1 hover:bg-pink-400">
            <input type="checkbox" className="hidden rounded-md" />
            女性
          </label>
        </div>
      </div>
    </section>
  );
};

export default Gender;
