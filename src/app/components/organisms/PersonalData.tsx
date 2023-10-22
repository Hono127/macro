import React from "react";

const PersonalData = () => {
  return (
    <section className="personalData mb-20">
      <h2 className="text-center text-4xl mb-7">身長、体重、年齢の入力</h2>
      <div>
        <ul className="flex flex-col gap-5 items-center justify-center">
          <li>
            <input
              type="number"
              placeholder="身長を入力"
              className="border p-2 mr-2 rounded-md"
            />
            <span>cm</span>
          </li>
          <li>
            <input
              type="number"
              placeholder="体重を入力"
              className="border p-2 mr-2 rounded-md"
            />
            <span>kg</span>
          </li>
          <li>
            <input
              type="number"
              placeholder="年齢を入力"
              className="border p-2 mr-2 rounded-md"
            />
            <span>歳</span>
          </li>
        </ul>
      </div>

      <br />
    </section>
  );
};

export default PersonalData;
