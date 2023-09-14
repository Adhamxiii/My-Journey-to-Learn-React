import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import avatarImage from "./me.png";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
];

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
  return <img className="avatar" src={avatarImage} alt="avatar" />;
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
      {skills.map((skill, index) => (
        <Skill
          key={index}
          skill={skill.skill}
          level={skill.level}
          bg={skill.color}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, bg }) {
  return (
    <div className="skill" style={{ background: bg }}>
      <p>{skill}</p>
      <span>
        {level === "intermediate" && "⚡"}
        {level === "advanced" && "🔥"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
