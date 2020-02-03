const entityLib = this.global.entityLib; // Like Java import

const mech = entityLib.extendMech(Mech, "routertron", [{
	loadAfter(){
		print("router")
		this.bodyRegion = Core.atlas.find("router");
	},
	drawUnder(player, rot){
		Draw.rect(this.bodyRegion, player.x, player.y, rot);
	},

	// square engine
	// be there or be square
	// routertron is not very fast...
	// @Override
	drawEngine(player){
		const size = this.engineSize * (this.flying ? 1 : player.boostHeat);
		const rotation = this.getTrueRotation(player);
		Draw.color(this.engineColor);
		Fill.square(player.x + Angles.trnsx(rotation + 180, this.engineOffset), player.y + Angles.trnsy(rotation + 180, this.engineOffset),
			(size + Mathf.absin(Time.time(), 2, size / 4)) * this.engineRadius);

		Draw.color(this.engineInnerColor);
		Fill.square(player.x + Angles.trnsx(rotation + 180, this.engineOffset - 1), player.y + Angles.trnsy(rotation + 180, this.engineOffset - 1),
			(size + Mathf.absin(Time.time(), 2, size / 4)) * this.engineInnerRadius);
		Draw.color();
	}
}]);
mech.rotationLimit = 2; // 120' per second usually
mech.rotationLerp = 0.05;
mech.weapons = [
	Mechs.omega.weapon,
	Mechs.dart.weapon,
	Mechs.delta.weapon
];

const pad = extendContent(MechPad, "routertron-pad", {});
pad.mech = mech;