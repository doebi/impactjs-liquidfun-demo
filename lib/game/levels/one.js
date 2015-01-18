ig.module( 'game.levels.one' )
.requires( 'impact.image','game.entities.player','game.entities.crate','game.entities.particlesystem' )
.defines(function(){
LevelOne=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 609,
			"y": 230
		},
		{
			"type": "EntityCrate",
			"x": 788,
			"y": 1000
		},
		{
			"type": "EntityCrate",
			"x": 348,
			"y": 876
		},
		{
			"type": "EntityParticlesystem",
			"x": 0,
			"y": 0
		},
		{
			"type": "EntityCrate",
			"x": 392,
			"y": 1180
		},
		{
			"type": "EntityCrate",
			"x": 240,
			"y": 1224
		},
		{
			"type": "EntityCrate",
			"x": 296,
			"y": 1032
		},
		{
			"type": "EntityCrate",
			"x": 520,
			"y": 1216
		},
		{
			"type": "EntityCrate",
			"x": 476,
			"y": 1036
		},
		{
			"type": "EntityCrate",
			"x": 1000,
			"y": 216
		},
		{
			"type": "EntityCrate",
			"x": 780,
			"y": 836
		},
		{
			"type": "EntityCrate",
			"x": 780,
			"y": 700
		},
		{
			"type": "EntityCrate",
			"x": 820,
			"y": 916
		},
		{
			"type": "EntityCrate",
			"x": 744,
			"y": 912
		},
		{
			"type": "EntityCrate",
			"x": 784,
			"y": 1140
		},
		{
			"type": "EntityCrate",
			"x": 124,
			"y": 612
		},
		{
			"type": "EntityCrate",
			"x": 1012,
			"y": 320
		}
	],
	"layer": [
		{
			"name": "main",
			"width": 30,
			"height": 20,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tiles.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 70,
			"foreground": false,
			"data": [
				[20,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,26],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,41,41,41,23,0,0,0,0,0,10,41,41,41,39],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,8,8,8,33,23,0,0,0,10,39,8,8,8,8],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,8,8,8,8,33,23,0,10,39,8,8,8,8,8],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,14,14,14,14,14,32,0,38,14,14,14,14,14,26],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,0,0,0,0,0,27],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,0,0,0,0,0,8,8,0,0,27],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,3,0,0,0,8,8,8,0,0,27],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,3,0,8,8,8,0,0,0,27],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,0,8,8,8,0,0,0,27],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,0,0,0,8,8,0,0,0,27],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,0,0,0,8,8,0,0,0,27],
				[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,0,0,0,8,8,0,0,0,27],
				[22,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,8,8,41,41,41,8,8,41,41,41,39]
			]
		},
		{
			"name": "collision",
			"width": 30,
			"height": 20,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 70,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,24,0,0,0,0,0,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,24,0,0,0,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,24,0,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelOneResources=[new ig.Image('media/tiles.png')];
});