import React from "react";
import {Pagination} from "react-bootstrap";
import OptionFieldGroup from "../../common/OptionFieldGroup";

import propertyTypeOptions from "../asset/propertytype/propertytype";
import roomTypeOptions from "../asset/roomtype/roomtype";
import guestAvailabilityOptions from "../asset/availbility/guest";
import roomsAvailabilityOptions from "../asset/availbility/room";
import bedsAvailabilityOptions from "../asset/availbility/beds";
import bathAvailabilityOptions from "../asset/availbility/bath";
import setupForGuestOptions from "../asset/setup/guestsetup";
import targetOptions from "../asset/target/target";

class indexhomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            homes: [],
            pagination: {},
            activePage: 1,
            errors: {},
            price: 500,
            destination: "",
            property_type: "",
            room_type: "",
            searchingkeyword: "",
            guest_availability: "",
            rooms_availability: "",
            beds_availability: "",
            bath_availability: "",
            setup_for_guest: "",
            target: ""
        };
    }

    componentWillMount() {
        this.props.searchhomes(this.state).then(() => {
            this.setState({
                homes: this.props.homes,
                pagination: this.props.homes.pagination
            });
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
        searchinfo.price = this.state.price;
        searchinfo.keyword = this.state.keyword;
        searchinfo.guest_availability = this.state.guest_availability;
        searchinfo.rooms_availability = this.state.rooms_availability;
        searchinfo.beds_availability = this.state.beds_availability;
        searchinfo.bath_availability = this.state.bath_availability;
        searchinfo.room_type = this.state.room_type;
        searchinfo.property_type = this.state.property_type;
        searchinfo.setup_for_guest = this.state.setup_for_guest;
        searchinfo.target = this.state.target;
        searchinfo.destination = this.state.destination;
        searchinfo.activePage = 1;
        this.props.searchhomes(searchinfo).then(() => {
            this.setState({
                homes: this.props.homes,
                pagination: this.props.homes.pagination,
                searchingkeyword: this.state.keyword,
                activePage: 1
            });
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

        this.state.activePage = e.target.text;

        let searchinfo = {};
        searchinfo.keyword = this.state.searchingkeyword;
        searchinfo.price = this.state.price
        searchinfo.guest_availability = this.state.guest_availability;
        searchinfo.rooms_availability = this.state.rooms_availability;
        searchinfo.beds_availability = this.state.beds_availability;
        searchinfo.bath_availability = this.state.bath_availability;
        searchinfo.room_type = this.state.room_type;
        searchinfo.property_type = this.state.property_type;
        searchinfo.setup_for_guest = this.state.setup_for_guest;
        searchinfo.target = this.state.target;
        searchinfo.destination = this.state.destination;
        searchinfo.activePage = this.state.activePage;
        this.props.searchhomes(searchinfo).then(() => {
            this.setState({
                homes: this.props.homes,
                pagination: this.props.homes.pagination
            });
        });
    }

    pagination() {
        let pages = [];

        const pageCount = this.state.pagination.pageCount;
        const activePage = this.state.activePage;
        pages.push(<Pagination.Prev key="prev"/>);

        if (pageCount <= 8) {
            for (let i = 1; i <= pageCount; i++) {
                if (i === activePage) {
                    pages.push(
                        <Pagination.Item key={i} name="activePage" active>
                            {i}
                        </Pagination.Item>
                    );
                } else
                    pages.push(
                        <Pagination.Item
                            key={i}
                            name="activePage"
                            onClick={e => this.updatePage(e)}
                        >
                            {i}
                        </Pagination.Item>
                    );
            }
        }
        if (pageCount > 8) {
            if (activePage < 4) {
                for (let i = 1; i < 5; i++) {
                    if (i === activePage) {
                        pages.push(
                            <Pagination.Item key={i} name="activePage" active>
                                {i}
                            </Pagination.Item>
                        );
                    } else
                        pages.push(
                            <Pagination.Item
                                key={i}
                                name="activePage"
                                onClick={e => this.updatePage(e)}
                            >
                                {i}
                            </Pagination.Item>
                        );
                }
                pages.push(<Pagination.Ellipsis key="endellipsis"/>);
                pages.push(
                    <Pagination.Item
                        key={pageCount}
                        name="activePage"
                        onClick={e => this.updatePage(e)}
                    >
                        {pageCount}
                    </Pagination.Item>
                );
            } else if (activePage > pageCount - 4) {
                pages.push(
                    <Pagination.Item
                        key={1}
                        name="activePage"
                        onClick={e => this.updatePage(e)}
                    >
                        {1}
                    </Pagination.Item>
                );
                pages.push(<Pagination.Ellipsis key="headellipsis"/>);
                for (let i = pageCount - 4; i <= pageCount; i++) {
                    if (i === activePage) {
                        pages.push(
                            <Pagination.Item key={i} name="activePage" active>
                                {i}
                            </Pagination.Item>
                        );
                    } else
                        pages.push(
                            <Pagination.Item
                                key={i}
                                name="activePage"
                                onClick={e => this.updatePage(e)}
                            >
                                {i}
                            </Pagination.Item>
                        );
                }
            } else {
                pages.push(
                    <Pagination.Item
                        key={1}
                        name="activePage"
                        onClick={e => this.updatePage(e)}
                    >
                        {1}
                    </Pagination.Item>
                );
                pages.push(<Pagination.Ellipsis key="headellipsis"/>);
                for (let i = activePage - 2; i <= activePage + 2; i++) {
                    if (i === activePage) {
                        pages.push(
                            <Pagination.Item key={i} name="activePage" active>
                                {i}
                            </Pagination.Item>
                        );
                    } else
                        pages.push(
                            <Pagination.Item
                                key={i}
                                name="activePage"
                                onClick={e => this.updatePage(e)}
                            >
                                {i}
                            </Pagination.Item>
                        );
                }
                pages.push(<Pagination.Ellipsis key="endellipsis"/>);
                pages.push(
                    <Pagination.Item
                        key={pageCount}
                        name="activePage"
                        onClick={e => this.updatePage(e)}
                    >
                        {pageCount}
                    </Pagination.Item>
                );
            }
        }

        pages.push(<Pagination.Next key="next"/>);
        return <Pagination>{pages}</Pagination>;
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

            <div className="search-bar">
                <div
                    className="input-group"
                    onKeyDown={e => this.keyDown(e)}
                >
                    <input
                        type="text"
                        name="keyword"
                        className="form-control"
                        placeholder="Search"
                        id="txtSearch"
                        value={this.state.keyword}
                        onChange={e => this.updateForm(e)}
                    />

                    <div className="input-group-btn">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={e => this.search(e)}
                        >
                            <span className="glyphicon glyphicon-search"/>
                        </button>
                    </div>
                </div>
                <br/>
                <div>
                    <label className="control-label">Destination</label>
                    <input
                        className="form-control"
                        type="text"
                        name="destination"
                        placeholder="destination"
                        value={this.state.destination}
                        onChange={e => this.updateForm(e)}
                    />
                </div>
                <br/>
                <div className="slidecontainer">
                    <input type="range"
                           min="1"
                           max="500"
                           name="price"
                           onChange={e => {
                               this.updateForm(e)
                           }}
                           value={this.state.price}
                           className="slider" id="myRange"/>
                </div>
                <label>max price: ${this.state.price}/day</label>

                <br/>
                <OptionFieldGroup
                    label="Property Type"
                    name="property_type"
                    value={this.state.property_type}
                    onChange={e => this.updateForm(e)}
                    error={this.state.errors.property_type}
                    options={propertyTypeOptions}
                />
                <OptionFieldGroup
                    label="Room Type"
                    name="room_type"
                    value={this.state.room_type}
                    onChange={e => this.updateForm(e)}
                    error={this.state.errors.room_type}
                    options={roomTypeOptions}
                />
                <OptionFieldGroup
                    label="Guest Number"
                    name="guest_availability"
                    value={this.state.guest_availability}
                    onChange={e => this.updateForm(e)}
                    error={this.state.errors.guest_availability}
                    options={guestAvailabilityOptions}
                />
                <OptionFieldGroup
                    label="Room number"
                    name="rooms_availability"
                    value={this.state.rooms_availability}
                    onChange={e => this.updateForm(e)}
                    error={this.state.errors.rooms_availability}
                    options={guestAvailabilityOptions}
                />
                <OptionFieldGroup
                    label="Beds number"
                    name="beds_availability"
                    value={this.state.beds_availability}
                    onChange={e => this.updateForm(e)}
                    error={this.state.errors.beds_availability}
                    options={guestAvailabilityOptions}
                />
                <OptionFieldGroup
                    label="Baths number"
                    name="bath_availability"
                    value={this.state.bath_availability}
                    onChange={e => this.updateForm(e)}
                    error={this.state.errors.bath_availability}
                    options={guestAvailabilityOptions}
                />
                <OptionFieldGroup
                    label="Setup Plan"
                    name="setup_for_guest"
                    value={this.state.setup_for_guest}
                    onChange={e => this.updateForm(e)}
                    error={this.state.errors.setup_for_guest}
                    options={setupForGuestOptions}
                />
                <OptionFieldGroup
                    label="You are"
                    name="target"
                    value={this.state.target}
                    onChange={e => this.updateForm(e)}
                    error={this.state.errors.target}
                    options={targetOptions}
                />
            </div>

        );
    }

    render() {
        return (
            <div style={{minWidth: "1200px"}} className='row'>
                <div className="col-md-3 col-sm-3 column" style={{left: '10'}}>{this.searchBar()}</div>
                <div
                    className="col-md-9 col-sm-9 column"
                    style={{minWidth: "900px", maxWidth: '1200px'}}
                >
                    {this.homeCards()}
                </div>
                <div style={{clear: "both"}}> {this.pagination()}</div>
            </div>
        );
    }
}

indexhomePage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default indexhomePage;
