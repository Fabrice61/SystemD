import User from '/imports/classes/User';

Template.userSelfProfile.helpers({
  completed () {
    return User.findOne(Meteor.userId()).completed();
  },
  isDeletable () {
    let user = User.findOne({ _id: Meteor.userId() });
    return user.isDeletable();
  },
});

Template.userSelfProfile.events({
  // aaction de suppression definitive d'un compte utilisateur
  'click [deleteUserAccount]': function () {
    console.log('ok');
    // on récupere l'utilisateur courant
    const currentUser = User.findOne({ _id: Meteor.userId() });
    $('.modal').modal('close');
    // on redirige vers la page des projets utilisateurs
    Router.go('home');
    // on appele la methode de suppression
    currentUser.callMethod(
      'deleteUserAccount',
      (error) => {
        // si ca marche pas, on renvoie l'erreur par toast
        if (error) {
          Materialize.toast("une erreur s'est produite", 4000, 'red');
        } else {
          // sinon, on toast le succes,
          Materialize.toast('Votre compte utilisateur à été définitivement supprimé', 6000, 'green');
          // on ferme la modal
        }
      },
    );
  },
});

Template.userSelfProfile.onCreated(() => {

});

//
Template.userSelfProfile.onRendered(() => {
  $('.modal').modal();
  $('.collapsible').collapsible();
  $('.swipable').tabs(
    // { 'swipeable': true }
  );
});

Template.userSelfProfile.onDestroyed(() => {
  // add your statement here
});

