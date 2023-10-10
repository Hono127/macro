import React from "react";

const Purpose = () => {
  return (
    <section className="purpose mb-20">
      <h2 className="text-4xl mb-7">目的の選択</h2>
      <label>
        <input type="checkbox" className="hidden" />
        増量
      </label>
      <label>
        <input type="checkbox" className="hidden" />
        維持
      </label>
      <label>
        <input type="checkbox" className="hidden" />
        減量
      </label>
    </section>
  );
};

export default Purpose;
