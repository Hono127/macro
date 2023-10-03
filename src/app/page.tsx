import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <section className="gender">
        <p>性別</p>
        <input type="checkbox" />
        男性
        <input type="checkbox" />
        女性
      </section>
      <section className="personalData">
        <input type="text" />
        cm
        <br />
        <input type="text" />
        kg
        <br />
        <input type="text" />
        歳
        <br />
      </section>
      <section className="activity">
        <label form="activitySelect">活動指標の選択</label>
        <select name="type" id="activitySelect">
          <option value="">選択してください</option>
          <option value="little">少ない</option>
          <option value="aerage">普通</option>
          <option value="many">多い</option>
        </select>
      </section>
      <section className="purpose">
        <label form="purpose">活動指標の選択</label>
        <select name="type" id="purpose">
          <option value="">選択してください</option>
          <option value="reduce">減量</option>
          <option value="keep">維持</option>
          <option value="increace">増量</option>
        </select>
      </section>

      <section className="result">
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
    </main>
  );
}
