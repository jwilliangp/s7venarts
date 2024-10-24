document.querySelector('form').addEventListener('submit', function() {
    alert('Mensagem enviada!');
});

function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal(event) {
    if (event) event.stopPropagation();
    document.getElementById("imageModal").style.display = "none";
}