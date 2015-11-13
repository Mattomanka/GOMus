# Ion.CheckRadio 2.0.0

[![](https://pledgie.com/campaigns/25694.png?skin_name=chrome)](https://pledgie.com/campaigns/25694)

> <a href="readme.md">English description</a> | Описание на русском

jQuery плагин для стилизации чекбоксов и радио-батонов. С поддержкой скинов
* <a href="http://ionden.com/a/plugins/ion.checkRadio/index.html">Сайт проекта и демо</a>
* <a href="http://ionden.com/a/plugins/ion.checkRadio/ion.checkRadio-2.0.0.zip">Download Ion.checkRadio-2.0.0.zip</a>

***

## Описание
* Ion.CheckRadio — простой и понятный плагин для стилизации чекбоксов и радио-батонов.
* С поддержкой скинов
* Кроссбраузерная поддержка: Google Chrome, Mozilla Firefox, Opera, Safari, IE(8.0+)
* Плагин поддерживает устройства с touch-экраном (iPhone, iPad, etc.).
* <a href="https://github.com/IonDen/ion.checkRadio">Репозиторий на GitHub</a>.
* Плагин свободно распространяется на условиях <a href="http://ionden.com/a/plugins/licence.html" target="_blank">лицензии MIT</a>.

## Зависимости
* <a href="http://jquery.com/" target="_blank">jQuery 1.9+</a>

## Подключение

Подключаем библиотеки:
* jQuery
* ion.checkRadio.min.js

CSS:
* normalize.min.css - елательно, если он у вас еще не подключен
* ion.checkRadio.css
* ion.checkRadio.skinName.css

Не забываем про картинки скина:
* icr-skinName-skin.png - спрайт скина
* Либо воспользуйтесь вложенным в архив PSD файлом, и нарисуйте собственный скин

### Рекомендуемая разметка
```html
Радио-батоны:

<label class="icr-label">
    <span class="icr-item type_radio"></span>
    <span class="icr-hidden"><input class="icr-input" type="radio" name="!group_name!" value="!radio_value_1!" /></span>
    <span class="icr-text">!radio_text_1!</span>
</label>
<label class="icr-label">
    <span class="icr-item type_radio"></span>
    <span class="icr-hidden"><input class="icr-input" type="radio" name="!group_name!" value="!radio_value_2!" /></span>
    <span class="icr-text">!radio_text_2!</span>
</label>

Чекбоксы:
<label class="icr-label">
    <span class="icr-item type_checkbox"></span>
    <span class="icr-hidden"><input class="icr-input" type="radio" name="!group_name!" value="!checkbox_value_1!" /></span>
    <span class="icr-text">!checkbox_text_1!</span>
</label>
<label class="icr-label">
    <span class="icr-item type_checkbox"></span>
    <span class="icr-hidden"><input class="icr-input" type="radio" name="!group_name!" value="!checkbox_value_2!" /></span>
    <span class="icr-text">!checkbox_text_1!</span>
</label>
```


### Обычная разметка
```html
Создаем чекбоксы и/или радио-батоны:

<input type="radio" name="reading" value="0" id="reading_0" /> <label for="reading_0">Очень люблю</label>
<input type="radio" name="reading" value="1" id="reading_1" /> <label for="reading_1">Иногда читаю</label>
<input type="radio" name="reading" value="2" id="reading_2" /> <label for="reading_2">Лучше фильм посмотрю</label>
<input type="radio" name="reading" value="3" id="reading_3" /> <label for="reading_3">Ненавижу</label>

или так:

<label><input type="radio" name="movies" value="0" /> Обожаю</label>
<label><input type="radio" name="movies" value="1" /> Не против</label>
<label><input type="radio" name="movies" value="2" /> Так себе</label>
<label><input type="radio" name="movies" value="3" /> Ненавижу</label>

или вот еще чекбоксиков:

<label><input type="checkbox" name="think" value="0" /> О себе</label>
<label><input type="checkbox" name="think" value="1" /> О деньгах</label>
<label><input type="checkbox" name="think" value="2" /> О высоком</label>
<label><input type="checkbox" name="think" value="3" /> О здоровье</label>
<label><input type="checkbox" name="think" value="4" /> О работе</label>
<label><input type="checkbox" name="think" value="5" checked /> Об отдыхе</label>
<label><input type="checkbox" name="think" value="6" disabled checked /> О сексе</label>
```

### Инициализируем плагин
```javascript
// все на странице:
$("input[type='radio'], input[type='checkbox']").ionCheckRadio();

// конкретную группу:
$(".my_inputs").ionCheckRadio();
```

Profit!


## <a href="history.md">История обновлений</a>

## Поддержите разработку плагина
[![](https://pledgie.com/campaigns/25694.png?skin_name=chrome)](https://pledgie.com/campaigns/25694)