const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('nameInput');
const telInput = document.getElementById('telInput');
const tableBody = document.getElementById('tableBody');
const error = document.getElementById('error');
let names = [];
let telList = [];

let newline = '';

function lineContruct() {
    newline += '<tr>';
    newline += `<td>${nameInput.value}</td>`;
    newline += `<td>${telInput.value}</td>`;
    newline += '</tr>'
}

function addContact() {
    if(names.includes(nameInput.value) || telList.includes(telInput.value)) {
        error.innerHTML = `O contato já é existente!`;
        error.style.display = 'block';
    } else {
        error.style.display = 'none';

        lineContruct();
        tableBody.innerHTML = newline;
        names.push(nameInput.value);
        telList.push(telInput.value);
    }

    nameInput.value = '';
    telInput.value = '';
}

contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    addContact();
});