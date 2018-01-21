/*
 * SKS_SleepStat.js
 * SKE sur GitHub : https://github.com/ScienKun/SKE
 * Plugin par ScienKun.
 * Mis à jour le 21/01/18 à 18h48
 * RPG Maker MV : 1.5.1
 */


// Le plugin est importé, SKE est créé.
var Imported = Imported || {};
Imported.SKS_SleepStat = true;

var SKS = SKS || {};
SKS.SleepStat = SKS.SleepStat || {};

/*:fr
 *
 * @author ScienKun
 *
 * @plugindesc v1.0a Ajoute une nouvelle barre de stat.
 *
 * @param slpText
 * @text TEXT STAT FATIGUE
 * @type texte
 * @desc Texte affiché au-dessus de la jauge.
 * Par défaut : SLP
 * @default SLP
 *
 * @param gaugeColor
 * @text PARAMETRES DES COULEURS
 *
 * @param gBC
 * @parent gaugeColor
 * @text BACKGROUND COLOR
 * @desc Couleur de background de la jauge
 * Par défaut : 19
 * @type number
 * @default 19
 *
 * @param gHPC1
 * @parent gaugeColor
 * @text JAUGE HP COULEUR 1
 * @desc Couleur 1 de la jauge de HP
 * Par défaut : 7
 * @type number
 * @default 7
 *
 * @param gHPC2
 * @parent gaugeColor
 * @text JAUGE HP COULEUR 2
 * @desc Couleur 2 de la jauge de HP
 * Par défaut : 8
 * @type number
 * @default 8
 *
 * @param gMPC2
 * @parent gaugeColor
 * @text JAUGE MP COULEUR 1
 * @desc Couleur 2 de la jauge de MP
 * Par défaut : 8
 * @type number
 * @default 8
 *
 * @param gMPC2
 * @parent gaugeColor
 * @text JAUGE MP COULEUR 2
 * @desc Couleur 2 de la jauge de MP
 * Par défaut : 8
 * @type number
 * @default 8
 *
 * @param gSlpC2
 * @parent gaugeColor
 * @text JAUGE SLP COULEUR 1
 * @desc Couleur 2 de la jauge de fatigue
 * Par défaut : 8
 * @type number
 * @default 8
 *
 * @param gSlpC2
 * @parent gaugeColor
 * @text JAUGE SLP COULEUR 2
 * @desc Couleur 2 de la jauge de fatigue
 * Par défaut : 8
 * @type number
 * @default 8
 *
 * @param variables
 * @text PARAMETRES DE VARIABLES
 *
 * @param varMax
 * @parent variables
 * @text ID VARIABLE MAX
 * @desc L'ID de la variable correspondant au maximum de la jauge. Par défaut : 1
 * @type number
 * @default 1
 *
 * @param varActu
 * @parent variables
 * @text ID VARIABLE ACTUELLE
 * @desc L'ID de la variable correspondant à la valeur actuelle de la jauge. Par défaut : 2
 * @type number
 * @default 2
 *
 *
 * @help ========================= FICHIER AIDE ===============================
 *
 * Ce script utilise les meta (zone de remarque) et des plugins de commandes.
 *
 * ---------------------------------------------
 *
 * Dans la zone de remarque d'un acteur, il faut ajouter deux lignes :
 *
 * <maxSLP:150> par exemple pour le maximum de SLP d'un acteur.
 * <maxSLP:93> pour un autre acteur.
 *
 * <currentSLP:90> par exemple pour les SLP lors du début du jeu pour un acteur.
 * <currentSLP:17> par exemple pour un autre acteur.
 *
 * ---------------------------------------------
 *
 * Les commandes de plugins.
 *
 * SLP X SET Y 
 * Pour cette commande, X est l'ID de l'acteur dans la base de données et Y est
 * la valeur à laquelle currentSLP sera réglée en jeu après l'utilisation de cette
 * commande.
 *
 * SLP X ADD Y
 * Ici, c'est la valeur Y qui sera ajouter à la valeur actuelle de currentSLP pour
 * l'acteur X.
 *
 * SLP X SUB Y
 * Ici, on soustrait la valeur Y à la valeur actruelle de currentSLP pour l'acteur X.
 *
 * SLP X SETMAX
 * Pour régler currentSLP à la même valeur que maxSLP de l'acteur X.
 *
 * SLP X SETMIN
 * Pour régler currentSLP à la valeur 0.
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
    SKS.SleepStat.parameters = PluginManager.parameters('SKS_SleepStat');
    SKS.Param = SKS.Param || {};
    SKS.Param.slpText = String(SKS.SleepStat.parameters['slpText'] || "SLP");

    SKS.Param.gaugeBackColor = Number(SKS.SleepStat.parameters['gBC'] || 19);
    // Barre de vie
    SKS.Param.gaugeHpColor1 = Number(SKS.SleepStat.parameters['gHPC1'] || 7);
    SKS.Param.gaugeHpColor2 = Number(SKS.SleepStat.parameters['gHPC2'] || 8);
    // Barre de magie
    SKS.Param.gaugeMpColor1 = Number(SKS.SleepStat.parameters['gMPC1'] || 7);
    SKS.Param.gaugeMpColor2 = Number(SKS.SleepStat.parameters['gMPC2'] || 8);
    // Barre de fatigue
    SKS.Param.gaugeSlpColor1 = Number(SKS.SleepStat.parameters['gSlpC1'] || 7);
    SKS.Param.gaugeSlpColor2 = Number(SKS.SleepStat.parameters['gSlpC2'] || 8);

    // Variable de jeu
    SKS.Param.idVarMaxGaugeValue = Number(SKS.SleepStat.parameters['varMax'] || 1);
    SKS.Param.idVarCurrentGaugeValue = Number(SKS.SleepStat.parameters['varActu'] || 2);

    SKS.SleepStat.addSlp = function (idActor, value) {
        var totalSlp, 
            actorMeta = parseInt($dataActors[idActor].meta.currentSLP);
        totalSlp = actorMeta + value;
        if (totalSlp > parseInt($dataActors[idActor].meta.maxSLP)) {
            totalSlp = parseInt($dataActors[idActor].meta.maxSLP);
        }
        $dataActors[idActor].meta.currentSLP = totalSlp.toString();
    };
    
    SKS.SleepStat.subSlp = function (idActor, value) {
        var totalSlp, 
            actorMeta = parseInt($dataActors[idActor].meta.currentSLP);
        totalSlp = actorMeta - value;
        if (totalSlp < 0) {
            totalSlp = 0;
        }
        $dataActors[idActor].meta.currentSLP = totalSlp.toString();
    };
    
    SKS.SleepStat.setSlp = function (idActor, value) {
        var totalSlp = value;
        if (totalSlp > parseInt($dataActors[idActor].meta.maxSLP)) {
            totalSlp = parseInt($dataActors[idActor].meta.maxSLP);
        }
        $dataActors[idActor].meta.currentSLP = totalSlp.toString();
    };
    
    SKS.SleepStat.setMaxSlp = function (idActor) {
        var totalSlp = parseInt($dataActors[idActor].meta.maxSLP);
        $dataActors[idActor].meta.currentSLP = totalSlp.toString();
    };
    
    SKS.SleepStat.setMinSlp = function (idActor) {
        var totalSlp = 0;
        $dataActors[idActor].meta.currentSLP = totalSlp.toString();
    };


    // Début du plugin :
    
    SKS.SleepStat.pluginManager = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        SKS.SleepStat.pluginManager.call(this, command, args);
        if (command === 'SLP') {
            var _idActor = parseInt(args[0]),
                _slpValue = parseInt(args[2]);
            switch (args[1]) {
                case 'ADD':
                    SKS.SleepStat.addSlp(_idActor, _slpValue);
                    break;
                case 'SUB':
                    SKS.SleepStat.subSlp(_idActor, _slpValue);
                    break;
                case 'SET':
                    SKS.SleepStat.setSlp(_idActor, _slpValue);
                    break;
                case 'SETMAX':
                    SKS.SleepStat.setMaxSlp(_idActor);
                    break;
                case 'SETMIN':
                    SKS.SleepStat.setMinSlp(_idActor);
                    break;
            }
        }
    };


    // ==============================================================================
    // WINDOWS PART
    // ==============================================================================

    Window_Base.prototype.gaugeBackColor = function () {
        return this.textColor(SKS.Param.gaugeBackColor);
    };

    Window_Base.prototype.hpGaugeColor1 = function () {
        return this.textColor(SKS.Param.gaugeHpColor1);
    };

    Window_Base.prototype.hpGaugeColor2 = function () {
        return this.textColor(SKS.Param.gaugeHpColor2);
    };

    Window_Base.prototype.mpGaugeColor1 = function () {
        return this.textColor(SKS.Param.gaugeMpColor1);
    };

    Window_Base.prototype.mpGaugeColor2 = function () {
        return this.textColor(SKS.Param.gaugeMpColor2);
    };

    Window_Base.prototype.slpGaugeColor1 = function () {
        return this.textColor(SKS.Param.gaugeSlpColor1);
    };

    Window_Base.prototype.slpGaugeColor2 = function () {
        return this.textColor(SKS.Param.gaugeSlpColor2);
    };
    
    Window_Base.prototype.lineHeightSlp = function() {
        return 28;
    };

    Window_Base.prototype.drawActorSlp = function (actor, x, y, width) {
        width = width || 96;
        var currentSLP = parseInt($dataActors[actor.actorId()].meta.currentSLP),
            maxSLP = parseInt($dataActors[actor.actorId()].meta.maxSLP);
        var color1 = this.slpGaugeColor1();
        var color2 = this.slpGaugeColor2();
        this.drawGauge(x, y, width, (currentSLP / maxSLP), color1, color2);
        this.changeTextColor(this.systemColor());
        this.drawText(SKS.Param.slpText, x, y, 44);
        this.changeTextColor(this.tpColor(actor));
        this.drawText(currentSLP, x + width - 64, y, 64, 'right');
    };

    Window_Base.prototype.drawActorSimpleStatus = function (actor, x, y, width) {
        var lineHeight = this.lineHeightSlp();
        var x2 = x + 170;
        var width2 = Math.min(200, width - 180 - this.textPadding());
        this.drawActorName(actor, x, y);
        this.drawActorLevel(actor, x, y + lineHeight * 1);
        this.drawActorIcons(actor, x, y + lineHeight * 2);
        this.drawActorClass(actor, x2, y);
        this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
        this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
        this.drawActorSlp(actor, x2, y + lineHeight * 3, width2);
    };

    Window_MenuStatus.prototype.drawItemStatus = function (index) {
        var actor = $gameParty.members()[index];
        var rect = this.itemRect(index);
        var x = rect.x + 162;
        var y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
        var width = rect.width - x - this.textPadding();
        this.drawActorSimpleStatus(actor, x, y, width);
    };
    /*
        var lineHeight = this.lineHeight();
        var x2 = x + 180;
        var width2 = Math.min(200, width - 180 - this.textPadding());
        this.drawActorName(actor, x, y);
        this.drawActorLevel(actor, x, y + lineHeight * 1);
        this.drawActorIcons(actor, x, y + lineHeight * 2);
        this.drawActorClass(actor, x2, y);
        this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
        this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
        this.drawActorSlp(actor, x2, y + lineHeight * 3, width2);
        */

})();
// Fin du plugin.
