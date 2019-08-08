var BttButton = pc.createScript('bttButton');

//Attributes
BttButton.attributes.add("title", { type: 'entity' });
BttButton.attributes.add("level", { type: 'entity' });

// initialize code called once per entity
BttButton.prototype.initialize = function() {
    this.entity.element.on('mouseenter', this.onEnter, this);
    this.entity.element.on('mouseleave', this.onLeave, this);
    this.entity.element.on('click', this.onClick, this);
};

BttButton.prototype.onEnter = function(event) {
    document.body.style.cursor = 'pointer';    
};

BttButton.prototype.onLeave = function(event) {
    document.body.style.cursor = 'default';  
};

BttButton.prototype.onClick = function(e) {
    this.title.enabled = true;
    this.level.enabled = false;
};

// swap method called for script hot-reloading
// inherit your script state here
// BttButton.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/