let bedForm = document.getElementById('model');
let colorItem = document.querySelector('.form-select-color');

bedForm.addEventListener("change", function () {
    let bedForm = document.getElementById('model');
    console.log(bedForm.value);

    let indexModel = bedForm.selectedIndex;
    console.log(indexModel);
});
function changeModelSelect() {
    let bedForm = document.getElementById('model');
    let colorItem = document.querySelector('.form-select-color');
    bedForm.addEventListener("change", function () {
        if (bedForm.value === 'classic') {
            colorItem.innerHTML =
                `
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
            `;
        } else if (bedForm.value === 'scandi') {
            colorItem.innerHTML =
                `
            <label for="color" class="form-label">Обрати колір ліжка:</label>
            <select id="colorScandi" name="color" class="form-select">
                <option value="">Вибрати</option>
                <option value="Білий">Білий</option>
                <option value="Білий + натуральні ніжки">Білий + натуральні ніжки</option>
                <option data-ral="#ral1" value="Обрати колір в каталозі Ral">Обрати колір в каталозі Ral
                </option>
            </select>
            <div id="ral1" class="form__item-ral">
                <a href="https://ral.ru/classic_russian" target="_blank">
                    Каталог кольорів <span>Ral Classic</span></a>
                <input id="ralColor" name="ralColor" type="text" placeholder="введіть колір Ral">
            </div>
            `
                ;
        } else if (bedForm.value === 'mishel') {
            colorItem.innerHTML =
                `
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
            `;
        } else if (bedForm.value === 'polli') {
            colorItem.innerHTML =
                `
        <label for="color" class="form-label">Обрати колір ліжка:</label>
        <select id="colorScandi" name="color" class="form-select">
            <option value="">Вибрати</option>
            <option value="Білий">Білий</option>
            <option value="Білий + натуральні ніжки">Білий + натуральні ніжки</option>
            <option data-ral="#ral1" value="Обрати колір в каталозі Ral">Обрати колір в каталозі Ral
            </option>
        </select>
        <div id="ral1" class="form__item-ral">
            <a href="https://ral.ru/classic_russian" target="_blank">
                Каталог кольорів <span>Ral Classic</span></a>
            <input id="ralColor" name="ralColor" type="text" placeholder="введіть колір Ral">
        </div>
        `
                ;
        } else if (bedForm.value === 'house') {
            colorItem.innerHTML =
                `
        <label for="color" class="form-label">Обрати колір ліжка:</label>
        <select id="colorScandi" name="color" class="form-select">
            <option value="">Вибрати</option>
            <option value="Білий">Білий</option>
            <option value="Білий + натуральні ніжки">Білий + натуральні ніжки</option>
            <option data-ral="#ral1" value="Обрати колір в каталозі Ral">Обрати колір в каталозі Ral
            </option>
        </select>
        <div id="ral1" class="form__item-ral">
            <a href="https://ral.ru/classic_russian" target="_blank">
                Каталог кольорів <span>Ral Classic</span></a>
            <input id="ralColor" name="ralColor" type="text" placeholder="введіть колір Ral">
        </div>
        `
                ;
        } else if (bedForm.value === 'housemini') {
            colorItem.innerHTML =
                `
        <label for="color" class="form-label">Обрати колір ліжка:</label>
        <select id="colorScandi" name="color" class="form-select">
            <option value="">Вибрати</option>
            <option value="Білий">Білий</option>
            <option value="Білий + натуральні ніжки">Білий + натуральні ніжки</option>
            <option data-ral="#ral1" value="Обрати колір в каталозі Ral">Обрати колір в каталозі Ral
            </option>
        </select>
        <div id="ral1" class="form__item-ral">
            <a href="https://ral.ru/classic_russian" target="_blank">
                Каталог кольорів <span>Ral Classic</span></a>
            <input id="ralColor" name="ralColor" type="text" placeholder="введіть колір Ral">
        </div>
        `
                ;
        } else {
            colorItem.innerHTML =
                ` 
            <p>Спочатку оберіть модель ліжка, будь ласка</p>

            `;
        }
    });
};
changeModelSelect();