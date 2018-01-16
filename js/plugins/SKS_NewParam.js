var Imported  = Imported || {};
Imported.SKS_NewParam = true;

/*:fr
 * @author ScienKun
 *
 * @plugindesc Test des nouveau paramètres
 *
 * @param C:\ 
 *
 * @param Window
 * @parent C:\ 
 *
 * @param System 32
 * @parent Window
 *
 * @param Users
 * @parent Window
 *
 * @param Léo
 * @parent Users
 *
 * @param D:\ 
 *
 * @param Documents
 * @parent D:\ 
 *
 * @param ==== TYPE BOOLEAN ====
 *
 * @param lightEffect
 * @text Effets de lumières
 * @desc Active ou désactive les effets de lumière dans le jeu.
 * @type boolean
 * @on Activés
 * @off Désactivés
 * @default true
 *
 * @param inOptions
 * @text Afficher dans Options
 * @parent lightEffect
 * @desc Afficher le paramètre dans les options.
 * @type boolean
 * @on Oui
 * @off Non
 * @default true
 * 
 * @param ====== TYPE TEXT =====
 *
 * @param changeTitle
 * @text Changement de titre
 * @desc Si oui, change le titre du jeu.
 * @type boolean
 * @on Oui
 * @off Non
 * @default false
 *
 * @param textTitle
 * @text Titre affiché
 * @parent changeTitle
 * @desc Texte affiché pour le titre du jeu à l'écran-titre.
 * @type text
 * @default Titre du jeu
 *
 * @param titleNote
 * @text Note titre
 * @parent textTitle
 * @desc Permet d'ajouter une note au titre changé.
 * @type note
 * @default
 *
 * @param ==== TYPE NUMBER ====
 *
 * @param levelMax
 * @text Niveau maximal
 * @desc Pemet de définir le niveau maximal d'un personnage.
 * @type number
 * @min 1
 * @default 99
 * @decimals 0
 *
 * @param ===== TYPE FILE =====
 *
 * @param changeTitleBGM
 * @text Change BGM titlescreen
 * @desc Si oui, change la musique de l'écran titre par celle d'en-dessous.
 * @type boolean
 * @on Oui
 * @off Non
 * @default false
 * 
 * @param musicTitlescreen
 * @text Musique écran-titre
 * @parent changeTitleBGM
 * @desc Permet de modifier la musique de l'écran-titre.
 * @type file
 * @dir audio/bgm/
 * @require 1
 * @default
 *
 *
 *
*/

var ScienKun = ScienKun || {};
ScienKun.NewParam = ScienKun.NewParam || {};
(function () {
	ScienKun.parameters = PluginManager.parameters('SKS_NewParam');
	ScienKun.Param = ScienKun.Param || {};
	ScienKun.Param.lightEffect = Boolean(ScienKun.parameters['lightEffect'] || true);
	ScienKun.Param.changeTitleBGM = Boolean(ScienKun.parameters['changeTitleBGM'] || false);
	ScienKun.Param.newTitleBGM = String(ScienKun.parameters['musicTitlescreen'] || $dataSystem.battleBgm.name);
	
	if (ScienKun.Param.changeTitleBGM === true) {
	
	}
	
	Scene_Title.prototype.start = function() {
    	Scene_Base.prototype.start.call(this);
    	SceneManager.clearStack();
    	this.centerSprite(this._backSprite1);
		this.centerSprite(this._backSprite2);
		this.playTitleMusic();
		this.startFadeIn(this.fadeSpeed(), false);
	};

	Scene_Title.prototype.playTitleMusic = function () {
		AudioManager.playBgm($dataSystem.titleBgm);	
		AudioManager.stopBgs();
		AudioManager.stopMe();
	};

})();