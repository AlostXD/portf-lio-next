import styles from "./page.module.css";



let formacoes = [
    {
        nome: "Sistemas da Informação",
        instituicao: "UNIPAM",
        dateI: "02/02/2024",
        dateF: "02/02/2028",
        tempoT: "4 anos",
        tipo: "Bacharelado"
    },
    {
        nome: "Análise e Desenvolvimento de Sistemas",
        instituicao: "UNIPAM",
        dateI: "10/04/2024",
        dateF: "10/04/2027 (Trancado)",
        tempoT: "3 anos",
        tipo: "Superior Tecnólogo"
    },
    {
        nome: "Programdor Web",
        instituicao: "Senac Minas",
        dateI: "16/11/2022",
        dateF: "28/03/2023",
        tempoT: "4 meses",
        tipo: "Técnico"
    },
    {
        nome: "Inglês",
        instituicao: "Cebrac Minas",
        dateI: "15/03/2021",
        dateF: "15/11/2022",
        tempoT: "1 ano e 8 meses",
        tipo: "Curso"
    }
]

export default function Formacoes() {
    return (
        <div className={styles.formacoes}>
            {formacoes.map((formacao, index) => (
                <div key={index} className={styles.formacao}>
                    <h3>{formacao.nome}</h3>
                    <h4>{formacao.instituicao}</h4>
                    <p>
                        <b>Início:</b> {formacao.dateI} <br />
                        <b>Fim:</b> {formacao.dateF} <br />
                        <b>Duração:</b> {formacao.tempoT} <br />
                        <b>Tipo: </b> {formacao.tipo}
                    </p>
                </div>
            ))}
        </div>
    );
}