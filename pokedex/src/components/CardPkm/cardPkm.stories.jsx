import React from 'react';

import { CardPkm } from './index';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'CardPkm',
  component: CardPkm,
};

const Template = (args) => <CardPkm {...args}/>

export const CardDefault = Template.bind({});
