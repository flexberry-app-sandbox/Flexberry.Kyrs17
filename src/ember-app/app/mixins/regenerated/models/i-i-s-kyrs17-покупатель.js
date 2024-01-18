import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  банкСчет: DS.attr('number'),
  датРожд: DS.attr('date'),
  номерПаспорта: DS.attr('number'),
  серияПаспорта: DS.attr('number'),
  фИО: DS.attr('string'),
  элПочта: DS.attr('string')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-kyrs17-покупатель.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  банкСчет: {
    descriptionKey: 'models.i-i-s-kyrs17-покупатель.validations.банкСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датРожд: {
    descriptionKey: 'models.i-i-s-kyrs17-покупатель.validations.датРожд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерПаспорта: {
    descriptionKey: 'models.i-i-s-kyrs17-покупатель.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  серияПаспорта: {
    descriptionKey: 'models.i-i-s-kyrs17-покупатель.validations.серияПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kyrs17-покупатель.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  элПочта: {
    descriptionKey: 'models.i-i-s-kyrs17-покупатель.validations.элПочта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПокупательE', 'i-i-s-kyrs17-покупатель', {
    датРожд: attr('Дат рожд', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    iD: attr('ID', { index: 2 }),
    номерПаспорта: attr('Номер паспорта', { index: 3 }),
    элПочта: attr('Эл почта', { index: 4 }),
    банкСчет: attr('Банк счет', { index: 5 }),
    серияПаспорта: attr('Серия паспорта', { index: 6 })
  });

  modelClass.defineProjection('ПокупательL', 'i-i-s-kyrs17-покупатель', {
    датРожд: attr('Дат рожд', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    iD: attr('ID', { index: 2 }),
    номерПаспорта: attr('Номер паспорта', { index: 3 }),
    элПочта: attr('Эл почта', { index: 4 }),
    банкСчет: attr('Банк счет', { index: 5 }),
    серияПаспорта: attr('Серия паспорта', { index: 6 })
  });
};
