const bedForm = document.forms.bedforms;
const bedFormModel = bedForm.model;
// const bedFormModelSelect = bedFormModel.selectedIndex;
// console.log(bedFormModelSelect);
bedFormModel.addEventListener("change", function (e) {
    let index = bedFormModel.selectedIndex;
    console.log(index);
});