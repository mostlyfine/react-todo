import { shallow, mount, render } from 'enzyme';

import React from 'react';
import Todo from '../src/Todo';
import InputForm from '../src/InputForm';
import ItemList from '../src/ItemList';

describe('<Todo>', () => {
  it('子コンポーネントが存在すること', () => {
    const wrapper = shallow(<Todo />);
    expect(wrapper.find(InputForm).length).toBe(1);
    expect(wrapper.find(ItemList).length).toBe(1);
  });
});
