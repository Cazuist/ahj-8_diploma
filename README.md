[![Code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)

[![Build status](https://ci.appveyor.com/api/projects/status/hco9xux5vh63uhdt?svg=true)](https://ci.appveyor.com/project/Cazuist/ahj-8-diploma)

[GH-Pages](https://cazuist.github.io/ahj-8_diploma)

# Дипломное задание к курсу «Продвинутый JavaScript в браузере». 
## Chaos Organizer

### Основной функционал
  - [x] Сохранение в истории ссылок и текстовых сообщений;   

    - Поле ввода сообщение не должно быть пустым;
    -  Отправка сообщения по нажатию "Enter";
    - Отправка сообщений по нажатию на кнопку <img src="./doc/1_send_message.png" style="zoom:50%;" />

  - [x] Ссылки (то, что начинается с http:// или https://) должны быть кликабельны и отображаться как ссылки;

  - [x] Сохранение в истории изображений, видео и аудио, других файлов;

    - Через кнопку <img src="./doc/2_Load_file.png" style="zoom:50%;" />
    - Через перенос файлов с компьютера <img src="./doc/2_1_DragDrop.png" style="zoom:33%;" />

  - [x] Скачивание файлов (на компьютер пользователя);

     - Скачивание происходит при нажатии на кнопку <img src="./doc/3_Save_file.png" style="zoom:50%;" />	

       - скачивание происходит в системную папку ***Загрузки / Downloads***;

  - [x] Ленивая подгрузка.
***
### Дополнительный функционал
   - [x] Синхронизация при открытии в нескольких окнах / вкладках.
   - [ ] Поиск по сообщениям.
   - [x] Запись видео и аудио (используя API браузера).
     - Запись аудио/видео начинается при нажатии на кнопки <img src="./doc/4_Audio_video.png" style="zoom:50%;" /> 
     - Запись отменяется в окне записи файла при нажатии на кнопку <img src="./doc/4_Media_cancel.png" style="zoom:50%;" />
     - Файл сохраняется в истории при нажатии на кнопку <img src="./doc/4_Media_apply.png" style="zoom:50%;" />
   - [x] Отправка геолокации.
     - Отправка геолокации возможна при "зелёной" кнопке <img src="./doc/5_Geolocation.png" style="zoom:50%;" />
     - Отправка геолокации осуществляется при нажатии на кнопку <img src="./doc/5_Geo_2.png" style="zoom:50%;" />
   - [x] Воспроизведение видео/аудио (используя API браузера);
   - [ ] Установка напоминаний и напоминания (через Notification API);
   - [ ] Отправка команд боту;
   - [x] Закрепление (pin) сообщений;
      - сообщение закрепляется при нажатии на иконку на сообщении <img src="./doc/6_Pinned_1.png" style="zoom:50%;" />
      - сообщение открепляется при нажатии на кнопку на прикрепленном сообщении <img src="./doc/6_Pinned_2.png" style="zoom:50%;" />
   - [x] Добавление сообщения в избранное;
      - сообщение попадает в избранное при нажатии на иконку <img src="./doc/7_Favor_1.png" style="zoom:50%;" />
      - иконка меняет цвет;
      - посмотреть избранное можно при нажатии на <img src="./doc/7_Favor_2.png" style="zoom:50%;" />
   - [ ] Просмотр вложений по категориям;
   - [ ] Работа в оффлайн-режиме;
   - [ ] Экспорт/импорт истории чата;
   - [ ] Отправка зашифрованных сообщений и файлов с просмотром расшифрованных;
   - [ ] Архивирование файлов и распаковка;
   - [ ] Поддержка оформления кода;
   - [ ] Поддержка смайликов;
   - [ ] Поддержка стикеров;