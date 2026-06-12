// ==================== DADOS DAS ÁRVORES ====================
const trees = [
    {
        id: 1,
        name: "Ipê Amarelo",
        scientific: "Handroanthus albus",
        image: "https://cdn.assets-casacor.tec.br/file/casacor-images-news/2025/06/gleive-marcio-rodrigues-de-souza-CxVq04mnZiA-unsplash.webp",
        description: "O ipê-amarelo é uma das árvores mais emblemáticas do Brasil. Durante a estação seca, quando perde quase todas as suas folhas, seus galhos se cobrem por uma explosão de flores amarelo-douradas, criando um espetáculo visual que parece iluminar a paisagem. Sua floração intensa e vibrante contrasta com o céu azul e chama a atenção de longe, tornando-o símbolo de beleza, resistência e renovação. Além do valor ornamental, o ipê-amarelo desempenha um papel importante para a fauna, atraindo abelhas, pássaros e outros polinizadores.",
        features: "• Altura: até 15m\n• Floração: julho a setembro\n• Sol: pleno\n• Porte: médio",
        curiosities: "Seu nome indígena significa 'árvore dura como pedra'. É símbolo da primavera brasileira."
    },
    {
        id: 2,
        name: "Jacarandá",
        scientific: "Jacaranda mimosifolia",
        image: "https://drjardim.com.br/wp-content/uploads/2024/06/Blooming-Jacaranda-season-in-Brisbane-Australia.jpg",
        description: "O jacarandá é uma árvore de beleza elegante e marcante, conhecida por suas flores em tons de lilás e violeta que formam verdadeiros tapetes coloridos quando caem ao chão. Durante a floração, sua copa se transforma em uma nuvem de flores delicadas, criando paisagens encantadoras em ruas, praças e parques. Além do valor ornamental, o jacarandá proporciona sombra agradável e contribui para a biodiversidade, atraindo abelhas e outras espécies polinizadoras.",
        features: "• Altura: até 25m\n• Floração: agosto a novembro\n• Solo: bem drenado",
        curiosities: "A madeira é altamente valorizada na fabricação de móveis de luxo."
    },
    {
        id: 3,
        name: "Pau-Brasil",
        scientific: "Paubrasilia echinata",
        image: "https://rbma.org.br/n/wp-content/uploads/2020/12/capa-post-pau-brasil.png",
        description: "O pau-brasil é uma árvore histórica e emblemática do Brasil, não apenas pela sua beleza, mas também pelo seu papel na formação do país. Com tronco reto e folhas verdes pequenas, flores amarelas discretas e uma madeira avermelhada muito valorizada, o pau-brasil se destaca pela elegância e pela história que carrega. É símbolo de resistência, riqueza natural e identidade nacional. Hoje, preservá-lo é também preservar a memória e a biodiversidade da Mata Atlântica.",
        features: "• Altura: até 15m\n• Floração: primavera\n• Conservação: vulnerável",
        curiosities: "Sua madeira vermelha foi o primeiro produto de exportação do Brasil colonial."
    },
    {
        id: 4,
        name: "Cerejeira",
        scientific: "Eugenia involucrata",
        image: "https://enfeitedecora.com/wp-content/uploads/2024/07/cerejeiras-capa.jpg",
        description: "Árvore de flores brancas delicadas e frutos comestíveis muito apreciados pela fauna.",
        features: "• Altura: até 12m\n• Floração: agosto a outubro\n• Frutífera",
        curiosities: "Seus frutos são ricos em vitamina C e muito usados em geleias e licores."
    },
    {
        id: 5,
        name: "Oiti",
        scientific: "Licania tomentosa",
        image: "https://www.sitiodamata.com.br/media/catalog/product/cache/80281f1a4d89199560fc0837e49d13da/o/i/oiti-licania-tomentosa_2nd.webp",
        description: "Árvore robusta de copa densa, excelente para sombra e arborização urbana.",
        features: "• Altura: até 20m\n• Sol: pleno\n• Resistente a seca",
        curiosities: "Seus frutos são comestíveis e possuem alto valor nutricional."
    },
    {
        id: 6,
        name: "Araucária",
        scientific: "Araucaria angustifolia",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Imagem_de_Araucaria_angustifolia.jpg",
        description: "Gigante das florestas de araucárias do sul do Brasil. Espécie em risco.",
        features: "• Altura: até 50m\n• Longevidade: centenas de anos\n• Pinhas comestíveis",
        curiosities: "Suas sementes (pinhões) são parte importante da culinária sul-brasileira."
    }
];

