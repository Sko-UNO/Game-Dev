class MirrorGameObject extends GameObject{
	constructor(){
		super("Mirror")
		this.addComponent(new MirrorUpdateComponent())
		this.addComponent(new Polygon(), {fillStyle:"Purple", points:[
			new Vector2(0, -40),
			new Vector2(-40, 0),
			new Vector2(0, 40),
			new Vector2(0, 80),
		   
			new Vector2(-10, 70),
			new Vector2(-30, 90),
			new Vector2(-60, 200),
			new Vector2(60, 200),
			new Vector2(30, 90),
			new Vector2(10, 70),
			new Vector2(0, 80),
			new Vector2(0, 40),
			new Vector2(40, 0)
		]})
	}
}