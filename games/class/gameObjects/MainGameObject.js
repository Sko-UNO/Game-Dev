class MainGameObject extends GameObject{
	constructor(){
		super("Main")
		this.addComponent(new UpdateComponent())
		this.addComponent(new Polygon(), {fillStyle:"black", points:Assets.tower})
		this.transform.scale = new Vector2(.5, .5)
	}
}