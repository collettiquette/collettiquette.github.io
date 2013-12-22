window.onload = function() {
  var stage = new Kinetic.Stage({
    container: 'starstuff',
    width: 1000,
    height: 600
  });
  var layer = new Kinetic.Layer();

  //star
  var sun = new Kinetic.Circle({
    x: 300,
    y: 250,
    width: 80,
    height: 80,
    fill: '#00FFFF',
    shadowColor: '#00FFFF',
    shadowBlur: 225,
    shadowOffset: 0,
    shadowOpacity: 0.9,
    offset: [0, 0]
  });
  layer.add(sun);

  //planets
  var planets = {};
  planets['offsetsx'] = [75, -125, 150, 200, -275, 300];
  planets['offsetsy'] = [10, -10, 15, -25, 50, 0];
  planets['sizes'] = [10, 15, 15, 35, 40, 25];
  planets['colors'] = ["red", "orange", "brown", "green", "blue", "purple"];
  planets['rotation_speeds'] = [20, 40, 45, 70, 90, 110]
  planets['kinetic'] = [];
  var i = 0;
  planets['offsetsx'].forEach(function(planet_offset){
    var planet = new Kinetic.Circle({
      x: 300,
      y: 250,
      width: planets['sizes'][i],
      height: planets['sizes'][i],
      fill: planets['colors'][i],
      offset: [planet_offset, planets['offsetsy'][i]]
    });
    planets['kinetic'].push(planet);
    layer.add(planet);  
    i += 1;
  });
  stage.add(layer);
  
  // rotate planets around star
  var anim = new Kinetic.Animation(function(frame) {
    i = 0;
    planets['kinetic'].forEach(function(planet) {
      var angularSpeed = Math.PI / planets['rotation_speeds'][i];
      var angleDiff = frame.timeDiff * angularSpeed / 1000;
      planet.rotate(angleDiff);
      i += 1;
    });
  }, layer);

  anim.start();
};
