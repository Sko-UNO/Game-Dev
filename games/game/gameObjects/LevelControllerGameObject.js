class LevelControllerGameObject extends GameObject{
	constructor(){
		super("LevelControllerGameObject", [], "interactable")
		this.addComponent(new LevelController())
	}
}