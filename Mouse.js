function Mouse(name, age) {
	this.name = name;
	this.age = age;
	this.dead = false;
}
Mouse.prototype.die = function() {
	this.dead = true;
}
module.exports = Mouse;
