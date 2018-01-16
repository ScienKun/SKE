// ======================================================================
// ScienKunScript Touch for RPG Maker MV 1.5.0
// SKS_Touch.js
// Version du script : 1.01
// Script qui permet d'ajouter des touches et des fonctions (attack ..)
// ======================================================================

var Imported = Imported || {};
Imported.SKS_Touch = true;

var ScienKun = ScienKun || {};
ScienKun.Touch = ScienKun.Touch || {};

// ======================================================================
/*:
 *
 * @author ScienKun
 *
 * @plugindesc v1.01 : Permet l'ajout de touches et de raccourci clavier.
 *
 * @param Touches clavier
 * @desc Toutes les touches du clavier
 *
 * @param toucheaz
 * @text Touche de A à Z
 * @parent Touches clavier
 *
 * @param Touche a
 * @parent toucheaz
 * @desc Elle servira à activer la commande suivante
 * Par défaut : quest
 * @default quest
 *
 * @param Touche b
 * @parent toucheaz
 * @desc La touche b servira à activer la commande suivante
 * Par défaut : null
 * @default : null
 *
 * @param Touche c
 * @parent toucheaz
 * @desc La touche c servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche d
 * @parent toucheaz
 * @desc La touche d servira à activer la commande suivante
 * Par défaut : right
 * @default right
 *
 * @param Touche e
 * @parent toucheaz
 * @desc La touche e servira à activer la commande suivante
 * Par défaut : spell
 * @default spell
 *
 * @param Touche f
 * @parent toucheaz
 * @desc La touche f servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche g
 * @parent toucheaz
 * @desc La touche g servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche h
 * @parent toucheaz
 * @desc La touche h servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche i
 * @parent toucheaz
 * @desc La touche i servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche j
 * @parent toucheaz
 * @desc La touche j servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche k
 * @parent toucheaz
 * @desc La touche k servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche l
 * @parent toucheaz
 * @desc La touche l servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche m
 * @parent toucheaz
 * @desc La touche m servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche n
 * @parent toucheaz
 * @desc La touche n servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche o
 * @parent toucheaz
 * @desc La touche o servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche p
 * @parent toucheaz
 * @desc La touche p servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche q
 * @parent toucheaz
 * @desc La touche q servira à activer la commande suivante
 * Par défaut : left
 * @default left
 *
 * @param Touche r
 * @parent toucheaz
 * @desc La touche r servira à activer la commande suivante
 * Par défaut : spellC
 * @default spellC
 *
 * @param Touche s
 * @parent toucheaz
 * @desc La touche s servira à activer la commande suivante
 * Par défaut : down
 * @default down
 *
 * @param Touche t
 * @parent toucheaz
 * @desc La touche t servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche u
 * @parent toucheaz
 * @desc La touche u servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche v
 * @parent toucheaz
 * @desc La touche v servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche w
 * @parent toucheaz
 * @desc La touche w servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche x
 * @parent toucheaz
 * @desc La touche x servira à activer la commande suivante
 * Par défaut : attack
 * @default attack
 *
 * @param Touche y
 * @parent toucheaz
 * @desc La touche y servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche z
 * @parent toucheaz
 * @desc La touche z servira à activer la commande suivante
 * Par défaut : up
 * @default up
 *
 * @param toucheNum
 * @text Touches numériques
 * @parent Touches clavier
 *
 * @param Touche 1
 * @parent toucheNum
 * @desc La touche 1 ( & ) servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche 2
 * @parent toucheNum
 * @desc La touche 2 ( é ) servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche 3
 * @parent toucheNum
 * @desc La touche 3 ( " ) servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche 4
 * @parent toucheNum
 * @desc La touche 4 ( ' ) servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche 5
 * @parent toucheNum
 * @desc La touche 5 ( ( ) servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche 6
 * @parent toucheNum
 * @desc La touche 6 ( - ) servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche 7
 * @parent toucheNum
 * @desc La touche 7 ( è ) servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche 8
 * @parent toucheNum
 * @desc La touche 8 ( _ ) servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche 9
 * @parent toucheNum
 * @desc La touche 9 ( ç ) servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche 0
 * @parent toucheNum
 * @desc La touche 0 ( à ) servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param toucheSpe
 * @text Touche spéciales
 * @parent Touches clavier
 *
 * @param Touche TAB
 * @parent toucheSpe
 * @desc La touche TAB servira à activer la commande suivante
 * Par défaut : dash
 * @default dash
 *
 * @param Touche SHIFT
 * @parent toucheSpe
 * @desc La touche SHIFT servira à activer la commande suivante
 * Par défaut : shift
 * @default shift
 *
 * @param Touche CONTROL
 * @parent toucheSpe
 * @desc La touche CONTROL servira à activer la commande suivante
 * Par défaut : control
 * @default control
 *
 * @param Touche ALT
 * @parent toucheSpe
 * @desc La touche ALT servira à activer la commande suivante
 * Par défaut : skills
 * @default skills
 *
 * @param Touche ESPACE
 * @parent toucheSpe
 * @desc La touche ESPACE servira à activer la commande suivante
 * Par défaut : ok
 * @default ok
 *
 * @param Touche ENTRER
 * @parent toucheSpe
 * @desc La touche ENTRER servira à activer la commande suivante
 * Par défaut : ok
 * @default ok
 *
 * @param gamePad
 * @text Touches Manette
 *
 * @param Touche B GAMEPAD
 * @parent gamePad
 * @desc La touche B servira à activer la commande suivante
 * Par défaut : ok
 * @default ok
 *
 * @param Touche A GAMEPAD
 * @parent gamePad
 * @desc La touche  servira à activer la commande suivante
 * Par défaut : cancel
 * @default cancel
 *
 * @param Touche Y GAMEPAD
 * @parent gamePad
 * @desc La touche Y servira à activer la commande suivante
 * Par défaut : shift
 * @default shift
 *
 * @param Touche X GAMEPAD
 * @parent gamePad
 * @desc La touche X servira à activer la commande suivante
 * Par défaut : menu
 * @default menu
 *
 * @param Touche R1
 * @parent gamePad
 * @desc La touche R1 (RB) servira à activer la commande suivante
 * Par défaut : pagedown
 * @default pagedown
 *
 * @param Touche L1
 * @parent gamePad
 * @desc La touche L1 (LB) servira à activer la commande suivante
 * Par défaut : pageup
 * @default pageup
 *
 * @param Touche R2
 * @parent gamePad
 * @desc La touche R2 (RT) servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche L2
 * @parent gamePad
 * @desc La touche L2 (LT) servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche SELECT
 * @parent gamePad
 * @desc La touche SELECT servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche START
 * @parent gamePad
 * @desc La touche START servira à activer la commande suivante
 * Par défaut : null
 * @default null
 *
 * @param Touche HAUT
 * @parent gamePad
 * @desc La touche HAUT servira à activer la commande suivante
 * Par défaut : up
 * @default up
 *
 * @param Touche BAS
 * @parent gamePad
 * @desc La touche BAS servira à activer la commande suivante
 * Par défaut : down
 * @default down
 *
 * @param Touche GAUCHE
 * @parent gamePad
 * @desc La touche GAUCHE servira à activer la commande suivante
 * Par défaut : left
 * @default left
 *
 * @param Touche DROITE
 * @parent gamePad
 * @desc La touche DROITE servira à activer la commande suivante
 * Par défaut : right
 * @default right
 *
 * @help ==================================FICHIER AIDE==================================
 * Ce script sert à ajouter des touches ou à en modifier, pour le moment, le script
 * modifie certaines touches (voir dans les versions). Pour modifier la touche
 * attribué à une version, entrez le numéro de la touche associé (voir liste).
 * Par exemple :
 * fonction 'attack' est attribué sur la touche espace
 * pour l'attribué à la touche C, entrez la valeur 67 à attack.
 * Liste des numéros en fonction de la touche :
 *    14: "0E",
 *    8: "backspace",
 *    9: "tab",
 *    13: "enter",
 *    16: "shift",
 *    17: "ctrl",
 *    18: "alt",
 *    27: "esc",
 *    32: "space",
 *    33: "pageup",
 *    34: "pagedown",
 *    37: "left",
 *    38: "up",
 *    39: "right",
 *    40: "down",
 *    45: "escape",
 *    48: "0",
 *    49: "1",
 *    50: "2",
 *    51: "3",
 *    52: "4",
 *    53: "5",
 *    54: "6",
 *    55: "7",
 *    56: "8",
 *    57: "9",
 *	  58: "caps",
 *    96: "num0",
 *    97: "num1",
 *    98: "num2",
 *    99: "num3",
 *    100: "num4",
 *    101: "num5",
 *    102: "num6",
 *    103: "num7",
 *    104: "num8",
 *    105: "num9",
 *    65: "a",
 *    66: "b",
 *    67: "c",
 *    68: "d",
 *    69: "e",
 *    70: "f",
 *    71: "g",
 *    72: "h",
 *    73: "i",
 *    74: "j",
 *    75: "k",
 *    76: "l",
 *    77: "m",
 *    78: "n",
 *    79: "o",
 *    80: "p",
 *    81: "q",
 *    82: "r",
 *    83: "s",
 *    84: "t",
 *    85: "u",
 *    86: "v",
 *    87: "w",
 *    88: "x",
 *    89: "y",
 *    90: "z",
 *    112: "f1",
 *    113: "f2",
 *    114: "f3",
 *    115: "f4",
 *    116: "f5",
 *    117: "f6",
 *    118: "f7",
 *    119: "f8",
 *    120: "f9",
 *    121: "f10",
 *    122: "f11",
 *    123: "f12",
 *    186: "semicolon",
 *    187: "equal",
 *    188: "comma",
 *    189: "minus",
 *    190: "period",
 *    191: "slash",
 *    192: "grave",
 *    219: "openbracket",
 *    220: "backslash",
 *    221: "closedbracket",
 *    222: "singlequote"
 *
 * ================================================================================
 * Version du script : 14/07/2017 : 1.01
 * ================================================================================
 *
 * Version 1.01 :
 * Mise à jour des paramètres
 *
 * Version 1.0 :
 * Remise à zero du script, modification majeur.
 *
 */

