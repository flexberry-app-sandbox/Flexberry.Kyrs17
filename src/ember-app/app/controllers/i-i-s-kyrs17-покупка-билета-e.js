import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-kyrs17-покупка-билета-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-kyrs17-информация+маршрут':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'времяОтправ',
            required: true,
            relationName: 'маршрут',
            projection: 'МаршрутL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
