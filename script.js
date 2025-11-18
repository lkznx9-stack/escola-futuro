// ==========================================
// 1. COMPORTAMENTO DOS BOTÕES DE NAVEGAÇÃO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Função utilitária para rolar suavemente para a seção
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            // Rola a página para a seção com um comportamento suave
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // --- Botões da Seção HERO ---

    const btnAgendarVisitaHero = document.querySelector('.hero-buttons button:first-child');
    const btnConhecaMaisHero = document.querySelector('.hero-buttons button:last-child');

    if (btnAgendarVisitaHero) {
        // O botão "Agendar Visita" (1º) na Hero rola para a seção de Contato/CTA
        btnAgendarVisitaHero.addEventListener('click', () => {
            // Vamos rolar para a seção CTA Final, pois é onde está o contato mais direto.
            scrollToSection('contato-final'); 
        });
    }

    if (btnConhecaMaisHero) {
        // O botão "Conheça Mais" (2º) na Hero rola para a seção de Motivos
        btnConhecaMaisHero.addEventListener('click', () => {
            scrollToSection('motivos');
        });
    }


    // --- Botões da Seção CTA Final ---

    const btnAgendarVisitaCta = document.querySelector('.cta-buttons button:first-of-type');
    const btnEntreEmContatoCta = document.querySelector('.cta-buttons button:last-of-type');

    if (btnAgendarVisitaCta) {
        // Botão Agendar Visita (Laranja) - Ação simulada de formulário/abrir modal
        btnAgendarVisitaCta.addEventListener('click', () => {
            alert('Ação: Abrir modal de agendamento de visita!');
        });
    }

    if (btnEntreEmContatoCta) {
        // Botão Entrar em Contato (Branco) - Rola para a seção de Contato no Footer
        btnEntreEmContatoCta.addEventListener('click', () => {
            scrollToSection('contato'); // ID do Contato no Footer
        });
    }
    
    // --- Links Rápidos do FOOTER ---
    
    // Seleciona todos os links <a> dentro de .footer-links ul
    const footerLinks = document.querySelectorAll('.footer-links a');

    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Previne o comportamento padrão do link (ir direto)
            e.preventDefault(); 
            
            // Pega o ID da seção do atributo href (ex: #motivos)
            const targetId = link.getAttribute('href').substring(1); 
            
            if (targetId) {
                 scrollToSection(targetId);
            }
        });
    });

});