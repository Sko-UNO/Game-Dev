class TimerController extends Component{
	seconds = 0
	minutes = 0
	time = 0
	
	update(){
		this.time += Time.deltaTime
		this.seconds = this.time % 60
		this.minutes = Math.floor(this.time / 60)
		this.gameObject.getComponent(TextLabel).text = this.minutes + ":" + this.seconds.toFixed(2)
	}
}