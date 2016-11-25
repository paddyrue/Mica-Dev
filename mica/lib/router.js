Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/', {
  name: 'StartContent'
});

Router.route('/inserate', {
  name: 'InserateList',
});

Router.route('/inserat/:_id', {
  name: 'inseratPage',
  data: function() {
    return Inserate.findOne(this.params._id);
  }
});

Router.route('/profil', {
  name: 'ProfilContent'
});

Router.route('/inserieren', {
  name: 'InseratEingabe'
});

Router.route('/inserat/:_id/edit', {
  name: 'inseratEdit',
  data: function() {
    return Inserate.findOne(this.params._id);
  }
});

/* Inserate erstellen und bearbeiten ist nur eingellogt möglich */
var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('KeinZugang');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'inseratPage'});
Router.before(requireLogin, {only: 'InseratEingabe'});
