class LaserGameObject extends GameObject{
	constructor(){
		super("Laser")
		this.addComponent(new LaserController())
		this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.tower})
		this.transform.scale = new Vector2(.15, .15)
	}
}