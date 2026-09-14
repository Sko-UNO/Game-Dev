class DrawComponent extends Component{
	draw(ctx){
		let position = this.transform.position
			    
		//open and close with ctx.save and cx.restore
		ctx.save()
		   
		   
		ctx.translate(position.x, position.y)
		
		ctx.beginPath()
		ctx.lineTo(0, -40)
		ctx.lineTo(-40, 0)
		ctx.lineTo(0, 40)
		ctx.lineTo(0, 80)
		   
		ctx.lineTo(-10, 70)
		ctx.lineTo(-30, 90)
		ctx.lineTo(-60, 200)
		ctx.lineTo(60, 200)
		ctx.lineTo(30, 90)
		ctx.lineTo(10, 70)
		ctx.lineTo(0, 80)
		ctx.lineTo(0, 40)
		ctx.lineTo(40, 0)
		
		ctx.fillStyle = "black"
		ctx.fill()
		
		ctx.restore()
	}
}