import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import Card  from './Card'
const CardMeta: ComponentMeta<typeof Card> = {
    title: 'Card Component',
    component: Card,
    argTypes:{

    },
    args: {
        title: "Bảy Bảy Một Một",
        image : "https://play-lh.googleusercontent.com/j-MLXrudwclqIlOZxRe90kOGS744GY0spVZF2OsEnJeMMxqa6Qxu1SwLiCmjQp8gIA=w240-h480-rw" ,
        description: "Jenny Wilson",
        color:"#000000",
        borderRadius: 10,

    }
}
export default CardMeta;

type CardStory = ComponentStory<typeof Card>
export const Basic : CardStory = (args) => <Card {...args} />;
export const WithWhiteText: CardStory = (args) => <Card {...args} />;
export const WithCercleImage: CardStory = (args) => <Card {...args} />;


WithWhiteText.args={
  ...WithWhiteText.args,
  color:"#FFFFFF",

}
WithCercleImage.args={
    ...WithCercleImage.args,
    borderRadius: 250,
  
}