const ativadorToast = document.getElementById('btn-checar-emails');
const mensagem = document.getElementById('msg-alert');

if(ativadorToast) {
    ativadorToast.addEventListener('click', function () {      
        const toast = new bootstrap.Toast(mensagem)
        toast.show()
    })
};