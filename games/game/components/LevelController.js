class LevelController extends Component{
	start(){
		SceneManager.loadScene(GenericLevel, true)
	}
	levelChange(LevelName){
		SceneManager.loadScene(LevelName)
	}
}