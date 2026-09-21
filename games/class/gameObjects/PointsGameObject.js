class PointsGameObject extends GameObject{
	constructor(){
		super("Points")
		this.addComponent(new TextLabel(), {text: "BIG"})
	}
}