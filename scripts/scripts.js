document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.gallery img').forEach(image => {
        image.onclick = function () {
            openModal(this);
        };
    });

    document.getElementById("modal").onclick = function (event) {
        if (event.target === this) {
            closeModal();
        }
    };
});

function openModal(image) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
}
