document.addEventListener('DOMContentLoaded', () => {
    fetch('/soap-data')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('data-container');
            container.innerHTML = `
                <p><strong>Country Name:</strong> ${data.CountryNameResult}</p>
                <p><strong>Capital City:</strong> ${data.CapitalCityResult}</p>
                <p><strong>Currency:</strong> ${data.CountryCurrencyResult.sName}</p>
                <p><strong>Flag:</strong> <img src="${data.CountryFlagResult}" alt="Flag of ${data.CountryNameResult}" /></p>
            `;
        })
        .catch(error => {
            console.error('Error fetching SOAP data:', error);
        });
});