// ======================================================================
//                           PARAMETRES DU SCRIPT
// ======================================================================

ScienKun.parameters = PluginManager.parameters('SKS_Touch');
ScienKun.Param = ScienKun.Param || {};

ScienKun.Param.KeyBoardA = String(ScienKun.parameters["Touche a"] || 'quest');
ScienKun.Param.KeyBoardB = String(ScienKun.parameters["Touche b"] || null);
ScienKun.Param.KeyBoardC = String(ScienKun.parameters["Touche c"] || null);
ScienKun.Param.KeyBoardD = String(ScienKun.parameters["Touche d"] || 'right');
ScienKun.Param.KeyBoardE = String(ScienKun.parameters["Touche e"] || 'spell');
ScienKun.Param.KeyBoardF = String(ScienKun.parameters["Touche f"] || null);
ScienKun.Param.KeyBoardG = String(ScienKun.parameters["Touche g"] || null);
ScienKun.Param.KeyBoardH = String(ScienKun.parameters["Touche h"] || null);
ScienKun.Param.KeyBoardI = String(ScienKun.parameters["Touche i"] || null);
ScienKun.Param.KeyBoardJ = String(ScienKun.parameters["Touche j"] || null);
ScienKun.Param.KeyBoardK = String(ScienKun.parameters["Touche k"] || null);
ScienKun.Param.KeyBoardL = String(ScienKun.parameters["Touche l"] || null);
ScienKun.Param.KeyBoardM = String(ScienKun.parameters["Touche m"] || null);
ScienKun.Param.KeyBoardN = String(ScienKun.parameters["Touche n"] || null);
ScienKun.Param.KeyBoardO = String(ScienKun.parameters["Touche o"] || null);
ScienKun.Param.KeyBoardP = String(ScienKun.parameters["Touche p"] || null);
ScienKun.Param.KeyBoardQ = String(ScienKun.parameters["Touche q"] || 'left');
ScienKun.Param.KeyBoardR = String(ScienKun.parameters["Touche r"] || 'spellC');
ScienKun.Param.KeyBoardS = String(ScienKun.parameters["Touche s"] || 'down');
ScienKun.Param.KeyBoardT = String(ScienKun.parameters["Touche t"] || null);
ScienKun.Param.KeyBoardU = String(ScienKun.parameters["Touche u"] || null);
ScienKun.Param.KeyBoardV = String(ScienKun.parameters["Touche v"] || null);
ScienKun.Param.KeyBoardW = String(ScienKun.parameters["Touche w"] || null);
ScienKun.Param.KeyBoardX = String(ScienKun.parameters["Touche x"] || 'attack');
ScienKun.Param.KeyBoardY = String(ScienKun.parameters["Touche y"] || null);
ScienKun.Param.KeyBoardZ = String(ScienKun.parameters["Touche z"] || 'up');
ScienKun.Param.KeyBoard1 = String(ScienKun.parameters["Touche 1"] || null);
ScienKun.Param.KeyBoard2 = String(ScienKun.parameters["Touche 2"] || null);
ScienKun.Param.KeyBoard3 = String(ScienKun.parameters["Touche 3"] || null);
ScienKun.Param.KeyBoard4 = String(ScienKun.parameters["Touche 4"] || null);
ScienKun.Param.KeyBoard5 = String(ScienKun.parameters["Touche 5"] || null);
ScienKun.Param.KeyBoard6 = String(ScienKun.parameters["Touche 6"] || null);
ScienKun.Param.KeyBoard7 = String(ScienKun.parameters["Touche 7"] || null);
ScienKun.Param.KeyBoard8 = String(ScienKun.parameters["Touche 8"] || null);
ScienKun.Param.KeyBoard9 = String(ScienKun.parameters["Touche 9"] || null);
ScienKun.Param.KeyBoard0 = String(ScienKun.parameters["Touche 0"] || null);
ScienKun.Param.KeyBoardTAB = String(ScienKun.parameters["Touche TAB"] || 'dash');
ScienKun.Param.KeyBoardShift = String(ScienKun.parameters["Touche SHIFT"] || 'shift');
ScienKun.Param.KeyBoardControl = String(ScienKun.parameters["Touche CONTROL"] || 'control');
ScienKun.Param.KeyBoardAlt = String(ScienKun.parameters["Touche ALT"] || 'skills');
ScienKun.Param.KeyBoardEspace = String(ScienKun.parameters["Touche ESPACE"] || 'ok');
ScienKun.Param.KeyBoardEntrer = String(ScienKun.parameters["Touche ENTRER"] || 'ok');
ScienKun.Param.touchY = String(ScienKun.parameters["Touche Y GAMEPAD"] || 'shift');
ScienKun.Param.touchB = String(ScienKun.parameters["Touche B GAMEPAD"] || 'ok');
ScienKun.Param.touchA = String(ScienKun.parameters["Touche A GAMEPAD"] || 'cancel');
ScienKun.Param.touchX = String(ScienKun.parameters["Touche X GAMEPAD"] || 'menu');
ScienKun.Param.touchR1 = String(ScienKun.parameters["Touche R1"] || 'pagedown');
ScienKun.Param.touchL1 = String(ScienKun.parameters["Touche L1"] || 'pageup');
ScienKun.Param.toucheR2 = String(ScienKun.parameters["Touche R2"] || null);
ScienKun.Param.toucheL2 = String(ScienKun.parameters["Touche L2"] || null);
ScienKun.Param.toucheSelect = String(ScienKun.parameters["Touche SELECT"] || null);
ScienKun.Param.toucheStart = String(ScienKun.parameters["Touche START"] || null);
ScienKun.Param.toucheUp = String(ScienKun.parameters["Touche HAUT"] || 'up');
ScienKun.Param.toucheDown = String(ScienKun.parameters["Touche BAS"] || 'down');
ScienKun.Param.toucheLeft = String(ScienKun.parameters["Touche GAUCHE"] || 'left');
ScienKun.Param.toucheRight = String(ScienKun.parameters["Touche DROITE"] || 'right');

