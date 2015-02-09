ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.debug.debug',
	
	'game.entities.player',
	'game.entities.crate',
	'game.entities.ball',
	'game.levels.two',
	
	'plugins.liquidfun.game'
)
.defines(function(){

MyGame = ig.Box2DGame.extend({

	//gravity: 1000, // All entities are affected by this
	gravity: 1000,
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	clearColor: '#1b2026',
	
	init: function() {
	    Box2D.SCALE = 0.01;

		// Bind keys
		ig.input.bind( ig.KEY.LEFT_ARROW,  'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		ig.input.bind( ig.KEY.UP_ARROW,    'up' );
		ig.input.bind( ig.KEY.DOWN_ARROW,  'down' );
		ig.input.bind( ig.KEY.A,           'left' );
		ig.input.bind( ig.KEY.D,           'right' );
		ig.input.bind( ig.KEY.W,           'up' );
		ig.input.bind( ig.KEY.S,           'down' );
		ig.input.bind( ig.KEY.E,           'switch' );
		ig.input.bind( ig.KEY.MOUSE1,      'tool_primary' );
		ig.input.bind( ig.KEY.MOUSE2,      'tool_secondary' );
		
        this.debugCollisionRects = true;

		// Load the LevelTest as required above ('game.level.test')
		this.loadLevel( LevelTwo );

	},
	
	loadLevel: function( data ) {
		this.parent( data );
		for( var i = 0; i < this.backgroundMaps.length; i++ ) {
			this.backgroundMaps[i].preRender = true;
		}
	},
	
	update: function() {
		// Update all entities and BackgroundMaps
		this.parent();
		
		// screen follows the player
		var player = this.getEntitiesByType( EntityPlayer )[0];
		if( player ) {
			this.screen.x = player.pos.x - ig.system.width/2;
			this.screen.y = player.pos.y - ig.system.height/2;
		}
	},
	
	draw: function() {
		this.parent();

        /* Draw ParticleSystem */
		var posBuffer = ig.particleSystem.GetPositionBuffer();
        var colorBuffer = ig.particleSystem.GetColorBuffer();
        var ctx = ig.system.context;
        var scale = ig.system.scale;
        var radius = ig.particleSystem.radius;
        var size = 1.8 * radius / Box2D.SCALE;
        for (var i = 0, l = posBuffer.length/2; i < l; i++) {
            ctx.fillStyle = "rgba(" + colorBuffer[i*4] + "," + colorBuffer[i*4+1] + "," + colorBuffer[i*4+2] + "," + colorBuffer[i*4+3] + ")";
            ctx.fillRect(
                (((posBuffer[i*2]   / Box2D.SCALE) - ig.game._rscreen.x - size/2) * scale) | 0,
				(((posBuffer[i*2+1] / Box2D.SCALE) - ig.game._rscreen.y - size/2) * scale) | 0,
                size * scale,
                size * scale
            );
        }

		// Draw all entities and BackgroundMaps
        if (!ig.ua.mobile) {
        }
	}
});

var scale = (window.innerWidth < 640) ? 2 : 1;

var canvas = document.getElementById('canvas');
canvas.style.width = window.innerWidth + 'px';
canvas.style.height = window.innerHeight + 'px';

var width = window.innerWidth * scale,
	height = window.innerHeight * scale;

ig.main('#canvas', MyGame, 60, width, height, 1);

});
