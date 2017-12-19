import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  render() {
    return (
        <div className="row justify-content-md-center">
            <div className="col col-lg-2">
            </div>
            <div className="col-md-6">
                <form id ="regisForm">
                <div className="form-row">
                    <div className="col">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Firstname"/>
                    </div>
                    <div className="col">
                        <label >Surname</label>
                        <input type="text" className="form-control" placeholder="Lastname"/>
                    </div>
                </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="email" className="form-control"  placeholder="Email"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col col-lg-2">
            </div>
        </div>
    );
  }
}

export default Form;
