/**
 * Created by fafa on 11/7/14.
 */

var EmployeeView = function(employee) {

  this.initialize = function() {
    this.$el = $('<div/>');
    this.$el.on('click', '.add-location-btn', this.addLocation);

  };

  this.render = function() {
    this.$el.html(this.template(employee));
    return this;
  };

  this.addLocation = function(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(
      function(position) {
        alert(position.coords.latitude + ',' + position.coords.longitude);
        $('.add-location-btn').html("pos: " + position.coords.latitude + ',' + position.coords.longitude);
      },
      function() {
        alert('Error getting location');
      });
    return false;
  };

  this.initialize();

}
