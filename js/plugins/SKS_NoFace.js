/*
 * SKS_NoFace
 * SKE sur GitHub : https://github.com/ScienKun/SKE
 * Plugin par ScienKun.
 * Mis à jour le __
 * RPG Maker MV : 1.5.1
 */


// Le plugin est importé, SKE est créé.
var Imported = Imported || {};
Imported.SKS_NoFace = true;

var SKS = SKS || {};
SKS.NoFace = SKS.NoFace || {};

/*:fr
 *
 * @author ScienKun
 *
 * @plugindesc v1.0a Supprime les faces dans le menu.
 *
 * 
 * =================================== CHANGELOG ===============================
 * 
 * Version 1.0a : 21/01/2018 : 18h48
 * Plugin terminé
 *
 *
 */



(function () {
    "use strict";
    // Initialisation des paramètres pour le plugin SKE_Core :
    SKS.SleepStat.parameters = PluginManager.parameters('SKS_NoFace');
    SKS.Param = SKS.Param || {};
    
    Window_MenuStatus.prototype.drawItemImage = function(index) {
        var actor = $gameParty.members()[index];
        var rect = this.itemRect(index);
        this.changePaintOpacity(actor.isBattleMember());
        //this.drawActorFace(actor, rect.x + 1, rect.y + 1, Window_Base._faceWidth, Window_Base._faceHeight);
        this.changePaintOpacity(true);
    };

})();
// Fin du plugin.
