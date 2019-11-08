/* eslint-disable eqeqeq */
import React, { Component } from 'react';
// import businessList from '../businesses';
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar.jsx";
import globals from '../globals';
import '../assets/styles/general.scss';

export class EditCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            category: '',
        }
    }

    createListing = () => {
        const access = localStorage.getItem('grantedAccess');
        if(this.state.category === '') {
            return globals.createToast('Form not correctly filled', 3500, 'top');
        }
        if(access != true) {
            this.setState({
                loading: false
            });
            return globals.createToast('You\'re not allowed to create this category', 3500, 'top');
        }
        this.setState({
            loading: true
        })
        const storeCaat = JSON.parse(localStorage.getItem('categoriesList'));
        let topushCat = [];
        storeCaat.forEach(caat => {
            topushCat.push(caat);
        });
        const cat =  this.state.category;
        topushCat.push(cat);
        localStorage.setItem("categoriesList", JSON.stringify(topushCat));
        globals.createToast('Success', 1500, 'top');
        this.setState({
            loading: false
        });
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
                                    <Header header="Create new category"/>
                                </div>
                                <div className="contents-cover p-5">
                                <div className="container-card p-4">
                                <div className={this.state.loading ? 'data-loading' : 'hide'}>
                                                <img src={require("../assets/images/icons/spinner.svg")} className='loader-img' alt="+" />
                                            </div>
                                    
                                <form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="text-input mt-5">
                                                        <label htmlFor="name">Category</label>
                                                        <input type="text" name="name" id="name"
                                                            onChange={e => this.setState({ category: e.target.value })}
                                                            required />
                                                    </div>
                                                </div>
                                                </div>
                                        </form>
                                            <div className="text-center mt-4 mb-5">
                                        <button onClick={this.createListing} className="button action edit large">
                                                Create category
                                            </button>
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
            </>
        )
    }
}

export default EditCategories;
