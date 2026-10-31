
// 1. O "Banco de Dados" das suas páginas (coloquei o conteúdo resumido aqui para facilitar a leitura)
// 1. O "Banco de Dados" das suas páginas (Agora com o HTML completo!)
// ==========================================
// 1. BANCO DE DADOS DAS POESIAS
// ==========================================
const minhasPoesias = {
    "1": {
        tag: "Amor",
        titulo: "Rosa Mística",
        data: "2022",
        tempoLeitura: "2 min de leitura",
        exibirNaInicio: true,
        versos: `
            Debruço-me sobre tua lágrima.<br>
            Acolho tua dor em minha dor.<br>
            Tuas mãos em minhas mãos<br>
            Formam o calice em que te cubro, doce alma<br><br>
            
            Escuto a música do teu coração,<br>
            única sinfonia que agora existe.<br>
            Anuncia o teu clamor, doce alma,<br>
            como um suave tremor em que tu te apresentas ao amor.<br><br>
            
            Recebo-te, bela e calma,<br>
            entre os fios invisíveis que nos conectam,<br>
            para levar-te de volta a ti mesmo, grande alma.<br><br>
            
            Onde estavas que agora choras?<br>
            Por que voltaste quando a liberdade te espera?<br>
            Por que neste jardim te encerras,<br>
            quando és tu, a rosa mística?!<br><br>
            
            Acolho-te, alma em rosas,<br>
            quando as pétalas que te cobriam<br>
            deixam-se cair nos ventos que passam...<br><br>

            E por mim tu passas, mas permaneces.<br>
            E te espero, alma que bem quero,<br>
            para andarmos juntos além do arco-íris.<br><br>

            Debruço-me sobre tua lágrima,<br>
            e ao contemplar a luz do teu olhar,<br>
            o caminho colorido é refletido no céu<br>
            do nosso terno amor, alma em flor!<br><br>

            Receba-me como tua escolhida sombra,<br>
            em que tu adormeces envolta por silenciosa prece,<br>
            e te reencontras.
           
        `
    },
    "2": {
        tag: "Amor",
        titulo: "Oração",
        data: "Agosto de 2022",
        tempoLeitura: "1 min de leitura",
        exibirNaInicio: true,
        versos: `
            Oh, amor meu, te amarei com todo o meu viver,<br>
            minhas forças mais íntimas de darei,<br>
            te amarei em todo meu ser,<br>
            oh, meu amor, te amei, te amo, te amarei!<br><br>

            Meu a olhar a silenciosa prece a te envolver,<br>
            e ao te olhar me entregarei ao eterno amor,<br>
            sentirei a chama do mistério em seu ardor<br>
            contemplando na intimidade do nosso nascer<br><br>

            Oh, amado! Que me tenhas no teu desejo infinito,<br>
            que não cesse o beijo da ternura que nos preserva,<br>
            que me ames intensamente e sem reservas,<br>
            que sempre me escutes no silêncio do inaudito.<br><br>

            Te receberei no coração que me é imortal<br>
            e de amar-te seguirei no caminho das rosas,<br>
            porque me acolheste como a tua amorosa<br>
            e me entregaste a fonte da doçura eternal.<br>

            Amado, meu amor amado!<br>
            Que tu sintas que há um olhar a te contemplar,<br>
            que recebas essa oração incessante do amar,<br>
            porque já me tens nesse amor que é a ti dedicado.<br><br>
        `
    },

    "3": {
        tag: "Misterio",
        titulo: "Há Luz",
        data: "2017",
        tempoLeitura: "1 min de leitura",
        exibirNaInicio: true,
        versos: ` 
             Há seres que vestem faces<br>
             e termos e versos.<br>
             Desprendem-se de si<br>
             para tornarem-se Um.<br><br>

             Há seres que,<br>
             nus<br>
             perdem-se da forma<br>
             quebram as normas...<br>
             Qual a loucura de viver?<br><br>

             Há seres que São.<br>
             E esse Ser,<br>
             instiga<br>
             revolta<br>
             quebra padrão.<br><br>

             Nas faces e termos inventados,<br>
             programados pelo coração<br>
             há força,<br>
             há Voz,<br>
             há paixão!<br>
             Há seres que vêm<br>
             para transformar<br>
             pois sabem que sempre nós<br>
             nunca sós<br>
             somos todos irmãos!
         `
    },
    "4": {
        tag: "Misterio",
        titulo: "Divino",
        data: "2017",
        tempoLeitura: "1 min de leitura",
        exibirNaInicio: false, /* SÓ VAI APARECER NA PÁGINA POESIAS */
        versos: `
            Oh, meu Deus! Qual face te tem sombreado<br>
            o rosto que é deitado em toda a criação?!<br>
            Onde não estás, se cantas no vento,<br>
            se teu dizer inefável é sopro das árvores<br>
            que recebem silenciosamente tua saudação<br>
            e comunicam secretamente teu coração?!<br><br>

            Divino Espírito, onde não estás?<br>
            Se nos céus, nas flores e no mar,<br>
            na ternura do sol e da lua,<br>
            dos amantes que se prometem ao luar...<br><br>

            Se no silêcio tu és música, se em toda música<br>
            tu és bendito silêncio, és o anúncio calado<br>
            que enamora humildmente...<br>
            Meu Deus! Onde não estás?<br><br>
            
            Quando meu coração encontra outro,<br>
            tu abraças em nosso abraço, porque teus braços<br>
            já nos tocavam sob teu véu de amor e mistério.<br>
            Quando nossos olhos se alegram e se agitam,<br>
            quando choram e se buscam, tu já nos tem<br>
            contemplado, na terra e nos céus, em todo sempre.<br><br>

            Ah! Tu revestes a terra oferecendo aos céus.<br>
            Tu és todo-céu que esposa a terra,<br>
            e tudo o que há está para te amar.<br>
            Porque tu já amas, porque tu és tudo, porque és o<br>
            amor.

        `
    },
    "5": {
        tag: "Misterio",
        titulo: "Noturna",
        data: "2022",
        tempoLeitura: "2 min de leitura",
        exibirNaInicio: false, /* SÓ VAI APARECER NA PÁGINA POESIAS */
        versos: `
            A noite convida-me para bailar em sua claridade invisível,<br>
            em que os silêncios são suportados um no outro<br>
            e se misturam como que em musical encanto.<br><br>

            Escuto neste escuro que me afronta,<br>
            a voz suave que do centro da terra vem grave,<br>
            anunciar-me o seu nascer.<br><br>

            De dentro de mim abre-se ao mundo a profecia<br>
            dos céus interiores, que brotam como fontes estelares<br>
            nas constelações do coração.<br><br>

            Tal como um universo infinito sou atraída<br>
            pela pulsação cósmica das almas livres.<br>
            Vejo na claridade do espírito a luz que não findou.<br><br>

            Entrego-me ao chamado silencioso que invoca<br>
            minha liberdade e meu amor. E lanço-me ao abismo<br>
            das danças secretas que declamam o sagrado viver.

        `
    },
    "6": {
        tag: "Mistério",
        titulo: "O mistério da rosa",
        data: "2022",
        tempoLeitura: "1 min de leitura",
        exibirNaInicio: false, /* SÓ VAI APARECER NA PÁGINA POESIAS */
        versos: `
            Entrego-me a ti, doce melodia dos mistérios.<br>
            Toma-me por tuas mãos invisíveis<br>
            e ofereça-me aos teus silêncios.<br><br>

            Tu habitas as esferas todas,<br>
            Tu reúnes os espaços inifinitos,<br>
            Tu transbordas da luz e aqueces o sol.<br><br>

            Leva-me em ti, aos encantos divinos de tua releveção.<br>
            Acolha-me e não colherei a rosa dos céus.<br>
            A rosa florescerá na vida e na morte, em infinita ablação.
        `
    }


};

