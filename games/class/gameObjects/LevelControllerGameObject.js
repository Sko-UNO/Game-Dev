class LevelControllerGameObject extends GameObject{
	constructor(){
		super("LevelControllerGO")
		this.addComponent(new LevelController())
	}
}