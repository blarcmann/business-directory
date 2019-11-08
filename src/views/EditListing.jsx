/* eslint-disable eqeqeq */
import React, { Component } from 'react';
// import businessList from '../businesses';
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar.jsx";
import globals from '../globals';
import '../assets/styles/general.scss';

export class EditListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            name: '',
            description: '',
            address: '',
            category: '',
            website: '',
            phone: '',
            phone2: '',
            email: ''
        }
    }

    createListing = () => {
        this.setState({
            loading: true
        })
        const access = localStorage.getItem('grantedAccess');
        if(access != true) {
            return globals.createToast('You\'re not allowed to this create listing', 3500, 'bottom');
        }
        if(this.state.name === '' || this.state.website === '' || this.state.category === '' || this.state.email === '' || this.state.phone === '' || this.state.address === '') {
            return globals.createToast('Form not correctly filled', 3500, 'bottom');
        }
        const storedBiz = JSON.parse(localStorage.getItem('businessList'));
        console.log(storedBiz, 'to store in');
        const bizId = storedBiz.length + 1;
        const views = Math.floor(Math.random() * 200);
        let biznesDetails = {};
        biznesDetails.name = this.state.name;
        biznesDetails.description = this.state.description;
        biznesDetails.address = this.state.address;
        biznesDetails.category = this.state.category;
        biznesDetails.website = this.state.website;
        biznesDetails.phone = this.state.phone;
        biznesDetails.phone2 = this.state.phone2;
        biznesDetails.email = this.state.email;
        biznesDetails._id = bizId;
        biznesDetails.views = views;
        let topushBiz = [];
        storedBiz.forEach(bizz => {
            topushBiz.push(bizz);
        });
        topushBiz.push(biznesDetails);
        console.log('newish', topushBiz);
        globals.createToast('Success', 1500, 'bottom-right');
        this.setState({
            loading: false
        })
        setTimeout(() => {
            localStorage.setItem("businessList", JSON.stringify(topushBiz));
        }, 200);
        this.props.history.push('/businesses');
    }

    componentDidMount() { }

    render() {
        let categoryOptions = JSON.parse(localStorage.getItem('categoriesList'));
        let allcategories = []
        for (const [index, category] of categoryOptions.entries()) {
            allcategories.push(
                <option key={index} id={category} value={category}>{globals.capitalize(category)}
                </option>
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
                                <div className="container-card p-4">
                                <div className={this.state.loading ? 'data-loading' : 'hide'}>
                                                <img src={require("../assets/images/icons/spinner.svg")} className='loader-img' alt="+" />
                                            </div>
                                    
                                <form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="text-input">
                                                        <label htmlFor="name">Name</label>
                                                        <input type="text" name="name" id="name"
                                                            onChange={e => this.setState({ name: e.target.value })}
                                                            required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="text-input">
                                                        <label htmlFor="category">Category </label>
                                                        <select name="category" id="category" required
                                                        onChange={e => this.setState({ category: e.target.value })}>
                                                        <option value="">Select business category</option>
                                                        {allcategories}
                                                    </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="text-input">
                                                        <label htmlFor="website">Website</label>
                                                        <input type="text" name="website" id="website"
                                                            onChange={e => this.setState({ website: e.target.value })}
                                                            required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="text-input">
                                                        <label htmlFor="email">Email</label>
                                                        <input type="email" name="email" id="email"
                                                            onChange={e => this.setState({ email: e.target.value })}
                                                            required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="text-input">
                                                        <label htmlFor="phone">Phone number</label>
                                                        <input type="tel" name="phone" id="phone"
                                                            onChange={e => this.setState({ phone: e.target.value })}
                                                            required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="text-input">
                                                        <label htmlFor="phone2">Alternative phone number </label>
                                                        <input type="tel" name="phone2" id="phone2"
                                                            onChange={e => this.setState({ phone2: e.target.value })}
                                                            required />
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="text-input">
                                                        <label htmlFor="address">Address </label>
                                                        <input name="address" id="address"
                                                            onChange={e => this.setState({ address: e.target.value })}
                                                            required />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="text-input">
                                                        <label htmlFor="description">Description </label>
                                                        <textarea name="description" id="description" rows="4"
                                                            onChange={e => this.setState({ description: e.target.value })}
                                                            required ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4 mb-5">
                                    </div>
                                        </form>
                                        <button onClick={this.createListing} className="button action edit large">
                                                Create listing
                                            </button>
                                    </div>
                                </div>
                            </div>
                            <div className="row ml-0">
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default EditListing;
