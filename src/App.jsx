import myPicture from "../src/assets/logo.webp";
import SplitText from "./components/Text";
import TrueFocus from "./components/Text2";
import myFt from "../src/assets/pessoa.png";
import HTML from "../src/assets/html.svg";
import CSS from "../src/assets/css.svg";
import Js from "../src/assets/js.svg";
import ReactImg from "../src/assets/react.svg";
import Tcss from "../src/assets/tcss.svg";
import Git from "../src/assets/git.svg";
import GitHub from "../src/assets/github.svg";
import { useState } from "react";
import React from "react";
import HTMLv from "../src/assets/htmlv.svg";
import CSSv from "../src/assets/cssv.svg";
import Jsv from "../src/assets/jsv.svg";
import Reactv from "../src/assets/reactv.svg";
import Linkedin from "../src/assets/linkedin.svg";
import Gh from "../src/assets/gh.svg";
import Email from "../src/assets/envelope.png";
import calc from "../src/assets/calc.jpeg";
import calcImc from "../src/assets/calcImc.jfif";
import comercio from "../src/assets/comercio.jpeg";
import x from "../src/assets/x.svg";
import menu from "../src/assets/3.svg";

function App() {
  const [isVisibleHtml, setIsVisibleHtml] = useState(false);
  const [isVisibleCss, setIsVisibleCss] = useState(false);
  const [isVisibleJs, setIsVisibleJs] = useState(false);
  const [isVisibleReact, setIsVisibleReact] = useState(false);
  const [isVisibleT, setIsVisibleT] = useState(false);
  const [isVisibleGit, setIsVisibleGit] = useState(false);
  const [isVisibleGh, setIsVisibleGh] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  

  return (
    <div className="bg-zinc-900 h-full">
      <div className="flex justify-between lg:justify-evenly items-center p-2">
        <img
          className="hidden lg:flex w-30 lg:w-48 lg:mt-2"
          src={myPicture}
          alt="logo-GP"
        />
        <ul className="hidden lg:flex lg:gap-26">
          <a href="#">
            <li className="text-lg text-white font-poppins opacity-50 transition-all cursor-pointer duration-[500ms] hover:scale-115 hover:opacity-100">
              Início
            </li>
          </a>
          <a href="#Sobre">
            <li className="text-lg text-white font-poppins opacity-50 transition-all cursor-pointer duration-[500ms] hover:scale-115 hover:opacity-100">
              Sobre
            </li>
          </a>
          <a href="#Habilidades">
            <li className="text-lg text-white font-poppins opacity-50 transition-all cursor-pointer duration-[500ms] hover:scale-115 hover:opacity-100">
              Habilidades
            </li>
          </a>
          <a href="#Projetos">
            <li className="text-lg text-white font-poppins opacity-50 transition-all cursor-pointer duration-[500ms] hover:scale-115 hover:opacity-100">
              Projetos
            </li>
          </a>
        </ul>

        <a href="#Contatos">
          <div className="ml-10 hidden lg:flex">
            <button className="p-[3px] cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins text-lg hover:bg-transparent">
                Contato
              </div>
            </button>
          </div>
        </a>

        <div
          className={`transition-all ${
            isVisibleMenu ? "flex" : "hidden"
          } lg:hidden flex-col fixed top-0 left-0 w-full h-full bg-black-80 justify-center items-center z-1000`}
        >
          <div
            onClick={() => setIsVisibleMenu(!isVisibleMenu)}
            className="cursor-pointer mb-12"
          >
            <img src={x} alt="" />
          </div>
          <ul className="flex flex-col  lg:hidden gap-6 mb-96 lg:gap-26">
            <a href="#">
              <li className="text-lg text-white font-poppins border-b-2 border-amber-50 transition-all cursor-pointer duration-[500ms] hover:scale-115 hover:opacity-100">
                Início
              </li>
            </a>
            <a href="#Sobre">
              <li className="text-lg text-white font-poppins border-b-2 border-amber-50 transition-all cursor-pointer duration-[500ms] hover:scale-115 hover:opacity-100">
                Sobre
              </li>
            </a>
            <a href="#Habilidades">
              <li className="text-lg text-white font-poppins border-b-2 border-amber-50 transition-all cursor-pointer duration-[500ms] hover:scale-115 hover:opacity-100">
                Habilidades
              </li>
            </a>
            <a href="#Projetos">
              <li className="text-lg text-white font-poppins border-b-2 border-amber-50 transition-all cursor-pointer duration-[500ms] hover:scale-115 hover:opacity-100">
                Projetos
              </li>
            </a>
            <a href="#Contatos">
              <li className="text-lg text-white font-poppins border-b-2 border-amber-50 transition-all cursor-pointer duration-[500ms] hover:scale-115 hover:opacity-100">
                Contatos
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="flex justify-between px-6 lg:hidden">
        <img className="w-32" src={myPicture} alt="" />
        <button
          onClick={() => setIsVisibleMenu(!isVisibleMenu)}
          className="flex items-center justify-center cursor-pointer bg-zinc-800 px-2 py-0.5 rounded-3xl hover:opacity-70"
        >
          <img src={menu} alt="" />
        </button>
      </div>
      <div className="flex justify-between">
        <div className="items-center justify-center px-4 lg:ml-56 mt-24">
          <SplitText
            text="Olá, eu sou o"
            className="text-lg lg:text-4xl font-poppins text-white text-center"
            delay={0}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <br />
          <SplitText
            text="Gabriel Pimenta!"
            className="text-2xl lg:text-5xl font-poppins font-bold text-red-600 text-center"
            delay={180}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.5}
            rootMargin="-50px"
          />
          <div className="mt-1 lg:mt-2">
            <TrueFocus
              sentence="Desenvolvedor Front-End"
              manualMode={false}
              blurAmount={1.5}
              borderColor="red"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
            <div className="flex gap-7 mt-6">
              <div className="">
                <button className="p-[3px] cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 to-green-300 rounded-lg" />
                  <div className="px-2 py-1 lg:px-8 lg:py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins lg:text-lg hover:bg-transparent">
                    Download CV
                  </div>
                </button>
              </div>
              <a target="_blank" href="https://wa.me/980284425 ">
                <div className="">
                  <button className="p-[3px] cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 to-green-300 rounded-lg" />
                    <div className="px-1.5 py-1 w-30 lg:w-auto lg:px-8 lg:py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins  lg:text-lg hover:bg-transparent">
                      Entre em contato
                    </div>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-64 lg:w-86 lg:mr-56 mt-40 lg:mt-18 animate-bounce"
            src={myFt}
            alt="minha-foto"
          />
        </div>
      </div>
      <div
        id="Sobre"
        className="flex flex-col justify-center items-center mt-36 lg:mt-20"
      >
        <h1 className="text-2xl lg:text-4xl text-red-600 font-bold bg-gradient-to-r from-green-400 to-red-500 bg-no-repeat bg-[length:100%_3px] bg-[position:left_bottom] border-b-3 border-transparent pb-3">
          Sobre Mim
        </h1>
        <div
          id="Habilidades"
          className="font-poppins text-white px-4 w-88 lg:text-lg flex items-center justify-center lg:w-260 leading-12 mt-3"
        >
          <p>
            Sou um desenvolvedor Front-end com experiência em HTML, CSS,
            JavaScript, React, Styled Components, TailwindCSS, versionamento de
            código e consumo de APIs REST. Cursando Ánalise e Desenvolvimento de
            Sistemas, cursando Especialização em Programação Full-Stack na
            Instituição DevClub e cursando Inglês na English Live.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-50 mb-50">
        <h1 className="text-2xl lg:text-4xl text-red-600 font-bold bg-gradient-to-r from-green-400 to-red-500 bg-no-repeat bg-[length:100%_3px] bg-[position:left_bottom] border-b-3 border-transparent pb-3">
          Habilidades
        </h1>
        <div className="flex gap-10 mt-16 px-40 flex-wrap">
          <div
            onClick={() => setIsVisibleHtml(!isVisibleHtml)}
            className="flex flex-col gap-2 items-center w-32 h-32 cursor-pointer bg-[linear-gradient(90deg,_rgba(205,_2,_21,_1)_0%,_rgba(145,_0,_31,_1)_100%)] rounded-tl-[40px] border-b-2 border-b-green-400 duration-[1000ms] hover:scale-115"
          >
            <p className="text-lg font-extrabold text-white mt-4">HTML5</p>
            <img className="w-12.5" src={HTML} alt="logo-html" />
          </div>
          <div
            onClick={() => setIsVisibleCss(!isVisibleCss)}
            className="flex flex-col gap-2 items-center w-32 h-32 cursor-pointer bg-[linear-gradient(90deg,_rgba(205,_2,_21,_1)_0%,_rgba(145,_0,_31,_1)_100%)] rounded-tl-[40px] border-b-2 border-b-green-400 duration-[1000ms] hover:scale-115"
          >
            <p className="text-lg font-extrabold text-white mt-4">CSS3</p>
            <img className="w-12.5" src={CSS} alt="logo-css" />
          </div>
          <div
            onClick={() => setIsVisibleJs(!isVisibleJs)}
            className="flex flex-col gap-2 items-center w-32 h-32 cursor-pointer bg-[linear-gradient(90deg,_rgba(205,_2,_21,_1)_0%,_rgba(145,_0,_31,_1)_100%)] rounded-tl-[40px] border-b-2 border-b-green-400 duration-[1000ms] hover:scale-115"
          >
            <p className="text-lg font-extrabold text-white mt-4">JavaScript</p>
            <img className="w-12.5" src={Js} alt="logo-javascript" />
          </div>
          <div
            onClick={() => setIsVisibleReact(!isVisibleReact)}
            className="flex flex-col gap-2 items-center w-32 h-32 cursor-pointer bg-[linear-gradient(90deg,_rgba(205,_2,_21,_1)_0%,_rgba(145,_0,_31,_1)_100%)] rounded-tl-[40px] border-b-2 border-b-green-400 duration-[1000ms] hover:scale-115"
          >
            <p className="text-lg font-extrabold text-white mt-4">React</p>
            <img className="w-12.5" src={ReactImg} alt="logo-reactjs" />
          </div>
          <div
            onClick={() => setIsVisibleT(!isVisibleT)}
            className="flex flex-col gap-2 items-center w-32 h-32 cursor-pointer bg-[linear-gradient(90deg,_rgba(205,_2,_21,_1)_0%,_rgba(145,_0,_31,_1)_100%)] rounded-tl-[40px] border-b-2 border-b-green-400 duration-[1000ms] hover:scale-115"
          >
            <p className="text-lg font-extrabold text-white mt-4">Tailwind</p>
            <img className="w-12.5" src={Tcss} alt="logo-tailwindcss" />
          </div>
          <div
            onClick={() => setIsVisibleGit(!isVisibleGit)}
            className="flex flex-col gap-2 items-center w-32 h-32 cursor-pointer bg-[linear-gradient(90deg,_rgba(205,_2,_21,_1)_0%,_rgba(145,_0,_31,_1)_100%)] rounded-tl-[40px] border-b-2 border-b-green-400 duration-[1000ms] hover:scale-115"
          >
            <p className="text-lg font-extrabold text-white mt-4">Git</p>
            <img className="w-12.5" src={Git} alt="logo-git" />
          </div>
          <div
            onClick={() => setIsVisibleGh(!isVisibleGh)}
            className="flex flex-col gap-2 items-center w-32 h-32 cursor-pointer bg-[linear-gradient(90deg,_rgba(205,_2,_21,_1)_0%,_rgba(145,_0,_31,_1)_100%)] rounded-tl-[40px] border-b-2 border-b-green-400 duration-[1000ms] hover:scale-115"
          >
            <p className="text-lg font-extrabold text-white mt-4">GitHub</p>
            <img className="w-12.5" src={GitHub} alt="logo-github" />
          </div>
        </div>
      </div>
      <div
        className={`transition-all ${
          isVisibleHtml ? "flex" : "hidden"
        } flex-col fixed top-0 left-0 w-screen h-full bg-black-80 justify-center items-center z-1000 gap-5`}
      >
        <img src={HTML} alt="logo-html" />
        <div className="w-64 lg:w-180">
          <p className="font-poppins text-2xl text-white">
            <span className="text-red-600 font-extrabold">HTML</span> (Hypertext
            Markup Language) é uma linguagem de marcação que define a estrutura
            e o significado do conteúdo de uma página web. É o componente básico
            da web, permitindo a criação de websites e a inserção de conteúdos
            como imagens e vídeos.
          </p>
        </div>
        <button
          onClick={() => setIsVisibleHtml(!isVisibleHtml)}
          className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins text-lg hover:bg-transparent">
            Voltar
          </div>
        </button>
      </div>
      <div
        className={`transition-all ${
          isVisibleCss ? "flex" : "hidden"
        } flex-col fixed top-0 left-0 w-screen h-full bg-black-80 justify-center items-center z-1000 gap-5`}
      >
        <img src={CSS} alt="logo-css" />
        <div className="w-64 lg:w-180">
          <p className="font-poppins text-2xl text-white">
            <span className="text-red-600 font-extrabold">CSS</span> é chamado
            de linguagem Cascading Style Sheet e é usado para estilizar
            elementos escritos em uma linguagem de marcação como HTML. O CSS
            separa o conteúdo da representação visual do site. Utilizando o CSS
            é possível alterar a cor do texto e do fundo, fonte e espaçamento
            entre parágrafos. Também pode criar tabelas, usar variações de
            layouts, ajustar imagens para suas respectivas telas e assim por
            diante.
          </p>
        </div>
        <button
          onClick={() => setIsVisibleCss(!isVisibleCss)}
          className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins text-lg hover:bg-transparent">
            Voltar
          </div>
        </button>
      </div>
      <div
        className={`transition-all ${
          isVisibleJs ? "flex" : "hidden"
        } flex-col fixed top-0 left-0 w-screen h-full bg-black-80 justify-center items-center z-1000 gap-5`}
      >
        <img src={Js} alt="logo-javacript" />
        <div className="w-64 lg:w-180">
          <p className="font-poppins text-2xl text-white">
            <span className="text-red-600 font-extrabold">JavaScript</span> é
            uma linguagem de programação usada para fazer páginas interativas da
            Internet. As funções de JavaScript podem melhorar a experiência do
            usuário durante a navegação em um site, como, por exemplo, desde a
            atualização do feed na página da mídia social até a exibição de
            animações e mapas interativos.
          </p>
        </div>
        <button
          onClick={() => setIsVisibleJs(!isVisibleJs)}
          className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins text-lg hover:bg-transparent">
            Voltar
          </div>
        </button>
      </div>
      <div
        className={`transition-all ${
          isVisibleReact ? "flex" : "hidden"
        } flex-col fixed top-0 left-0 w-screen h-full bg-black-80 justify-center items-center z-1000 gap-5`}
      >
        <img src={ReactImg} alt="logo-react" />
        <div className="w-64 lg:w-180">
          <p className="font-poppins text-2xl text-white">
            <span className="text-red-600 font-extrabold">React</span> é um
            framework JavaScript criado pelo Facebook (atual Meta) que é usado
            para criar interfaces de usuário (UI) em aplicativos web. Ele é
            popular por ser fácil de usar, altamente flexível e escalável, e é
            usado por muitas empresas de tecnologia, incluindo o Facebook,
            Instagram e Airbnb.
          </p>
        </div>
        <button
          onClick={() => setIsVisibleReact(!isVisibleReact)}
          className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins text-lg hover:bg-transparent">
            Voltar
          </div>
        </button>
      </div>
      <div
        className={`transition-all ${
          isVisibleT ? "flex" : "hidden"
        } flex-col fixed top-0 left-0 w-screen h-full bg-black-80 justify-center items-center z-1000 gap-5`}
      >
        <img src={Tcss} alt="logo-tailwindcss" />
        <div className="w-64 lg:w-180">
          <p className="font-poppins text-2xl text-white">
            <span className="text-red-600 font-extrabold">Tailwind</span> é um
            framework CSS de código aberto que se destaca por sua abordagem
            única de design utilitário. Ele fornece uma série de classes
            utilitárias que podem ser diretamente aplicadas aos elementos HTML
            para estilizá-los. Essas classes representam propriedades CSS
            individuais, como margens, preenchimentos, cores, tamanhos de fonte,
            alinhamentos...
          </p>
        </div>
        <button
          onClick={() => setIsVisibleT(!isVisibleT)}
          className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins text-lg hover:bg-transparent">
            Voltar
          </div>
        </button>
      </div>
      <div
        className={`transition-all ${
          isVisibleGit ? "flex" : "hidden"
        } flex-col fixed top-0 left-0 w-screen h-full bg-black-80 justify-center items-center z-1000 gap-5`}
      >
        <img src={Git} alt="logo-git" />
        <div className="w-64 lg:w-180">
          <p className="font-poppins text-2xl text-white">
            <span className="text-red-600 font-extrabold">Git</span> é um
            sistema de controle de versão (VCS) distribuído, de código aberto e
            gratuito. É uma das ferramentas mais populares do mundo.
          </p>
        </div>
        <button
          onClick={() => setIsVisibleGit(!isVisibleGit)}
          className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins text-lg hover:bg-transparent">
            Voltar
          </div>
        </button>
      </div>
      <div
        className={`transition-all ${
          isVisibleGh ? "flex" : "hidden"
        } flex-col fixed top-0 left-0 w-screen h-full bg-black-80 justify-center items-center z-1000 gap-5`}
      >
        <img src={GitHub} alt="logo-github" />
        <div className="w-64 lg:w-180">
          <p className="font-poppins text-2xl text-white">
            <span className="text-red-600 font-extrabold">GitHub</span> é uma
            plataforma online que permite criar, compartilhar e colaborar na
            escrita de códigos. É também conhecida como "rede social de código
            aberto" ou "rede social dos programadores".
          </p>
        </div>
        <button
          onClick={() => setIsVisibleGh(!isVisibleGh)}
          className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins text-lg hover:bg-transparent">
            Voltar
          </div>
        </button>
      </div>
      <div
        id="Projetos"
        className="shadow-[0_10px_50px_rgba(128,_128,_128,_1)] mt-20 flex flex-col items-center justify-center"
      >
        <h1 className="mt-25 font-extrabold italic text-4xl text-red-600 bg-gradient-to-r to-green-400 from-red-500 bg-no-repeat bg-[length:100%_3px] bg-[position:left_bottom] border-b-3 border-transparent pb-3">
          Projetos
        </h1>
        <div className="grid grid-cols-1 px-2 lg:grid-cols-3 gap-36 py-30">
          <div
            onClick={() => setIsVisible1(!isVisible1)}
            className="w-90 h-60 lg:w-100 lg:h-75 flex flex-col items-center justify-center rounded-3xl bg-image-1 opacity-50 duration-[500ms] hover:scale-110 hover:opacity-100 cursor-pointer"
          >
            <p className="text-2xl font-bold text-black italic">Calculadora</p>
            <div className="flex">
              <img className="w-8" src={HTMLv} alt="icone-html" />
              <img className="w-8" src={CSSv} alt="icone-html" />
              <img className="w-8" src={Jsv} alt="icone-html" />
            </div>
          </div>
          <div
            onClick={() => setIsVisible2(!isVisible2)}
            className="ww-90 h-60 lg:w-100 lg:h-75 flex flex-col items-center justify-center rounded-3xl bg-image-2 opacity-50 duration-[500ms] hover:scale-110 hover:opacity-100 cursor-pointer"
          >
            <p className="text-2xl font-bold text-black italic">
              Calculadora IMC
            </p>
            <div className="flex">
              <img className="w-8" src={HTMLv} alt="icone-html" />
              <img className="w-8" src={CSSv} alt="icone-html" />
              <img className="w-8" src={Jsv} alt="icone-html" />
            </div>
          </div>
          <div
            onClick={() => setIsVisible3(!isVisible3)}
            className="w-90 h-60 lg:w-100 lg:h-75 flex flex-col items-center justify-center rounded-3xl bg-image-3 opacity-50 duration-[500ms] hover:scale-110 hover:opacity-100 cursor-pointer"
          >
            <p className="text-2xl font-bold text-black italic">
              Comércio Eletrônico
            </p>
            <div className="flex">
              <img className="w-8" src={HTMLv} alt="icone-html" />
              <img className="w-8" src={CSSv} alt="icone-html" />
              <img className="w-8" src={Jsv} alt="icone-html" />
            </div>
          </div>
          <div className="w-90 h-60 lg:w-100 lg:h-75 flex flex-col items-center justify-center rounded-3xl bg-image opacity-50 duration-[500ms] hover:scale-110 hover:opacity-100 cursor-pointer">
            <p className="text-2xl font-bold text-black italic">
              Pepper's Weather
            </p>
            <div className="flex">
              <img className="w-8" src={HTMLv} alt="icone-html" />
              <img className="w-8" src={CSSv} alt="icone-html" />
              <img className="w-8" src={Jsv} alt="icone-html" />
              <img className="w-8" src={Reactv} alt="icone-html" />
            </div>
          </div>
          <div className="w-90 h-60 lg:w-100 lg:h-75 flex flex-col items-center justify-center rounded-3xl bg-image opacity-50 duration-[500ms] hover:scale-110 hover:opacity-100 cursor-pointer">
            <p className="text-2xl font-bold text-black italic">
              Cadastro de Usuários
            </p>
            <div className="flex">
              <img className="w-8" src={HTMLv} alt="icone-html" />
              <img className="w-8" src={CSSv} alt="icone-html" />
              <img className="w-8" src={Jsv} alt="icone-html" />
              <img className="w-8" src={Reactv} alt="icone-html" />
            </div>
          </div>
          <div className="w-90 h-60 lg:w-100 lg:h-75 flex flex-col items-center justify-center rounded-3xl bg-image opacity-50 duration-[500ms] hover:scale-110 hover:opacity-100 cursor-pointer">
            <p className="text-2xl font-bold text-black italic">PepBurguer</p>
            <div className="flex">
              <img className="w-8" src={HTMLv} alt="icone-html" />
              <img className="w-8" src={CSSv} alt="icone-html" />
              <img className="w-8" src={Jsv} alt="icone-html" />
              <img className="w-8" src={Reactv} alt="icone-html" />
            </div>
          </div>
        </div>
        <div
          className={`transition-all ${
            isVisible1 ? "flex" : "hidden"
          } flex-col fixed top-0 left-0 w-full h-full bg-black-80 justify-center items-center z-1000 gap-5`}
        >
          <div className="flex flex-col items-center justify-center bg-zinc-900 w-80 lg:w-200 p-10 rounded-3xl gap-1 lg:gap-4 ">
            <img
              className="w-64 lg:w-80 rounded-2xl border-4 border-black"
              src={calc}
              alt=""
            />
            <h1 className="text-lg lg:text-2xl text-red-600 font-extrabold">
              Calculadora
            </h1>
            <p className="lg:text-lg text-white font-poppins">
              Projeto totalmente responsivo, onde desenvolvi uma calculadora que
              tem diversas funcionalidas como: subtração, adição, divisão,
              multiplicação, apaga os digítos, apaga também o ultimo dígito...
              Foram utilizados HTML, CSS e JavaScript.
            </p>

            <div className="flex items-center justify-center gap-2 lg:gap-5">
              <a target="_blank" href="https://calc-project-2wty.vercel.app/">
                <button className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
                  <div className="px-1.5 py-0.5 lg:px-8 lg:py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins lg:text-lg hover:bg-transparent">
                    Acessar projeto
                  </div>
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/gpimenta07/calcProject"
              >
                <button className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
                  <div className="px-1.5 py-0.5 lg:px-8 lg:py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins lg:text-lg hover:bg-transparent">
                    Acessar repositório
                  </div>
                </button>
              </a>

              <div>
                <button
                  onClick={() => setIsVisible1(!isVisible1)}
                  className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
                  <div className="py-3 px-2 lg:px-8 lg:py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins lg:text-lg hover:bg-transparent">
                    Voltar
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`transition-all ${
            isVisible2 ? "flex" : "hidden"
          } flex-col fixed top-0 left-0 w-full h-full bg-black-80 justify-center items-center z-1000 gap-5`}
        >
          <div className="flex flex-col items-center justify-center bg-zinc-900 w-80 lg:w-200 p-10 rounded-3xl gap-4 ">
            <img
              className="w-64 rounded-2xl border-4 border-black"
              src={calcImc}
              alt=""
            />
            <h1 className="text-lg lg:text-2xl text-red-600 font-extrabold">
              Calculadora IMC
            </h1>
            <p className="lg:text-lg text-white font-poppins">
              Projeto totalmente responsivo, onde desenvolvi uma calculadora que
              realiza o cálculo do IMC (Índice de Massa Corporal) atráves dos
              dados obtidos pela resposta do usuário. Foram utilizados HTML, CSS
              e JavaScript.
            </p>

            <div className="flex gap-2 lg:gap-5">
              <a target="_blank" href="https://imc-calculo-five.vercel.app/">
                <button className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
                  <div className="px-1.5 py-0.5 lg:px-8 lg:py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins text-lg hover:bg-transparent">
                    Acessar projeto
                  </div>
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/gpimenta07/imc-calculo"
              >
                <button className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
                  <div className="px-1.5 py-0.5 lg:px-8 lg:py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins text-lg hover:bg-transparent">
                    Acessar repositório
                  </div>
                </button>
              </a>

              <div>
                <button
                  onClick={() => setIsVisible2(!isVisible2)}
                  className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
                  <div className="px-1.5 py-4 lg:px-8 lg:py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins text-lg hover:bg-transparent">
                    Voltar
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`transition-all ${
            isVisible3 ? "flex" : "hidden"
          } flex-col fixed top-0 left-0 w-full h-full bg-black-80 justify-center items-center z-1000 gap-5`}
        >
          <div className="flex flex-col items-center justify-center bg-zinc-900 w-80 lg:w-200 p-10 rounded-3xl gap-4 ">
            <img
              className="w-80 rounded-2xl border-4 border-black"
              src={comercio}
              alt=""
            />
            <h1 className="text-lg lg:text-2xl text-red-600 font-extrabold">
              Comércio Eletrônico
            </h1>
            <p className="lg:text-lg text-white font-poppins">
              Projeto Open-Source em que participei juntamente ao desenvolvedor{" "}
              <span className="text-red-600">Giulio Arantes</span>, onde ajudei
              a desenvolver um site de comércio, consumindo uma API. Foram
              utilizados HTML, CSS e JavaScript.
            </p>

            <div className="flex gap-2 lg:gap-5">
              <a target="_blank" href="https://e-commerce-chi-gilt.vercel.app/">
                <button className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
                  <div className="px-1.5 py-0.5 lg:px-8 lg:py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins text-lg hover:bg-transparent">
                    Acessar projeto
                  </div>
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/gpimenta07/e-commerce"
              >
                <button className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
                  <div className="px-1.5 py-0.5 lg:px-8 lg:py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins text-lg hover:bg-transparent">
                    Acessar repositório
                  </div>
                </button>
              </a>

              <div>
                <button
                  onClick={() => setIsVisible3(!isVisible3)}
                  className="p-[3px] mt-10 cursor-pointer relative rounded-lg shadow-[0_20px_50px_rgba(0,0,0,_1)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg" />
                  <div className="px-1.5 py-4 lg:px-8 lg:py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-poppins text-lg hover:bg-transparent">
                    Voltar
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="shadow-[0_10px_50px_rgba(128,_128,_128,_1)] w-full ">
          <div className="flex justify-between items-center px-8 lg:px-20 lg:mt-5 ">
            <div className="mr-32">
              <img className="lg:w-50" src={myPicture} alt="minha-logo" />
            </div>
            <div className="flex gap-3">
              <a target="_blank" href="https://www.linkedin.com/in/gpimenta07/">
                <img
                  className=" w-32 lg:w-12 duration-[500ms] hover:scale-110"
                  src={Linkedin}
                  alt="logo-linkedin"
                />
              </a>
              <a target="_blank" href="https://github.com/gpimenta07">
                <img
                  className="w-32 lg:w-12 duration-[500ms] hover:scale-110"
                  src={Gh}
                  alt="logo-github"
                />
              </a>
              <a target="_blank" href="mailto:gabrielcarvalhopimenta@gmail.com">
                <img
                  className="w-32 lg:w-12 rounded-2xl duration-[500ms] hover:scale-110"
                  src={Email}
                  alt="logo-email"
                />
              </a>
            </div>
          </div>

          <div
            id="Contatos"
            className="border-t-2 border-green-300 mx-8 lg:mx-24 mt-10 mb-10"
          >
            <p className="mt-10 lg:text-lg text-white leading-10 font-poppins">
              Este é meu Website e Portfólio. <br />
              Todos os trabalhos aqui foram desenvolvidos por{" "}
              <a href="#Sobre">
                <span className="text-red-600 cursor-pointer">
                  Gabriel Pimenta
                </span>
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
