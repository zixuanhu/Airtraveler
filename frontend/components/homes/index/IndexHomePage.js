import React from "react";
import {Pagination} from "react-bootstrap";

class indexhomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            homes: [],
            pagination: {},
            activePage: 1,
            errors: {},
            searchingkeyword: ""
        };
    }

    componentWillMount() {
        let searchinfo = {};
        searchinfo.keyword = "";
        searchinfo.activePage = 1;
        this.props.searchhomes(searchinfo).then(() => {
            this.setState({
                homes: this.props.homes,
                pagination: this.props.homes.pagination
            })
        });
    }

    keyDown(e) {
        const keycode = e.which; //取得对应的键值（数字）

        if (keycode === 13) {
            this.search(e);
        }
    }

    search(e) {
        e.preventDefault();
        let searchinfo = {};
        searchinfo.keyword = this.state.keyword;
        searchinfo.activePage = 1;
        this.props.searchhomes(searchinfo).then(() => {
            this.setState({
                homes: this.props.homes,
                pagination: this.props.homes.pagination,
                searchingkeyword: this.state.keyword,
                activePage: 1
            })
        });
    }

    updateForm(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updatePage(e) {

        e.preventDefault();
        this.setState({
            [e.target.name]: parseInt(e.target.text)
        });

        let searchinfo = {};
        searchinfo.keyword = this.state.searchingkeyword;
        searchinfo.activePage = parseInt(e.target.text);
        this.props.searchhomes(searchinfo).then(() => {
            this.setState({
                homes: this.props.homes,
                pagination: this.props.homes.pagination
            })
        });


    }

    pagination() {
        let pages = [];

        const pageCount = this.state.pagination.pageCount;
        const activePage = this.state.activePage;
        //debugger
        pages.push(
            <Pagination.Prev key="prev"/>
        )

        if (pageCount <= 8) {

            for (let i = 1; i <= pageCount; i++) {
                if (i === activePage) {
                    pages.push(
                        <Pagination.Item key={i} name="activePage"
                                         active>{i}</Pagination.Item>);
                } else (
                    pages.push(
                        <Pagination.Item key={i} name="activePage"
                                         onClick={e => this.updatePage(e)}>{i}</Pagination.Item>));
            }
        }
        if (pageCount > 8) {

            if (activePage < 4) {
                for (let i = 1; i < 5; i++) {
                    if (i === activePage) {
                        pages.push(
                            <Pagination.Item key={i} name="activePage"
                                             active>{i}</Pagination.Item>);
                    } else (
                        pages.push(
                            <Pagination.Item key={i} name="activePage"
                                             onClick={e => this.updatePage(e)}>{i}</Pagination.Item>));
                }
                pages.push(<Pagination.Ellipsis key="endellipsis"/>);
                pages.push(
                    <Pagination.Item key={pageCount} name="activePage"
                                     onClick={e => this.updatePage(e)}>{pageCount}</Pagination.Item>);
            }
            else if (activePage > pageCount - 4) {

                pages.push(
                    <Pagination.Item key={1} name="activePage" onClick={e => this.updatePage(e)}>{1}</Pagination.Item>
                )
                pages.push(<Pagination.Ellipsis key="headellipsis"/>);
                for (let i = pageCount - 4; i <= pageCount; i++) {
                    if (i === activePage) {
                        pages.push(
                            <Pagination.Item key={i} name="activePage"
                                             active>{i}</Pagination.Item>);
                    } else (
                        pages.push(
                            <Pagination.Item key={i} name="activePage"
                                             onClick={e => this.updatePage(e)}>{i}</Pagination.Item>));
                }

            } else {
                pages.push(
                    <Pagination.Item key={1} name="activePage" onClick={e => this.updatePage(e)}>{1}</Pagination.Item>
                )
                pages.push(<Pagination.Ellipsis key="headellipsis"/>);
                for (let i = activePage - 2; i <= activePage + 2; i++) {
                    if (i === activePage) {
                        pages.push(
                            <Pagination.Item key={i} name="activePage"
                                             active>{i}</Pagination.Item>);
                    } else (
                        pages.push(
                            <Pagination.Item key={i} name="activePage"
                                             onClick={e => this.updatePage(e)}>{i}</Pagination.Item>));
                }
                pages.push(<Pagination.Ellipsis key="endellipsis"/>);
                pages.push(
                    <Pagination.Item key={pageCount} name="activePage"
                                     onClick={e => this.updatePage(e)}>{pageCount}</Pagination.Item>
                )
            }


        }

        pages.push(<Pagination.Next key="next"/>)
        return (

            <Pagination>
                {pages}
            </Pagination>
        );
    }

    homeCards() {
        let homeCards = [];
        for (let i = 0; i < this.state.homes.length; i++) {
            const home = this.state.homes[i];
            homeCards.push(
                <div
                    key={i}
                    className="col-sm-6 col-md-4 "
                    onClick={() =>
                        this.context.router.push(`/homes/${home.id}`)
                    }
                >
                    <div className="card">
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
                    {this.pagination()}
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
