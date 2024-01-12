const path = require ('path')

// Basename
// Apenas o nome do arquivo Atual

console.log(path.basename(__filename))

//
console.log(path.dirname(__filename))

//Ext do arquivo

console.log(path.extname(__filename))

//Criar objeto Path
console.log(path.parse(__filename))


console.log(path.join(__dirname,"teste"))
console.log(__dirname)
