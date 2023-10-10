import React from "react";

const PersonalData = () => {
  return (
    <section className="personalData mb-20">
      <div>
        <ul className="flex flex-col gap-5 items-center justify-center">
          <li>
            <input
              type="text"
              placeholder="身長を入力"
              className="border p-2 mr-2 rounded-md"
            />
            <span>cm</span>
          </li>
          <li>
            <input
              type="text"
              placeholder="体重を入力"
              className="border p-2 mr-2 rounded-md"
            />
            <span>kg</span>
          </li>
          <li>
            <input
              type="text"
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
