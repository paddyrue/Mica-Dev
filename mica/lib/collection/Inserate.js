Inserate = new Mongo.Collection('inserate');

Inserate.allow({
  update: function(userId, inserat) { return ownsDocument(userId, inserat); },
  remove: function(userId, inserat) { return ownsDocument(userId, inserat); }
});

Meteor.methods({
  InseratEingabe: function(inseratAttributes) {
    check(Meteor.userId(), String);
    check(inseratAttributes, {
      title: String,
      img: String,
      beschreibung: String,
      matching: String,
      matchingwidth: String,
      matchingtext: String,
      hardfacts1: String,
      hardfacts2: String,
      hardfacts3: String,
      softfacts1: String,
      softfacts2: String,
      softfacts3: String,
      softfacts4: String,
      softfacts5: String
    });

    var user = Meteor.user();
    var inserat = _.extend(inseratAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var inseratId = Inserate.insert(inserat);

    return {
      _id: inseratId
    };
  }
});
