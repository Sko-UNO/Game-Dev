class TimerGameObject extends GameObject{
	constructor(){
		super("Timer", [], "UI")
		this.addComponent(new TextLabel(), {text: "0", font:"60px Arial"})
		this.addComponent(new TimerController())
	}
}