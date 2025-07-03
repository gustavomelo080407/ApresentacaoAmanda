// Dados dos roteiros
const scripts = [
    {
        title: "Eu sei que você tá cansada de fingir que tá tudo bem",
        content: "Você tá cansada de fingir que tá tudo bem, né? Você sorri no trabalho, posta no Instagram… Mas quando chega em casa, tudo desaba. Isso não é normal. E você não precisa continuar vivendo assim.",
        category: "Empatia"
    },
    {
        title: "Você já chorou escondida no banheiro?",
        content: "Você já chorou no banheiro do trabalho e voltou como se nada tivesse acontecido? Se sim, já passou da hora de se cuidar. E não, isso não é fraqueza. É saúde mental. E ela importa.",
        category: "Identificação"
    },
    {
        title: "Se você sente que não tá aguentando mais...",
        content: "Você sente que tá no limite? Que tem dias em que levantar da cama já é demais? Isso não é preguiça. Não é drama. É um sinal. E eu tô aqui pra te ajudar com acolhimento, sem julgamento.",
        category: "Acolhimento"
    },
    {
        title: "Não é só você",
        content: "Você não tá sozinha nessa. Muita gente tá vivendo no automático, fingindo força, sorrindo pra fora e gritando por dentro. Mas tem um caminho mais leve. E a psiquiatria pode ser esse recomeço.",
        category: "Normalização"
    },
    {
        title: "Você já tentou de tudo, né?",
        content: "Você já tentou chazinho, meditação, terapeuta, academia… E ainda sente que tem algo errado? Talvez agora seja a hora de buscar ajuda médica. Não é o fim da linha. É o começo da sua cura.",
        category: "Solução"
    },
    {
        title: "Você tem medo de ser julgada?",
        content: "Você tem medo do que os outros vão pensar se souberem que você faz tratamento? Medo de ouvir que é frescura, que é exagero? A verdade? Quem te julga não sabe o que você sente. E quem sente como você… entende.",
        category: "Quebra de Objeção"
    },
    {
        title: "Tô aqui pra te ouvir",
        content: "Talvez você só precise de alguém que te escute, de verdade. Sem julgamento. Sem rótulo. Sem te empurrar remédio. E é isso que eu faço. Escuta, cuidado, acolhimento.",
        category: "Acolhimento"
    },
    {
        title: "Tem nome o que você sente",
        content: "Você tá com medo, dorme mal, sente angústia o tempo inteiro? Isso tem nome. E tem tratamento. Você não precisa viver em sofrimento.",
        category: "Educação"
    },
    {
        title: "Você tem tudo, mas se sente vazia",
        content: "Você tem casa, trabalho, família, e ainda se sente vazia. Já se perguntou por quê? Porque não é sobre o que você tem — é sobre o que você sente. E isso merece atenção.",
        category: "Reflexão"
    },
    {
        title: "O remédio certo não te apaga",
        content: "Você tem medo de virar zumbi com remédio? Eu entendo. Mas o remédio certo, com acompanhamento, não te apaga. Ele te devolve pra você mesma.",
        category: "Quebra de Objeção"
    },
    {
        title: "Você não precisa estar em colapso",
        content: "Não precisa chegar no fundo do poço pra procurar um psiquiatra. Se algo dentro de você já tá pedindo socorro… ouça. Quanto antes você cuidar, mais leve pode ser.",
        category: "Prevenção"
    },
    {
        title: "A culpa não é sua",
        content: "Você se sente culpada por não dar conta de tudo, né? Por não estar feliz. Mas deixa eu te dizer: a culpa não é sua. A sua mente só tá pedindo socorro. Vamos cuidar disso juntas?",
        category: "Alívio de Culpa"
    },
    {
        title: "Você só precisa de um espaço seguro",
        content: "Você não é fraca. Você só tá cansada de ser forte o tempo inteiro. E aqui, você vai ser tratada com respeito. Não com julgamento.",
        category: "Acolhimento"
    },
    {
        title: "Você tá sobrevivendo, mas queria viver",
        content: "Você tá só sobrevivendo. Fazendo o mínimo. Só que no fundo, você queria voltar a viver. E isso é possível. Com ajuda, com cuidado.",
        category: "Motivação"
    },
    {
        title: "Tá tudo bem não dar conta",
        content: "Tá tudo bem não dar conta. Tá tudo bem se sentir perdida. Você não precisa ser forte o tempo todo. Mas você merece ajuda. E isso começa agora.",
        category: "Permissão"
    }
];

// Função para renderizar os scripts
function renderScripts() {
    const scriptsGrid = document.getElementById('scriptsGrid');
    
    scripts.forEach((script, index) => {
        const scriptCard = document.createElement('div');
        scriptCard.className = 'script-card';
        scriptCard.innerHTML = `
            <div class="script-title">${script.title}</div>
            <div class="script-content">"${script.content}"</div>
            <div class="script-category">${script.category}</div>
        `;
        scriptsGrid.appendChild(scriptCard);
    });
}

// Gráfico de idade
function createAgeChart() {
    const ctx = document.getElementById('ageChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['28-35 anos', '36-42 anos'],
            datasets: [{
                data: [60, 40],
                backgroundColor: ['#00C851', '#007E33'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            }
        }
    });
}

// Gráfico de emoções
function createEmotionsChart() {
    const ctx = document.getElementById('emotionsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Perda de Controle', 'Vergonha', 'Tristeza', 'Ansiedade', 'Medo de Julgamento'],
            datasets: [{
                label: 'Intensidade',
                data: [85, 90, 80, 95, 88],
                backgroundColor: '#00C851',
                borderColor: '#007E33',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: '#333333'
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: '#333333'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            }
        }
    });
}

// Gráfico de objeções
function createObjectionsChart() {
    const ctx = document.getElementById('objectionsChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                'Medo de dependência',
                'Falta de tempo',
                'Experiência anterior ruim',
                'Medo do diagnóstico',
                'Desconfiança'
            ],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    '#00C851',
                    '#007E33',
                    '#00A142',
                    '#008A36',
                    '#006B2A'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            }
        }
    });
}

// Animações de scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.script-card, .fear-item, .stat-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    renderScripts();
    createAgeChart();
    createEmotionsChart();
    createObjectionsChart();
    animateOnScroll();
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Efeito de hover nos cards
    document.querySelectorAll('.script-card, .fear-item').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

