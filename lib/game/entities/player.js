ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity',
	'plugins.liquidfun.particleSystem'
)
.defines(function(){

EntityPlayer = ig.Box2DEntity.extend({
	size:   {x: 40, y: 88},
	offset: {x: 17, y: 10},
	
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!

    fixedRotation: true,
    angularDamping: 0,
    linearDamping: 0,
	
	animSheet: new ig.AnimationSheet( 'media/player.png', 75, 100 ),	
	
	flip: false,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
        var pdg = new b2ParticleGroupDef;
        pdg.flags = 0;
        pdg.groupFlags = 0;

        this.pdg = pdg;

		// Add the animations
		this.addAnim( 'idle', 1, [0] );
		this.addAnim( 'jump', 1, [13] );
		this.addAnim( 'shoot', 1, [12] );
	},
	
    shoot: function(def) {
			var x = this.pos.x + (this.flip ? -50 : 70 );
			var y = this.pos.y + 50;
			//ig.game.spawnEntity( EntityProjectile, x, y, {flip:this.flip} );
            
            // Shape
            var shape = new b2CircleShape;
            shape.position = new b2Vec2(
		    	x * Box2D.SCALE,
		    	y * Box2D.SCALE
		    ); 
            shape.radius = 5 * Box2D.SCALE;
            def.shape = shape;
            def.linearVelocity = (this.flip ? new b2Vec2(-15, 0) : new b2Vec2(15, 0) );
			this.currentAnim = this.anims.shoot;

            ig.system.particleSystem.CreateParticleGroup(def);
    },
	
	update: function() {
		this.currentAnim = this.anims.idle;

		// move left or right
		if( ig.input.state('left') ) {
			this.body.ApplyForceToCenter( new b2Vec2(-5,0) );
			this.flip = true;
		}
		else if( ig.input.state('right') ) {
			this.body.ApplyForceToCenter( new b2Vec2(5,0) );
			this.flip = false;
		}
		
		// jetpack
		if( ig.input.state('jump') ) {
			this.body.ApplyForceToCenter( new b2Vec2(0,-7) );
			this.currentAnim = this.anims.jump;
		}
		
		// shoot
		if( ig.input.state('shoot') ) {
            var tpdg = this.pdg;
            tpdg.flags = b2_colorMixingParticle | b2_staticPressureParticle;
            tpdg.color = new b2ParticleColor(58, 136, 233, 1);
            this.shoot(tpdg);
		}
		
		// fire
		if( ig.input.state('fire') ) {
            var tpdg = this.pdg;
            tpdg.flags = b2_colorMixingParticle | b2_staticPressureParticle;
            tpdg.color = new b2ParticleColor(241, 60, 118, 1);
            this.shoot(tpdg);
		}
		
		this.currentAnim.flip.x = this.flip;
		
		// move!
		this.parent();
	}
});

ParticleSystem = ig.LiquidfunParticleSystem.extend({

	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.B, 
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	init: function( radius ) {
		this.parent( radius );
	}	
});

});
