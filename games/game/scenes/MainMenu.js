class MainMenu extends Scene{
	constructor(){
		super()
		let titleScreen = new GameObject("TitleScreen", [], "UI")
		titleScreen.addComponent(new TextLabel(), {fillStyle: "black", font:"100px Times"})
		this.instantiate(titleScreen, new Vector2(0, 100))
		titleScreen.getComponent(TextLabel).text = "The Game"
	}
}