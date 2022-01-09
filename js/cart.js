function changeSelectForm() {
    let bedForm = document.getElementById('model');
    let colorItem = document.querySelector('.form__item-color');
    let lastIndexColor = 0;
    bedForm.addEventListener("change", function () {
        let indexColor = bedForm.selectedIndex;
        console.log(indexColor);
        colorItem[lastIndexColor].innerHTML = ` `;

        colorItem[indexColor].innerHTML += `
        
        `;
        lastIndexColor = indexColor;
    });
    console.log(indexColor);
};
// form__item-color
// 
// 
// 
// 
console.log(indexColor);