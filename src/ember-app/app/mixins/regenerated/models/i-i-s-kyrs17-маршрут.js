import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяОтправ: DS.attr('string'),
  времяПрибыт: DS.attr('string'),
  конечПункт: DS.attr('string'),
  номерМаршрута: DS.attr('number'),
  стоимость: DS.attr('number'),
  перевозчик: DS.belongsTo('i-i-s-kyrs17-перевозчик', { inverse: null, async: false })
});

export let ValidationRules = {
  времяОтправ: {
    descriptionKey: 'models.i-i-s-kyrs17-маршрут.validations.времяОтправ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  времяПрибыт: {
    descriptionKey: 'models.i-i-s-kyrs17-маршрут.validations.времяПрибыт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  конечПункт: {
    descriptionKey: 'models.i-i-s-kyrs17-маршрут.validations.конечПункт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерМаршрута: {
    descriptionKey: 'models.i-i-s-kyrs17-маршрут.validations.номерМаршрута.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-kyrs17-маршрут.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  перевозчик: {
    descriptionKey: 'models.i-i-s-kyrs17-маршрут.validations.перевозчик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МаршрутE', 'i-i-s-kyrs17-маршрут', {
    номерМаршрута: attr('Номер маршрута', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 }),
    времяОтправ: attr('Время отправ', { index: 2 }),
    времяПрибыт: attr('Время прибыт', { index: 3 }),
    конечПункт: attr('Конеч пункт', { index: 4 }),
    перевозчик: belongsTo('i-i-s-kyrs17-перевозчик', 'Перевозчик', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('МаршрутL', 'i-i-s-kyrs17-маршрут', {
    номерМаршрута: attr('Номер маршрута', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 }),
    времяОтправ: attr('Время отправ', { index: 2 }),
    времяПрибыт: attr('Время прибыт', { index: 3 }),
    конечПункт: attr('Конеч пункт', { index: 4 }),
    перевозчик: belongsTo('i-i-s-kyrs17-перевозчик', 'Наименование', {
      наименование: attr('Наименование', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
