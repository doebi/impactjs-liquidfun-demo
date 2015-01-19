ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.debug.debug',
	
	'game.entities.player',
	'game.entities.crate',
	'game.entities.particlesystem',
	'game.levels.two',
	
	'plugins.liquidfun.game'
)
.defines(function(){

MyGame = ig.Box2DGame.extend({

	//gravity: 1000, // All entities are affected by this
	gravity: 0,
	
	// Load a font
	font: new ig.Font( 'media/fredoka-one.font.png' ),
	clearColor: '#1b2026',
	
	init: function() {
	    Box2D.SCALE = 0.01;

		// Bind keys
		ig.input.bind( ig.KEY.LEFT_ARROW,  'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		ig.input.bind( ig.KEY.UP_ARROW,    'up' );
		ig.input.bind( ig.KEY.DOWN_ARROW,  'down' );
		ig.input.bind( ig.KEY.X, 'blue' );
		ig.input.bind( ig.KEY.C, 'red' );
		
        this.debugCollisionRects = true;

		// Load the LevelTest as required above ('game.level.test')
		this.loadLevel( LevelTwo );

        ig.system.particleSystem = ig.game.spawnEntity( EntityParticlesystem, 2).system;
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
		// Draw all entities and BackgroundMaps
		this.parent();
		if( !ig.ua.mobile ) {
			this.font.draw( 'Arrow Keys, X, C', 2, 2 );
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
