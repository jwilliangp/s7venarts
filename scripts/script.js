// Função para abrir o modal com a imagem clicada
function openModal(image) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Adiciona um evento de clique para todas as imagens da galeria
document.querySelectorAll('.gallery img').forEach(image => {
    image.onclick = function () {
        openModal(this);
    };
});

// Adiciona um evento de clique para fechar o modal quando se clica fora da imagem
document.getElementById("modal").onclick = function (event) {
    if (event.target === this) {
        closeModal();
    }
};