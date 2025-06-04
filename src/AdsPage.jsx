import React from "react";

const AdsPage = () => {
  return (
    <>
      <p className="instruction">👇 Кликай по баннеру и получай награду 👇</p>

      {/* Ad Card */}
      <div className="ad-card">
        <img
          src="https://storage.googleapis.com/a1aa/image/dc6caaff-493a-46a9-4cf0-c453243d16c8.jpg"
          alt="Advertisement"
          className="ad-image"
        />
        <div className="ad-content">
          <h3>АВТОШКОЛА ПРАВА ЗА НЕДЕЛЮ</h3>
          <p>ВОДИТЕЛЬСКИЕ ПРАВА ОФОРМЛЕНИЕ</p>
        </div>
      </div>

      {/* Button Grid */}
      <div className="button-grid">
        <button className="action-button">
          Смотри
          <br />
          рекламу 5/20
        </button>
        <button className="action-button">
          Смотри
          <br />
          рекламу 2/20
        </button>
        <button className="action-button">
          Смотри
          <br />
          рекламу 2/20
        </button>
        <button className="action-button">
          Смотри
          <br />
          рекламу 3/20
        </button>
      </div>
    </>
  );
};

export default AdsPage;
