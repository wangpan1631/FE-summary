/**
 * 手头剪刀布游戏
 */
console.log(process.argv);

var palyerAction = process.argv[process.argv.length - 1];
var random = Math.random() * 3;

if (random < 1) {
    var computerAction = 'rock';
} else if (random > 2) {
    var computerAction = 'scissor';
} else {
    var computerAction = 'paper';
}
console.log('我出了' + computerAction);
if (computerAction == palyerAction) {
    console.log('平局');
} else if (
    (computerAction === 'rock' && palyerAction === 'paper') || 
    (computerAction === 'scissor' && palyerAction === 'rock') || 
    (computerAction === 'paper' && palyerAction === 'scissor')
) {
    console.log('你赢了');
} else {
    console.log('你输了');
}