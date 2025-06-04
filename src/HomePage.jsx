import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="app-title">CoinEarn</h1>
        <p className="app-description">
          Зарабатывайте криптовалюту, просматривая рекламу и выполняя простые
          задания
        </p>

        <button className="cta-button" onClick={() => navigate("/ads")}>
          Смотреть рекламу ▶️
        </button>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>Быстрые выплаты</h3>
          <p>Вывод средств в USDT и других криптовалютах</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎮</div>
          <h3>Игровые задания</h3>
          <p>Зарабатывайте, играя в простые игры</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3>Система уровней</h3>
          <p>Повышайте уровень для увеличения дохода</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
