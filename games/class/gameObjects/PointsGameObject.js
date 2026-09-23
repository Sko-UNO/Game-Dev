class PointsGameObject extends GameObject{
	constructor(){
		super("Points")
		this.addComponent(new TextLabel(), {text: "0 points"})
		this.addComponent(new PointsController())
	}
}