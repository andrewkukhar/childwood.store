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
    $model = ($_POST['model']);
    $size = ($_POST['size']);
    $color = ($_POST['color']);
    $colorVelours = ($_POST['colorVelours']);
    $ralColor = ($_POST['ralColor']);
    $quantityBed = ($_POST['quantityBed']);
    $side = ($_POST['side']);
    $boxes = ($_POST['boxes']);
    $cutout = ($_POST['cutout']);
    $formMessage = ($_POST['formMessage']);
    $feedback = ($_POST['feedback']);
//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'Телефон:' => $phone,
        'Модель:' => $model,
        'Размер:' => $size,
        'Цвет кроватки:' => $color,
        'Цвет велюра:' => $colorVelours,
        'Цвет кроватки рал:' => $ralColor,
        'Количество кроваток:' => $quantityBed,
        'Сторона бортика:' => $side,
        'Комплектация:' => $boxes,
        'Форма выреза:' => $cutout,
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