ig.module( 
	'plugins.liquidfun.particleSystem'
)
.requires(
	'impact.entity',	
	'plugins.liquidfun.game'
)
.defines(function(){


ig.LiquidfunParticleSystem = ig.Entity.extend({
	body: null,
	angle: 0,
    color: "rgb(0, 0, 255)",
	
	init: function( radius ) {

		this.parent( 0, 0, {} );
		
		// Only create a box2d body when we are not in Weltmeister
		if( !ig.global.wm ) { 

	        var systemDef = new b2ParticleSystemDef();
            systemDef.radius = radius * Box2D.SCALE;
            this.system = ig.world.CreateParticleSystem(systemDef);

            // Particle Group
            /*
            var pd = new b2ParticleGroupDef;
            pd.shape = shape;
            pd.flags = 0;
            pd.groupFlags = 0;
            var group = ig.particleSystem.CreateParticleGroup(pd);

            var impulse = (settings.flip ? new b2Vec2(-50, 0) : new b2Vec2(50, 0));
            group.ApplyLinearImpulse(impulse);
            */
		}
	},
	
    draw: function() {
		var posBuffer = this.system.GetPositionBuffer();
        var ctx = ig.system.context;
        var scale = ig.system.scale;
        var radius = this.system.radius;
        var size = 2 * radius / Box2D.SCALE;
        ctx.fillStyle = this.color;
        for (var i = 0, l = posBuffer.length; i < l; i+=2) {
            ctx.fillRect(
                (((posBuffer[i]   / Box2D.SCALE) - ig.game._rscreen.x - size/2) * scale) | 0,
				(((posBuffer[i+1] / Box2D.SCALE) - ig.game._rscreen.y - size/2) * scale) | 0,
                size * scale,
                size * scale
            );
        }
    },
	
	update: function() {		
	},
	
	kill: function() {
	}
});
	
});
