class MainGameObject extends GameObject{
	constructor(){
		super("Main", ["Player"], "character")
		this.addComponent(new UpdateComponent())
		this.addComponent(new Polygon(), {fillStyle:"Gold", points:[
			new Vector2(0, -20),
			new Vector2(-20, 0),
			new Vector2(0, 20),
			new Vector2(0, 40),
		   
			new Vector2(-5, 35),
			new Vector2(-15, 45),
			new Vector2(-30, 100),
			new Vector2(30, 100),
			new Vector2(15, 45),
			new Vector2(5, 35),
			new Vector2(0, 40),
			new Vector2(0, 20),
			new Vector2(20, 0)
		]})
	}
}