import styles from "./LandingPage.module.css";
import imgLogo from "../../utils/assets/logo-connect-solutions.png";
import imgConnect from "../../utils/assets/imagem-por-que-connect.jpg";
import Accordion from "../../components/accordion/accordion";
import imgVannBora from "../../utils/assets/vann-bora-background.jpg";

function LandingPage() {
    const items = [
        {
            header: 'Quais serviços vocês oferecem?',
            content: 'O carro-chefe da Connect Solutions é o Vann Bora, um sistema de gerenciamento financeiro para motoristas de vans escolares. Com ele, é possível acompanhar facilmente quem está com pagamentos em dia ou em atraso, além de outros indicadores essenciais para otimizar o dia a dia do motorista. Conheça mais na seção "Produtos" do nosso site!'
        },
        { header: 'Como posso solicitar uma cotação ou orçamento?', content: 'Para solicitar nossos serviços, entre em contato pelo e-mail connect.solutions.sptech@gmail.com. Estamos empolgados para conhecer você, e nos mantemos à sua disposição para esclarecer todas as dúvidas!' },
        { header: 'Vocês oferecem treinamento para o uso das soluções?', content: 'Sim! Nosso time preparou um material completo em forma de um “manual de uso”, construido de forma intuitiva para ajudá-lo a usar nossa solução com facilidade. Se surgir qualquer dúvida enquanto você usa o Vann Bora, não hesite em nos contatar! Você pode falar com nossa equipe de especialistas pelo e-mail: connect.solutions.sptech@gmail.com' },
    ];
    return (
        <>
            <div className={styles["header"]}>
                <div className={styles["buttonsLeft"]}>
                    <button>Sobre Nós</button>
                    <button onClick={() => document.getElementById('por-que-escolher-a-connect').scrollIntoView({ behavior: 'smooth' })}>Por Que Connect?</button>
                </div>

                <div className={styles["logoCenter"]}>
                    <img src={imgLogo} alt="Logo da Connect Solutions gerado por IA " />
                </div>

                <div className={styles["buttonsRight"]}>
                    <button onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>Produtos</button>
                    <button onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}>Perguntas Frequentes</button>
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
                                <button onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>Conheça!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------------------------------- */}

            <div id="por-que-escolher-a-connect" className={styles["por-que-escolher-a-connect"]}>
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

            <div id="products" className={styles["section-products"]}>
                <div className={"container"}>
                    <div className={styles["section-products-content"]}>
                        <div className={styles["cabecalho"]}>
                            <span>Produtos</span>
                        </div>

                        <div className={styles["products-content"]}>
                            {/* <div className={styles["button"]}>
                                <button>b</button>
                            </div> */}

                            <div className={styles["img"]}>
                                <img src={imgVannBora} alt="Imagem Vann Bora gerado por IA " />
                            </div>

                            <div className={styles["text-vann-bora"]}>
                                <div className={styles["title-vann-bora"]}>
                                    <h1>Vann Bora</h1>
                                </div>
                                <div className={styles["about-vann-bora"]}>
                                    <p>O VannBora é a solução ideal para motoristas de vans escolares!</p>
                                    <p>Com ele, você controla facilmente os pagamentos dos alunos, visualizando quem está em dia ou com mensalidades em atraso. </p>
                                    <p>Tudo de forma simples e rápida, para tornar sua rotina mais prática e organizada!</p>
                                </div>
                                <div className={styles["button-saiba-mais-vann-bora"]}>
                                    <button>Saiba Mais!</button>
                                </div>
                            </div>



                            {/* <div className={styles["button"]}>
                                <button>f</button>
                            </div> */}
                        </div>

                        {/* <div className={styles["products-cicles"]}>
                            <div className={styles["cicle"]}></div>
                            <div className={styles["cicle"]}></div>
                            <div className={styles["cicle"]}></div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------------ */}

            <div id="faq" className={styles["section-faq"]}>
                <div className={"container"}>
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
                <div className={"container"}>
                    <div className={styles["footer-content"]}>
                        <div className={styles["logo"]}>
                            <img src={imgLogo} alt="Logo da Connect Solutions gerado por IA "
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            />
                        </div>

                        <div className={styles["footer-block"]}>
                            <div className={styles["title-footer"]}>
                                <h1>Serviços</h1>
                            </div>
                            <div className={styles["footer-servicos"]}>
                                <button>Termos de Serviço</button>
                                <button>Política de Privacidade</button>
                            </div>
                        </div>

                        <div className={styles["footer-block"]}>
                            <div className={styles["title-footer"]}>
                                <h1>FAQ</h1>
                            </div>
                            <div className={styles["footer-faq"]}>
                                <button>Sobre Nós</button>
                                <button onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}>Perguntas Frequentes</button>
                            </div>
                        </div>

                        <div className={styles["footer-block"]}>
                            <div className={styles["title-footer"]}>
                                <h1>Contato</h1>
                            </div>
                            <div className={styles["footer-contato"]}>
                                <span>connect.solutions@gmail.com</span>
                                {/* <span>(11) 90000-0000</span> */}
                                <span>(11) 0000-0000</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
export default LandingPage;