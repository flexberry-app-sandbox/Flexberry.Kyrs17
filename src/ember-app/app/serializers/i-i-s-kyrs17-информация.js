import { Serializer as ИнформацияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kyrs17-информация';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИнформацияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
