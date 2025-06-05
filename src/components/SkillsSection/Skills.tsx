import { 
  SiReact, SiTypescript, SiJavascript, SiRedux, 
  SiNodedotjs, SiCss3, SiHtml5, SiGit, SiAngular, SiRuby,
  SiMongodb, SiMysql
} from "react-icons/si";

export const skills = {
  frontend: [
    { name: "React", icon: <SiReact size={30} color="#61DBFB" /> },
    { name: "TypeScript", icon: <SiTypescript size={30} color="#3178C6" /> },
    { name: "JavaScript", icon: <SiJavascript size={30} color="#F7DF1E" /> },
    { name: "Redux", icon: <SiRedux size={30} color="#764ABC" /> },
    { name: "HTML", icon: <SiHtml5 size={30} color="#E34F26" /> },
    { name: "CSS", icon: <SiCss3 size={30} color="#1572B6" /> },
    { name: "Git", icon: <SiGit size={30} color="#F05032" /> },
    { name: "Angular", icon: <SiAngular size={30} color="#DD0031" /> },
  ],
  backend: [
    { name: "Node.js", icon: <SiNodedotjs size={30} color="#68A063" /> },
    { name: "Ruby", icon: <SiRuby size={30} color="#CC342D" /> },
  ],
  database: [
    { name: "MongoDB", icon: <SiMongodb size={30} color="#4DB33D" /> },
    { name: "MySQL", icon: <SiMysql size={30} color="#4479A1" /> },
  ],
};