// ==========================================
// 2. O "MOLDE" DAS PÁGINAS DO SITE
// ==========================================
const paginas = {
    inicio: `
        <main class="segundadiv">
            <div class="tag-novidades">
                <span class="icone-brilho">✨</span>
                <span class="novaspoesias">Novas poesias toda semana</span>
            </div>
            <h1 class="texto-principal">
                 Que meu espírito seja anunciador <br>
                <span class="versos">de belezas e de verdades.</span>
            </h1>
           
            <div class="classebotoes">
                <a href="poesias" class="botaoUM" data-link>Ler Poesias</a>
                <a href="sobre" class="botaoDois" data-link>Sobre a Autora</a>
            </div>
        </main>

        <section class="MinhasSentimentos">
            <div class="divMinhasPoesias">
                <h2>Minhas Poesias</h2>
                <p>Sentimentos traduzidos em palavras</p>
            </div>
            
            <div class="container-dos-cards" id="palco-dos-cards">
            </div>
            
            <div class="ultimobotao">
                <a href="poesias" class="botao-ver-todas" data-link>Ver todas as poesias</a>
            </div>
        </section>
    `,

    poesias: `
        <main class="container-biblioteca">
            <section class="cabecalho-biblioteca">
                <h1 class="titulo-biblioteca">Biblioteca de <span class="texto-gradiente">Poesias</span></h1>
                <p class="subtitulo-biblioteca">
                    Explore toda a coleção de poesias.
                </p>

                <div class="caixa-busca">
                    <svg class="icone-lupa" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" class="campo-digitacao" placeholder="Buscar por título...">
                </div>
            </section>
        </main>
      
        <section class="MinhasSentimentos">
            <div class="container-dos-cards" id="palco-dos-cards">
            </div>
        </section>
    `,

    sobre: `
        <main class="container-sobre">
            <header class="cabecalho-pagina">
                <span class="badge-autor">✨ Conheça a autora</span>
                <h1 class="titulo-principal">Sobre <span class="destaque-rosa">Mim</span></h1>
            </header>

            <div class="layout-duas-colunas">
                <div class="coluna-imagem">
                    <img src="./Bruna Witcoski.jpg" alt="" class="foto-autora">
                </div>
                
                <div class="coluna-texto">
                    <blockquote class="citacao-autora">
                        "Escrevo para viver e vivo para uma missão cujo mistério transcende o próprio mistério. "
                    </blockquote>
                    <p><strong>Bruna Witcoski</strong>, Bacharela em Filosofia pela Pontifícia Universidade Católica do Rio Grande do Sul, pesquisadora do tema da santidade em Emmanuel Levinas. Atualmente é graduanda dos cursos de enfermagem e de escrita criativa, pela mesma instituição. 
                    Bruna é uma alma antiga, que aprecia arte, poesia, filosofia, mística, teologia e tudo o que eleva o ser humano. É autora dos livros Coração Índigo e Rosa Mística, pela editora Besouro Box.</p>
                    <p>A palavra comporta o que o silêncio um dia abraçou. Trazer à linguagem, transpor em frase, comunicando um sentimento, é intermediar mundos, ousar incorporar o inefável. A escrita tem esse poder de manifestação do invisível; trazer à matéria vapores de pensamento.</p>
                    <p>Escrevo para viver e vivo para uma missão cujo mistério transcende o próprio mistério. O caminho se revela ao caminhar, então confio em uma Providência Divina que inspira e conduz.</p>
                    <p>Sempre me expressei através das palavras, e a poesia surge como uma expressão do espiritual, sobretudo. Comunicar através da poesia é canalizar na vida o sentido. 
                    Deixo-me penetrar por uma ternura quase impossível de suportar; o silêncio é pleno e atua sobre minha alma. Então permito que do silêncio nasça a palavra primeira, aquela que irá inaugurar um dizer ainda não-dito, uma quase anunciação.</p>
                    <p>Há um tempo da delicadeza que inicia em cada poesia, e que jamais se encerra. 
                    Que meu corpo seja templo das palavras mais sagradas; que meu espírito seja anunciador de belezas e de verdades, e que a minha vida seja um livro luminoso a partir das vozes de Deus.</p>

                </div>
            </div>

            <section class="caixa-inspiracoes">
                <h2 class="titulo-inspiracoes"></h2>
                <div class="grid-inspiracoes">
                    <div class="item-inspiracao">
                        <div class="icone-inspiracao">🏛️</div>
                        <h4>Filosofia</h4>
                        <p>"O questionamento profundo sobre o ser, a santidade e o silêncio que habita em todos nós."</p>
                    </div>

                    <div class="item-inspiracao">
                        <div class="icone-inspiracao">✨</div>
                        <h4>Astrologia</h4>
                        <p>"O universo interior refletido na vastidão do cosmos para nos lembrar de onde viemos."</p>
                    </div>

                    <div class="item-inspiracao">
                        <div class="icone-inspiracao">📚</div>
                        <h4>Literatura</h4>
                        <p>"Grandes poetas como Guimarães Rosa e Mário Quintana me inspiram"</p>
                    </div>
                </div>
            </section>
        </main>
    `,

    contato: `
        <main class="container-contato">
            <header class="cabecalho-pagina" style="margin-bottom: 60px;">
                <span class="badge-autor">✍️ Fale comigo</span>
                <h1 class="titulo-principal" style="line-height: 1.2;">Cada palavra <br><span class="destaque-rosa">merece ser ouvida</span></h1>
                <p class="descriprincipal" style="margin-top: 20px; font-size: 16px; max-width: 600px;">
                    
                </p>
            </header>

            <div class="layout-contato">
                <div class="coluna-info">
                    
                    <div class="card-contato citacao-contato">
                        <p>"No escuro da palavra sopra um silêncio profundo."</p>
                        <span>— Bruna Witcoski</span>
                    </div>

                    <div class="card-contato">
                        <h3 class="titulo-card-contato">Outras formas de chegar até mim</h3>
                        
                        <div class="item-contato">
                            <div class="icone-contato rosa">
                            <img src="./logoEmail.png" alt="conta-Email" class="icone-social"> </div>
                            <div class="texto-contato">
                                <strong>E-MAIL</strong>
                                <span>rosamisticaw@gmail.com</span>
                                <small>Respondo em até 3 dias úteis</small>
                            </div>
                        </div>

                        <div class="item-contato">
                            <div class="icone-contato roxo">
                             <img src="./iconeLocali.png" alt="conta-Email" class="icone-social"></div>
                            <div class="texto-contato">
                                <strong>LOCALIZAÇÃO</strong>
                                <span>Brasil</span>
                                <small>Porto Alegre RS</small>
                            </div>
                        </div>
                    </div>

                  
                </div>

                <div class="coluna-formulario">
                    <div class="card-form">
                        <h2>Envie uma mensagem</h2>
                        <p class="subtitulo-form">Todos os campos são obrigatórios</p>

                       <form id="form-contato" onsubmit="enviarEmail(event)">
    <div class="form-linha">
        <div class="form-grupo">
            <label>SEU NOME</label>
            <input type="text" name="nome" placeholder="Como devo te chamar?" required>
        </div>
        <div class="form-grupo">
            <label>E-MAIL</label>
            <input type="email" name="email" placeholder="seu@email.com" required>
        </div>
    </div>

    <div class="form-grupo">
        <label>ASSUNTO</label>
        <select name="assunto" required>
            <option value="" disabled selected>Escolha um assunto...</option>
            <option value="poesia">Sobre uma poesia</option>
            <option value="colaboracao">Colaboração / Parceria</option>
            <option value="outro">Outro assunto</option>
        </select>
    </div>

    <div class="form-grupo">
        <label>MENSAGEM</label>
        <textarea name="mensagem" placeholder="Escreva aqui seus pensamentos, sentimentos ou ideias..." rows="5" required></textarea>
    </div>

    <button type="submit" class="botao-enviar-form" id="btn-enviar">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; vertical-align: middle;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        Enviar mensagem
    </button>
</form>
                    </div>
                </div>
            </div>
        </main>
    `,

    leitura: `
        <main class="container-leitura">
            <a href="poesias" data-link class="btn-voltar">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Voltar para biblioteca
            </a>
            
            <div id="palco-da-poesia"></div>
        </main>
    `
};

