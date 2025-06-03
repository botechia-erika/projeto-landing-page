// ...existing code..
import './stylesheets/bootstrap.min.css'
import './stylesheets/globals.css';
import p001 from './assets/products/p001.svg';
import p002 from './assets/products/p002.svg';
import p003 from './assets/products/p003.svg';

import logoBrand from './assets/brand/logoBrand.png';
// Estilos customizados

// Templates das seções
const heroTemplate = `
  <section class="hero-section" id="home">
    <div class="container">
      <h2>Conforto para quem codifica</h2>
      <p>Descubra sapatos pensados para devs: conforto, estilo e tecnologia para quem passa horas programando.</p>
      <a href="#products" class="btn btn-primary btn-lg mt-3">Ver Produtos</a>
    </div>
  </section>
`;

const aboutTemplate = `
  <section class="about-section" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 mb-4 mb-md-0">
          <img src="${logoBrand}" alt="Sapatos confortáveis" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
          <h3>Sobre a 4Confort</h3>
          <p>
            Somos apaixonados por tecnologia e conforto. Criamos sapatos ergonômicos, respiráveis e estilosos, perfeitos para quem vive entre linhas de código. Nossa missão é cuidar dos pés dos devs para que possam focar no que importa: criar soluções incríveis!
          </p>
        </div>
      </div>
    </div>
  </section>
`;

const productsTemplate = `
  <section class="products-section" id="products">
    <div class="container">
      <h3 class="text-center mb-5">Produtos em Destaque</h3>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card product-card h-100">
            <img src="${p001}" class="card-img-top" alt="Tênis DevFlex">
            <div class="card-body">
              <h5 class="card-title">Tênis DevFlex</h5>
              <p class="card-text">Leve, flexível e com palmilha memory foam. Ideal para maratonas de código.</p>
              <span class="badge bg-success">R$ 249,90</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card product-card h-100">
            <img src="${p002}" class="card-img-top" alt="Code Neon">
            <div class="card-body">
              <h5 class="card-title">Code Neon</h5>
              <p class="card-text">Prático, astrodev e estiloso. Para quem não perde tempo nem no conforto.</p>
              <span class="badge bg-success">R$ 499,90</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card product-card h-100">
            <img src="${p003}" class="card-img-top" alt="Sandália DevZen">
            <div class="card-body">
              <h5 class="card-title">Sneakers COLOR.Dev</h5>
              <p class="card-text">Para home office ou escritório, relaxe seus pés sem perder o estilo dev.</p>
              <span class="badge bg-success">R$ 179,90</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
// ...existing code...

const contactTemplate = `
  <section class="contact-section" id="contact">
    <div class="container">
      <h3 class="text-center mb-4">Fale com a gente</h3>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form id="contactForm">
            <div class="mb-3">
              <label for="name" class="form-label">Nome</label>
              <input type="text" class="form-control" id="name" placeholder="Seu nome" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">E-mail</label>
              <input type="email" class="form-control" id="email" placeholder="seu@email.com" required>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Mensagem</label>
              <textarea class="form-control" id="message" rows="3" placeholder="Como podemos ajudar?" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100">Enviar</button>
          </form>
        </div>
      </div>
    </div>
    <!-- Modal de sucesso -->
    <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="successModalLabel">Mensagem enviada!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body text-center">
            <p>Sua mensagem foi enviada com sucesso.<br>Em breve entraremos em contato por e-mail.</p>
            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4e8.png" alt="Email enviado" width="48" height="48"/>
          </div>
          <div class="modal-footer border-0">
            <button type="button" class="btn btn-success w-100" data-bs-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

// Função para ativar o modal ao enviar o formulário
function setupContactFormModal() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Simula envio e mostra modal
    const modal = new window.bootstrap.Modal(document.getElementById('successModal'));
    modal.show();
    form.reset();
  });
}

// Função renderizadora
function renderLandingPage() {
  document.getElementById('app').innerHTML = `
    ${heroTemplate}
    ${aboutTemplate}
    ${productsTemplate}
    ${contactTemplate}
  `;
  setupContactFormModal();
}

// Inicializa a página
renderLandingPage();

// ...existing code...