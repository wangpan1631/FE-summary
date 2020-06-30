class Complier {
    constructor(config){
        this.config = config;
    }
    run () {

    }
    // 解析源码
    parse (source, parentPath) {
        let ast = babylon.parse(source);
        traverse(ast, {
            
        })
    }

}
module.exprots = Complier;