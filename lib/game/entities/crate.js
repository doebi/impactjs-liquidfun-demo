ig.module(
	'game.entities.crate'
)
.requires(
	'plugins.liquidfun.entity'
)
.defines(function(){

EntityCrate = ig.Box2DEntity.extend({
	size: {x: 66, y: 66},
	offset: {x: 2, y: 2},
	
	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	
    angularDamping: 0,
    linearDamping: 0,
	
	animSheet: new ig.AnimationSheet( 'media/crate.png', 70, 70 ),
	
	init: function( x, y, settings ) {
		this.addAnim( 'idle', 1, [0] );
		this.parent( x, y, settings );
	}
});


});
