const curriculo = [

    {
        nome: "Clara Sophia Farias",
        titulo: "Estudante de Análise e Desenvolvimento de Sistemas",
        foto: "foto.jpeg",
        email: "clara02farias@gmail.com",
        telefone: "(11) 98400-4967",
        localizacao: "São Paulo - SP",
        github: "ClaraSophia23",

        objetivo: "Busco uma oportunidade de estágio na área de Tecnologia da Informação para aplicar meus conhecimentos, desenvolver experiência prática e ampliar minhas habilidades em desenvolvimento de sistemas.",

        resumo: "Estudante de Análise e Desenvolvimento de Sistemas, com conhecimentos em desenvolvimento web, lógica de programação e criação de páginas dinâmicas. Possuo conhecimentos em HTML, CSS, JavaScript e Pacote Office, além de estar ampliando meus estudos em SQL e Python. Tenho perfil organizado, responsável, comunicativo e facilidade para aprender.",

        formacao: [
            {
                curso: "Análise e Desenvolvimento de Sistemas",
                instituicao: "UniPiaget",
                nivel: "Ensino Superior - Tecnólogo",
                situacao: "Em andamento"
            },
            {
                curso: "Ensino Médio Técnico em Análise e Desenvolvimento de Sistemas",
                instituicao: "",
                nivel: "Ensino Médio Técnico",
                situacao: "Concluído"
            }
        ],

        projetos: [
            {
                nome: "Lycix - Plataforma Digital",
                descricao: "Projeto acadêmico que reúne aplicações digitais, incluindo uma plataforma de vendas internacionais, uma aplicação de anotações e uma área de informações acadêmicas.",
                tecnologias: "HTML, CSS e JavaScript"
            },
            {
                nome: "Sistema de Orçamentos",
                descricao: "Página web para cadastro de produtos e serviços, cálculo de valores, subtotais e aplicação de descontos percentuais.",
                tecnologias: "HTML, CSS e JavaScript"
            }
        ],

        conhecimentos: [
            "HTML5 - Básico",
            "CSS3 - Básico",
            "JavaScript - Básico",
            "Lógica de Programação - Básico",
            "SQL - Básico"
        ],

        ferramentas: [
            "Microsoft Word",
            "Microsoft Excel Avançado",
            "Microsoft PowerPoint",
            "Microsoft Outlook",
            "Microsoft PowerBI"
        ],

        competencias: [
            "Organização",
            "Responsabilidade",
            "Comunicação",
            "Trabalho em equipe",
            "Proatividade",
            "Facilidade de aprendizagem",
            "Adaptabilidade"
        ],

        idiomas: [
            {
                nome: "Português",
                nivel: "Nativo"
            },
            {
                nome: "Inglês",
                nivel: "Avançado"
            }
        ],

        cursos: [
            {
                nome: "SQL",
                situacao: "Finalizado"
            },
            {
                nome: "Pacote Office",
                situacao: "Finalizado"
            },
            {
                nome: "Excel avançado",
                situacao: "Finalizado"
            },
            {
                nome: "PowerBI",
                situacao: "Finalizado"
            }
        ],

        experiencias: [
            {
                cargo: "Estagiária (Assistente de Sala)",
                empresa: "Escola de Cursos Profissionalizantes Prepara IA",
                periodo: "",
                descricao: "Atuação como assistente de sala, auxiliando os alunos na compreensão e utilização do Pacote Office, além de realizar substituições pontuais do professor de inglês devido ao domínio e ótimo entendimento do idioma."
            }
        ],

        preferencias: {
            cargos: [
                "Desenvolvimento de Sistemas",
                "Desenvolvimento Web",
                "Análise de Sistemas",
                "Suporte de TI"
            ],
            modelo: "Remoto ou híbrido"
        }
    }

];

// Dados pessoais
const dados = curriculo[0];

document.getElementById("nome").innerText = dados.nome;
document.getElementById("titulo").innerText = dados.titulo;
document.getElementById("objetivo").innerText = dados.objetivo;
document.getElementById("resumo").innerText = dados.resumo;

// Foto
const foto = document.getElementById("foto");
foto.src = dados.foto;
foto.alt = `Foto de ${dados.nome}`;

// Contato
const contato = document.getElementById("contato");

contato.innerHTML = `
    ${dados.localizacao} |
    ${dados.email} |
    ${dados.telefone} |
    <a href="https://github.com/${dados.github}" target="_blank">GitHub</a>
`;

// Formação acadêmica
const formacao = document.getElementById("formacao");

for (let item of dados.formacao) {
    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
        <h3>${item.curso}</h3>
        <p>${item.instituicao || item.nivel}</p>
        <p>${item.nivel} - ${item.situacao}</p>
    `;

    formacao.appendChild(div);
}

// Projetos
const projetos = document.getElementById("projetos");

for (let projeto of dados.projetos) {
    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <p><strong>Tecnologias:</strong> ${projeto.tecnologias}</p>
    `;

    projetos.appendChild(div);
}

// Conhecimentos técnicos
const conhecimentos = document.getElementById("conhecimentos");

for (let item of dados.conhecimentos) {
    const linha = document.createElement("li");
    linha.innerText = item;
    conhecimentos.appendChild(linha);
}

// Ferramentas
const ferramentas = document.getElementById("ferramentas");

for (let item of dados.ferramentas) {
    const linha = document.createElement("li");
    linha.innerText = item;
    ferramentas.appendChild(linha);
}

// Competências
const competencias = document.getElementById("competencias");

for (let item of dados.competencias) {
    const linha = document.createElement("li");
    linha.innerText = item;
    competencias.appendChild(linha);
}

// Idiomas
const idiomas = document.getElementById("idiomas");

for (let item of dados.idiomas) {
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>${item.nome}:</strong> ${item.nivel}</p>`;
    idiomas.appendChild(div);
}

// Cursos
const cursos = document.getElementById("cursos");

for (let item of dados.cursos) {
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>${item.nome}:</strong> ${item.situacao}</p>`;
    cursos.appendChild(div);
}

// Experiências
const experiencias = document.getElementById("experiencias");

for (let item of dados.experiencias) {
    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
        <h3>${item.cargo}</h3>
        ${item.empresa ? `<p>${item.empresa} ${item.periodo ? `- ${item.periodo}` : ""}</p>` : ""}
        <p>${item.descricao}</p>
    `;

    experiencias.appendChild(div);
}

// Preferências
const preferencias = document.getElementById("preferencias");

preferencias.innerHTML = `
    <p><strong>Cargos:</strong> ${dados.preferencias.cargos.join(", ")}</p>
    <p><strong>Modelo de trabalho:</strong> ${dados.preferencias.modelo}</p>
`;