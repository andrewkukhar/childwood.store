<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "2031798265:AAGRHCjHk9Fj_D5iMGFusAH51PTyUU1l1e8";

//Сюда вставляем chat_id
$chat_id = "-1001582305630";
// "chat":{"id":-1001582305630

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);
    $bedLinen = ($_POST['bedLinen']);
    $sizeBl = ($_POST['sizeBl']);
    $quantityBl = ($_POST['quantityBl']);
    $sheetBl = ($_POST['sheetBl']);
    $sizePc = ($_POST['sizePc']);
    $formMessage = ($_POST['formMessage']);
    $feedback = ($_POST['feedback']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Ім я:' => $name,
        'Телефон:' => $phone,
        'Постільна білизна:' => $bedLinen,
        'Розмір білизни:' => $sizeBl,
        'Кількість комплектів:' => $quantityBl,
        'Комплектація:' => $sheetBl,
        'Розмір наволочки:' => $sizePc,
        'Коментар до замовлення:' => $formMessage,
        'Зворотній звязок:' => $feedback
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        echo "Дякуємо! Ваша заявка прийнята. Скоро Вам зателефонують.";
    }

//А здесь сообщение об ошибке при отправке
    else {
        echo "Щось пішло не так. Спробуйте відправити форму ще раз.";
    }
}

?>