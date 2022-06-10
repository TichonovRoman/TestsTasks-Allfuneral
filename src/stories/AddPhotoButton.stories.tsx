import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import AddPhotoButton
  from "../components/Header/Organization/MainPage/InfoBlock/PhotosBlock/AddPhotoButton/AddPhotoButton";
import {ReduxStoreProviderDecorator} from "./decorators/Decorator";

export default {
  title: 'PhotosBlock/AddPhotoButton',
  component: AddPhotoButton,
  //передаем хуки в компоненту:
  decorators: [ReduxStoreProviderDecorator],
} as ComponentMeta<typeof AddPhotoButton>;


const Template: ComponentStory<typeof AddPhotoButton> = (args) => <AddPhotoButton/>;

export const AddPhotoButtonExample = Template.bind({});
AddPhotoButtonExample.args = {
  // addPhoto: action("Button clicked")
};

