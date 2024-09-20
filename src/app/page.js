import Image from "next/image";
import styles from "./page.module.css";
import profPic from "./img/Perfil.png"
import Formacoes from "./formacoes.js";
import Projetos from "./projetos.js";


export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.container}>
      <section className={styles.sectionsHome}>
        <div className={styles.contentHomeLeft}>
          <Image
            src={profPic}
            width={300}
            height={300}
            style={{ borderRadius: "50%" }}
            alt="Foto de perfil"
          />
          <div className={styles.contentHomeLeftText}>
            <h2>Vanderlei "Alost" Junio</h2>
            <h3>Developer</h3>
            <p>
              Sou um desenvolvedor cursando Sistemas da Informação na UNIPAM (Universidade de Patos de Minas)
            </p>
          </div>
        </div>

        <div className={styles.contentHomeRight}>
          <div className={styles.sobre}>
            <h2>Sobre</h2>
            <p>
            Me chamo Vanderlei, tenho 18 anos e estudo programação/desenvolvimento de Softwares desde os meus 15 anos.
            Estudo Sistemas da informação e Análise e desenvolvimento de sistemas no Centro Universitário de Patos de Minas (Unipam) 
            </p>
          </div>
          <div className={styles.skills}>
            <h2>Skills</h2>
            <li>Python</li>
            <li>C</li>
            <li>Javascript</li>
            <li>HTML & CSS</li>
            <li>React</li>
            <li>Next</li>
          </div>
          <div className={styles.linguagens}>
            <h2>Linguagens</h2>
            <li>Português // Nativo</li>
            <li>Inglês // Intermediário</li>
          </div>
        </div>
      </section>
      </div>
      <div className={styles.container}>
      <section className={styles.sectionsFormacoes}>
        <h1>Formações / Softskills</h1>
        <div className={styles.sectionFC}>
        <div className={styles.formacoesContent}>
          <h2 className={styles.centerText}>Formações</h2>
          <Formacoes />
        </div>
        <div className={styles.softContent}>
          <h2 className={styles.centerText}>Softskills / Extra</h2>
          <div className={styles.soft}>
          <h3>Softskills</h3>
          <ul>
            <li><b>Comunicação: </b>Comunicação é a chave para um bom funcionamento de projetos e da própria equipe. Sou uma pessoa que gosto de me comunicar com os demais membros.</li>
            <li><b>Liderança: </b>Durante meu aprendizado, liderei e coordenei algumas equipes de desenvolvimento para vários projetos, desde sites até a Bots para o Discord.</li>
            <li><b>Trabalho em Equipe: </b>Desenvolvi projetos na qual tinhamos uma equipe relativamente grande de 10+ membros.</li>
          </ul>
          </div>
          <div className={styles.lang}>
            <h3>Linguagens</h3>
            <ul>
              <li><b>Português // </b>Nativo</li>
              <li><b>Inglês //</b>Intermediário</li>
            </ul>
          </div>
        </div>
        </div>
      </section>
      </div>
      <div className={styles.container}>
        <section className={styles.sectionsProjetos}>
          <h2>Projetos</h2>
          <h4>Projetos desenvolvidos</h4>
          <div className={styles.projetosContent}>
            <Projetos />
          </div>
        </section>
      </div>
    </div>
  );
}
