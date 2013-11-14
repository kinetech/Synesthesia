ClientSpace.Client = Backbone.Model.extend({

  initialize: function() {
    this.set('currentShow', 'Synesthesia');
  },

   getCastList: function() {
     this.trigger('castList', this);
   },

   getUpcomingShows: function() {
     this.trigger('shows', this);
   },

   getAbout: function() {
     this.trigger('about', this);
   },

   startShow: function() {
     this.trigger('startShow', this);
   },

   loadIndex: function() {
    this.trigger('loadIndex', this);
   }

});