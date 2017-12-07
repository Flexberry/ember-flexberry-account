# Ember-flexberry-account

[![Travis master branch](https://img.shields.io/travis/Flexberry/ember-flexberry-account/master.svg?label=master%20build%20)](https://travis-ci.org/Flexberry/ember-flexberry-account)
[![Travis develop branch](https://img.shields.io/travis/Flexberry/ember-flexberry-account/develop.svg?label=develop%20build)](https://travis-ci.org/Flexberry/ember-flexberry-account/branches)
[![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg)](https://github.com/orangemug/stability-badges#work-in-progress)

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## Addon usage

Этот аддон предназначен для добавления в Ember-приложение форм для аутентификации пользователя (`login`), регистрации пользователя (`register`), восстановления пароля пользователя (`pwd-reset`) и вывода информации из профиля пользователя (`user-profile`).  
Всё взаимодействие с бакендом вынесено в сервис `user-account`, что подразумевает переопределение всех необходимых методов в конечном приложении.  
Включение или выключени тех или иных функций аддона вынесено в `config\environment.js` в секцию `APP.userAccount`.  
Аутентификация и регистрация пользователя возможна как "обычным" образом по логину-паролю, так и с использованием сторонних провайдеров: Vk, Facebook, Twitter, Google, Microsoft, GitHub, Ok, Mail.ru, Yandex, Gosuslugi (в аддоне предлагается только базовая реализация кнопок).
Поддерживается локализация интерфейса с использованием `ember-i18n`.
