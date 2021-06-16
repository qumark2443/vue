const htmlWebpackPlugin=('html-webpack-plugin')
module.exports={
entry:'./main.js',
output:{
path:_dirname,
filename:'bundle.js',
},
resolve:{
alias:{
'vue':'vue/dist/vue.js'
}
},
module:{
rules:[]
},
plugins:[
new htmlWebpackPLugin({template:'index.html'
}),
]
}