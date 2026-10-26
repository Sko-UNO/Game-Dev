class StartButtonGameObject extends GameObject{
	constructor(){
		super("TitleStart", [], "UI")
		this.addComponent(new Polygon(), {fillStyle:"#aaaa", points:[
			new Vector2(0, 0),
			new Vector2(0, 50),
			new Vector2(300, 50),
			new Vector2(300, 0)
		]})
		this.addComponent(new StartButtonController())
	}
}