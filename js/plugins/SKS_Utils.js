//=============================================================================
// ScienKunScript TitlesScreen (RPG Maker MV 1.5.1)
// SKS_Utils.js
// Version du script : 1.01
// Script d'utilitaire.
//=============================================================================


/*:fr
 * @plugindesc v1.01 Script utilitaire.
 *
 * @author ScienKun
 *
 * @param textToQuit
 * @text Texte pour quitter
 * @type text
 * @desc Texte affiché pour revenir à windows
 * Par défaut : Back to Windows
 * @default Back to Windows
 *
 * @help ==================================FICHIER AIDE==================================
 * 
 * Installez simplement ce plugin !
 *
 * ===================================CHANGELOGS===================================
 *
 * Version 1.01 : 16/01/2018 : 15h51
 * Correction d'un problème de compatibilité avec SKS_TitleMap
 *
 * Version 1.00 : 26/11/2017 : 15h05
 * Plugin terminé.
 *
 */
var Imported = Imported || {};
Imported.SKS_Utils = true;

var ScienKun = ScienKun || {};
ScienKun.Utils = ScienKun.Utils || {};

(function () {
	"use strict";
	ScienKun.parameters = PluginManager.parameters('SKS_Utils');
	ScienKun.Param = ScienKun.Param || {};
	ScienKun.Param.textToQuit = String(ScienKun.parameters["textToQuit"] || "Back to Windows");

	// ========================= Option quitter menu ===================================
	
	Scene_GameEnd.prototype.createCommandWindow = function() {
    	this._commandWindow = new Window_GameEnd();
    	this._commandWindow.setHandler('toTitle',  this.commandToTitle.bind(this));
		this._commandWindow.setHandler('quitGame',	this.commandQuitGame.bind(this));
    	this._commandWindow.setHandler('cancel',   this.popScene.bind(this));
    	this.addWindow(this._commandWindow);
	};
    
    if (!Imported.SKS_TitleMap) {
        Scene_GameEnd.prototype.commandToTitle = function() {
            this.fadeOutAll();
            SceneManager.goto(Scene_Title);
	   };
    }

	
	Scene_GameEnd.prototype.commandQuitGame = function() {
		this.fadeOutAll();
		close();
	};
	
	// ============ RPG_WINDOWS ============
	
	Window_GameEnd.prototype.makeCommandList = function() {
    	this.addCommand(TextManager.toTitle, 'toTitle');
		this.addCommand(ScienKun.Param.textToQuit, 'quitGame');
    	this.addCommand(TextManager.cancel,  'cancel');
	};
	
})();