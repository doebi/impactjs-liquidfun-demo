ig.module( 
	'plugins.liquidfun.particleGroup'
)
.requires(
	'impact.entity',	
	'plugins.liquidfun.game'
)
.defines(function(){


ig.LiquidfunParticleGroup = ig.Entity.extend({
	body: null,
	angle: 0,
	
	init: function() {
		
		// Only create a box2d body when we are not in Weltmeister
		if( !ig.global.wm ) { 

            /*
	        var systemDef = new b2ParticleSystemDef();
            systemDef.radius = radius * Box2D.SCALE;
            systemDef.colorMisinStrength = 1;
            systemDef.gravityScale = -1;
            systemDef.destroyByAge = true;
            systemDef.maxParticleCount = 100;
            this.system = ig.world.CreateParticleSystem(systemDef);

            // Particle Group
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
    },
	
	update: function() {		
	},
	
	kill: function() {
	}
});
	
});
