import { GitIcon } from "./icons";

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
      hoverColor: "#14203f",
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
      hoverColor: "#403985",
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
      hoverColor: "#425bb4",
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
      hoverColor: "#f95a5f",
    },
  ];
  export const skills = [
    { name: "React JS", imgSrc: "react.svg" },
    { name: "HTML", imgSrc: "html.svg" },
    { name: "CSS", imgSrc: "css.svg" },
    { name: "Node JS", imgSrc: "node.svg" },
    { name: "JavaScript", imgSrc: "javascript.svg" },
    { name: "MySQL", imgSrc: "mysql.svg" },
    { name: "Mongo DB", imgSrc: "mongo.svg" },
    { name: "Tailwind", imgSrc: "tailwind.svg" },
    { name: "Bootstrap", imgSrc: "bootstrap.svg" },
    { name: "SASS", imgSrc: "sass.svg" },
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
  
  export const footer =[
    {
      href: "https://www.linkedin.com/in/alejandro-agra/",
      text: "Linkedin",
      icon:"<GitIcon/>",
      index: 6,
      arialabel: "Linkedin",
    },
    {
      href: "https://github.com/aleagra",
      text: "Github",
      icon: "<GitIcon />",
      index: 7,
      arialabel: "Github",
    },
    {
      href: "mailto:aleagrat5@gmail.com?subject=Asunto del correo electrónico&body=",
      text: "Correo",
      icon: "<MailIcon />",
      index: 8,
      arialabel: "Mail",
    },
  ]