// ==========================================
// 3. FUNÇÕES DE NAVEGAÇÃO E LÓGICA
// ==========================================

// Função principal de troca de páginas (ATUALIZADA)
function navegarPara(idPagina) {
    const container = document.getElementById("main-content");

    if (!paginas[idPagina]) idPagina = "inicio";

    container.classList.add("escondido");

    setTimeout(() => {
        container.innerHTML = paginas[idPagina];
        container.classList.remove("escondido");

        // Mantém a Navbar acesa corretamente. Se for leitura, acende "poesias"
        const paginaAtiva = idPagina === 'leitura' ? 'poesias' : idPagina;
        atualizarMenu(paginaAtiva);

        // Se a página que acabou de aparecer for 'inicio' ou 'poesias', desenha os cards.
        if (idPagina === "inicio" || idPagina === "poesias") {
            renderizarCards();
        }

        // Se a página for 'poesias', ativa o escutador da barra de pesquisa
        if (idPagina === "poesias") {
            ativarEscutadorDeBusca();
        }

        // >>> PUXA A TELA PARA O TOPO SEMPRE QUE MUDAR DE PÁGINA <<<
        window.scrollTo(0, 0);

    }, 150);
}

// Observador de cliques globais do site
document.addEventListener("click", e => {
    const elementoClicado = e.target.closest('[data-link]');

    if (elementoClicado) {
        e.preventDefault();
        const destino = elementoClicado.getAttribute("href").replace(".html", "");
        navegarPara(destino);
    }
});

