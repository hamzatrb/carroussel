'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
function getRandomInteger(min , max)
{

	var randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomInteger;
}
