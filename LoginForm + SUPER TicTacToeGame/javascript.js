const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    container.classList.add('active');
});

registerLink.addEventListener('click', () => {
    container.classList.add('active');
});

const btnPopup = document.querySelector('.btnLogin-popup');

btnPopup.addEventListener('click', () => {
    container.classList.remove('active-popup');
});

document.getElementById('playButton').addEventListener('click'), function() {
    window.location.href = 'YourCSharpPage.aspx';
}