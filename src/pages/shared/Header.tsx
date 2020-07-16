import React from "react"
import { Layout, Button } from "antd"
import styled, { css } from "styled-components"
import useStore from "store/useStore"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import { observer } from "mobx-react"

const HeaderWrapper = styled(Layout.Header)`
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Icon = css`
    font-size: 18px;
    line-height: 64px;
    padding: 0 10px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
        color: ${(props) => props.theme.primary};
    }
`

const MenuUnfold = styled(MenuUnfoldOutlined)`
    ${Icon}
`

const MenuFold = styled(MenuFoldOutlined)`
    ${Icon}
`

const Header: React.FC = observer(() => {
    const { NavStore, AuthService } = useStore()

    return (
        <HeaderWrapper>
            {React.createElement(NavStore.isMenuCollapsed ? MenuUnfold : MenuFold, {
                onClick: () => NavStore.toggleMenu(),
            })}
            {AuthService.isAuthenticated && <Button onClick={AuthService.signout}>Выйти</Button>}
        </HeaderWrapper>
    )
})

export default Header
