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
    linearDamping: 2,
	
	animSheet: new ig.AnimationSheet( 'media/player.png', 75, 100 ),	
	
	flip: false,
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		
        this.tools = new Array(
            new WaterNozzle(this),
            new BlobGun(this),
            new AcidGun(this)
        );
        this.toolID = 0;

		// Add the animations
		this.addAnim( 'idle', 1, [0] );
		this.addAnim( 'up', 1, [13] );
		this.addAnim( 'down', 1, [12] );
		//this.addAnim( 'shoot', 1, [12] );
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

		if( ig.input.state('up') ) {
			this.body.ApplyForceToCenter( new b2Vec2(0,-10) );
			this.currentAnim = this.anims.up;
		}
		else if( ig.input.state('down') ) {
			this.body.ApplyForceToCenter( new b2Vec2(0,5) );
			this.currentAnim = this.anims.down;
        }

        if (ig.input.pressed('switch')) {
            this.toolID = (this.toolID+1) % this.tools.length;
        }
		
        /*
		if( ig.input.pressed('blue') ) {
            var tpdg = this.pdg;
            tpdg.flags = b2_colorMixingParticle;
            //tpdg.color = new b2ParticleColor(58, 136, 233, 1);
            tpdg.color = new b2ParticleColor(0, 0, 255, 1);
            this.shoot(tpdg);
		}
		
		if( ig.input.pressed('red') ) {
            var tpdg = this.pdg;
            tpdg.flags = b2_colorMixingParticle | b2_viscousParticle;
            //tpdg.color = new b2ParticleColor(241, 60, 118, 1);
            tpdg.color = new b2ParticleColor(255, 0, 0, 1);
            this.shoot(tpdg);
		}
		
		if( ig.input.pressed('green') ) {
            var tpdg = this.pdg;
            tpdg.flags = b2_colorMixingParticle | b2_tensileParticle;
            //tpdg.color = new b2ParticleColor(49, 196, 149, 1);
            tpdg.color = new b2ParticleColor(0, 255, 0, 1);
            this.shoot(tpdg);
		}
        */

        if ( ig.input.state('tool_primary') ) {
            this.tools[this.toolID].primary();
        }

        if ( ig.input.state('tool_secondary') ) {
            this.tools[this.toolID].secondary();
        }

		this.currentAnim.flip.x = this.flip;
		
		// move!
		this.parent();
	}
});

BaseTool = ig.Class.extend({
    name: "BaseTool",
    init: function(bearer) {
        this.bearer = bearer;
        console.log("init " + this.name);
    },
    primary: function() {
        console.log("using primary action of " + this.name);
    },
    secondary: function() {
        console.log("using secondary action of " + this.name);
    },
    draw: function() {
        ig.system.context.fillStyle = "red";
        ig.system.context.fillRect(ig.input.mouse.x, ig.input.mouse.y, 5, 5);
    },
    spawnParticles: function(def) {
			var x = (this.bearer.pos.x + this.bearer.size.x/2) | 0;
			var y = (this.bearer.pos.y + this.bearer.size.y/2) | 0;

            var mx = Math.max(ig.input.mouse.x);
            var my = Math.max(ig.input.mouse.y);

            var px = x - ig.game._rscreen.x;
			var py = y - ig.game._rscreen.y;

            var vx = mx - px;
            var vy = my - py;

            var r = 50;

            var l = 1 / (Math.sqrt(vx*vx + vy*vy));
            var x = x + vx*l*r;
            var y = y + vy*l*r;
			//ig.game.spawnEntity( EntityProjectile, x, y, {flip:this.flip} );
            
            def.shape.position = new b2Vec2(
		        x * Box2D.SCALE,
		        y * Box2D.SCALE 
		    ); 
            def.linearVelocity = new b2Vec2(vx, vy);
			//this.currentAnim = this.anims.shoot;

            ig.system.particleSystem.CreateParticleGroup(def);
    },
	
});

WaterNozzle = BaseTool.extend({
    name: "WaterNozzle",
    init: function(bearer) {
        this.bearer = bearer;

        this.pdg = new b2ParticleGroupDef;
        this.pdg.flags = 0;
        this.pdg.groupFlags = 0;
        this.pdg.flags = b2_colorMixingParticle;
        this.pdg.color = new b2ParticleColor(0, 0, 255, 1);
        // Shape
        var shape = new b2CircleShape;
        shape.radius = 3 * Box2D.SCALE;
        this.pdg.shape = shape;
    },
    primary: function() {
        this.spawnParticles(this.pdg);
    }
});

BlobGun = BaseTool.extend({
    name: "BlobGun",
    init: function(bearer) {
        this.bearer = bearer;

        this.pdg = new b2ParticleGroupDef;
        this.pdg.flags = 0;
        this.pdg.groupFlags = 0;
        this.pdg.flags = b2_colorMixingParticle | b2_tensileParticle;
        this.pdg.color = new b2ParticleColor(0, 255, 0, 1);
        // Shape
        var shape = new b2CircleShape;
        shape.radius = 7 * Box2D.SCALE;
        this.pdg.shape = shape;
    },
    primary: function() {
        this.spawnParticles(this.pdg);
    }
});

AcidGun = BaseTool.extend({
    name: "splash water",
    init: function(bearer) {
        this.bearer = bearer;

        this.pdg = new b2ParticleGroupDef;
        this.pdg.flags = 0;
        this.pdg.groupFlags = 0;
        this.pdg.flags = b2_colorMixingParticle | b2_viscousParticle | b2_tensileParticle;
        this.pdg.color = new b2ParticleColor(255, 0, 0, 1);
        // Shape
        var shape = new b2CircleShape;
        shape.radius = 5 * Box2D.SCALE;
        this.pdg.shape = shape;
    },
    primary: function() {
        this.spawnParticles(this.pdg);
    }
});

});
