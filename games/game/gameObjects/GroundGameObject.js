class GroundGameObject extends GameObject{
	constructor(){
		super("Ground", ["Ground"], "interactable")
		this.addComponent(new Polygon(), {fillStyle:"Black", points:[
			new Vector2(-window.innerWidth, 0),
			new Vector2(window.innerWidth, 0),
			new Vector2(window.innerWidth, 400),
			new Vector2(-window.innerWidth, 400)
		]})
	}
}