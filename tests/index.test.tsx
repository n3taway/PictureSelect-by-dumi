import React from 'react';
import { mount } from 'enzyme';
import PictureSelect from '../src';

const pictures = [
  {
    id: '1',
    name: 'foo',
    url:
      'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ',
  },
  {
    id: '2',
    name: 'foo',
    url:
      'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ',
  },
  {
    id: '3',
    name: 'foo',
    url:
      'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ',
  },
];

class TestPictureSelect extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { value: ['1', '2'] };
  }

  render() {
    const { value } = this.state;
    return (
      <PictureSelect
        pictures={pictures}
        value={value}
        onChange={async value => this.setState({ value })}
      />
    );
  }
}

describe('PictureSelect', () => {
  it('render-basic', () => {
    const value = [];
    const wrapper = mount(<PictureSelect pictures={pictures} value={value} />);
    expect(wrapper.find('.input-checkbox')).toHaveLength(3);
  });
  it('checkbox-checked-status', () => {
    const value = ['1', '2'];
    const wrapper = mount(<PictureSelect pictures={pictures} value={value} />);
    expect(wrapper.find('.input-checkbox-checked')).toHaveLength(2);
  });
  it('item-click-status', () => {
    const wrapper = mount(<TestPictureSelect />);
    wrapper
      .find('img')
      .at(2) //元素集合索引
      .simulate('click');
    expect(wrapper.find('.input-checkbox-checked')).toHaveLength(3);
    wrapper
      .find('img')
      .at(2)
      .simulate('click');
    expect(wrapper.find('.input-checkbox-checked')).toHaveLength(2);
  });
  it('select-all-click-status', () => {
    const wrapper = mount(<TestPictureSelect />);
    wrapper.find('.select-all-input').simulate('change');
    // 通过组件内部状态测试
    expect(wrapper.state('value')).toHaveLength(3);
    // 通过dom节点测试
    expect(wrapper.find('.input-checkbox-checked')).toHaveLength(3);

    wrapper.find('.select-all-input').simulate('change');
    // 通过组件内部状态测试
    expect(wrapper.state('value')).toHaveLength(0);
    // 通过dom节点测试
    expect(wrapper.find('.input-checkbox-checked')).toHaveLength(0);
  });
});