// ======================================================================
//                              DEBUT DU SCRIPT
// ======================================================================
(function () {
	
Input.keyMapper = {
	13: 'ok', // enter
	16: 'shift', // shift
	17: 'control', // control
	27: 'escape', // escape
	32: 'ok', // space
	33: 'pageup', // pageup
	34: 'pagedown', // pagedown
	37: 'left', // left arrow
	38: 'up', // up arrow
	39: 'right', // right arrow
	40: 'down', // down arrow
	45: 'escape', // insert
	81: 'left', //  Q
	83: 'down', // S
	68: 'right', // D
	90: 'up', // Z
	96: 'escape', // numpad 0
	98: 'down', // numpad 2
	100: 'left', // numpad 4
	102: 'right', // numpad 6
	104: 'up', // numpad 8
	120: 'debug' // F9
};

Input.gamepadMapper = {
	0: 'ok', // B
	1: 'cancel', // A
	2: 'shift', // Y
	3: 'menu', // X
	4: 'pageup', // LB
	5: 'pagedown', // RB
	12: 'up', // D-pad up
	13: 'down', // D-pad down
	14: 'left', // D-pad left
	15: 'right', // D-pad right
};


Input.keyMapper[13] = ScienKun.Param.KeyBoardEntrer;
Input.keyMapper[32] = ScienKun.Param.KeyBoardEspace;
Input.keyMapper[16] = ScienKun.Param.KeyBoardShift;
Input.keyMapper[17] = ScienKun.Param.KeyBoardControl;
Input.keyMapper[18] = ScienKun.Param.KeyBoardAlt;
Input.keyMapper[48] = ScienKun.Param.KeyBoard0;
Input.keyMapper[49] = ScienKun.Param.KeyBoard1;
Input.keyMapper[50] = ScienKun.Param.KeyBoard2;
Input.keyMapper[51] = ScienKun.Param.KeyBoard3;
Input.keyMapper[52] = ScienKun.Param.KeyBoard4;
Input.keyMapper[53] = ScienKun.Param.KeyBoard5;
Input.keyMapper[54] = ScienKun.Param.KeyBoard6;
Input.keyMapper[55] = ScienKun.Param.KeyBoard7;
Input.keyMapper[56] = ScienKun.Param.KeyBoard8;
Input.keyMapper[57] = ScienKun.Param.KeyBoard9;
Input.keyMapper[9] = ScienKun.Param.KeyBoardTAB;
Input.keyMapper[65] = ScienKun.Param.KeyBoardA;
Input.keyMapper[66] = ScienKun.Param.KeyBoardB;
Input.keyMapper[67] = ScienKun.Param.KeyBoardC;
Input.keyMapper[68] = ScienKun.Param.KeyBoardD;
Input.keyMapper[69] = ScienKun.Param.KeyBoardE;
Input.keyMapper[70] = ScienKun.Param.KeyBoardF;
Input.keyMapper[71] = ScienKun.Param.KeyBoardG;
Input.keyMapper[72] = ScienKun.Param.KeyBoardH;
Input.keyMapper[73] = ScienKun.Param.KeyBoardI;
Input.keyMapper[74] = ScienKun.Param.KeyBoardJ;
Input.keyMapper[75] = ScienKun.Param.KeyBoardK;
Input.keyMapper[76] = ScienKun.Param.KeyBoardL;
Input.keyMapper[77] = ScienKun.Param.KeyBoardM;
Input.keyMapper[78] = ScienKun.Param.KeyBoardN;
Input.keyMapper[79] = ScienKun.Param.KeyBoardO;
Input.keyMapper[80] = ScienKun.Param.KeyBoardP;
Input.keyMapper[81] = ScienKun.Param.KeyBoardQ;
Input.keyMapper[82] = ScienKun.Param.KeyBoardR;
Input.keyMapper[83] = ScienKun.Param.KeyBoardS;
Input.keyMapper[84] = ScienKun.Param.KeyBoardT;
Input.keyMapper[85] = ScienKun.Param.KeyBoardU;
Input.keyMapper[86] = ScienKun.Param.KeyBoardV;
Input.keyMapper[87] = ScienKun.Param.KeyBoardW;
Input.keyMapper[88] = ScienKun.Param.KeyBoardX;
Input.keyMapper[89] = ScienKun.Param.KeyBoardY;
Input.keyMapper[90] = ScienKun.Param.KeyBoardZ;

Input.gamepadMapper[0] = ScienKun.Param.touchB;
Input.gamepadMapper[1] = ScienKun.Param.touchA;
Input.gamepadMapper[2] = ScienKun.Param.touchY;
Input.gamepadMapper[3] = ScienKun.Param.touchX;
Input.gamepadMapper[4] = ScienKun.Param.touchL1;
Input.gamepadMapper[5] = ScienKun.Param.touchR1;
Input.gamepadMapper[6] = ScienKun.Param.toucheL2;
Input.gamepadMapper[7] = ScienKun.Param.toucheR2;
Input.gamepadMapper[8] = ScienKun.Param.toucheSelect;
Input.gamepadMapper[9] = ScienKun.Param.toucheStart;
Input.gamepadMapper[10] = null;
Input.gamepadMapper[11] = null;
Input.gamepadMapper[12] = ScienKun.Param.toucheUp;
Input.gamepadMapper[13] = ScienKun.Param.toucheDown;
Input.gamepadMapper[14] = ScienKun.Param.toucheLeft;
Input.gamepadMapper[15] = ScienKun.Param.toucheRight;

Input._updateGamepadState = function (gamepad) {
	var lastState = this._gamepadStates[gamepad.index] || [];
	var newState = [];
	var buttons = gamepad.buttons;
	var axes = gamepad.axes;
	var threshold = 0.5;
	newState[12] = false;
	newState[13] = false;
	newState[14] = false;
	newState[15] = false;
	for (var i = 0; i < buttons.length; i++) {
		newState[i] = buttons[i].pressed;
	}
	if (axes[1] < -threshold) {
		newState[12] = true; // up
	} else if (axes[1] > threshold) {
		newState[13] = true; // down
	}
	if (axes[0] < -threshold) {
		newState[14] = true; // left
	} else if (axes[0] > threshold) {
		newState[15] = true; // right
	}
	for (var j = 0; j < newState.length; j++) {
		if (newState[j] !== lastState[j]) {
			var buttonName = this.gamepadMapper[j];
			if (buttonName) {
				this._currentState[buttonName] = newState[j];
			}
		}
	}
	this._gamepadStates[gamepad.index] = newState;
};
/*
	65: 'quest', // A (Quest)
	88: 'attack', // X (attack)
	69: 'spell', // E (spell)
	82: 'spellC', // R (Choix sortillège)
	70: 'enemyBook', // F (Ouvre EnemyBook)
	71: 'itemBook', // G (ouvre ItemBook)
	67: 'status', // C (voir specificité fatigue/faim)
	73: 'inventory', // I (inventaire)
	73: 'arbreComp', // H (arbre de compétence)
	77: 'minimap', // M (afficher la minimap)
	76: 'light' // L (allumer eteindre la torche)
*/
})();
// ======================================================================
//                             FIN DU SCRIPT
// ======================================================================