// ==================== DADOS DAS PLANTAS ====================
const plants = [
    {
        id: 1,
        name: "Lavanda",
        scientific: "Lavandula angustifolia",
        image: "https://www.picturethisai.com/wiki-image/1080/314436260852662272.jpeg",
        description: "Planta aromática famosa por suas propriedades calmantes e flores roxas encantadoras.",
        features: "• Luz: sol pleno\n• Rega: moderada\n• Uso: chá, óleo essencial, repelente",
        curiosities: "O aroma ajuda a reduzir ansiedade e melhora a qualidade do sono."
    },
    {
        id: 2,
        name: "Espada de São Jorge",
        scientific: "Dracaena trifasciata",
        image: "https://www.jardineiro.net/wp-content/uploads/2013/10/dracaena-trifasciata.jpg",
        description: "Planta extremamente resistente e excelente purificadora de ar.",
        features: "• Luz: meia sombra\n• Rega: a cada 15 dias\n• Alta resistência",
        curiosities: "Considerada uma planta de proteção espiritual em várias culturas."
    },
    {
        id: 3,
        name: "Aloe Vera",
        scientific: "Aloe barbadensis miller",
        image: "https://cdn.shopify.com/s/files/1/0469/4500/9826/files/blog_banner_3_5fac3836-446c-47dd-a6ae-30a68478b072.jpg?v=1666188487",
        description: "Planta medicinal com gel cicatrizante, hidratante e anti-inflamatório.",
        features: "• Luz: sol pleno\n• Rega: pouca\n• Medicinal",
        curiosities: "Usada desde a antiguidade egípcia para tratamentos de pele e cabelos."
    },
    {
        id: 4,
        name: "Manjericão",
        scientific: "Ocimum basilicum",
        image: "https://s2.glbimg.com/K5EywHvZM2LzirvLBmZH9iEMtm4=/780x440/e.glbimg.com/og/ed/f/original/2018/04/20/basil-total-2759319_1280.jpg",
        description: "Erva aromática muito usada na culinária e com propriedades medicinais.",
        features: "• Luz: sol pleno\n• Rega: regular\n• Ciclo: anual",
        curiosities: "Afasta mosquitos e é rico em antioxidantes."
    },
    {
        id: 5,
        name: "Costela-de-Adão",
        scientific: "Monstera deliciosa",
        image: "https://blog.plantei.com.br/wp-content/uploads/2021/07/costela-de-adao.jpg",
        description: "Planta tropical exuberante com folhas grandes e recortadas.",
        features: "• Luz: meia sombra\n• Rega: moderada\n• Porte: grande",
        curiosities: "Suas folhas são usadas em decoração e simbolizam luxo e natureza."
    },
    {
        id: 6,
        name: "Hortelã",
        scientific: "Mentha spicata",
        image: "https://minhasaude.proteste.org.br/wp-content/webp-express/webp-images/uploads/2024/03/10-beneficios-da-hortela-scaled.jpg.webp",
        description: "Erva refrescante, ótima para chás, temperos e digestão.",
        features: "• Luz: meia sombra\n• Rega: constante\n• Crescimento rápido",
        curiosities: "Pode ser invasiva, por isso é ideal plantar em vasos."
    },
    {
        id: 7,
        name: "Girassol",
        scientific: "Helianthus annuus",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwz9hAwEdVrvQfMh2ZTCL7S1iQG8U_q0fPHw&s",
        description: "Planta alegre que segue o movimento do sol durante o dia.",
        features: "• Luz: sol pleno\n• Rega: moderada\n• Floração: verão",
        curiosities: "Suas sementes são muito nutritivas e usadas para produzir óleo."
    }
];

// ==================== FUNÇÕES ====================
function createCards(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'tree-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="tree-info">
                <h3>${item.name}</h3>
                <p class="preview">${item.description}</p>
                <button class="btn-saiba-mais" data-id="${item.id}">Saiba mais</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Modal
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

function openModal(item) {
    document.getElementById('modalImage').style.backgroundImage = `url('${item.image}')`;
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalScientific').textContent = item.scientific;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalFeatures').innerHTML = item.features.replace(/\n/g, '<br>');
    document.getElementById('modalCuriosities').textContent = item.curiosities;
    modal.style.display = 'flex';
}

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', () => {
    // Página de árvores
    if (document.getElementById('treeGrid')) {
        createCards(trees, 'treeGrid');
    }
    
    // Página de plantas
    if (document.getElementById('plantGrid')) {
        createCards(plants, 'plantGrid');
    }

    // Delegação de eventos para os botões "Saiba mais"
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-saiba-mais')) {
            const id = parseInt(e.target.dataset.id);
            const isTreePage = document.getElementById('treeGrid');
            
            let item;
            if (isTreePage) {
                item = trees.find(t => t.id === id);
            } else {
                item = plants.find(p => p.id === id);
            }
            
            if (item) openModal(item);
        }
    });

    // Fechar modal
    if (closeModal) {
        closeModal.addEventListener('click', () => modal.style.display = 'none');
    }

    // Fechar modal clicando fora
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }

    // Busca
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const isTreePage = document.getElementById('treeGrid');
            
            let filtered;
            if (isTreePage) {
                filtered = trees.filter(tree => 
                    tree.name.toLowerCase().includes(term) || 
                    tree.description.toLowerCase().includes(term) ||
                    tree.scientific.toLowerCase().includes(term)
                );
                createCards(filtered, 'treeGrid');
            } else {
                filtered = plants.filter(plant => 
                    plant.name.toLowerCase().includes(term) || 
                    plant.description.toLowerCase().includes(term) ||
                    plant.scientific.toLowerCase().includes(term)
                );
                createCards(filtered, 'plantGrid');
            }
        });
    }
});