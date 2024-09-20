import styles from "./page.module.css";
import Image from "next/image";
import houseRent from "./img/houseRent.png";
import mega from "./img/mega.png";
import toDo from "./img/toDo.png";
import drOdonto from "./img/drOdonto.png";
import reccetekk from "./img/reccetekk.png";

let projetos = [
    {
        nome: "House Rent",
        src: "https://site-em-grupo-senac-2.vercel.app/",
        img: houseRent
    },
    {
        nome: "Mega",
        src: "https://mega-eosin.vercel.app/",
        img: mega
    },
    {
        nome: "To-Do-List",
        src: "https://to-do-list-theta-self.vercel.app/",
        img: toDo
    },
    {
        nome: "Dr-Odonto",
        src: "https://site-pi-phi.vercel.app/",
        img: drOdonto
    },
    {
        nome: "Reccetekk's",
        src: "https://reccetekk-s.vercel.app/",
        img: reccetekk
    }
];

export default function Projetos() {
    return (
        <div className={styles.projetos}>
            {projetos.map((projeto, index) => (
                <a key={index} className={styles.projeto} href={projeto.src} target="_blank">
                    <Image
                        src={projeto.img}
                        width={250}
                        height={150}
                        alt={projeto.nome}
                    />
                    <h3>{projeto.nome}</h3>
                </a>
            ))}
        </div>
    );
}