// Garante que os cards apareçam na primeira vez que o site abrir
document.addEventListener("DOMContentLoaded", () => {
    renderizarCards();
});

// =========================================================================
// A PARTIR DAQUI, CONTINUE COM AS SUAS FUNÇÕES ANTIGAS NORMALMENTE:
// function abrirPoesia(idDaPoesia) { ... }
// =========================================================================
// Função para abrir uma poesia específica (CORRIGIDA - Sem piscar e com rolagem)
function abrirPoesia(idDaPoesia) {
    const poesiaEscolhida = minhasPoesias[idDaPoesia];

    if (!poesiaEscolhida) return; // Se a poesia não existir, não faz nada

    const container = document.getElementById("main-content");

    // 1. Apaga a tela (inicia a transição suave)
    container.classList.add("escondido");

    // 2. Espera a tela sumir (150ms) e faz todo o trabalho nos bastidores
    setTimeout(() => {
        // Coloca o molde de leitura na tela
        container.innerHTML = paginas["leitura"];

        // Preenche os dados do poema IMEDIATAMENTE (sem outro setTimeout)
        const palcoPoesia = document.getElementById("palco-da-poesia");

        if (palcoPoesia) {
            palcoPoesia.innerHTML = `
                <div class="cabecalho-poema">
                    <span class="tag-poema">${poesiaEscolhida.tag}</span>
                    <h1 class="titulo-poema">${poesiaEscolhida.titulo}</h1>
                    <div class="meta-info">
                        <span>⏱️ ${poesiaEscolhida.tempoLeitura}</span>
                    </div>
                    <div class="linha-enfeite"></div>
                </div>
                
                <div class="caixa-poema">
                    <div class="corpo-poema">
                        ${poesiaEscolhida.versos}
                    </div>
                </div>
                
            `;
        }

        // 3. Revela a tela com a poesia já perfeitamente montada
        container.classList.remove("escondido");

        // 4. Mantém a Navbar acesa corretamente em "Poesias"
        atualizarMenu("poesias");

        // >>> PUXA A TELA PARA O TOPO PARA LER DO INÍCIO <<<
        window.scrollTo(0, 0);

    }, 150);
}

