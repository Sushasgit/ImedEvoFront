import React, { Component } from 'react';
import styles from './clinic-reg.scss'
import { connect } from 'react-redux';
import { Field, Form } from 'react-redux-form';

class ClinicRegistrationForm extends Component {
	constructor(props) {
    super(props);

    this.state = {};
    this.regcinicSubmit = this.regclinicSubmit.bind(this);
  }
  regclinicSubmit(e) {
    e.preventDefault();
    let form = this.props.regClinicForm;
    let { clinicname } = this.props.regClinic;
    // this.props.registrationUserAction({ email, password, phone, birthDate, name });
    
  }
	render() {
    return (
    	<div className={styles.clinic_form}>
    		<h2 className={styles.cf_tit}>Форма регистраци Клиники</h2>
    		<div className={styles.cf_wrap}>
    			<div className={styles.cf_left}>
    				<div className={styles.cf_left_logo}>
    					<div className={styles.cf_left_logo_load_logo}>
    						<img src={require('../../images/paper-clip.png')} alt="logo"/>
    						<a className={styles.cf_left_logo_load_btn}>Загрузить логотип*</a>	
    					</div>
    					<div className={styles.cf_left_logo_load_licence}>
    						<img src={require('../../images/paper-clip.png')} alt="licence"/>
    						<a className={styles.cf_left_logo_load_btn}>Загрузить Лицензию*</a>	
    					</div>
    				</div>    							
    			</div>
    			<div className={styles.cf_right}>
    				<Form model="regClinic" className={styles.cf_form}>
	    				<div className={styles.cf_form_firstline}>
	    					<Field model="regClinic.clinicname">
			                    <label className={styles.cf_form_name}> Название Клиники*:		                    
			                       <input  type="text" required />
			                    </label>
			                </Field>
			                <Field model="regClinic.clinicaddress">
			                    <label className={styles.cf_form_address}> Адрес Клиники*:
			                       <input  type="text" required />
			                    </label>
			                </Field>
			                <div className={styles.cf_form_add_branch}>
			                	<div className={styles.cf_form_add_branch_plus}><i className="fa fa-plus" aria-hidden="true"></i>
	</div>
			                	<p className={styles.cf_form_add_branch_plus_text}>Добавить отделение</p>
			                </div>
			            </div>
			            <div className={styles.cf_form_secondline}>
			            	<Field model="regClinic.clinicphone">
			                    <label className={styles.cf_form_phone}> Телефон:		                    
			                       <input  type="text"/>
			                    </label>
			                </Field>
			                <Field model="regClinic.clinicemail">
			                    <label className={styles.cf_form_email}> E-mail:		                    
			                       <input  type="text"/>
			                    </label>
			                </Field>
			            </div>
						<Field model="regClinic.clinicschedule"  className={styles.cf_form_shedule}>
							<p className={styles.cf_form_schedule_tit}>График работы:	</p>
			                <label className={styles.cf_form_monday}> Пн:	                    
			                    <input  type="time" />
			                    <span> - </span>
			                	<input  type="time"/>
			                </label>
			                <label className={styles.cf_form_tuesday}> Вт:	                    
			                    <input  type="time" />
			                	<span> - </span>
			                    <input  type="time"/>
			                </label>
			                <label className={styles.cf_form_wednesday}> Cp:	                    
			                    <input  type="time" />
			                	<span> - </span>
			                    <input  type="time"/>
			                </label>
			                <label className={styles.cf_form_thursday}> Чт:	                    
			                    <input  type="time" />
			                	<span> - </span>
			                    <input  type="time"/>
			                </label>
			                <label className={styles.cf_form_friday}> Пт:	                    
			                    <input  type="time" />
			                	<span> - </span>
			                    <input  type="time"/>
			                </label>
			                <label className={styles.cf_form_saturday}> Cб:	                    
			                    <input  type="time" />
			                	<span> - </span>
			                    <input  type="time"/>
			                </label>
			            </Field>
			            <Field model="regClinic.cliniceservices">
			                <label className={styles.cf_form_services}> Описание предоставляемых услуг:		                    
			                    <textarea name="comment" />
			                </label>
			            </Field>
			            <div className="">
		                     <input                
		                    type="submit"
		                    value="Зарегистрироваться"
		                    onClick={e => this.regclinicSubmit(e)}
		                    />
		                </div> 
    				</Form>
    			</div>				
    		</div>
    	</div>
    	);
	}
}

export default ClinicRegistrationForm;