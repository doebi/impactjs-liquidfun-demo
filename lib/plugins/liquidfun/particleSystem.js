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
    color: "rgba(0, 0, 255, 0.5)",
	
	init: function( shape, settings ) {

		this.parent( shape.position.x, shape.position.y, settings );
		
		// Only create a box2d body when we are not in Weltmeister
		if( !ig.global.wm ) { 

            // Particle Group
            var pd = new b2ParticleGroupDef;
            pd.shape = shape;
            pd.flags = 0;
            pd.groupFlags = 0;
            var group = ig.particleSystem.CreateParticleGroup(pd);

		}
	},
	
    draw: function() {
		var posBuffer = ig.particleSystem.GetPositionBuffer();
        var ctx = ig.system.context;
        var scale = ig.system.scale;
        var radius = ig.particleSystem.radius;
        var size = 2 * radius * scale / Box2D.SCALE;
        for (var i = 0, l = posBuffer.length; i < l; i+=2) {
		    this.pos = {
			    x: (posBuffer[i]   / Box2D.SCALE),
			    y: (posBuffer[i+1] / Box2D.SCALE)
		    };
            ctx.fillStyle = this.color;
            ctx.fillRect(
                (this.pos.x - ig.game._rscreen.x - size/2) * scale,
				(this.pos.y - ig.game._rscreen.y - size/2) * scale,
                size * scale,
                size * scale
            );
            /*
            ctx.fillRect(
                (this.pos.x - radius - ig.game._rscreen.x) * scale,
				(this.pos.y - radius - ig.game._rscreen.y) * scale,
                32 * radius * scale, 
                32 * radius * scale 
            );
            */
        }
    },
	
	update: function() {		
	},
	
	kill: function() {
		ig.world.DestroyBody( this.body );
		this.parent();
	}
});
	
});
