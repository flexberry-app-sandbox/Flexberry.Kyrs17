import { Serializer as МаршрутSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kyrs17-маршрут';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МаршрутSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
