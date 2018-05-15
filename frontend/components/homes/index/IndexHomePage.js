import React from "react";
import classnames from "classnames";

class indexhomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            homes: [],
            errors: {}
        };
    }

    componentWillMount() {
        this.props.homeList();
    }

    keyDown(e) {
        const keycode = e.which; //取得对应的键值（数字）

        if (keycode === 13) {
            this.search(e);
        }
    }

    search(e) {
        e.preventDefault();
        this.props.searchhomes(this.state.keyword);
    }

    updateForm(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    homeCards() {
        let homeCards = [];
        for (let i = 0; i < this.props.homes.length; i++) {
            const home = this.props.homes[i];
            homeCards.push(
                <div
                    key={i}
                    className="col-sm-6 col-md-4 "
                    onClick={() =>
                        this.context.router.push(`/homes/${home.id}`)
                    }
                >
                    <div className="caption gallery-card ">
                        <img
                            className="homeimg"
                            src={
                                home.img[0] ||
                                "http://pic.uzzf.com/up/2017-3/14901722897158766.jpg"
                            }
                        />

                        <br/>
                        <p className="hometitle">ID: {home.id} </p>
                        <p className="hometitle">{home.title} </p>
                        <p className="homeprice">${home.price}</p>
                        <hr/>
                    </div>
                </div>
            );
        }
        return homeCards;
    }

    searchBar() {
        return (

            <div className="row">
                <div className="col-xs-6 col-md-4">
                    <div className="input-group"
                         onKeyDown={e => this.keyDown(e)}>
                        <input type="text"
                               name="keyword"
                               className="form-control"
                               placeholder="Search"
                               id="txtSearch"
                               value={this.state.keyword}
                               onChange={e => this.updateForm(e)}/>

                        <div className="input-group-btn">
                            <button className="btn btn-primary" type="submit" onClick={e => this.search(e)}>
                                <span className="glyphicon glyphicon-search"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );


    }

    render() {
        return (
            <div>
                <div className="container cards">

                    {this.searchBar()}
                    {this.homeCards()}
                </div>
            </div>
        );
    }
}

indexhomePage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default indexhomePage;
