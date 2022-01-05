(function () {
    let bedForm = document.getElementById('model');
    let photoItem = document.querySelectorAll('.popup-sideofbed-example-content');
    let lastIndex = 0;
    bedForm.addEventListener("change", function () {
        photoItem[lastIndex].style.display = "none";
        let indexSel = bedForm.selectedIndex;
        photoItem[indexSel].style.display = "block";
        lastIndex = indexSel;
    });
})();
$(function () {
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 300);
    })
})
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.scrollup').fadeIn();
    }
    else {
        $('.scrollup').fadeOut();
    }
});
// for change select
(function () {
    let bedForm = document.getElementById('model');
    let colorItem = document.querySelectorAll('.form-select-color');
    let lastIndexColor = 0;
    bedForm.addEventListener("change", function () {
        colorItem[lastIndexColor].style.display = "none";
        let indexColor = bedForm.selectedIndex;
        colorItem[indexColor].style.display = "block";
        lastIndexColor = indexColor;
    });
})();