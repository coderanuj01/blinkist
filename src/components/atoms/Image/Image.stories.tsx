import { Story } from "@storybook/react";
import { ImageComponent } from "./Image";
import blink from '../../../../public/Images/blink.png'
import beingBoss from '../../../../public/Images/beingBoss.png'
import BeyondEnterprenurship from '../../../../public/Images/BeyondEnterprenurship.png'
import doesnHurt from '../../../../public/Images/doesnHurt.png'
 import dropshipping from '../../../../public/Images/dropshipping.png'
 import eatBetter from '../../../../public/Images/eatBetter.png'
 import employee from '../../../../public/Images/employee.png'
 import fateFood from '../../../../public/Images/fateFood.png'
 import livesStoic from '../../../../public/Images/livesStoic.jpg'
 import loginLogo from '../../../../public/Images/loginLogo.png'
 import lonelyCentury from '../../../../public/Images/lonelyCentury.png'
 import lovingBussiness from '../../../../public/Images/lovingBussiness.png'


export default {
    title : 'Atom/Images',
    component : ImageComponent
}

type ImageProps = {
    source?: string,
    className?: string,
    onClick?: () => void;
    style?: React.CSSProperties;
}

const Template : Story<ImageProps> = args => <ImageComponent {...args}></ImageComponent>

export const blinklistLogo = Template.bind({})
blinklistLogo.args = {
    source : blink
}

export const beingBossImg = Template.bind({})
beingBossImg.args = {
    source : beingBoss
}

export const BeyondEnterprenurshipImg = Template.bind({})
BeyondEnterprenurshipImg.args = {
    source : BeyondEnterprenurship
}

export const doesnHurtImg = Template.bind({})
doesnHurtImg.args = {
    source : doesnHurt
}

export const dropshippingImg = Template.bind({})
dropshippingImg.args = {
    source : dropshipping
}

export const eatBetterImg = Template.bind({})
eatBetterImg.args = {
    source : eatBetter
}

export const employeeImg = Template.bind({})
employeeImg.args = {
    source : employee
}

export const fateFoodImg = Template.bind({})
fateFoodImg.args = {
    source : fateFood
}

export const livesStoicImg = Template.bind({})
livesStoicImg.args = {
    source : livesStoic
}

export const loginLogoImg = Template.bind({})
loginLogoImg.args = {
    source : loginLogo
}

export const lonelyCenturyImg = Template.bind({})
lonelyCenturyImg.args = {
    source : lonelyCentury
}

export const lovingBussinessImg = Template.bind({})
lovingBussinessImg.args = {
    source : lovingBussiness
}