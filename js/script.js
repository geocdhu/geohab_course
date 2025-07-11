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

//Lupa zoom imagens
<script>
//novo
/* script.js */

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Cria a lupa (div) */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insere a lupa no HTML */
  img.parentElement.insertBefore(glass, img);

  /* Define as propriedades de fundo para a lupa */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  
  bw = 3; // Largura da borda da lupa
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Adiciona "ouvintes de evento" para movimento do mouse e toque */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);

  function moveMagnifier(e) {
    var pos, x, y;
    /* Evita outras ações que possam ocorrer ao mover sobre a imagem */
    e.preventDefault();
    /* Pega as posições X e Y do cursor */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    
    /* Impede que a lupa saia dos limites da imagem */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;} // Corrigido para h, não w
    
    /* Define a posição da lupa */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    
    /* Exibe o que a lupa "vê" movendo o fundo */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Pega as posições x e y da imagem */
    a = img.getBoundingClientRect();
    /* Calcula as coordenadas do cursor relativas à imagem */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Considera qualquer rolagem da página */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

// **INICIA A FUNÇÃO**
// Espera o HTML carregar completamente antes de executar o script.
// Isso evita erros caso o script seja carregado antes da imagem.
document.addEventListener("DOMContentLoaded", function() {
  magnify("myimage", 2); // Altere o ID ou o zoom aqui se precisar
});
</script>