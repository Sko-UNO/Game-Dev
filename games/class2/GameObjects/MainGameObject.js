class MainGameObject extends GameObject{
	constructor(){
		super("Main", [], "default")
		this.addComponent(new UpdateComponent())
		this.addComponent(new Polygon(), {fillStyle:"cyan", points:Assets.tower})
		this.transform.scale = new Vector2(.5, .5)
		this.addComponent(new Collider())
		this.addComponent(new RigidBody)
	}
}