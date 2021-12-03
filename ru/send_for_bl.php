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
        'Имя:' => $name,
        'Телефон:' => $phone,
        'Постельное бельё:' => $bedLinen,
        'Размер белья:' => $sizeBl,
        'Количество комплектов:' => $quantityBl,
        'Комплектация:' => $sheetBl,
        'Размер наволочки:' => $sizePc,
        'Комментарий к заказу:' => $formMessage,
        'Обратная связь:' => $feedback
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        echo "Спасибо! Ваша заявка принята. В скором времени с Вами свяжется менеджер, для уточнения деталей.";
    }

//А здесь сообщение об ошибке при отправке
    else {
        echo "Что-то пошло не так. Попробуйте отправить форму ещё раз.";
    }
}

?>