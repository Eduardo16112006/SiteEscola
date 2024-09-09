const div1 = document.getElementById('img-infor');
const div2 = document.getElementById('form-login');
const container = document.querySelector('.container');
const button = document.getElementById('btn-trocar');
const nprocessoLogin = document.getElementById('nprocesso-login');
const passwordLogin = document.getElementById('password-login');
const div3 = document.getElementById('div3');

let isEmail = false; // Controle do estado atual

button.addEventListener('click', () => {
    // Troca as divs
    if (div1.nextElementSibling === div2) {
        container.insertBefore(div2, div1);
    } else {
        container.insertBefore(div1, div2);
    }
    // Limpa os valores dos inputs
    nprocessoLogin.value = '';
    passwordLogin.value = '';

    // Altera o tipo e placeholder do input
    if (isEmail) {
        nprocessoLogin.type = 'number';
        nprocessoLogin.placeholder = 'Nº Processo';
        passwordLogin.type = 'password';
        passwordLogin.placeholder = 'Senha';
        button.textContent = 'Entrar com E-mail';
    } else {
        nprocessoLogin.type = 'email';
        nprocessoLogin.placeholder = 'E-mail';
        passwordLogin.type = 'text';
        passwordLogin;
        passwordLogin.placeholder = 'Senha';
        button.textContent = 'Entrar com o Nº Processo';
    }

    // Atualiza os estilos dos inputs e do botão
    updateStyles();

    // Inverte o estado
    isEmail = !isEmail;
});

function updateStyles() {
    // Estilos dos inputs
    nprocessoLogin.style.width = '500px';
    nprocessoLogin.style.padding = '10px';
    nprocessoLogin.style.fontSize = '16px';
    nprocessoLogin.style.border = '1px solid #ccc';
    nprocessoLogin.style.borderRadius = '4px';
    nprocessoLogin.style.outline = 'none';
    nprocessoLogin.style.transition = 'border 0.3s ease';
    nprocessoLogin.type = "text";

    passwordLogin.style.width = '500px';
    passwordLogin.style.padding = '10px';
    passwordLogin.style.fontSize = '16px';
    passwordLogin.style.border = '1px solid #ccc';
    passwordLogin.style.borderRadius = '4px';
    passwordLogin.style.outline = 'none';
    passwordLogin.style.transition = 'border 0.3s ease';
    passwordLogin.type = "password";

    nprocessoLogin.addEventListener('focus', () => {
        nprocessoLogin.style.borderColor = '#007bff';
    });

    nprocessoLogin.addEventListener('blur', () => {
        nprocessoLogin.style.borderColor = '#ccc';
    });

    passwordLogin.addEventListener('focus', () => {
        passwordLogin.style.borderColor = '#007bff';
    });

    passwordLogin.addEventListener('blur', () => {
        passwordLogin.style.borderColor = '#ccc';
    });

    // Estilos do botão
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.width = '60%';
    button.style.color = 'white';
    button.style.backgroundColor = '#007bff';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    button.style.transition = 'background-color 0.3s ease';

    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#0056b3';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#007bff';
    });

    // Estilos da div3
    div3.style.display = 'flex';
    div3.style.gap = '270px'; // Espaçamento entre os labels
    div3.style.alignItems = 'center';

    const labels = div3.querySelectorAll('label');
    labels.forEach(label => {
        label.style.display = 'flex';
        label.style.alignItems = 'center';
    });

    const checkbox = div3.querySelector('input[type="checkbox"]');
    if (checkbox) {
        checkbox.style.marginRight = '5px';
    }
}