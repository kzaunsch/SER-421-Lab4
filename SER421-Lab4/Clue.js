/**
 * Source file for game of Clue.
 * SER 421 Fall B 2017
 * @Author Tony Cotta, Karen Zaunscherb
 * Last Modified 11/9/17
 */

var suspects = [];
var weapons = [];
var rooms = [];

function dispUser(){
    var x = document.forms['player'];
    var name = x.elements[0].value;
    console.log('User name is: ' + name);
    document.getElementById('userGreeting').innerHTML = 'Welcome ' + name;
}