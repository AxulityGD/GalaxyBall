var RetryButton = pc.createScript('retryButton');

//Attributes
RetryButton.attributes.add("dlevel", { type: 'entity' });
RetryButton.attributes.add("result", { type: 'entity' });

// initialize code called once per entity
RetryButton.prototype.initialize = function() {
    this.entity.element.on('mouseenter', this.onEnter, this);
    this.entity.element.on('mouseleave', this.onLeave, this);
    this.entity.element.on('click', this.onClick, this);   
};

RetryButton.prototype.onEnter = function(event) {
    document.body.style.cursor = 'pointer';    
};

RetryButton.prototype.onLeave = function(event) {
    document.body.style.cursor = 'default';
};

RetryButton.prototype.onClick = function(e) {
    this.dlevel.enabled = true;
    this.result.enabled = false;
};

// swap method called for script hot-reloading
// inherit your script state here
// RetryButton.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/