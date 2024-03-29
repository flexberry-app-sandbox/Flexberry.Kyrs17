import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ИнформацияMixin
} from '../mixins/regenerated/models/i-i-s-kyrs17-информация';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ИнформацияMixin, Validations, {
});

defineProjections(Model);

export default Model;
