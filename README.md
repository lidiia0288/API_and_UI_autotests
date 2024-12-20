﻿<h1 align="center">Дипломный проект автоматизации тестирования JS+PlayWright</h1>

##  Содержание:
- <a href="#cases"> Тест-кейсы</a>
- <a href="#autotests"> Запуск автотестов</a>
- <a href="#generateAllureReport"> Генерация отчетов</a>
- <a href="#jenkins"> Сборка в Jenkins</a>
- <a href="#allureReport"> Пример Allure-отчета</a>
- <a href="#allureTestOpsReport"> Пример Allure TestOps-отчета</a>
- <a href="#tg"> Уведомления в Telegram с использованием бота</a>

Этот проект представляет собой набор автоматизированных тестов, написанных на <code>JavaScript</code> с использованием фреймворков <code>[Playwright](https://playwright.dev)</code> и <code>[Allure](https://allurereport.org/)</code>. Playwright предоставляет мощный инструментарий для веб-автоматизации, а Allure добавляет возможности для красивой и удобной отчетности.


Для удаленного запуска реализована джоба в <code>Jenkins</code>, а так же <code>Github</code> action с формированием Allure-отчета и отправкой результатов в <code>Allure TestOps</code> и <code>Telegram</code> при помощи бота.

____
<a id="cases"></a>
## 🕵️‍♂️ Тест-кейсы

### API:
- Выбрать несуществующее задание GET /todos @API
- Выбрать определенное задание GET /todos @API
- Получить некорректный урл GET /todos @API
- Получить полный список челленджей GET /challenges @API
- Получить список заданий GET /todos @API

### UI:
- Проверить пагинацию на главной странице
- Проверить отображение товара на главной странице
- Выбрать валюту в карточке товара
- Опубликовать отзыв на странице продукта
- Выбрать количество товара в карточке


<a id="autotests"></a>
____
## ▶️ Запуск автотестов, генерация отчетов

### Запуск тестов из терминала

Для запуска всех тестов использовать команду ниже:
```
npm test
```
Для запуска тестов на API:

```
npx playwright test api.tests.js
```
Для запуска тестов на UI:
```
npx playwright test ui.tests.js
```

<a id="generateAllureReport"></a>
_____
### Генерация отчетов Allure из терминала

Для генерация отчетов использовать команду ниже:
```
npm run allure
```

---
<a id="jenkins"></a>
## <img width="20" style="vertical-align:middle" title="Jenkins" src="media/logo/jenkins.svg"> </a> Сборка в <a target="_blank" href="https://jenkins.autotests.cloud/job/001-mi_lidiia-JS_PW_project-Jenkinsfile/"> Jenkins </a>
Для доступа в Jenkins необходимо зарегистриваться в [Jenkins](https://jenkins.autotests.cloud/) Для запуска сборки перейти в раздел <code>Build with parameters</code>, выбрать необходимые параметры и нажать кнопку <code>Build</code>.
<p align="center">
<img title="jenkins" src="media/jenkins.png ">
</p>
После выполнения сборки, в блоке <code>Build History</code> напротив номера сборки появятся значки <code>Allure Report</code>, при клике на которые откроется страница с сформированным html-отчетом.

____
<a id="allureReport"></a>
## <img width="30" style="vertical-align:middle" title="Allure Report" src="media/logo/allure.svg"> </a> Пример <a target="_blank" href="https://jenkins.autotests.cloud/job/001-braunman-JsPlaywrightFinalWork/allure/"> Allure-отчета </a>
<p align="center">
<img title="Allure Report" src="media/allure.png">
</p>

____
<a id="allureTestOpsReport"></a>
## <img width="30" style="vertical-align:middle" title="Allure TestOps Report" src="media/logo/testops-logo.png"> </a> Пример <a target="_blank" href="https://allure.autotests.cloud/launch/43117/"> Allure TestOps-отчета </a>
<p align="center">
<img title="Allure TestOps Report" src="media/testops.png">
</p>

____
<a id="tg"></a>
## <img width="30" style="vertical-align:middle" title="Telegram" src="media/logo/telegram.svg"> Уведомления в Telegram с использованием бота
После завершения сборки бот, подключенный к <code>Telegram</code>, автоматически собирает результаты тестов и отправляет сообщение с отчетом о прохождении тестов в чат.
<div style="background-color: #18222d">
<p align="center">
<img width="40%" title="Telegram Notifications" src="media/telegram.png">
</p>
</div>
