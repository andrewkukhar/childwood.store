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
            <label for="color" class="form-label">Обрати колір ліжка:</label>
            <select id="color" name="color" class="form-select">
                <option value="">Вибрати</option>
                <option value="Білий">Білий</option>
                <option value="Слонова кістка">Слонова кістка</option>
            </select>
            <label for="colorVelours" class="form-label">Обрати колір велюру:</label>
            <select id="colorVelours" name="colorVelours" class="form-select">
                <option value="">Вибрати</option>
                <option value="Рожевий">Рожевий</option>
                <option value="Сірий">Сірий</option>
                <option value="Фіолетовий">Фіолетовий</option>
                <option value="Бежевий">Бежевий</option>
                <option value="Інший">Інший (вкажіть, будь ласка, в Коментарі до замовлення)</option>
            </select></div>
            `;
        } else if (bedForm.selectedIndex === 2) {
            selectItem.innerHTML =
                `<div class="form-select-color">
        <label for="color" class="form-label">Обрати колір ліжка:</label>
            <select id="color" name="color" class="form-select">
                <option value="">Вибрати</option>
                <option value="Білий">Білий</option>
                <option value="Білий з натуральними ніжками">Білий з натуральними ніжками</option>
                <option data-ral="#ral1" value="Обрати колір в каталозі Ral">Обрати колір в каталозі Ral
                </option>
            </select>
            <div class="form__item-ral">
                <a href="https://ral.ru/classic_russian" target="_blank">
                    Каталог кольорів <span>Ral Classic</span></a>
                <input id="ralColor" name="ralColor" type="text" placeholder="введіть колір Ral">
            </div>
            </div>`
                ;
        } else if (bedForm.selectedIndex === 3) {
            selectItem.innerHTML =
                `<div class="form-select-color">
            <label for="color" class="form-label">Обрати колір ліжка:</label>
            <select id="color" name="color" class="form-select">
                <option value="">Вибрати</option>
                <option value="Білий">Білий</option>
                <option value="Слонова кістка">Слонова кістка</option>
            </select>
            <label for="colorVelours" class="form-label">Обрати колір велюру:</label>
            <select id="colorVelours" name="colorVelours" class="form-select">
                <option value="">Вибрати</option>
                <option value="Рожевий">Рожевий</option>
                <option value="Сірий">Сірий</option>
                <option value="Фіолетовий">Фіолетовий</option>
                <option value="Бежевий">Бежевий</option>
                <option value="Інший">Інший (вкажіть, будь ласка, в Коментарі до замовлення)</option>
            </select>
            </div>`;
        } else if (bedForm.selectedIndex === 4) {
            selectItem.innerHTML =
                `<div class="form-select-color">
        <label for="color" class="form-label">Обрати колір ліжка:</label>
        <select id="color" name="color" class="form-select">
            <option value="">Вибрати</option>
            <option value="Білий">Білий</option>
            <option value="Білий з натуральним">Білий з натуральним</option>
            <option data-ral="#ral1" value="Обрати колір в каталозі Ral">Обрати колір в каталозі Ral
            </option>
        </select>
        <div class="form__item-ral">
            <a href="https://ral.ru/classic_russian" target="_blank">
                Каталог кольорів <span>Ral Classic</span></a>
            <input id="ralColor" name="ralColor" type="text" placeholder="введіть колір Ral">
        </div>
        </div>`
                ;
        } else if (bedForm.selectedIndex === 5) {
            selectItem.innerHTML =
                `<div class="form-select-color">
        <label for="color" class="form-label">Обрати колір ліжка:</label>
        <select id="color" name="color" class="form-select">
            <option value="">Вибрати</option>
            <option value="Білий">Білий</option>
            <option value="Білий з натуральним">Білий з натуральним</option>
            <option data-ral="#ral1" value="Обрати колір в каталозі Ral">Обрати колір в каталозі Ral
            </option>
        </select>
        <div class="form__item-ral">
            <a href="https://ral.ru/classic_russian" target="_blank">
                Каталог кольорів <span>Ral Classic</span></a>
            <input id="ralColor" name="ralColor" type="text" placeholder="введіть колір Ral">
        </div>
        </div>`
                ;
        } else if (bedForm.selectedIndex === 6) {
            selectItem.innerHTML =
                `<div class="form-select-color">
        <label for="color" class="form-label">Обрати колір ліжка:</label>
        <select id="color" name="color" class="form-select">
            <option value="">Вибрати</option>
            <option value="Білий">Білий</option>
            <option value="Білий з натуральним">Білий з натуральним</option>
            <option data-ral="#ral1" value="Обрати колір в каталозі Ral">Обрати колір в каталозі Ral
            </option>
        </select>
        <div class="form__item-ral">
            <a href="https://ral.ru/classic_russian" target="_blank">
                Каталог кольорів <span>Ral Classic</span></a>
            <input id="ralColor" name="ralColor" type="text" placeholder="введіть колір Ral">
        </div>
        </div>`
                ;
        } else {
            selectItem.innerHTML =
                `<div class="form-select-color">
        <p>Спочатку оберіть модель ліжка, будь ласка</p>
        </div>`;
        }
    });
})();