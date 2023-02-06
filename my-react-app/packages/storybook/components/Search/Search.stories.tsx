import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import Search  from './Search'
const SearchMeta: ComponentMeta<typeof Search> = {
    title: 'Search Component',
    component: Search,
    argTypes:{
        handleSearch: { action: "pressed the button" },
    },
    args: {
        value: "e",
        placeholder: "search",
        backgroundColor: '#252836',
        testColor:'#FFFFFF',
        borderColor: 'transparent',
    }
}
export default SearchMeta;

type SearchStory = ComponentStory<typeof Search>
export const Basic : SearchStory = (args) => <Search {...args} />
export const SearchWithBorder : SearchStory = (args) => <Search {...args} />
SearchWithBorder.args = {
    ...SearchWithBorder.args,
    backgroundColor: 'transparent' ,
    borderColor: '#252836',
    testColor:'#252836'
}