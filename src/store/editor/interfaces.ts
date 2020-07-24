import { BlockTypes } from "./editorService"

export interface IBlock {
    index: number
    key: string
    title: string
    type: BlockTypes
    elementTypes: IType[]
    elements: IElement[]
    render: string
    createElement: (typeNumber: number, content: string) => void
    removeElement: (number: number) => void
}

export interface IType {
    type: string
    renderFC: (content: string) => string
}

export interface IElement {
    type: IType | null
    content: string
    render: string
}
