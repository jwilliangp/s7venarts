// contact-form.js
window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Envio do formulário
        emailjs.sendForm('service_g3ee44n', 'template_9orv3dr', this) // Atualize os IDs conforme necessário
            .then(() => {
                console.log('Mensagem enviada com sucesso!');
                alert('Mensagem enviada com sucesso!'); // Alerta para o usuário
                this.reset(); // Limpa o formulário após o envio
            }, (error) => {
                console.log('Falha ao enviar...', error);
                alert('Falha ao enviar a mensagem. Tente novamente!'); // Alerta de erro
            });
    });
}
