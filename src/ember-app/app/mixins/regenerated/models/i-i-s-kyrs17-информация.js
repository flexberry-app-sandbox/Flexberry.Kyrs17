import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПоезд: DS.attr('date'),
  место: DS.attr('number'),
  маршрут: DS.belongsTo('i-i-s-kyrs17-маршрут', { inverse: null, async: false }),
  покупкаБилета: DS.belongsTo('i-i-s-kyrs17-покупка-билета', { inverse: 'информация', async: false })
});

export let ValidationRules = {
  датаПоезд: {
    descriptionKey: 'models.i-i-s-kyrs17-информация.validations.датаПоезд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  место: {
    descriptionKey: 'models.i-i-s-kyrs17-информация.validations.место.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  маршрут: {
    descriptionKey: 'models.i-i-s-kyrs17-информация.validations.маршрут.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  покупкаБилета: {
    descriptionKey: 'models.i-i-s-kyrs17-информация.validations.покупкаБилета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнформацияE', 'i-i-s-kyrs17-информация', {
    датаПоезд: attr('Дата поезд', { index: 0 }),
    место: attr('Место', { index: 1 }),
    маршрут: belongsTo('i-i-s-kyrs17-маршрут', 'Маршрут', {
      времяОтправ: attr('Время отправ', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'времяОтправ' })
  });
};
