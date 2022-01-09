let bedForm = document.getElementById('model');
let colorItem = document.querySelector('.form-item-color');
let optionItem = colorItem.value;
console.log(optionItem);

bedForm.addEventListener("change", function () {
    let indexColor = bedForm.selectedIndex;
    let indexOptione = option.index;
    if (indexColor == 0) {
        colorItem.innerHTML +=
            `
            <div id="col0" class="form-select-color">
            <p>Спочатку оберіть модель ліжка, будь ласка</p>
            </div>
            `;
    } else if (indexColor == 1) {

    }
    // colorItem[lastIndexColor].innerHTML = ` `;

    //colorItem[indexColor].innerHTML += `
    // 
    //`;
});
