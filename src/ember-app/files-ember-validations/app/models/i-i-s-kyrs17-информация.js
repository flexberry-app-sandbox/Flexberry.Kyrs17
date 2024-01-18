import {
  defineNamespace,
  defineProjections,
  Model as ИнформацияMixin
} from '../mixins/regenerated/models/i-i-s-kyrs17-информация';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИнформацияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
