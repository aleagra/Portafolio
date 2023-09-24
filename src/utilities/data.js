import React from "react";
import { DiReact,DiHtml5,DiCss3,DiNodejsSmall,DiMongodb,DiBootstrap,DiSass,DiGit,DiJavascript1} from "react-icons/di";
import { SiPostman,SiPhp} from "react-icons/si";
import { BiLogoTypescript,BiLogoGithub,BiLogoTailwindCss,BiLogoFirebase,BiLogoGmail,BiLogoLinkedin } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

export const proyectsData = [
  {
    imageSrc: "./Eztranslate.png",
    title: "Eztranslate",
    description: "Traductor",
    techStack: ["React", "Tailwind", "Netlify"],
    repositoryLink: "https://github.com/aleagra/Proyecto-Wallet",
    liveDemoLink: "https://cryptowave.web.app",
    resume:
      "Single page de un traductor hecho con React para traducir textos de manera precisa, con una interfaz moderna y amigable",
   
  },
  {
    imageSrc: "./CryptoWave.png",
    title: "Cryptowave",
    description: "Crypto Wallet",
    techStack: ["React", "Tailwind", "Firebase"],
    repositoryLink: "https://github.com/aleagra/Proyecto-Wallet",
    liveDemoLink: "https://cryptowave.web.app",
    resume:
      "Landing page de una crypto wallet con React para gestionar criptomonedas de forma segura, con una interfaz moderna.",

  },
  {
    imageSrc: "./Weatherme.png",
    title: "WeatherMe",
    description: "Pagina del clima",
    techStack: ["React", "Tailwind", "Firebase"],
    repositoryLink: "https://github.com/aleagra/WeatherMe-page",
    liveDemoLink: "https://weather-me.web.app/",
    resume:
      "Un sitio web sobre el clima hecho con React y Tailwind que utiliza una API para mostrar información meteorológica en tiempo real.",
  
  },
  {
    imageSrc: "./socialApp.png",
    title: "Social App",
    description: "Red social",
    techStack: ["React", "Node Js", "Tailwind", "MongoDB", "Firebase"],
    repositoryLink: "https://github.com/aleagra/SocialApp",
    liveDemoLink: "https://social-application.web.app",
    resume:
      "Una red social construida con React y Tailwind, respaldada por una base de datos de Node.js y MySql para conectarse con amigos.",

  },
];
export const skills = [
  { name: "React.js", imgSrc: React.createElement(DiReact,{size:46}) },
  { name: "HTML", imgSrc: React.createElement(DiHtml5,{size:46}) },
  { name: "CSS", imgSrc: React.createElement(DiCss3,{size:46}) },
  { name: "Node.js", imgSrc: React.createElement(DiNodejsSmall,{size:46}) },
  { name: "JavaScript", imgSrc: React.createElement(DiJavascript1,{size:46}) },
  { name: "MySQL", imgSrc: React.createElement(GrMysql,{size:46}) },
  { name: "Mongo DB", imgSrc: React.createElement(DiMongodb,{size:46}) },
  { name: "TailwindCss", imgSrc: React.createElement(BiLogoTailwindCss,{size:46}) },
  { name: "Bootstrap", imgSrc: React.createElement(DiBootstrap,{size:46}) },
  { name: "SASS", imgSrc: React.createElement(DiSass,{size:46}) },
  { name: "Firebase", imgSrc: React.createElement(BiLogoFirebase,{size:46}) },
  { name: "Postman", imgSrc: React.createElement(SiPostman,{size:44}) },
  { name: "TypeScript", imgSrc: React.createElement(BiLogoTypescript,{size:46}) },
  { name: "Git",  imgSrc: React.createElement(DiGit,{size:52}) },
  { name: "GitHub", imgSrc: React.createElement(BiLogoGithub,{size:46}) },
  { name: "PHP", imgSrc: React.createElement(SiPhp,{size:46}) },
];

export const links = [
  { ref: "#About", title: "Sobre mi", arialabel: "Sobre mi" },
  {
    ref: "#Proyects",
    title: "Proyectos",
    arialabel: "Proyectos",
  },
  {
    ref: "#Skills",
    title: "Habilidades",
    arialabel: "Habilidades",
  },
  {
    ref: "#Contact",
    title: "Contacto",
    arialabel: "Contacto",
  },
];

export const footer = [
  {
    href: "https://www.linkedin.com/in/alejandro-agra/",
    text: "Linkedin",
    icon:  React.createElement(BiLogoLinkedin,{size:20}) ,
    index: 6,
    arialabel: "Linkedin",
  },
  {
    href: "https://github.com/aleagra",
    text: "Github",
    icon: React.createElement(BiLogoGithub,{size:20}),
    index: 7,
    arialabel: "Github",
  },
  {
    href: "mailto:aleagrat5@gmail.com?subject=Asunto del correo electrónico&body=",
    text: "Correo",
    icon: React.createElement(BiLogoGmail,{size:20}),
    index: 8,
    arialabel: "Mail",
  },
];

