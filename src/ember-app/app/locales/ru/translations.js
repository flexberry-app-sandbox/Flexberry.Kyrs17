import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKyrs17БилетКассаLForm from './forms/i-i-s-kyrs17-билет-касса-l';
import IISKyrs17МаршрутLForm from './forms/i-i-s-kyrs17-маршрут-l';
import IISKyrs17ОбслуживаниеLForm from './forms/i-i-s-kyrs17-обслуживание-l';
import IISKyrs17ОператорLForm from './forms/i-i-s-kyrs17-оператор-l';
import IISKyrs17ПеревозчикLForm from './forms/i-i-s-kyrs17-перевозчик-l';
import IISKyrs17ПокупательLForm from './forms/i-i-s-kyrs17-покупатель-l';
import IISKyrs17ПокупкаБилетаLForm from './forms/i-i-s-kyrs17-покупка-билета-l';
import IISKyrs17БилетКассаEForm from './forms/i-i-s-kyrs17-билет-касса-e';
import IISKyrs17МаршрутEForm from './forms/i-i-s-kyrs17-маршрут-e';
import IISKyrs17ОбслуживаниеEForm from './forms/i-i-s-kyrs17-обслуживание-e';
import IISKyrs17ОператорEForm from './forms/i-i-s-kyrs17-оператор-e';
import IISKyrs17ПеревозчикEForm from './forms/i-i-s-kyrs17-перевозчик-e';
import IISKyrs17ПокупательEForm from './forms/i-i-s-kyrs17-покупатель-e';
import IISKyrs17ПокупкаБилетаEForm from './forms/i-i-s-kyrs17-покупка-билета-e';
import IISKyrs17БилетКассаModel from './models/i-i-s-kyrs17-билет-касса';
import IISKyrs17ИнформацияModel from './models/i-i-s-kyrs17-информация';
import IISKyrs17МаршрутModel from './models/i-i-s-kyrs17-маршрут';
import IISKyrs17ОбслуживаниеModel from './models/i-i-s-kyrs17-обслуживание';
import IISKyrs17ОператорModel from './models/i-i-s-kyrs17-оператор';
import IISKyrs17ПеревозчикModel from './models/i-i-s-kyrs17-перевозчик';
import IISKyrs17ПокупательModel from './models/i-i-s-kyrs17-покупатель';
import IISKyrs17ПокупкаБилетаModel from './models/i-i-s-kyrs17-покупка-билета';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kyrs17-билет-касса': IISKyrs17БилетКассаModel,
    'i-i-s-kyrs17-информация': IISKyrs17ИнформацияModel,
    'i-i-s-kyrs17-маршрут': IISKyrs17МаршрутModel,
    'i-i-s-kyrs17-обслуживание': IISKyrs17ОбслуживаниеModel,
    'i-i-s-kyrs17-оператор': IISKyrs17ОператорModel,
    'i-i-s-kyrs17-перевозчик': IISKyrs17ПеревозчикModel,
    'i-i-s-kyrs17-покупатель': IISKyrs17ПокупательModel,
    'i-i-s-kyrs17-покупка-билета': IISKyrs17ПокупкаБилетаModel
  },

  'application-name': 'Kyrs17',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kyrs17',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kyrs17',
          title: 'Kyrs17'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kyrs17-билет-касса-l': IISKyrs17БилетКассаLForm,
    'i-i-s-kyrs17-маршрут-l': IISKyrs17МаршрутLForm,
    'i-i-s-kyrs17-обслуживание-l': IISKyrs17ОбслуживаниеLForm,
    'i-i-s-kyrs17-оператор-l': IISKyrs17ОператорLForm,
    'i-i-s-kyrs17-перевозчик-l': IISKyrs17ПеревозчикLForm,
    'i-i-s-kyrs17-покупатель-l': IISKyrs17ПокупательLForm,
    'i-i-s-kyrs17-покупка-билета-l': IISKyrs17ПокупкаБилетаLForm,
    'i-i-s-kyrs17-билет-касса-e': IISKyrs17БилетКассаEForm,
    'i-i-s-kyrs17-маршрут-e': IISKyrs17МаршрутEForm,
    'i-i-s-kyrs17-обслуживание-e': IISKyrs17ОбслуживаниеEForm,
    'i-i-s-kyrs17-оператор-e': IISKyrs17ОператорEForm,
    'i-i-s-kyrs17-перевозчик-e': IISKyrs17ПеревозчикEForm,
    'i-i-s-kyrs17-покупатель-e': IISKyrs17ПокупательEForm,
    'i-i-s-kyrs17-покупка-билета-e': IISKyrs17ПокупкаБилетаEForm
  },

});

export default translations;
