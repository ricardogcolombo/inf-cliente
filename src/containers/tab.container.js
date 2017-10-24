import React, {
    Component
} from 'react';

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
        return (
            <div className='tabContainer'>

      <div className='charts'>
      <Tabs>
      <TabList className='tabsButtonList'>
      <Tab className="tabButton">Consumos</Tab>
      <Tab className="tabButton">Title 2</Tab>
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

export default TabContainer;
