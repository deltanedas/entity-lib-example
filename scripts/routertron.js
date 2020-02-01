const entityLib = this.global.entityLib; // Like Java import

const mech = entityLib.extendMech(Mech, "routertron", [{
	loadAfter(){
		this.bodyRegion = Core.atlas.find("router")
	},
	drawUnder(player, rot){
		Draw.rect(this.bodyRegion, player.x, player.y, rot);
	}
}]);
mech.rotationLimit = 2; // 60' per second usually
mech.rotationLerp = 0.05;
mech.weapons = [
	Mechs.omega.weapon,
	Mechs.dart.weapon,
	Mechs.duo.weapon
];