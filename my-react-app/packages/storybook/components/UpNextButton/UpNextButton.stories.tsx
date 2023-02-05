import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import React from 'react'
import UpNextButton from './UpNextButton'


const UpNextButtonMeta: ComponentMeta<typeof UpNextButton> = {
    title: "Up Next Button project Music",
    component: UpNextButton,
    argTypes:{
       type:{
        options: ['link', 'button'],
        control: { type: 'radio' },
       }
    },
    args: {
        backgroundColor: '#2F3142',
        textColor: '#C4C4C4',
        borderRadius: 30,
        text: 'Up Next',
        type: 'button'
    }
}

export default UpNextButtonMeta;

type UpNextButtonStory = ComponentStory<typeof UpNextButton>


export const ButtonWithBackground : UpNextButtonStory = (args) => <UpNextButton {...args} />
export const ButtonLink : UpNextButtonStory = (args) => <UpNextButton {...args} />
ButtonLink.args = {
    ...ButtonWithBackground.args,
    type:'link',
    textColor : '#C4C4C4'
}