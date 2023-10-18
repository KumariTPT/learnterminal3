console.log(boxen(chalk.bgGreen.magenta('Hello world'), {borderStyle:'round'}));
 
console.log(boxen(chalk.bgBlue.magentaBright('Vau'),{padding:6, margin:2, borderstyle: "doubleSingle", width: 7, borderColor:'red'}));
 
console.log(boxen(chalk.bgRed.strikethrough('Tervist'), {borderStyle:'double', borderColor:'blue', borderStyle:'round', margin: 13}));
 
console.log(boxen(chalk.overline.bgCyanBright.magentaBright('Jah'), {borderStyle:'single', borderColor:'red', title: 'kromps', titleAlignment: 'center'}));
 
console.log(boxen(chalk.bgRedBright.overline('ei'), {title: 'eegrid', borderStyle:'arrow', borderColor:'black'}));
 
console.log(boxen(chalk.bgBlack.italic('Maitea'), {padding: 4, margin: 3, width: 12, float:'center', borderColor:'blue'}));
 
console.log(boxen(chalk.bgYellow.inverse('Msasedw2n'), {borderStyle:'classic', width: 10, borderColor: '#8B0000'}));