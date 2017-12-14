
import {Class} from 'meteor/jagi:astronomy';
import ShortendEntity from "/imports/classes/ShortendEntity";

/*******************************
 * classe des conversation stocké dans les document user et projet,
 * elle permet d'avoir a disposition toutes les info pour gerer la messagerie,
 */
const EntitySideConversation = Class.create({
    name: 'EntitySideConversation',
    fields: {
        conversation_id: String,
        lastRead: {
            type : Date,
            optional : true
        },
        lastOtherSpeakerMessage: {
            type : Date,
            optional : true
        },
        otherSpeakers: {
            type: [ShortendEntity],
            default: function () {
                return [];
            }
        },
        vector : String,
        encryptedConversationKey : String
    },
});
export default EntitySideConversation