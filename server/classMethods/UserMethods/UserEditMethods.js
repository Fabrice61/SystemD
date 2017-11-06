import User from '/imports/classes/User';


User.extend({
    meteorMethods: {
//modification de la description utilisateur
        updateProfileItem(key, value) {
            check(key, String);
            check(this._id ,Meteor.userId())
                this.profile[key] = value;
                return this.save()

        },
//changement de la position de l'utilisateur
        updateSelfLocation(lat, lng, city, country) {
            //on verifie que c'est bien l'utilisateur courant qui fait la demande pour lui meme
            check(this._id , Meteor.userId())
                this.profile.location.lonLat = [lng, lat];
                this.profile.location.city = city;
                this.profile.location.country = country;
                return this.save()

        },
        /******************************
         * Methode de suppression d'un compte Utilisateur
         */
        deleteUserAccount(){
            console.log("ok")
            //on check que l'utilisateur est bien l'e propriétaire
            check(Meteor.userId(), this._id);
            //on check que le compte utilisateur est bien supprimable
            check(this.isDeletable(), true)
            //on supprime le compte
            this.remove()

        }
    }
})