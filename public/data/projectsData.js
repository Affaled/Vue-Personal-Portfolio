import i18n from "../../src/i18n";

const findText = (key) => {
  return (
    console.log(i18n.global.t(`data.projects.${key}.description`)),
    i18n.global.t(`data.projects.${key}.description`)
  );
};

const projectsData = [
  {
    id: 1,
    path: "angular-blog",
    title: "Angular Blog",
    type: "Front-end",
    technologies: ["Angular", "Typescript", "SCSS"],
    description: findText("angularBlog"),
    repository: "https://www.github.com/",
    url: "https://www.github.com/",
  },
  {
    id: 2,
    path: "portfolio-prototype",
    title: "Portfolio Prototype",
    type: "Front-end",
    technologies: ["React", "JavaScript", "SCSS"],
    description: "teste",
    repository: "https://www.github.com/",
    url: "https://www.github.com/",
  },
  {
    id: 3,
    path: "login-database",
    title: "Login Database",
    type: "full-stack",
    technologies: ["PHP", "MySQL", "SCSS"],
    description: "teste",
    repository: "https://www.github.com/",
    url: "https://www.github.com/",
  },
];

export default projectsData;
