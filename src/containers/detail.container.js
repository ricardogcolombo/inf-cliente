import React, {
    Component
} from 'react';

import {
    PropTypes
} from 'prop-types'

import {
    connect
} from 'react-redux';

// styles
import '../styles/Details.css';

// store
import store from '../store';

// containers
import SliderContainer from "./slider.container";
import Footer from './footer.container';
import DonutContainer from './donut.container';

// 3rd party controls
import {
    Tab,
    Tabs,
    TabList,
    TabPanel
} from 'react-tabs';


class Detailcontainer extends Component {
    render() {


        return (
            <div className="detail">
      <SliderContainer />
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

      <Footer className='footerDetails'/>
      </div>

        )
    }
}

const mapStateToProps = function(state, ownProps) {
    return {
        metricas: state.metricas

    };
}

Detailcontainer.contextTypes = {
    t: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(Detailcontainer);
