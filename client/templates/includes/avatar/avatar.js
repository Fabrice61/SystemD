import Avatars from '@dicebear/avatars';
//https://www.npmjs.com/package/@dicebear/avatars-identicon-sprites
import sprites from '@dicebear/avatars-identicon-sprites';
import avatarStore from "../../../lib/filesStore/avatarStore";

Template.avatar.helpers({
    //add you helpers here

    avatarSvg : function () {
        let user = Template.currentData().user
            let options = { padding: 0, background:'#165261'};
            let avatars = new Avatars(sprites(options));
            return  avatars.create(user._id);
    },
    avatarUrl : function () {
        return avatarStore.getUserAvatar(Template.currentData().user._id)
    }
});

Template.avatar.events({
    //add your events here
});

Template.avatar.onCreated(function () {

});

Template.avatar.onRendered(function () {
    //add your statement here
});

Template.avatar.onDestroyed(function () {
    //add your statement here
});

