import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОператорMixin
} from '../mixins/regenerated/models/i-i-s-kyrs17-оператор';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОператорMixin, Validations, {
});

defineProjections(Model);

export default Model;
