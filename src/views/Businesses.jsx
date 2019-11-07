import React, { Component } from 'react';
import businessList from '../businesses';
import { Link } from 'react-router-dom';
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar.jsx";
import '../assets/styles/general.scss';

export class Businesses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
    }



    render() {
        const allBusinesses = [];
        let bizList = businessList;
        for (const [index, item] of bizList.entries()) {
            allBusinesses.push(
                <tr key={index} className="each-row">
                    <td className="name">
                        <Link to={`/business-details/${item._id}`}>
                            {item.name}
                        </Link>
                    </td>
                    <td>{item.email ? item.email : 'not available'}</td>
                    <td>{item.phone ? item.phone : 'not available'}</td>
                    <td>{item.category}</td>
                    <td>{item.website}</td>
                </tr>
            )
        }
        return (
            <>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2 padding-0">
                            <div className="side-bar">
                                <Sidebar />
                            </div>
                        </div>
                        <div className="col-xl-10 padding-0">
                            <div className="main-container">
                                <div className="header">
                                    <Header />
                                </div>
                                <div className="contents-cover p-5">

                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className={this.state.loading ? 'data-loading' : 'hide'}>
                                                <img src={require("../assets/images/icons/spinner.svg")} className='loader-img' alt="+" />
                                            </div>
                                            <div className="table-menu mt-2 mb-2">
                                                <button className="button button-primary add-new" onClick={this.toAddNew}>Add new business </button>
                                                <div className="search-form">
                                                    <form className="form-cover">
                                                        <input type="text" name="searchQuery" placeholder="Search" id="searchQuery"
                                                            onChange={e => this.setState({ searchQuery: e.target.value })} />
                                                        <div className="icon-cover" onClick={this.searchLawyers}>
                                                            <img src={require("../assets/images/icons/table-search.svg")} alt="" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="listers-cover mt-3">
                                                <table className="list-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Name of business</th>
                                                            <th>Email Address</th>
                                                            <th>Phone Number</th>
                                                            <th>Category</th>
                                                            <th>Website</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {allBusinesses}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className={this.state.noData ? ' mt-5 mb-5' : 'hide'}>
                                                <div className={this.state.loading ? 'hide' : ''}>
                                                    <div className="empty-data">
                                                        <img src={require('../assets/images/icons/empty-data.svg')} alt="***" />
                                                        <div className="empty-data-tag">"{this.state.searchQuery}" was not found :(</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row ml-0">
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <span className="brandText">All lawyers</span>
                            <div className={this.state.loading ? 'data-loading' : 'hide'}>
                                <img src={require("../assets/images/icons/spinner.svg")} className='loader-img' alt="+" />
                            </div>
                            <div className="table-menu mt-2 mb-2">
                                <button className="button button-primary add-new" onClick={this.toAddNew}>Add new business </button>
                                <div className="search-form">
                                    <form className="form-cover">
                                        <input type="text" name="searchQuery" placeholder="Search" id="searchQuery"
                                            onChange={e => this.setState({ searchQuery: e.target.value })} />
                                        <div className="icon-cover" onClick={this.searchLawyers}>
                                            <img src={require("../assets/images/icons/table-search.svg")} alt="" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="listers-cover mt-3">
                                <table className="list-table">
                                    <thead>
                                        <tr>
                                            <th>Name of business</th>
                                            <th>Email Address</th>
                                            <th>Phone Number</th>
                                            <th>Category</th>
                                            <th>Website</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allBusinesses}
                                    </tbody>
                                </table>
                            </div>
                            <div className={this.state.noData ? ' mt-5 mb-5' : 'hide'}>
                                <div className={this.state.loading ? 'hide' : ''}>
                                    <div className="empty-data">
                                        <img src={require('../assets/images/icons/empty-data.svg')} alt="***" />
                                        <div className="empty-data-tag">"{this.state.searchQuery}" was not found :(</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </>
        )
    }
}

export default Businesses
