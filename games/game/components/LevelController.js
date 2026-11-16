class LevelController extends Component{
	allLevels = {MainMenu, LevelSelector, Level01, Level02}
	currentLevel = 0
	
	start(){
		SceneManager.loadScene(GenericLevel, true)
	}
	levelChange(LevelName){
		SceneManager.loadScene(LevelName)
	}
}