class PointsGameObject extends GameObject{
	constructor(){
		super("Points", [], "UI")
		this.addComponent(new TextLabel(), {text: "0 points", font:"20px Wingdings"})
		this.addComponent(new PointsController())
	}
}