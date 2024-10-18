import styles from "./LandingPage.module.css";
import imgLogo from "../../utils/assets/logo-connect-solutions.png";
import imgConnect from "../../utils/assets/imagem-por-que-connect.jpg";
import Accordion from "../../components/accordion/accordion";

function LandingPage() {
    const items = [
        { header: 'Quais serviços vocês oferecem?', 
            content: 'O carro-chefe da Connect Solutions é o Vann Bora, um sistema de gerenciamento financeiro para motoristas de vans escolares. Com ele, é possível acompanhar facilmente quem está com pagamentos em dia ou em atraso, além de outros indicadores essenciais para otimizar o dia a dia do motorista. Conheça mais na seção "Produtos" do nosso site!' },
        { header: 'Como posso solicitar uma cotação ou orçamento?', content: 'Para solicitar nossos serviços, entre em contato pelo e-mail connect.solutions.sptech@gmail.com. Estamos empolgados para conhecer você, e nos mantemos à sua disposição para esclarecer todas as dúvidas!' },
        { header: 'Vocês oferecem treinamento para o uso das soluções?', content: 'Sim! Nosso time preparou um material completo em forma de um “manual de uso”, construido de forma intuitiva para ajudá-lo a usar nossa solução com facilidade. Se surgir qualquer dúvida enquanto você usa o Vann Bora, não hesite em nos contatar! Você pode falar com nossa equipe de especialistas pelo e-mail: connect.solutions.sptech@gmail.com' },
    ];
    return (
        <>
            <div className={styles["header"]}>
                <div className={styles["buttonsLeft"]}>
                    <button>Sobre Nós</button>
                    <button>Por Que Connect?</button>
                </div>

                <div className={styles["logoCenter"]}>
                    <img src={imgLogo} alt="Logo da Connect Solutions gerado por IA " />
                </div>

                <div className={styles["buttonsRight"]}>
                    <button>Produtos</button>
                    <button>Perguntas Frequentes</button>
                </div>
            </div>

            {/* ------------------------------------------------ */}
            <div className={styles["background-image-institutional"]}>
                <div className={styles["container-background-image"]}>
                    <div className={styles["connect-content"]}>
                        <div className={styles["title-connect"]}>
                            <h1>Connect pessoas com tecnologia</h1>
                        </div>
                        <div className={styles["info-connect"]}>
                            <div className={styles["info-connect-text"]}>
                                <span>A Connect Solutions oferece soluções modernas em tecnologia!</span>
                            </div>
                            <div className={styles["info-connect-button"]}>
                                <button>Conheça!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------------------------------- */}

            <div className={styles["por-que-escolher-a-connect"]}>
                <div className={"container"}>
                    <div className={styles["por-que-escolher-a-connect-content"]}>
                        <div className={styles["div-text"]}>
                            <div className={styles["title"]}>
                                <h1>Por que escolher Connect Solutions?</h1>
                            </div>
                            <div className={styles["text-reasons"]}>
                                <div className={styles["circle"]}> <span>1 </span></div>
                                <div className={styles["reason"]}> Criatividade que move com segurança.</div>
                            </div>
                            <div className={styles["text-reasons"]}>
                                <div className={styles["circle"]}><span>2 </span></div>
                                <div className={styles["reason"]}> Tecnologia que conecta pessoas.</div>
                            </div>
                            <div className={styles["text-reasons"]}>
                                <div className={styles["circle"]}><span>3 </span></div>
                                <div className={styles["reason"]}> Soluções que transformam o futuro com inovação.</div>
                            </div>

                        </div>

                        <div className={styles["div-image"]}>
                            <img src={imgConnect} alt="Imagem de um notebook gerada por IA" />
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------ */}

            <div className={styles["section-products"]}>
                <div className={"container"}>
                    <div className={styles["products-content"]}>

                    </div>
                </div>
            </div>

            {/* ------------------------------------------------------ */}

            <div className={styles["section-faq"]}>
                <div className={styles["container"]}>
                    <div className={styles["faq-content"]}>
                        <div className={styles["title"]}>
                            <h1>Perguntas Frequentes</h1>
                        </div>
                        <div className={styles["item-accordion"]}>
                            <Accordion items={items} />
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------------------------------- */}
            <div className={styles["footer-section"]}>
                <div className={styles["container"]}>
                    <div className={styles["footer-content"]}>
                        <span>socorro deus</span>
                    </div>
                </div>

            </div>

        </>
    );
}
export default LandingPage;