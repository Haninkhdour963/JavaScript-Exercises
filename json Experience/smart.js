
// fetching data from json file


fetch('smartphone.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const tableBody = document.getElementById('data-table').querySelector('tbody');

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.brand}</td>
                <td>${item.model}</td>
                <td>${item.price}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    