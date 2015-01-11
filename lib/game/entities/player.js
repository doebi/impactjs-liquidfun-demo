ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity',
	'plugins.liquidfun.particleSystem'
)
.defines(function(){

EntityPlayer = ig.Box2DEntity.extend({
	size: {x: 8, y: 14},
	offset: {x: 4, y: 2},
	
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	animSheet: new ig.AnimationSheet( 'media/player.png', 16, 24 ),	
	
	flip: false,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
		// Add the animations
		this.addAnim( 'idle', 1, [0] );
		this.addAnim( 'jump', 0.07, [1,2] );

		if(!ig.global.wm) {
			this.body.SetFixedRotation(true);
		}
	},
	
	
	update: function() {
		// move left or right
		if( ig.input.state('left') ) {
			this.body.ApplyForceToCenter( new b2Vec2(-20,0) );
			this.flip = true;
		}
		else if( ig.input.state('right') ) {
			this.body.ApplyForceToCenter( new b2Vec2(20,0) );
			this.flip = false;
		}
		
		// jetpack
		if( ig.input.state('jump') ) {
			this.body.ApplyForceToCenter( new b2Vec2(0,-30) );
			this.currentAnim = this.anims.jump;
		}
		else {
			this.currentAnim = this.anims.idle;
		}
		
		// shoot
		if( ig.input.pressed('shoot') ) {
			var x = this.pos.x + (this.flip ? -15 : 15 );
			var y = this.pos.y;
			//ig.game.spawnEntity( EntityProjectile, x, y, {flip:this.flip} );
            
            // Shape
            var shape = new b2CircleShape;
            shape.position = new b2Vec2(
		    	(x + ig.particleSystem.radius / 2) * Box2D.SCALE,
		    	(y + ig.particleSystem.radius / 2) * Box2D.SCALE
		    ); 
            shape.radius = 0.5;

            ig.game.spawnEntity( ParticleSystem, shape, {});
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
	
	init: function( shape, settings ) {
		this.parent( shape, settings );
        /*
		
		this.addAnim( 'idle', 1, [0] );
		this.currentAnim.flip.x = settings.flip;
		
		var velocity = (settings.flip ? -10 : 10);
		this.body.ApplyLinearImpulse( new b2Vec2(velocity*50,0), this.body.GetPosition());
        */
	}	
});

});
