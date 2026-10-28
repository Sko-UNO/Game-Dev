class BoxGameObject extends GameObject{
	constructor(){
		super("BoxGameObject", [], "default")
		this.addComponent(new Polygon(), {fillStyle:"orange", points:[new Vector2(0,0), new Vector2(500,0), new Vector2(500,50), new Vector2(0,50)]})
	}
}