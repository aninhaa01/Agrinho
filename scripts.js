document.addEventListener('DOMContentLoaded', () => {
    const dicas = [
        "Dica 1: Rotação de culturas para manter a saúde do solo.",
        "Dica 2: Uso de compostagem para enriquecer o solo.",
        "Dica 3: Irrigação eficiente para economizar água.",
    ];

    const tecnicas = [
        "Técnica 1: Plantio direto para minimizar a erosão.",
        "Técnica 2: Controle biológico de pragas.",
        "Técnica 3: Agricultura de precisão utilizando drones.",
    ];

    const dicasList = document.getElementById('dicas-list');
    const tecnicasList = document.getElementById('tecnicas-list');

    dicas.forEach(dica => {
        const li = document.createElement('li');
        li.textContent = dica;
        dicasList.appendChild(li);
    });

    tecnicas.forEach(tecnica => {
        const li = document.createElement('li');
        li.textContent = tecnica;
        tecnicasList.appendChild(li);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada! Entraremos em contato em breve.');
        contactForm.reset();
    });
});