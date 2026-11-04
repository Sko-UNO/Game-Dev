class Level01 extends Scene{
	constructor(){
		super()
		this.instantiate(new MainGameObject(), new Vector2(0, 0))
		this.instantiate(new PlatformGameObject(), new Vector2(0, 50))
		this.instantiate(new PlatformGameObject(), new Vector2(0, -200))
		
	}
}