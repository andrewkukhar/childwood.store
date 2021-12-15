let bedForm = document.getElementById('model');
let photoItem = document.querySelectorAll('.popup-sideofbed-example-content');
let lastIndex = 0;
bedForm.addEventListener("change", function () {
    photoItem[lastIndex].style.display = "none";
    let indexSel = bedForm.selectedIndex;
    photoItem[indexSel].style.display = "block";
    lastIndex = indexSel;
});