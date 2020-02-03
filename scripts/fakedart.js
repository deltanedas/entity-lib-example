const entityLib = this.global.entityLib; // Like Java import

var copy = Mechs.dart.weapon;
const weapon = extendContent(Weapon, "fakedart-blaster", {
	load(){
		this.region = Core.atlas.find("entity-lib-example-" + this.name);
	}
});
weapon.speed = copy.speed;
weapon.reload = copy.reload;
weapon.length = 1;
weapon.width = 2.4;
weapon.ejectEffect = copy.ejectEffect;
weapon.bullet = copy.bullet;

copy = Mechs.dart;
const fakedart = entityLib.extendMech(Mech, "fakedart", [{
	loadAfter(){
		this.bodyRegion = Core.atlas.find("dart-ship");
	},
	drawUnder(player, rot){
		Draw.rect(this.bodyRegion, player.x, player.y, rot);
	}
}]);
fakedart.flying = true;
fakedart.drillPower = copy.drillPower;
fakedart.mineSpeed = copy.mineSpeed;
fakedart.speed = copy.speed;
fakedart.drag = copy.drag;
fakedart.health = copy.health;
fakedart.weaponOffsetX = copy.weaponOffsetX;
fakedart.weaponOffsetY = copy.weaponOffsetY;
fakedart.engineColor = copy.engineColor;
fakedart.cellTrnsY = copy.cellTrnsY;
fakedart.buildPower = copy.buildPower;

fakedart.rotationLimit = 2; // 120' per second usually
fakedart.rotationLerp = 0.06;
fakedart.weapons = [
	weapon,
	weapon
];

// research name is misleading, it actually requires an alpha pad.
const pad = extendContent(MechPad, "fakedart-pad", {});
pad.mech = fakedart;