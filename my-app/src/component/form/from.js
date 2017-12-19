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
                <div class="form-row">
                    <div class="col">
                        <label>Name</label>
                        <input type="text" class="form-control" placeholder="Firstname"/>
                    </div>
                    <div class="col">
                        <label >Surname</label>
                        <input type="text" class="form-control" placeholder="Lastname"/>
                    </div>
                </div>
                    <div class="form-group">
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
