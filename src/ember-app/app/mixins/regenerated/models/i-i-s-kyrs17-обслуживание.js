import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяПроверки: DS.attr('string'),
  готовКРаботе: DS.attr('boolean'),
  чекЛента: DS.attr('boolean'),
  билетКасса: DS.belongsTo('i-i-s-kyrs17-билет-касса', { inverse: null, async: false }),
  оператор: DS.belongsTo('i-i-s-kyrs17-оператор', { inverse: null, async: false })
});

export let ValidationRules = {
  времяПроверки: {
    descriptionKey: 'models.i-i-s-kyrs17-обслуживание.validations.времяПроверки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  готовКРаботе: {
    descriptionKey: 'models.i-i-s-kyrs17-обслуживание.validations.готовКРаботе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  чекЛента: {
    descriptionKey: 'models.i-i-s-kyrs17-обслуживание.validations.чекЛента.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  билетКасса: {
    descriptionKey: 'models.i-i-s-kyrs17-обслуживание.validations.билетКасса.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оператор: {
    descriptionKey: 'models.i-i-s-kyrs17-обслуживание.validations.оператор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОбслуживаниеE', 'i-i-s-kyrs17-обслуживание', {
    чекЛента: attr('Чек лента', { index: 0 }),
    готовКРаботе: attr('Готов к работе', { index: 1 }),
    времяПроверки: attr('Время проверки', { index: 2 }),
    билетКасса: belongsTo('i-i-s-kyrs17-билет-касса', 'Билет касса', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    оператор: belongsTo('i-i-s-kyrs17-оператор', 'Оператор', {
      фИО: attr('ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ОбслуживаниеL', 'i-i-s-kyrs17-обслуживание', {
    чекЛента: attr('Чек лента', { index: 0 }),
    готовКРаботе: attr('Готов к работе', { index: 1 }),
    времяПроверки: attr('Время проверки', { index: 2 }),
    билетКасса: belongsTo('i-i-s-kyrs17-билет-касса', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true }),
    оператор: belongsTo('i-i-s-kyrs17-оператор', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
