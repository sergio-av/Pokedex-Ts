import React from 'react';

import { Search } from './index';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Search',
  component: Search,
};

const Template = (args) => <Search {...args}/>

export const CardDefault = Template.bind({});