(function () {
    let bedForm = document.getElementById('model');

    bedForm.addEventListener("change", function () {
        let bedForm = document.getElementById('model');
        console.log(bedForm.value);

        let indexModel = bedForm.selectedIndex;
        console.log(indexModel);
    });
})();
(function newSelect() {
    let bedForm = document.getElementById('model');
    bedForm.addEventListener("change", function () {
        let selectItem = document.querySelector('.form__item-color');
        if (bedForm.selectedIndex === 1) {
            selectItem.innerHTML =
                `<div class="form-select-color">
            <label for="color" class="form-label">Выбрать цвет кроватки:</label>
            <select id="color" name="color" class="form-select">
                <option value="">Выбрать</option>
                <option value="Белый">Белый</option>
                <option value="Слоновая кость">Слоновая кость</option>
            </select>
            <label for="colorVelours" class="form-label">Выбрать цвет велюра:</label>
            <select id="colorVelours" name="colorVelours" class="form-select">
                <option value="">Выбрать</option>
                <option value="Розовый">Розовый</option>
                <option value="Серый">Серый</option>
                <option value="Фиолетовый">Фиолетовый</option>
                <option value="Бежевый">Бежевый</option>
                <option value="Другой">Другой (укажите, пожалуйста, в Комментарие к заказу)</option>
            </select></div>`;
        } else if (bedForm.selectedIndex === 2) {
            selectItem.innerHTML =
            `<div class="form-select-color">
            <label for="color" class="form-label">Выбрать цвет кроватки:</label>
            <select id="color" name="color" class="form-select">
                <option value="">Выбрать</option>
                <option value="Белый">Белый</option>
                <option value="Белый с натуральными ножками">Белый с натуральными ножками</option>
                <option data-ral="#ral1" value="Выбрать цвет в каталоге Ral">Выбрать цвет в каталоге Ral
                </option>
            </select>
            <div class="form__item-ral">
                <a href="https://ral.ru/classic_russian" target="_blank">
                    Каталог цветов <span>Ral Classic</span></a>
                <input id="ralColor" name="ralColor" type="text" placeholder="введите цвет Ral">
            </div>
            </div>`
                ;
        } else if (bedForm.selectedIndex === 3) {
            selectItem.innerHTML =
            `<div class="form-select-color">
            <label for="color" class="form-label">Выбрать цвет кроватки:</label>
            <select id="color" name="color" class="form-select">
                <option value="">Выбрать</option>
                <option value="Белый">Белый</option>
                <option value="Слоновая кость">Слоновая кость</option>
            </select>
            <label for="colorVelours" class="form-label">Выбрать цвет велюра:</label>
            <select id="colorVelours" name="colorVelours" class="form-select">
                <option value="">Выбрать</option>
                <option value="Розовый">Розовый</option>
                <option value="Серый">Серый</option>
                <option value="Фиолетовый">Фиолетовый</option>
                <option value="Бежевый">Бежевый</option>
                <option value="Другой">Другой (укажите, пожалуйста, в Комментарие к заказу)</option>
            </select></div>`;
        } else if (bedForm.selectedIndex === 4) {
            selectItem.innerHTML =
            `<div class="form-select-color">
            <label for="color" class="form-label">Выбрать цвет кроватки:</label>
            <select id="color" name="color" class="form-select">
                <option value="">Выбрать</option>
                <option value="Белый">Белый</option>
                <option value="Белый с натуральным">Белый с натуральным</option>
                <option data-ral="#ral1" value="Выбрать цвет в каталоге Ral">Выбрать цвет в каталоге Ral
                </option>
            </select>
            <div class="form__item-ral">
                <a href="https://ral.ru/classic_russian" target="_blank">
                    Каталог цветов <span>Ral Classic</span></a>
                <input id="ralColor" name="ralColor" type="text" placeholder="введите цвет Ral">
            </div>
            </div>`
                ;
        } else if (bedForm.selectedIndex === 5) {
            selectItem.innerHTML =
            `<div class="form-select-color">
            <label for="color" class="form-label">Выбрать цвет кроватки:</label>
            <select id="color" name="color" class="form-select">
                <option value="">Выбрать</option>
                <option value="Белый">Белый</option>
                <option value="Белый с натуральным">Белый с натуральным</option>
                <option data-ral="#ral1" value="Выбрать цвет в каталоге Ral">Выбрать цвет в каталоге Ral
                </option>
            </select>
            <div class="form__item-ral">
                <a href="https://ral.ru/classic_russian" target="_blank">
                    Каталог цветов <span>Ral Classic</span></a>
                <input id="ralColor" name="ralColor" type="text" placeholder="введите цвет Ral">
            </div>
            </div>`
                ;
        } else if (bedForm.selectedIndex === 6) {
            selectItem.innerHTML =
                `<div class="form-select-color">
        <label for="color" class="form-label">Выбрать цвет кроватки:</label>
        <select id="color" name="color" class="form-select">
            <option value="">Выбрать</option>
            <option value="Белый">Белый</option>
            <option value="Белый с натуральным">Белый с натуральным</option>
            <option data-ral="#ral1" value="Выбрать цвет в каталоге Ral">Выбрать цвет в каталоге Ral
            </option>
        </select>
        <div class="form__item-ral">
            <a href="https://ral.ru/classic_russian" target="_blank">
                Каталог цветов <span>Ral Classic</span></a>
            <input id="ralColor" name="ralColor" type="text" placeholder="введите цвет Ral">
        </div>
        </div>`
                ;
        } else {
            selectItem.innerHTML =
                `<div class="form-select-color">
        <p>Вначале выбирите модель кроватки, пожалуйста</p>
        </div>`;
        }
    });
})();