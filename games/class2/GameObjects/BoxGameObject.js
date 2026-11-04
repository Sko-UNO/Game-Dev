class BoxGameObject extends GameObject{
	constructor(){
		super("BoxGameObject", [], "default")
		this.addComponent(new Polygon(), {fillStyle:"orange", points:[new Vector2(0,-11), new Vector2(-11,11), new Vector2(11,11)]})
		this.addComponent(new Collider())
		this.addComponent(new RigidBody())
	}
}