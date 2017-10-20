import React, {
    Component
} from 'react';

import {
    PropTypes
} from 'prop-types'
import {
    connect
} from 'react-redux';
import 'rc-slider/assets/index.css';
import '../styles/Details.css';
import store from '../store';

import Slider from 'rc-slider';
import Footer from './footerContainer.js';
import DonutContainer from './donutContainer';

import {
    getMetricas
} from '../api/metricas';

import {
    getMetricasSuccess
} from '../actions/metricas-actions';

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

class Detailcontainer extends Component {

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
                food: this.getValueForCategorie(metricas, 'food'),
                clothes: this.getValueForCategorie(metricas, 'clothes'),
                house: this.getValueForCategorie(metricas, 'house'),
                home: this.getValueForCategorie(metricas, 'home'),
                health: this.getValueForCategorie(metricas, 'health'),
                education: this.getValueForCategorie(metricas, 'education'),
                entretainament: this.getValueForCategorie(metricas, 'entretainament'),
                other: this.getValueForCategorie(metricas, 'other'),
                transport: this.getValueForCategorie(metricas, 'transport')

            })
        }
    }
    getValueForCategorie(metricas, name) {
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
        state.metricas.categories.forEach((item)=>{
            if(item.name===category){
                item.score=value;
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
            <div className="detail">
            <div className='sliders'>

              <div className='category'>{Food}
                <Slider tipFormatter={percentFormatter} onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'food')} value={this.state.food}/>
              </div>

              <div className='category'>{Clothes}
                <Slider onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'clothes')} value={this.state.clothes} />
              </div>

              <div className='category'>{House}
                <Slider onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'house')} value={this.state.house} />
              </div>

              <div className='category'>{Home}
                <Slider onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'home')} value={this.state.home} />
              </div>

              <div className='category'>{Health}
                <Slider onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'health')} value={this.state.health} />
              </div>

              <div className='category'>{Transport}
              <Slider onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'transport')} value={this.state.transport}/>
              </div>

              <div className='category'>{Entretainament}
                <Slider onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'entretainament')} value={this.state.entretainament} />
              </div>

              <div className='category'>{Education}
                <Slider onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'education')} value={this.state.education} />
              </div>

              <div className='category'>{Other}
                <Slider onAfterChange={this.changeData} onChange={this.onSliderChange.bind(this,'other')} value={this.state.other} />
              </div>

              </div>
              <div className='charts'>
                  <DonutContainer  data={[5,10,1,3]} size={[500,500]} />
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
