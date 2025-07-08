<script>
// Garante que o script só roda depois que o HTML estiver completamente carregado.
document.addEventListener('DOMContentLoaded', function() {

  // 1. Pega os elementos do HTML que vamos usar.
  var modal = document.getElementById("myModal");
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var span = document.getElementsByClassName("custom-close")[0];

  // 2. Lógica para ABRIR o modal ao clicar na imagem.
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // 3. Lógica para FECHAR o modal com o botão "X".
  span.onclick = function() {
    modal.style.display = "none";
  }

  // 4. NOVO: Lógica para FECHAR o modal ao pressionar a tecla 'Escape'.
  document.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é 'Escape' E se o modal está visível.
    if (event.key === 'Escape' && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });

  // 5. NOVO: Lógica para FECHAR o modal ao clicar fora da imagem (no fundo).
  window.onclick = function(event) {
    // Verifica se o elemento clicado (event.target) é o próprio fundo do modal.
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

});
</script>


<script>
// Pega os elementos do HTML que vamos manipular
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Define o que acontece quando a imagem gatilho é clicada
img.onclick = function(){
  modal.style.display = "block";       // Mostra o modal
  modalImg.src = this.src;             // Coloca a mesma imagem no modal
  captionText.innerHTML = this.alt;    // Usa o texto 'alt' da imagem como legenda
}

// Pega o elemento <span> que tem a classe "close"
var span = document.getElementsByClassName("custom-close")[0];

// Define o que acontece quando o botão "X" é clicado
span.onclick = function() {
  modal.style.display = "none";        // Esconde o modal
}
</script>