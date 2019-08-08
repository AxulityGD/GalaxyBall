var sconnector = pc.createScript('sconnector');

var findByName;

var ball = pc.createScript('ball');

ball.attributes.add("na", {type:'entity'});

sconnector.prototype.intalize = function() {
    
};

sconnector.attributes.add("root", {type:'entity'});

sconnector.attributes.add("player", {type:'entity' });

sconnector.prototype.update = function() {
    this.entity.findByName('objects', this.enabled);
    this.entity.findByName('level', this.update);
};

var sconnector = function(entity) {
    this.app.entity.findByName('Ball', this.on);
    
};



ball.prototype.intalize = function(app) {
    
};


this.console.log();