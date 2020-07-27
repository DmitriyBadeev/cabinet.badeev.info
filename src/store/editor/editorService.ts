import { action, observable, computed } from "mobx"
import { IBlock } from "./interfaces"
import { TextBlock, ImageBlock, StyleBlock, VideoBlock, CustomBlock } from "./entities"

export enum BlockTypes {
    Text = "Текст",
    Image = "Изображения",
    Styles = "Стили",
    Video = "Видео",
    Custom = "Кастомный блок",
}

export default class EditorService {
    @observable blocks: IBlock[] = []
    @observable currentBlock: IBlock | null = null

    blockTypes = [BlockTypes.Text, BlockTypes.Image, BlockTypes.Styles, BlockTypes.Video, BlockTypes.Custom]

    @action createBlock(type: BlockTypes, title: string) {
        if (type === BlockTypes.Text) {
            const textBlock = new TextBlock(title, this.blocks.length)
            this.blocks = [...this.blocks, textBlock]
        }

        if (type === BlockTypes.Image) {
            const imageBlock = new ImageBlock(title, this.blocks.length)
            this.blocks = [...this.blocks, imageBlock]
        }

        if (type === BlockTypes.Styles) {
            const stylesBlock = new StyleBlock(title, this.blocks.length)
            this.blocks = [...this.blocks, stylesBlock]
        }

        if (type === BlockTypes.Video) {
            const videoBlock = new VideoBlock(title, this.blocks.length)
            this.blocks = [...this.blocks, videoBlock]
        }

        if (type === BlockTypes.Custom) {
            const customBlock = new CustomBlock(title, this.blocks.length)
            this.blocks = [...this.blocks, customBlock]
        }
    }

    @action openBlock(numberBlock: number) {
        this.currentBlock = this.blocks[numberBlock]
    }

    @action removeBlock(numberBlock: number) {
        this.blocks = this.blocks.filter((_el, i) => i !== numberBlock)
    }

    @computed get render() {
        return `<div class="content">
                    ${this.blocks.map((bl) => bl.render).join("")}
                </div>`
    }
}