// Atualiza o menu de navegação
function atualizarMenu(idPagina) {
    document.querySelectorAll(".navbar a").forEach(link => {
        if (link.getAttribute("href") === idPagina) {
            link.classList.add("ativo");
        } else {
            link.classList.remove("ativo");
        }
    });
}

// Observador de cliques globais do site
document.addEventListener("click", e => {
    const elementoClicado = e.target.closest('[data-link]');

    if (elementoClicado) {
        e.preventDefault();
        const destino = elementoClicado.getAttribute("href").replace(".html", "");
        navegarPara(destino);
    }
});

// ==========================================
// 4. FUNÇÃO DE ENVIO DE E-MAIL (API) E NOTIFICAÇÃO
// ==========================================

// Função que controla a nossa nova caixa de notificação
function mostrarNotificacao(mensagem, tipo = 'sucesso') {
    const toast = document.getElementById('notificacao-toast');
    const toastMsg = document.getElementById('toast-mensagem');
    const toastIcone = toast.querySelector('.toast-icone');

    // Troca o texto pela mensagem que queremos
    toastMsg.innerText = mensagem;

    // Altera o ícone e a cor dependendo se foi sucesso ou erro
    if (tipo === 'erro') {
        toast.classList.add('erro');
        toastIcone.innerText = '⚠️';
    } else {
        toast.classList.remove('erro');
        toastIcone.innerText = '✨';
    }

    // Faz a caixa aparecer na tela
    toast.classList.add('mostrar');

    // Esconde a caixa automaticamente após 4 segundos (4000 milissegundos)
    setTimeout(() => {
        toast.classList.remove('mostrar');
    }, 4000);
}

