class TimerController extends Component{
	seconds = 0
	minutes = 0
	
	update(){
		this.seconds = Time.time % 60
		this.minutes = Math.floor(Time.time / 60)
		this.gameObject.getComponent(TextLabel).text = this.minutes + ":" + this.seconds.toFixed(2)
	}
}