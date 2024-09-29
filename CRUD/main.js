document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const fNameInput = document.getElementById('fName');
    const ageInput = document.getElementById('age');
    const addressInput = document.getElementById('address');
    const emailInput = document.getElementById('email');
    const tbody = document.querySelector('tbody');
    let editingIndex = null;

    function renderTable() {
        tbody.innerHTML = '';
        const data = JSON.parse(localStorage.getItem('data')) || [];
        data.forEach((item, index) => {
            const row = `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.address}</td>
                    <td>${item.email}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editData(${index})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteData(${index})">Delete</button>
                    </td>
                </tr>
            `;
            tbody.insertAdjacentHTML('beforeend', row);
        });
    }

    function saveData() {
        const name = fNameInput.value;
        const age = ageInput.value;
        const address = addressInput.value;
        const email = emailInput.value;

        const data = JSON.parse(localStorage.getItem('data')) || [];
        if (editingIndex !== null) {
            data[editingIndex] = { name, age, address, email };
            editingIndex = null;
        } else {
            data.push({ name, age, address, email });
        }
        localStorage.setItem('data', JSON.stringify(data));
        form.reset();
        renderTable();
    }

    window.editData = (index) => {
        const data = JSON.parse(localStorage.getItem('data'));
        const item = data[index];
        fNameInput.value = item.name;
        ageInput.value = item.age;
        addressInput.value = item.address;
        emailInput.value = item.email;
        editingIndex = index;
    };

    window.deleteData = (index) => {
        const data = JSON.parse(localStorage.getItem('data'));
        data.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(data));
        renderTable();
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        saveData();
    });

    renderTable();
});
