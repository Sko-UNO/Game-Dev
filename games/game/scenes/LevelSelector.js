class LevelSelector extends Scene{
	constructor(){
		super()
		let levelOneButton = this.instantiate(new LevelButtonGameObject(), new Vector2(20, 20))
		
		levelOneButton.getComponent(LevelButtonController).chosenLevel = Level02
		
		this.instantiate(new LevelControllerGameObject())
	}
}