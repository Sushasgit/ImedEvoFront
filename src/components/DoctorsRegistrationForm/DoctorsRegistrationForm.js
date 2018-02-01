import React, { Component } from 'react';
import './doctors-registration-form.scss'
import { connect } from 'react-redux';
import { Field, Form } from 'react-redux-form';




class DoctorsRegistrationForm extends Component {

    constructor(props) {
    super(props);

    this.state = {

      };
    this.regSubmit = this.regSubmit.bind(this);
  }

  regSubmit(e) {
    e.preventDefault();
    let form = this.props.RegDoc;
    let { username } = this.props.regDoc;
    this.props.registrationUserAction({ email, password, phone, birthDate, name });
    
  }

  render() {
    return (
    	<div className=" ">
            hello doc
    	
            <Form model="regDoc">
                <Field model="regDoc.username">
                    <label>
                      <input  type="text" value={this.state.uservod} onChange={this.changeUser}/>
                    </label>
                </Field>
                <Field model="regDoc.passwordDoc">
                    <label>
                      <input  type="text" placeholder="password" />
                    </label>
                </Field>
                <Field model="regDoc.favoiriteColor">
                    <select>
                        <option />
                        <option > красный </option>
                        <option > зеленый </option>
                        <option > синий </option>
                    </select>
                </Field>
                 <div className="">
                     <input                
                    type="submit"
                    value="Войти"
                    onClick={e => this.regSubmit(e)}
                    />
                 </div>   
            </Form >
            
    	</div>
    );
  }
}


function mapStateToProps(state) {
  return {
    regDoc: state.regDoc

  };
}

export default connect(mapStateToProps) (DoctorsRegistrationForm);