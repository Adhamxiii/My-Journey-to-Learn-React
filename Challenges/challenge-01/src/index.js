import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import avatarImage from "./me.png";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={avatarImage} alt="avatar"  />;
}

function Intro() {
  return (
    <div>
      <h1>Adham Nasser</h1>
      <p>
        Frontend Dev | Creating awesome web experiences with HTML, CSS, JS &
        React. Let's code something great together!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML" emoji="🔥" bg="orange" />
      <Skill name="CSS" emoji="🔥" bg="blue" />
      <Skill name="JavaScript" emoji="💪" bg="yellow" />
      <Skill name="React" emoji="🔥" bg="blue" />
      <Skill name="Web Design" emoji="💪" bg="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ background: props.bg }}>
      <p>{props.name}</p>
      <p>{props.emoji}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
