import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyrs17-билет-касса', 'Unit | Serializer | i-i-s-kyrs17-билет-касса', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kyrs17-билет-касса',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kyrs17-вариант',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
