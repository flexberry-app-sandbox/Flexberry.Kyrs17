import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  варПолучБилет: DS.attr('i-i-s-kyrs17-вариант'),
  времяПокупки: DS.attr('string'),
  датаПокупки: DS.attr('date', { defaultValue() { return new Date(); } }),
  билетКасса: DS.belongsTo('i-i-s-kyrs17-билет-касса', { inverse: null, async: false }),
  покупатель: DS.belongsTo('i-i-s-kyrs17-покупатель', { inverse: null, async: false }),
  информация: DS.hasMany('i-i-s-kyrs17-информация', { inverse: 'покупкаБилета', async: false })
});

export let ValidationRules = {
  варПолучБилет: {
    descriptionKey: 'models.i-i-s-kyrs17-покупка-билета.validations.варПолучБилет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  времяПокупки: {
    descriptionKey: 'models.i-i-s-kyrs17-покупка-билета.validations.времяПокупки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПокупки: {
    descriptionKey: 'models.i-i-s-kyrs17-покупка-билета.validations.датаПокупки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  билетКасса: {
    descriptionKey: 'models.i-i-s-kyrs17-покупка-билета.validations.билетКасса.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  покупатель: {
    descriptionKey: 'models.i-i-s-kyrs17-покупка-билета.validations.покупатель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  информация: {
    descriptionKey: 'models.i-i-s-kyrs17-покупка-билета.validations.информация.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПокупкаБилетаE', 'i-i-s-kyrs17-покупка-билета', {
    времяПокупки: attr('Время покупки', { index: 0 }),
    датаПокупки: attr('Дата покупки', { index: 1 }),
    варПолучБилет: attr('Вар получ билет', { index: 2 }),
    покупатель: belongsTo('i-i-s-kyrs17-покупатель', 'Покупатель', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' }),
    билетКасса: belongsTo('i-i-s-kyrs17-билет-касса', 'Билет касса', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' }),
    информация: hasMany('i-i-s-kyrs17-информация', 'Информация', {
      датаПоезд: attr('Дата поезд', { index: 0 }),
      место: attr('Место', { index: 1 }),
      маршрут: belongsTo('i-i-s-kyrs17-маршрут', 'Маршрут', {
        времяОтправ: attr('Время отправ', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'времяОтправ' })
    })
  });

  modelClass.defineProjection('ПокупкаБилетаL', 'i-i-s-kyrs17-покупка-билета', {
    времяПокупки: attr('Время покупки', { index: 0 }),
    датаПокупки: attr('Дата покупки', { index: 1 }),
    варПолучБилет: attr('Вар получ билет', { index: 2 }),
    покупатель: belongsTo('i-i-s-kyrs17-покупатель', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true }),
    билетКасса: belongsTo('i-i-s-kyrs17-билет-касса', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
