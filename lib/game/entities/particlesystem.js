ig.module(
	'game.entities.particlesystem'
)
.requires(
	'impact.entity',
	'plugins.liquidfun.particleSystem'
)
.defines(function(){

EntityParticlesystem = ig.LiquidfunParticleSystem.extend({

	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	init: function( radius ) {
		this.parent( radius );
	},
    
    draw: function () {
        if (!ig.global.wm) {
            this.parent();            
        }
    }
});

});
