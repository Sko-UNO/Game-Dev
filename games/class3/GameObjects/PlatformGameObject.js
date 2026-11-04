class PlatformGameObject extends GameObject{
	constructor(){
		super("PlatformGameObject", [], "default")
		this.addComponent(new Polygon(), {fillStyle:"orange", points:[new Vector2(-350,-20), new Vector2(-350,20), new Vector2(350,20), new Vector2(350,-20)]})
		this.addComponent(new Collider())
	}
}