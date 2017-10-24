import React, {
  Component
} from 'react';

import {
  PropTypes
} from 'prop-types'

import {
  connect
} from 'react-redux';

import '../styles/Details.css';

import SliderContainer from "./sliderContainer";
import store from '../store';
import Footer from './footerContainer.js';
import DonutContainer from './donutContainer';

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
