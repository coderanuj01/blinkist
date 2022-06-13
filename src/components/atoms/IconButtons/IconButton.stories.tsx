import { Story } from "@storybook/react";
import React from "react";
import { IconButtonComponent } from "./IconButton";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import LoopIcon from '@mui/icons-material/Loop';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';


export default {
    title : 'Atom/IconButton',
    component : IconButtonComponent
}

type IconButtonProps = {
    color?:'inherit'| 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    children?:React.ReactNode,
    size?:"small" | "medium" | "large" | undefined
}

const Template : Story<IconButtonProps> = args => <IconButtonComponent {...args}></IconButtonComponent>

export const IconButonA = Template.bind({})
IconButonA.args = {
    color : 'primary',
    children : <KeyboardArrowDownIcon/>
}

export const IconButonB = Template.bind({})
IconButonB.args = {
    color : 'warning',
    children : <KeyboardArrowUpIcon/>
}