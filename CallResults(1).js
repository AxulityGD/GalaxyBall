var CallResults = pc.createScript('callResults');

//Scenes
CallResults.attributes.add("dlevel", { type: 'entity' });
CallResults.attributes.add("result", { type: 'entity' });
CallResults.attributes.add("level", { type: 'entity' });

//ResultCaller
CallResults.attributes.add("rc", { type: 'entity', title: 'Result Caller' });
CallResults.attributes.add("dp", { type: 'entity', title: 'Death Point' });

//Player
CallResults.attributes.add("player", { type: 'entity', title: 'Player' });

// initialize code called once per entity
CallResults.prototype.initialize = function() {

};

// update code called every frame
CallResults.prototype.update = function(dt) {
    if (this.player.getPosition().z <= this.rc.getPosition().z && this.level.enabled === true || this.player.getPosition().y <= this.dp.getPosition().y && this.level.enabled === true) {
        this.dlevel.enabled = false;
        this.result.enabled = true;
        
    }    
};

// swap method called for script hot-reloading
// inherit your script state here
// CallResults.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/