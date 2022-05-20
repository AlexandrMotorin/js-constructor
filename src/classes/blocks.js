import {row, col, css} from "../utils"

export class Block {
    constructor(value, options){
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован')
    }
    
}

export class TittleBlock extends Block {
    constructor(value, options){
        super(value, options)
    }

    toHTML(){
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options){
        super(value, options)
    }

    toHTML(){
        const {imageStyles: s, alt = '', styles} = this.options
    return row(`<img src = "${this.value}" alt="${alt}" style="${css(s)}" />`,css(styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options){
        super(value, options)
    }

    toHTML(){
        const styles = this.options.styles
        const html = this.value.map(col).join('')
        return row(html, css(styles)) 
    }
}

export class TextBlock extends Block {
    constructor(value, options){
        super(value, options)
    }

    toHTML(){
        const {styles} = this.options
        return row(col(`<p>${this.value}<p>`),css(styles))
    }
}