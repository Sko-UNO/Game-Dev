class LaserPolygon extends Component {
	draw(ctx){
		let position = this.transform.position
			    
		//open and close with ctx.save and cx.restore
		ctx.save()
		   
		   
		ctx.translate(position.x, position.y)
		
		ctx.beginPath()
		ctx.lineTo(0, -20)
		ctx.lineTo(-20, 0)
		ctx.lineTo(0, 20)
		ctx.lineTo(0, 40)
		   
		ctx.lineTo(-5, 35)
		ctx.lineTo(-15, 45)
		ctx.lineTo(-30, 100)
		ctx.lineTo(30, 100)
		ctx.lineTo(15, 45)
		ctx.lineTo(5, 35)
		ctx.lineTo(0, 40)
		ctx.lineTo(0, 20)
		ctx.lineTo(20, 0)
		
		ctx.fillStyle = "Red"
		ctx.fill()
		
		ctx.restore()
	}
}