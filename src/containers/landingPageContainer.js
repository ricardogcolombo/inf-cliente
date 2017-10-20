import React, {
    Component
} from 'react';

import {
    ParallaxProvider,
    Parallax
} from 'react-scroll-parallax';
import '../styles/landingPage.css'

import HowContainer from './howContainer';
import IntentContainer from './whyContainer';
import Footer from './footerContainer';

class AboutContainer extends Component {

    
    render() {
        const Scroll = () => (
            <div className="scroll">
            <p className='titleMain'>Inflación Personalizada</p>
            <p className='descriptionMain'>Aprenda cómo la inflación impacta en su bolsillo y cómo manejar sus consumos de manera simple e inteligente.</p>
                <p className='verMas'> Bajar para ver mas</p>
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 167 299">
                    <polygon className="fill-3" points="167,73 83.5,298.9 0,73 "/>
                    <polygon className="fill-1" points="137.4,0 83.5,145.9 29.6,0 "/>
                </svg>
            </div>
        );


        const getRandomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        const C1 = {
            bounds: [134, 281],
            forms: [
                <svg viewBox="0 0 134 281">
            <text x="0" y="162" fill="red">C</text>
            </svg>,
            ],
        };

        const O2 = {
            bounds: [134, 281],
            forms: [
                <svg viewBox="0 0 134 281" version="1.1">

            <text x="0" y="162" fill="red">o</text>
            </svg>,
            ],
        };

        const N3 = {
            bounds: [134, 281],
            forms: [
                <svg viewBox="0 0 134 281" version="1.1">
            <text x="0" y="162" fill="red">n</text>
            </svg>,
            ]
        };

        const O4 = {
            bounds: [134, 281],
            forms: [
                <svg viewBox="0 0 134 281" version="1.1">
            <text x="0" y="162" fill="red">o</text>
            </svg>,
            ]
        };

        const C5 = {
            bounds: [134, 281],
            forms: [
                <svg viewBox="0 0 134 281" version="1.1">
            <text x="0" y="162" fill="red">c</text>
            </svg>,
            ],
        };

        const E6 = {
            bounds: [134, 281],
            forms: [
                <svg viewBox="0 0 134 281" version="1.1">
            <text x="0" y="162" fill="red">e</text>
            </svg>,
            ],
        };

        const R7 = {
            bounds: [134, 281],
            forms: [
                <svg viewBox="0 0 134 281" version="1.1">
            <text x="0" y="162" fill="red">r</text>
            </svg>,
            ],
        };

        const word = [C1, O2, N3, O4, C5, E6, R7];

        class Letter extends React.Component {
            render() {
                const {
                    letter
                } = this.props;
                const offset = getRandomInt(50, 150);
                const isSlower = getRandomInt(0, 1) ? true : false;
                return (
                    <div className="letter" style={{
                        width: letter.bounds[0] / 15 + 'rem',
                            height: letter.bounds[1] / 10 + 'rem',
                            'fontSize':'162px'

                    }}>
                    {letter.forms.map((X, i) => 
                        <Parallax
                        className="form"
                        key={i}                        
                        offsetYMin={-offset * (i + 1) + 'px'}
                        offsetYMax={offset * (i + 1) + 'px'}
                        slowerScrollRate={isSlower}
                        >
                        {X}
                        </Parallax>
                    )}
                    </div>
                );
            }

        }

        const Gradients = () => (
            <svg width="50" height="50" version="1.1" className="hidden">
        <defs>
            <linearGradient id="gradient-1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#6ED0DD" />
                <stop offset="100%" stopColor="#70E2B9" />
            </linearGradient>
            <linearGradient id="gradient-2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#405D86" />
                <stop offset="100%" stopColor="#384257" />
            </linearGradient>
            <linearGradient id="gradient-3" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ED6088" />
                <stop offset="100%" stopColor="#C86FA3" />
            </linearGradient>
            <linearGradient id="gradient-4" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#F07F6B" />
                <stop offset="100%" stopColor="#EFC15C" />
            </linearGradient>
            <linearGradient id="gradient-5" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#8D63B1" />
                <stop offset="100%" stopColor="#8179CB" />
            </linearGradient>
            <linearGradient id="gradient-6" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#EDD460" />
                <stop offset="100%" stopColor="#EDBC39" />
            </linearGradient>
        </defs>
    </svg>
        );
        const ParallaxWord = () => (
            <div className="word">
                {word.map((X, i) => 
                    <Letter key={i} letter={X} />
                )}
            </div>
        );

        return (
            <div className="landingPage">
            <ParallaxProvider>
                <Scroll/>
            <Gradients/>
            <HowContainer/>
            <IntentContainer/>
                <Footer/>
            </ParallaxProvider>
          </div>
        )
    }
}

export default AboutContainer;
