import {
  defineNamespace,
  defineProjections,
  Model as МаршрутMixin
} from '../mixins/regenerated/models/i-i-s-kyrs17-маршрут';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МаршрутMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
