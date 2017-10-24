import React, {
    Component
} from 'react';

import {
    PropTypes
} from 'prop-types'

import {
    connect
} from 'react-redux';
// containers
import DonutContainer from './donut.container';
// 3rd party controls
import {
    Tab,
    Tabs,
    TabList,
    TabPanel
} from 'react-tabs';

class TabContainer extends Component {
    render() {

        let nav = this.context.t('nav');
        let evolution = nav.evolution;
        let consume = nav.consume;

        return (
            <div className='tabContainer'>

      <div className='charts'>
      <Tabs>
      <TabList className='tabsButtonList'>
      <Tab className="tabButton">{consume}</Tab>
      <Tab className="tabButton">{evolution}</Tab>
      </TabList>

      <TabPanel>
      <DonutContainer size={[500,500]} />
      </TabPanel>
      <TabPanel>
      <h2>Any content 2</h2>
      </TabPanel>
      </Tabs>
      </div>
      </div>
        );
    }
}

const mapStateToProps = function(state, ownProps) {
    return {
        metricas: state.metricas

    };
}

TabContainer.contextTypes = {
    t: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(TabContainer);
