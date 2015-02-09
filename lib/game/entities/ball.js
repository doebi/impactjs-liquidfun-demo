ig.module(
	'game.entities.ball'
)
.requires(
	'impact.entity',
	'plugins.liquidfun.particleGroup'
)
.defines(function(){

EntityBall = ig.LiquidfunParticleGroup.extend({

	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.NEVER,
	
	init: function( pos, radius ) {
		this.parent();

        // Particle Group
        var pd = new b2ParticleGroupDef;
        pd.color = new b2ParticleColor(255, 255, 255, 1);
        pd.shape = new b2CircleShape();
        pd.shape.radius = radius * Box2D.SCALE;
        pd.shape.position = new b2Vec2(
		    (pos.x + 100) * Box2D.SCALE,
		    pos.y * Box2D.SCALE 
		); 
        pd.flags = 0;
        pd.groupFlags = 0;
        pd.flags = b2_elasticParticle;
        //pd.groupFlags = b2_rigidParticleGroup;

        if (!ig.global.wm) {
            ig.particleSystem.CreateParticleGroup(pd);
        }
	},
    
    draw: function () {
        if (!ig.global.wm) {
            this.parent();            
        }
    }
});

});
