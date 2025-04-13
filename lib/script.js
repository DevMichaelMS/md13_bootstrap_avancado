document.getElementById('tel').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('form-modal').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nome && tel && email) {
        const modal = bootstrap.Modal.getInstance(document.getElementById('exemplo-modal'));
        modal.hide();

        const successModal = new bootstrap.Modal(document.getElementById('success-modal'));
        successModal.show();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});