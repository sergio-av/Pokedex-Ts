import React from 'react';

import { Sort } from './index';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Sort',
  component: Sort,
};

const Template = (args) => <Sort {...args}/>

export const Letters = Template.bind({});
export const Numbers = Template.bind({});




