import React, { PropTypes } from 'react'
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap/lib';
import { map } from 'lodash';
import styles from './styles.scss';

class Tabs extends React.Component {
	constructor(props) {
		super();

		const { tabHeader } = props;

		this.state = {
			selectedKey: tabHeader[0].eventKey
		}

		this._onChangeTab = this._onChangeTab.bind(this);
	}

	_onChangeTab(selectedKey) {
		this.setState({
			selectedKey
		});
	}
	
	render() {
		const { tabHeader, tabContent } = this.props;
		const { selectedKey } = this.state;

		return (
			<Tab.Container id="left-tabs-example" defaultActiveKey={ selectedKey }>
		    <Row className="clearfix">
		      <Col className={styles.wrapper}>
		        <Nav bsStyle="pills" stacked onSelect={this._onChangeTab}>
		          {
		          	map(tabHeader, (tab) => 
		          		<NavItem key={ 'header' + tab.eventKey } eventKey={ tab.eventKey } className={ selectedKey === tab.eventKey ? styles['li-item-active'] : styles['li-item'] }>
				            { tab.title }
				          </NavItem>
		          	)
		          }
		        </Nav>
		      </Col>
		      <Col>
		        <Tab.Content animation>
		          {
		          	map(tabContent, (tab) => 
		          		<Tab.Pane key={ 'content' + tab.eventKey } eventKey={ tab.eventKey }>
				            { tab.content }
				          </Tab.Pane>
		          	)
		          }
		        </Tab.Content>
		      </Col>
		    </Row>
		  </Tab.Container>
		);
	}
};

Tabs.propTypes = {
	tabHeader: PropTypes.arrayOf(PropTypes.shape({
		eventKey: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired, 
	})).isRequired,
	tabContent: PropTypes.arrayOf(PropTypes.shape({
		eventKey: PropTypes.string.isRequired,
		content: PropTypes.any
	})).isRequired
}

//http://stackoverflow.com/a/32327205

export default Tabs;