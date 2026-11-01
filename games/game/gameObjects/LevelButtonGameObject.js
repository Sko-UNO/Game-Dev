class LevelButtonGameObject extends GameObject{
	constructor(){
		super("LevelButton", [], "UI")
		this.addComponent(new Polygon(), {fillStyle:"#ffff", points:[
			new Vector2(0, 0),
			new Vector2(0, 100),
			new Vector2(100, 100),
			new Vector2(100, 0)
		]})
		this.addComponent(new Collider())
		this.addComponent(new LevelButtonController())
	}
}