async function enviarEmail(event) {
    event.preventDefault();

    const form = event.target;
    const btn = form.querySelector('#btn-enviar');
    const dadosFormulario = new FormData(form);

    const textoOriginal = btn.innerHTML;
    btn.innerHTML = "⏳ Enviando...";
    btn.disabled = true;

    try {
        const resposta = await fetch("https://formspree.io/f/xojbyljj", {
            method: "POST",
            body: dadosFormulario,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (resposta.ok) {
            // SUBSTITUÍMOS O ALERT() PELA NOSSA NOVA FUNÇÃO!
            mostrarNotificacao("Mensagem enviada com sucesso! Em breve entrarei em contato.");
            form.reset();
        } else {
            mostrarNotificacao("Ops! Houve um problema ao enviar sua mensagem.", "erro");
        }
    } catch (erro) {
        mostrarNotificacao("Erro de conexão. Verifique sua internet.", "erro");
    } finally {
        btn.innerHTML = textoOriginal;
        btn.disabled = false;
    }
}


// ==========================================
// 5. SISTEMA DE RENDERIZAÇÃO E BUSCA DINÂMICA
// ==========================================

// A função que lê o estoque e desenha os cards (com ou sem filtro)
function renderizarCards(palavraBuscada = "") {
    const palcoCards = document.getElementById("palco-dos-cards");

    if (!palcoCards) return;

    palcoCards.innerHTML = "";
    const termo = palavraBuscada.toLowerCase();
    const estamosNaPaginaInicio = document.querySelector('.segundadiv') !== null;

    for (const id in minhasPoesias) {
        const poesia = minhasPoesias[id];

        if (estamosNaPaginaInicio && poesia.exibirNaInicio === false) {
            continue; 
        }

        const tituloMinusculo = poesia.titulo.toLowerCase();
        const tagMinuscula = poesia.tag.toLowerCase();

        if (tituloMinusculo.includes(termo) || tagMinuscula.includes(termo)) {
            
            const resumoAutomatico = poesia.versos.replace(/<br>/g, " ").substring(0, 80) + "...";

            // O SEGREDO DO DESIGN: Pegamos a tag, removemos acentos e espaços para virar classe CSS
            const tagFormatada = poesia.tag.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');

            // Adicionamos a classe 'tema-' + tagFormatada na primeira linha da div
            palcoCards.innerHTML += `
                <div class="card-esqueleto tema-${tagFormatada}" style="cursor:pointer;" onclick="abrirPoesia('${id}')">
                    <span class="card-tag">${poesia.tag}</span>
                    <h3 class="card-titulo">${poesia.titulo}</h3>
                    <p class="card-resumo">"${resumoAutomatico}"</p>
                    <hr class="card-linha">
                    <div class="card-meta">
                        <span>📅 ${poesia.data}</span>
                        <span>⏱️ ${poesia.tempoLeitura}</span>
                    </div>
                    <span class="card-link">Ler poesia completa →</span>
                </div>
            `;
        }
    }

    if (palcoCards.innerHTML === "") {
        palcoCards.innerHTML = `
            <p style="text-align:center; width:100%; color:#718096; grid-column: 1 / -1; padding: 40px 0;">
                Nenhuma poesia encontrada com a palavra "<strong>${palavraBuscada}</strong>".
            </p>
        `;
    }
}




// O Gatilho que escuta o que o usuário digita na barra
function ativarEscutadorDeBusca() {
    const campoBusca = document.querySelector(".campo-digitacao");

    if (campoBusca) {
        // "input" é o evento que dispara a cada letra digitada ou apagada
        campoBusca.addEventListener("input", (evento) => {
            const textoDigitado = evento.target.value;
            renderizarCards(textoDigitado); // Chama a função de cima passando a palavra
        });
    }
}


