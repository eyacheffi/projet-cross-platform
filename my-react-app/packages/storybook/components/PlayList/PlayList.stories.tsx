import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import PlayList  from './PlayList'
const PlayListMeta: ComponentMeta<typeof PlayList> = {
    title: 'PlayList Component',
    component: PlayList,
    argTypes:{

    },
    args: {
        title: "Bảy Bảy Một Một",
        backgroundColor : '#1F1D2B',
        image : "https://play-lh.googleusercontent.com/j-MLXrudwclqIlOZxRe90kOGS744GY0spVZF2OsEnJeMMxqa6Qxu1SwLiCmjQp8gIA=w240-h480-rw" ,
        description: "Jenny Wilson",
        color:"#FFFFFF",
    }
}
export default PlayListMeta;

type PlayListStory = ComponentStory<typeof PlayList>
export const Basic : PlayListStory = (args) => <PlayList {...args} />
export const WithoutBG: PlayListStory = (args) => <PlayList {...args} />;

WithoutBG.args={
  ...WithoutBG.args,
  backgroundColor: 'transparent',
  color:"#1F1D2B",

}