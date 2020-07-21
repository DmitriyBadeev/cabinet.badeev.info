import React from "react"
import { Typography, Divider } from "antd"
import { ContentWrapper } from "common-styles"
import styled from "styled-components"

const { Title, Paragraph } = Typography

const ConstitutionParagraph = styled(Paragraph)`
    font-size: 18px;
`

const NumberList = styled.ol`
    font-size: 18px;
    padding: 0;
    li {
        margin-left: 23px;
    }

    div {
        margin-left: 10px;
    }
`

const NumberElement = styled.li``

const Constitution: React.FC = () => {
    return (
        <ContentWrapper>
            <Title level={2}>Конституция</Title>
            <Divider orientation="left">Предисловие</Divider>
            <ConstitutionParagraph>
                Это набор базовых установок и&nbsp;принципов, которые являются основой моих убеждений и&nbsp;взглядов
                на&nbsp;жизнь. Используется для облегчения принятия решений, а&nbsp;также для вынесения своих вердиктов
                по&nbsp;поводу любых событий.
            </ConstitutionParagraph>
            <NumberList>
                <Divider orientation="left">Преамбула</Divider>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;против любого насилия, против любых убийств, против любых войн. Всегда ставлю жизнь
                        человека на&nbsp;первое место.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;всегда уважаю чужое мнение, если оно не&nbsp;противоречит пункту 1. Я&nbsp;поддерживаю
                        критику своих и&nbsp;чужих мнений и&nbsp;мировоззрений, но&nbsp;оставляю себе право
                        на&nbsp;защиту своей позиции. Я&nbsp;против дискриминации и&nbsp;оскорблений человека из-за
                        несовпадающих позиций по&nbsp;какому-то вопросу. Я&nbsp;за&nbsp;критику мнений,
                        но&nbsp;не&nbsp;за&nbsp;критику человека.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;против любых дискриминаций по&nbsp;половому, сексуальному, расовому и&nbsp;любому другому
                        признаку.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>Я&nbsp;против обмана и&nbsp;навязывания позиции.</ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;придерживаюсь научного мировоззрения. Я&nbsp;опираюсь на&nbsp;принципы и&nbsp;законы,
                        многократно проверенные научным методом и&nbsp;подтвержденные практикой человечества
                        в&nbsp;целом. Я&nbsp;не&nbsp;верю в&nbsp;приметы, гадания, предсказания, астрологию, магов,
                        волшебников, ведьм, экстрасенсов и&nbsp;во&nbsp;все остальное, что опирается только
                        на&nbsp;веру.
                    </ConstitutionParagraph>
                </NumberElement>

                <Divider orientation="left">Политика и общество</Divider>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;против любых идеологий, особенно против навязывания идеологий другим людям.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;против диктатур и&nbsp;тираний. Против репрессий и&nbsp;преследования людей
                        по&nbsp;политическим взглядам, если эти взгляды не&nbsp;нарушают пункт&nbsp;1.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;против популизма и&nbsp;обмана людей ради политических целей.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;выступаю за&nbsp;конкуренцию во&nbsp;всех сферах общества. Считаю конкуренцию двигателем
                        прогресса и&nbsp;высочайшим стимулом для развития общества.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Считаю частную собственность неприкосновенной. Я&nbsp;против грабежа, кражи, разбоя, порчи
                        чужого имущества.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Считаю любые законы обязательными для выполнения, если они не&nbsp;нарушают эту Конституцию.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        &laquo;Если вы&nbsp;не&nbsp;занимаетесь политикой, то&nbsp;политика займётся вами&raquo; — Отто
                        фон Бисмарк. Считаю для себя важным разбираться в&nbsp;политике и&nbsp;ходить на&nbsp;выборы.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;патриот своей страны. Считаю для себя важным по&nbsp;мере своих сил бороться
                        с&nbsp;её&nbsp;недостатками и&nbsp;не&nbsp;забывать про её&nbsp;достоинства.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;выступаю за&nbsp;свободу торговли, предпринимательства и&nbsp;рыночных отношений
                        в&nbsp;целом.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;выступаю за&nbsp;развитие технологий, автоматизацию труда, цифровизацию. Считаю, что
                        за&nbsp;развитием технологий будущее человечества.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;не&nbsp;поддерживаю эйджизм и&nbsp;приравниваю его к&nbsp;любой другой дискриминации.
                    </ConstitutionParagraph>
                </NumberElement>

                <Divider orientation="left">Вера и религия</Divider>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;атеист. Я&nbsp;не&nbsp;верю в&nbsp;бога или любые другие всевышние силы. Считаю
                        креационизм примитивной концепцией.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;уважительно отношусь к&nbsp;любой религии и&nbsp;к&nbsp;их&nbsp;последователям. Считаю,
                        что верить во&nbsp;что-то или нет личное дело каждого.
                    </ConstitutionParagraph>
                </NumberElement>

                <Divider orientation="left">Личность</Divider>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;выступаю за&nbsp;гармоничное и&nbsp;разностороннее развитие любой личности. Всегда ставлю
                        развитие своей личности на&nbsp;первое место.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;выступаю за&nbsp;разумный индивидуализм. Человек должен надеяться только на&nbsp;себя,
                        но&nbsp;не&nbsp;на&nbsp;внешние силы в&nbsp;лице государства, родителей, бога
                        и&nbsp;кого&nbsp;бы то&nbsp;ни&nbsp;было.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Образование для меня является важнейшим элементом в&nbsp;развитии личности.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;поддерживаю неприкосновенность личности. Я&nbsp;считаю недопустимым нарушение личного
                        пространства человека и&nbsp;незаконное лишение его свободы.
                    </ConstitutionParagraph>
                </NumberElement>
                <NumberElement>
                    <ConstitutionParagraph>
                        Я&nbsp;не&nbsp;поддерживаю употребление веществ, которые искусственно вызывают всплеск гормонов
                        удовольствия. Считаю, что привыкание, вызванное этими веществами, губительно сказывается
                        на&nbsp;личности.
                    </ConstitutionParagraph>
                </NumberElement>
            </NumberList>
            <ConstitutionParagraph type="secondary">Дата первой публикации: 21 июля 2020 г.</ConstitutionParagraph>
        </ContentWrapper>
    )
}

export default Constitution
