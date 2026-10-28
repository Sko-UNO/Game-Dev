class BoxGameObject extends GameObject{
	constructor(){
		super("BoxGameObject", [], "default")
		this.addComponent(new Polygon(), {fillStyle:"orange", points:[new Vector2(0,20), new Vector2(-20,0), new Vector2(20,0)]})
	}
}