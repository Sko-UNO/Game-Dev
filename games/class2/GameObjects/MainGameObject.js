class MainGameObject extends GameObject{
	constructor(){
		super("Main", [], "default")
		this.addComponent(new UpdateComponent())
		this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.tower})
		this.addComponent(new Collider())
		this.addComponent(new RigidBody())
		this.transform.scale = new Vector2(.5, .5)
	}
}