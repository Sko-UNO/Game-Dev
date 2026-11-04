class CoinGameObject extends GameObject{
	constructor(){
		super("CoinGameObject", [], "default")
		this.addComponent(new Polygon(), {fillStyle:"cyan", points:[new Vector2(-10,-10), new Vector2(-10,10), new Vector2(10,10), new Vector2(10,-10)]})
		this.addComponent(new Collider())
		this.addComponent(new RigidBody(), {isTrigger:True})
		
	}
}