class GroundGameObject extends GameObject{
	constructor(){
		super("Main")
		this.addComponent(new Polygon(), {fillStyle:"Black", points:[
			new Vector2(0, 0),
			new Vector2(2000, 0),
			new Vector2(2000, 400),
			new Vector2(0, 400)
		]})
	}
}