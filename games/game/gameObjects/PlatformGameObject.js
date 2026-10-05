class PlatformGameObject extends GameObject{
	
	constructor(){
		super("PlatformGameObject", ["Platform"], "interactable")
		this.addComponent(new Polygon(), {fillStyle: "green", points:[
			new Vector2 (0, 0),
			new Vector2 (100, 0),
			new Vector2 (100, 100),
			new Vector2 (0, 100),
		]})
	}
}