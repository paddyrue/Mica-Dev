Template.inseratEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentInseratId = this._id;

    var inseratProperties = {
      img: $(e.target).find('[name=img]').val(),
      title: $(e.target).find('[name=title]').val(),
      hardfacts1: $(e.target).find('[name=hardfacts1]').val(),
      hardfacts2: $(e.target).find('[name=hardfacts2]').val(),
      hardfacts3: $(e.target).find('[name=hardfacts3]').val(),
      matching: $(e.target).find('[name=matching]').val(),
      matchingwidth: $(e.target).find('[name=matchingwidth]').val(),
      matchingtext: $(e.target).find('[name=matchingtext]').val(),
      softfacts1: $(e.target).find('[name=softfacts1]').val(),
      softfacts2: $(e.target).find('[name=softfacts2]').val(),
      softfacts3: $(e.target).find('[name=softfacts3]').val(),
      softfacts4: $(e.target).find('[name=softfacts4]').val(),
      softfacts5: $(e.target).find('[name=softfacts5]').val(),
      beschreibung: $(e.target).find('[name=beschreibung]').val()
    }

    Inserate.update(currentInseratId, {$set: inseratProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('inseratPage', {_id: currentInseratId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Möchtest Du das Inserat löschen?")) {
      var currentInseratId = this._id;
      Inserate.remove(currentInseratId);
      Router.go('InserateList');
    }
  }
});
