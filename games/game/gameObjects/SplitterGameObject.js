class SplitterGameObject extends GameObject{
	constructor(){
		super("Splitter")
		this.addComponent(new Polygon(), {fillStyle:"Black", points:[
			new Vector2(0, 0),
			new Vector2(50, 0),
			new Vector2(50, 1200),
			new Vector2(0, 1200)
		]})
		
	}
}