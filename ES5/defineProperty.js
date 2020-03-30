function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
    },
    set: function(value) {
      temperature = value
      archive.push({val: temperature});
    }
  });

  this.getArchive = function() { return archive };
}

var arc = new Archiver();
arc.temperature;
arc.temperature = 11;
arc.temperature = 15;
console.log(arc.getArchive());

