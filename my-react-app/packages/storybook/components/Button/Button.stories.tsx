import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { MyButton } from "./Button";

const MyButtonMeta: ComponentMeta<typeof MyButton> = {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
    backgroundColor : 'red',
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof MyButton>;

export const Basic: MyButtonStory = (args) => <MyButton {...args} />;
export const WithoutBG: MyButtonStory = (args) => <MyButton {...args} />;

WithoutBG.args={
  ...WithoutBG.args,
  backgroundColor: 'transparent'

}