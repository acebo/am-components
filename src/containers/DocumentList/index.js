import React from 'react';
import Tabs from 'components/Tabs';
import Button from 'components/controls/Button';

class DocumentList extends React.Component {
	render () {
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
						<label htmlFor="form-group" style={{padding: '2rem 2rem 0', fontSize: '1.1rem'}}>
							Content : <span className="text-primary">เอกสารที่ต้องใช้</span>
						</label>
						<Button
              theme='error-text'
              size='small'>
              ปุ่ม
            </Button>
					</div>
				},
				{
					eventKey: 'second',
					content: <div>
						<label htmlFor="form-group" style={{padding: '2.5rem 1rem 0 2rem', fontSize: '1.1rem'}}>
							Content : <span className="text-primary">เอกสารเพิ่มเติม</span>
						</label>
					</div>
				}
			]
		}

		return (
			<Tabs { ...propsTabs }  />
		);
	}
};

export default DocumentList;