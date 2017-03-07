import React from 'react';
import { shallow } from 'enzyme';
import Tabs from './../components/Tabs';
import { Tab, NavItem } from 'react-bootstrap/lib';

describe('Tabs', () => {
	const propsTabs = {
		tabHeader: [
			{
				eventKey: 'first',
				title: 'เอกสารที่ต้องใช้'
			},
			{
				eventKey: 'second',
				title: 'เอกสารเพิ่มเติม'
			}
		],
		tabContent: [
			{
				eventKey: 'first',
				content: <div>
					<label htmlFor="form-group">
						test
					</label>
				</div>
			},
			{
				eventKey: 'second',
				content: 'เอกสารเพิ่มเติม'
			}
		]
	};

	const div = shallow(<Tabs { ...propsTabs } />);

	it('should render two headers (`NavItem`)', () => {
	  expect(div.find(NavItem).length).toEqual(2);
	});

	it('should render two contents (`Tab.Pane`)', () => {
	  expect(div.find(Tab.Pane).length).toEqual(2);
	});

});