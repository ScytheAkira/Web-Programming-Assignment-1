const darkModeForm = document.querySelector('.dark-mode-form');
let formData = {};

darkModeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputTags = document.querySelectorAll('.dark-mode-form input');

    inputTags.forEach((input) => {
        formData = { ...formData, [input.id]: input.value };
    });

    // Uncomment the line below for testing
    // console.log(formData);
});

document.querySelector('.dark-mode-table-button').addEventListener('click', (e) => {
    e.preventDefault();

    let output = '';
    const tbody = document.getElementsByTagName('tbody')[0];
    tbody.innerHTML = output;

    for (const key in formData) {
        output += `<tr>
        <td>${key}</td>
        <td>${formData[key]}</td>
    </tr>`;
    }

    tbody.innerHTML = output;
    document.querySelector('table').style.display = 'block';
});
