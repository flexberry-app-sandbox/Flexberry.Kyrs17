import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПеревозчикMixin
} from '../mixins/regenerated/models/i-i-s-kyrs17-перевозчик';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПеревозчикMixin, Validations, {
});

defineProjections(Model);

export default Model;
