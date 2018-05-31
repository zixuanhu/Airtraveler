import React from "react";

class Hero extends React.Component {
    constructor(props) {

        super(props);
        // debugger
        this.state = {
            curIndex: 0
        };
    }


    priviousImg(e, length) {
        e.preventDefault();
        if (this.state.curIndex > 0) {
            const newIndex = this.state.curIndex - 1;
            this.setState({
                curIndex: newIndex
            })
        } else {
            this.setState({
                curIndex: length - 1
            })
        }
    }

    nextImg(e, length) {

        e.preventDefault();
        if (this.state.curIndex < length - 1) {
            const newIndex = this.state.curIndex + 1;
            this.setState({
                curIndex: newIndex
            })
        } else {
            this.setState({
                curIndex: 0
            })
        }
    }

    render() {
        let imgs = []
        let length = 0
        if (this.props.heroPic) {
            imgs = this.props.heroPic
            //imgs = ["http://p4.qhimg.com/t012e241300f617cdcc.jpg", "http://upload.qianlong.com/2017/1211/1512959184473.jpg", "https://pic1.zhimg.com/v2-6c980e7306327e80ca1bc6e2ef55dbd2_1200x500.jpg"]
            length = imgs.length
        }

        const divStyle = {
            position: "relative",
            backgroundImage: "url(" + imgs[this.state.curIndex] + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 500,

        };

        return (
            <div style={divStyle} className="detail-imgs">
                <svg className="arrow" id="left-control" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 65.8"
                     enableBackground="new 0 0 50 65.8" onClick={e => this.priviousImg(e, length)}>
                    <g>
                        <path d="M42.7,5.5L12,36.2c-0.7,0.7-1.9,0.7-2.6,0l-2-2c-0.7-0.7-0.7-1.9,0-2.6L38,0.8c0.7-0.7,1.9-0.7,2.6,0l2,2
         C43.4,3.6,43.4,4.8,42.7,5.5z"/>
                        <path d="M42.7,60.3L12,29.6c-0.7-0.7-1.9-0.7-2.6,0l-2,2c-0.7,0.7-0.7,1.9,0,2.6L38,65c0.7,0.7,1.9,0.7,2.6,0l2-2
         C43.4,62.2,43.4,61,42.7,60.3z"/>
                    </g>
                </svg>


                <svg className="arrow" id="right-control" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 65.8"
                     enableBackground="new 0 0 50 65.8" onClick={e => this.nextImg(e, length)}>
                    <g>
                        <path d="M7.3,5.5L38,36.2c0.7,0.7,1.9,0.7,2.6,0l2-2c0.7-0.7,0.7-1.9,0-2.6L12,0.8c-0.7-0.7-1.9-0.7-2.6,0l-2,2
               C6.6,3.6,6.6,4.8,7.3,5.5z"/>
                        <path d="M7.3,60.3L38,29.6c0.7-0.7,1.9-0.7,2.6,0l2,2c0.7,0.7,0.7,1.9,0,2.6L12,65c-0.7,0.7-1.9,0.7-2.6,0l-2-2
               C6.6,62.2,6.6,61,7.3,60.3z"/>
                    </g>
                </svg>
            </div>
        );
    }

};
export default Hero;