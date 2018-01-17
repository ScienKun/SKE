/*
 * SKE_Core v1.0, plugin principal de la suite de ScienKun Engine.
 * SKE sur GitHub : https://github.com/ScienKun/SKE
 * Plugin par ScienKun.
 * Mis à jour le 17/01/18.
 * RPG Maker MV : 1.5.1
*/


// Le plugin est importé, SKE est créé.
var Imported = Imported || {};
Imported.SKE_Core = true;

var SKE = SKE || {};
SKE.Core = SKE.Core || {};
SKE.Core.system = {
    version : "1.0",
    release : "17/01/2018",
    info : function () {
        return "SKE Core, ScienKun Engine Core, version " + this.version + " du " + this.release + ".";
    }
};
/*:fr
 *
 * @author ScienKun
 *
 * @plugindesc v1.0 Plugin principal pour le support des script SKE et SKS.
 * Retrouvez les autres scripts sur GitHub. MV version : 1.5.1 !
 *
 * @param gW
 * @text Fonctions principales
 *
 * @param gameWinWidth
 * @parent gW
 * @text Largeur fenêtre
 * @type number
 * @desc Paramètre pour régler la largeur en pixel de la fenêtre de jeu. Par défaut : 816
 * @default 816
 *
 * @param gameWinHeight
 * @parent gW
 * @text Hauteur fenêtre
 * @type number
 * @desc Paramètre pour régler la hauteur en pixel de la fenêtre de jeu. Par défaut : 624
 * @default 624
 *
 * @param launchDebugTool
 * @parent gW
 * @text Console au lancement
 * @type boolean
 * @on Oui
 * @off Non
 * @desc Paramètre permettant l'activation de la console dès le lancement d'un playtest. Par défaut : non
 * @default false
 *
 *
*/ 



(function() {
    "use strict";
    // Initialisation des paramètres pour le plugin SKE_Core :
    SKE.Core.parameters = PluginManager.parameters('SKE_Core');
    SKE.Param = SKE.Param || {};
    
    // Paramètres du plugin :
    SKE.Param.windowWidth = Number(SKE.Core.parameters['gameWinWidth'] || 816);
    SKE.Param.windowHeight = Number(SKE.Core.parameters['gameWinHeight'] ||624);
    
    SKE.Param.launchDebugTool = String(SKE.Core.parameters['launchDebugTool'] || "false");
    
    // Début du plugin :
    
    // ======================================= GESTIONNAIRE SK ENGINE ==========================================
    
    console.warn(SKE.Core.system.info());
    
    
    // ======================================== FONCTIONS PRINCIPALES ===========================================
    
    SKE.Core.changeWindowSize = function (width, height) {
        SceneManager._screenWidth       = width;
        SceneManager._screenHeight      = height;
        SceneManager._boxWidth          = width;
        SceneManager._boxHeight         = height;
    };
    
    SKE.Core.changeWindowSize(SKE.Param.windowWidth, SKE.Param.windowHeight);
    SKE.Core._sceneManager_run = SceneManager.run;
    SceneManager.run = function(sceneClass) {
        SKE.Core._sceneManager_run.call(this, sceneClass);
        var resizeWidth = Graphics.boxWidth - window.innerWidth,
            resizeHeight = Graphics.boxHeight - window.innerHeight;
        window.moveBy(-1 * resizeWidth / 2, -1 * resizeHeight / 2);
        window.resizeBy(resizeWidth, resizeHeight);
        if (eval(SKE.Param.launchDebugTool)) this.openConsole();
    };
    
    SceneManager.openConsole = function () {
        if (Utils.isNwjs() && Utils.isOptionValid('test')) {
            var _debugTool = require('nw.gui').Window.get().showDevTools();
            _debugTool.moveTo(0, 0);
            window.focus();
        }
    };
    
})();
// Fin du plugin.