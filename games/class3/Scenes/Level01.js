class Level01 extends Scene{
	constructor(){
		super()
		this.instantiate(new MainGameObject(), new Vector2(500, 400))
		this.instantiate(new BoxGameObject(), new Vector2(0, 0))
		
		this.instantiate(new LevelControllerGameObject())
	}
}