var PlayButton = pc.createScript('playButton');

//Scenes
PlayButton.attributes.add("title", { type: 'entity', title: 'Title' });
PlayButton.attributes.add("level", { type: 'entity', title: 'Level' });
PlayButton.attributes.add("dlevel", { type: 'entity' });
PlayButton.attributes.add("result", { type: 'entity' });
PlayButton.attributes.add("mute", { type: 'entity'});

// initialize code called once per entity
PlayButton.prototype.initialize = function() {
    this.entity.element.on('mouseenter', this.onEnter, this);
    this.entity.element.on('mouseleave', this.onLeave, this);
    this.entity.element.on('click', this.onClick, this);
    this.entity.element.on('click ' , this.onClick, this.entity.findByName("sound"));
    
    this.title.enabled = true;
    this.level.enabled = false;
};

PlayButton.prototype.onEnter = function(event) {
    document.body.style.cursor = 'pointer';  
};

PlayButton.prototype.onLeave = function(event) {
    document.body.style.cursor = 'default';  
};

PlayButton.prototype.onClick = function(e) {
    this.title.enabled = false;
    this.level.enabled = true;
    this.dlevel.enabled = true;
    this.result.enabled = false;
};

// swap method called for script hot-reloading
// inherit your script state here
// PlayButton.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/