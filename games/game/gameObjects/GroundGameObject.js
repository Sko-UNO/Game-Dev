class GroundGameObject extends GameObject{
	constructor("Main"){
		super()
		this.addComponent(new Polygon(), {fillStyle:"Green", points:[
			new Vector2(0, 0),
			new Vector2(2000, 0),
			new Vector2(2000, 100),
			new Vector2(0, 100)
		]})
	}
}