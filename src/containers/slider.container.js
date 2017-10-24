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
import '../styles/sliders.css';
import 'rc-slider/assets/index.css';

// store and api functions
import store from '../store';

import {
  getMetricas
} from '../api/metricas';

import {
  getMetricasSuccess
} from '../actions/metricas-actions';

// containers
import Button from './Button.container'

// 3rd party
import Slider from 'rc-slider';

const initialState = {
  metricas: [],
  food: 0,
  clothes: 0,
  house: 0,
  home: 0,
  health: 0,
  education: 0,
  entretainament: 0,
  other: 0,
  transport: 0
};

class SliderContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      metricas: null
    }
  }

  componentDidMount() {
    this.state = initialState;
    getMetricas();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.metricas) {
      let metricas = nextProps.metricas;
      this.state.other
      this.setState({
        metricas: metricas,
        food: this.getValueForCategory(metricas, 'food'),
        clothes: this.getValueForCategory(metricas, 'clothes'),
        house: this.getValueForCategory(metricas, 'house'),
        home: this.getValueForCategory(metricas, 'home'),
        health: this.getValueForCategory(metricas, 'health'),
        education: this.getValueForCategory(metricas, 'education'),
        entretainament: this.getValueForCategory(metricas, 'entretainament'),
        other: this.getValueForCategory(metricas, 'other'),
        transport: this.getValueForCategory(metricas, 'transport')

      })
    }
  }
  getValueForCategory(metricas, name) {
    let value = 0;
    if (metricas) {
      let filtered = metricas.categories.filter(item => item.name.toUpperCase() === name.toUpperCase())
      value = parseInt(filtered[0].score, 10);
    }
    return value;
  }
  onSliderChange = (category, value) => {
    let state = this.state;
    state[category] = value
    state.metricas.categories.forEach((item) => {
      if (item.name === category) {
        item.score = value;
      }
    });
    store.dispatch(getMetricasSuccess(this.state.metricas))
  }
  render() {
    let categories = this.context.t('categories');

    let Food = categories.Food;
    let Clothes = categories.Clothes;
    let House = categories.House;
    let Home = categories.Home;
    let Health = categories.Health;
    let Transport = categories.Transport;
    let Entretainament = categories.Entretainament;
    let Education = categories.Education;
    let Other = categories.Other;

    function percentFormatter(v) {
      return `${v} %`;
    }

    return (

      <div className='sliders'>
          <div className='category '>{Food}
          <div className='categoryName'>
                <Slider className='icon Food' tipFormatter={percentFormatter} onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'food')} value={this.state.food}/>
          </div>
          </div>
              <div className='category'>
          <div className='categoryName'>{Clothes}
                <Slider className='icon Clothes' onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'clothes')} value={this.state.clothes} />
              </div>
          </div>
              <div className='category '>{House}
          <div className='categoryName '>
                <Slider className='icon House' onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'house')} value={this.state.house} />
              </div>
          </div>
              <div className='category'>{Home}
          <div className='categoryName'>
                <Slider className='icon Home' onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'home')} value={this.state.home} />
              </div>
          </div>
              <div className='category '>
          <div className='categoryName'>{Health}
                <Slider className='icon Health' onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'health')} value={this.state.health} />
              </div>
          </div>
              <div className='category '>
          <div className='categoryName'>{Transport}
              <Slider className='icon Transport' onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'transport')} value={this.state.transport}/>
              </div>
          </div>
              <div className='category '>
          <div className='categoryName'>{Entretainament}
                <Slider className='icon Entretainament' onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'entretainament')} value={this.state.entretainament} />
              </div>
            </div>
              <div className='category '>
          <div className='categoryName'>{Education}
                <Slider className='icon Education' onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'education')} value={this.state.education} />
              </div>
          </div>
              <div className='category '>
          <div className='categoryName'>{Other}
                <Slider className='icon Other' onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'other')} value={this.state.other} />
              </div>
        </div>
        <Button className='buttonSaveSliders'/>
      </div>
    );
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    metricas: state.metricas

  };
}

SliderContainer.contextTypes = {
  t: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(SliderContainer);
