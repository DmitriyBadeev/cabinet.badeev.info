import { observable, action } from "mobx"

export default class NavStore {
    @observable isMenuCollapsed = false

    @action toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed
    }
}
