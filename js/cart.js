(function () {
    let bedForm = document.getElementById('model');
    let colorItem = document.querySelectorAll('.form-select-color');
    let lastIndexColor = 0;
    bedForm.addEventListener("change", function () {
        colorItem[lastIndexColor].innerHTML = ` `;
        let indexColor = bedForm.selectedIndex;
        colorItem[indexColor].innerHTML += `
        
        `;
        lastIndexColor = indexColor;
    });
})();