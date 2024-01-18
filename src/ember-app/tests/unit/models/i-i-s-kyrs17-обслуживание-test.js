import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyrs17-обслуживание', 'Unit | Model | i-i-s-kyrs17-обслуживание', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kyrs17-билет-касса',
    'model:i-i-s-kyrs17-информация',
    'model:i-i-s-kyrs17-маршрут',
    'model:i-i-s-kyrs17-обслуживание',
    'model:i-i-s-kyrs17-оператор',
    'model:i-i-s-kyrs17-перевозчик',
    'model:i-i-s-kyrs17-покупатель',
    'model:i-i-s-kyrs17-покупка-билета',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
