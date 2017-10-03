import React, {
    Component
} from 'react';

import Button from '../components/button/Button';

class ButtonContainer extends Component {
    onTouchCancel() {
        console.log("cancelScan");
        this.setState({
            trackingClick: false,
            targetElement: null
        });
    }
    onTouchEnd() {
        this.setState({
            trackingClick: false
        })
        this.props.onClickEvent(this);
    }

    onTouchMove() {
        if (!this.props.trackingClick) {
            return true;
        }

        // If the touch has moved, cancel the click tracking
        //eslint-disable-next-line
        if (this.props.targetElement !== event.target ||
            //eslint-disable-next-line
            (Math.abs(event.changedTouches[0].pageX - this.propstouchStartX) > this.props.touchBoundary ||
                //eslint-disable-next-line
                (Math.abs(event.changedTouches[0].pageY - this.props.touchStartY) > this.props.touchBoundary))) {
            this.setState({
                trackingClick: false,
                targetElement: null
            })
        }

    }
    onTouchStart() {
        console.log("startScan");
        this.setState({
            trackingClick: true,

            //eslint-disable-next-line
            targetElement: event.target,

            //eslint-disable-next-line
            touchStartX: event.targetTouches ? event.targetTouches[0].pageX : null,

            //eslint-disable-next-line
            touchStartY: event.targetTouches ? event.targetTouches[0].pageY : null
        })
        return true;
    }
    onClickPress() {
        this.onTouchStart();
        this.onTouchEnd();
    }
    render() {
        const buttonClassName = this.props.buttonClassName

        return (
            <Button className={buttonClassName} 
            onTouchCancel={this.onTouchCancel.bind(this)}
            onTouchEnd={this.onTouchEnd.bind(this)}
            onTouchMove={this.onTouchMove.bind(this)}
            onClick={this.onClickPress.bind(this)}
            text={this.props.buttonText}
            onTouchStart={this.onTouchStart.bind(this)}/>
        );
    }
};

export default ButtonContainer
