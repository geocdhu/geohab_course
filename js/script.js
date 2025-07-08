<script>
document.addEventListener('DOMContentLoaded', function() {

  // Pega TODOS os containers de imagem+modal na página
  const modalWrappers = document.querySelectorAll('.image-modal-wrapper');

  // Itera sobre cada container para configurar seu próprio modal
  modalWrappers.forEach(function(wrapper) {
    const triggerImg = wrapper.querySelector('.modal-trigger-img');
    const modal = wrapper.querySelector('.image-modal-popup');
    const modalDisplayImg = modal.querySelector('.modal-display-img');
    const modalCaptionText = modal.querySelector('.modal-caption-text');
    const closeButton = modal.querySelector('.custom-close');

    // Lógica para ABRIR este modal específico
    triggerImg.addEventListener('click', function() {
      modal.style.display = "block";
      modalDisplayImg.src = this.src; // Pega a URL da imagem clicada
      modalCaptionText.innerHTML = this.alt; // Pega o alt da imagem clicada
    });

    // Lógica para FECHAR este modal específico com o botão "X"
    closeButton.addEventListener('click', function() {
      modal.style.display = "none";
    });

    // Lógica para FECHAR este modal específico clicando no fundo
    modal.addEventListener('click', function(event) {
      if (event.target === modal) { // Verifica se o clique foi diretamente no fundo do modal
        modal.style.display = "none";
      }
    });
  });

  // Lógica GLOBAL para FECHAR QUALQUER modal aberto com a tecla 'Escape'
  // Este listener não precisa ser dentro do loop 'forEach'
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      // Procura por qualquer modal que esteja aberto e o fecha
      document.querySelectorAll('.image-modal-popup').forEach(function(openModal) {
        if (openModal.style.display === "block") {
          openModal.style.display = "none";
        }
      });
    }
  });

});
</script>