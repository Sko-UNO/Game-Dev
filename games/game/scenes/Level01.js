class Level01 extends Scene{
	constructor(){
		super()
		this.instantiate(new GroundGameObject(), new Vector2(0, 800))
		this.instantiate(new SplitterGameObject(), new Vector2(-25, 0))
		let platform1 = this.instantiate(new PlatformGameObject(), new Vector2(-400, 600))
		platform1.getComponent(Polygon).points = [
			new Vector2(0, 0),
			new Vector2(200, 0),
			new Vector2(200, 10),
			new Vector2(0, 10),
		]
		let platform2 = this.instantiate(new PlatformGameObject(), new Vector2(200, 600))
		platform2.getComponent(Polygon).points = [
			new Vector2(0, 0),
			new Vector2(100, 0),
			new Vector2(100, 10),
			new Vector2(0, 10),
		]
		let platform3 = this.instantiate(new PlatformGameObject(), new Vector2(400, 600))
		platform3.getComponent(Polygon).points = [
			new Vector2(0, 0),
			new Vector2(200, 0),
			new Vector2(200, 10),
			new Vector2(0, 10),
		]
		let platform4 = this.instantiate(new PlatformGameObject(), new Vector2(-400, 500))
		platform4.getComponent(Polygon).points = [
			new Vector2(0, 0),
			new Vector2(200, 0),
			new Vector2(200, 10),
			new Vector2(0, 10),
		]
		let platform5 = this.instantiate(new PlatformGameObject(), new Vector2(-600, 500))
		platform5.getComponent(Polygon).points = [
			new Vector2(0, 0),
			new Vector2(100, 0),
			new Vector2(100, 10),
			new Vector2(0, 10),
		]
		
		
		this.instantiate(new LevelControllerGameObject())
	}
}