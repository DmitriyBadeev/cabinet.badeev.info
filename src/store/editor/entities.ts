import { action, observable, computed } from "mobx"
import { IBlock, IElement, IType } from "./interfaces"
import { BlockTypes } from "./editorService"

export class Type implements IType {
    @observable type: string
    @observable renderFC: (content: string) => string

    constructor(type: string, render: (content: string) => string) {
        this.type = type
        this.renderFC = render
    }
}

export class Element implements IElement {
    @observable type: IType | null
    @observable content: string

    constructor(type: IType, content: string) {
        this.type = type
        this.content = content
    }

    @computed get render() {
        return this.type?.renderFC(this.content) ?? ""
    }
}

export class TextBlock implements IBlock {
    @observable title: string
    @observable type: BlockTypes
    @observable elements: IElement[]
    @observable elementTypes: IType[]
    @observable index: number
    key: string

    constructor(title: string, index: number) {
        this.title = title
        this.type = BlockTypes.Text
        this.elementTypes = [new Type("Заголовок", (c) => `<h3>${c}</h3>`), new Type("Абзац", (c) => `<p>${c}</p>`)]
        this.elements = []
        this.index = index
        this.key = this.title + "_" + this.type + "_" + this.index
    }

    @action createElement(typeNumber: number, content: string) {
        if (typeNumber === 0) this.addHeader(content)

        if (typeNumber === 1) this.addParagraph(content)
    }

    @action removeElement(number: number) {
        this.elements = this.elements.filter((_el, i) => i !== number)
    }

    @action addHeader(content: string) {
        const element = new Element(this.elementTypes[0], content)

        this.elements.push(element)
        return this
    }

    @action addParagraph(content: string) {
        const element = new Element(this.elementTypes[1], content)
        this.elements.push(element)
        return this
    }

    @computed get render() {
        return `<div class="text">${this.elements.map((el) => el.render).join("")}</div>`
    }
}

export class ImageBlock implements IBlock {
    @observable title: string
    @observable type: BlockTypes
    @observable elementTypes: IType[]
    @observable elements: IElement[]
    @observable index: number
    key: string

    constructor(title: string, index: number) {
        this.title = title
        this.type = BlockTypes.Image
        this.elementTypes = [new Type("Ссылка", (c) => `<img src="${c}" class="image" alt="Изображение"/>`)]
        this.elements = []
        this.index = index
        this.key = this.title + "_" + this.type + "_" + this.index
    }

    @action createElement(typeNumber: number, content: string) {
        const element = new Element(this.elementTypes[typeNumber], content)
        this.elements.push(element)
    }

    @action removeElement(number: number) {
        this.elements = this.elements.filter((_el, i) => i !== number)
    }

    @computed get render() {
        return this.elements.map((el) => el.render).join("")
    }
}

export class StyleBlock implements IBlock {
    @observable title: string
    @observable type: BlockTypes
    @observable elementTypes: IType[]
    @observable elements: IElement[]
    @observable index: number
    key: string

    constructor(title: string, index: number) {
        this.title = title
        this.type = BlockTypes.Styles
        this.elementTypes = [new Type("Стили", (c) => `<style>${c}</style>`)]
        this.elements = []
        this.index = index
        this.key = this.title + "_" + this.type + "_" + this.index
    }

    @action createElement(typeNumber: number, content: string) {
        const element = new Element(this.elementTypes[typeNumber], content)
        this.elements.push(element)
    }

    @action removeElement(number: number) {
        this.elements = this.elements.filter((_el, i) => i !== number)
    }

    @computed get render() {
        return this.elements.map((el) => el.render).join("")
    }
}

export class VideoBlock implements IBlock {
    @observable title: string
    @observable type: BlockTypes
    @observable elementTypes: IType[]
    @observable elements: IElement[]
    @observable index: number
    key: string

    constructor(title: string, index: number) {
        this.title = title
        this.type = BlockTypes.Video
        this.elementTypes = [
            new Type(
                "Ссылка",
                (c) =>
                    `<video autoplay class="video" loop playsinline src=${c}>Видео не поддерживается вашим браузером.</video>`
            ),
        ]
        this.elements = []
        this.index = index
        this.key = this.title + "_" + this.type + "_" + this.index
    }

    @action createElement(typeNumber: number, content: string) {
        const element = new Element(this.elementTypes[typeNumber], content)
        this.elements.push(element)
    }

    @action removeElement(number: number) {
        this.elements = this.elements.filter((_el, i) => i !== number)
    }

    @computed get render() {
        return this.elements.map((el) => el.render).join("")
    }
}

export class CustomBlock implements IBlock {
    @observable title: string
    @observable type: BlockTypes
    @observable elementTypes: IType[]
    @observable elements: IElement[]
    @observable index: number
    key: string

    constructor(title: string, index: number) {
        this.title = title
        this.type = BlockTypes.Custom
        this.elementTypes = [new Type("Содержимое", (c) => c)]
        this.elements = []
        this.index = index
        this.key = this.title + "_" + this.type + "_" + this.index
    }

    @action createElement(typeNumber: number, content: string) {
        const element = new Element(this.elementTypes[typeNumber], content)
        this.elements.push(element)
    }

    @action removeElement(number: number) {
        this.elements = this.elements.filter((_el, i) => i !== number)
    }

    @computed get render() {
        return this.elements.map((el) => el.render).join("")
    }
}
