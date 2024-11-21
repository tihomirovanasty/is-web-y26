(function () {

    const time_start = Date.now()

    function displayLoadTime() {

        const footer = document.createElement('div');

        footer.textContent = `Время загрузки страницы ручками: ${(Date.now() - time_start) / 1000} с`;

        document.getElementById("footer-performance-cnt").appendChild(footer);
    }

    window.addEventListener('load', displayLoadTime);
})();