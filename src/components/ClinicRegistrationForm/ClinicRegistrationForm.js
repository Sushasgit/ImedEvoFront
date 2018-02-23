import React, { Component } from 'react';
import styles from './clinic-reg.scss';
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form';


const standartInput = (field) => {
  const {label, type, input} = field
  return (
    <div className={styles.cf_form_name_new}>
      <label>{label}</label>
      <input {...input} type={type}
             className=""/>
    </div>
  )
}

const time = (field) => {
  const {type, input} = field
  return (
    <div className="">
      <label></label>
      <input {...input} type={type}
             className=""/>
    </div>
  )
}

const textarea = (field) => {
  const {label} = field
  return (
    <label className={styles.cf_form_services}> {label}
    	<textarea />
	</label>
  )
}



class ClinicRegistrationForm extends Component {
	constructor(props) {
    super(props);

  }


	render() {
		console.log(this.props);
    return (
    	<div className={styles.clinic_form}>
    		<h2 className={styles.cf_tit}>Форма регистрации Клиники</h2>
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
    				<Form className={styles.cf_form}>
    					<div className={styles.cf_form_firstline}>
		    			 	<Field
					            type="text"
					            name="clinicName"
					            component={standartInput}
					            label="Название Клиники*:"
				            />
				            <Field
					            type="text"
					            name="clinicAddress"
					            component={standartInput}
					            label="Адрес Клиники*:"
				            />
				            <div className={styles.cf_form_add_branch}>
				                <div className={styles.cf_form_add_branch_plus}>
				                	<i className="fa fa-plus" aria-hidden="true"></i>
								</div>
				                <p className={styles.cf_form_add_branch_plus_text}>Добавить отделение</p>
				            </div>
				        </div>				     
				        <div className={styles.cf_form_secondline}>
				        	<Field
					            type="tel"
					            name="clinicPhone"
					            component={standartInput}
					            label="Телефон:"
				            />
				            <Field
					            type="email"
					            name="clinicEmail"
					            component={standartInput}
					            label="E-mail:"
				            />
			            </div>
			            <div className={styles.cf_form_thirdline}>
				            <p className={styles.cf_form_schedule_tit}>График работы:	</p>
				            <div className={styles.cf_form_shedule_day}>
				            	<p className={styles.cf_form_day}>Пн:</p>
				            	<Field
						            type="time"
						            name="clinicscheduleMnStart"
						            component={time}					            
					            />
					            <span> - </span>
					            <Field
						            type="time"
						            name="сlinicscheduleMnEnd"
						            component={time}					            
					            />
				            </div>
				            <div className={styles.cf_form_shedule_day}>
				            	<p className={styles.cf_form_day_add}>Вт:</p>
				            	<Field
						            type="time"
						            name="clinicscheduleTueStart"
						            component={time}					            
					            />
					            <span> - </span>
					            <Field
						            type="time"
						            name="clinicscheduleTueEnd"
						            component={time}					            
					            />
				            </div>
				            <div className={styles.cf_form_shedule_day}>
				            	<p className={styles.cf_form_day_add}>Cp:</p>
				            	<Field
						            type="time"
						            name="clinicscheduleWedStart"
						            component={time}					            
					            />
					            <span> - </span>
					            <Field
						            type="time"
						            name="clinicscheduleWedEnd"
						            component={time}					            
					            />
				            </div>
				            <div className={styles.cf_form_shedule_day}>
				            	<p className={styles.cf_form_day_add}>Чт:</p>
				            	<Field
						            type="time"
						            name="clinicscheduleThuStart"
						            component={time}					            
					            />
					            <span> - </span>
					            <Field
						            type="time"
						            name="clinicscheduleThuEnd"
						            component={time}					            
					            />
				            </div>
				            <div className={styles.cf_form_shedule_day}>
				            	<p className={styles.cf_form_day_add}>Пт:</p>
				            	<Field
						            type="time"
						            name="clinicscheduleFriStart"
						            component={time}					            
					            />
					            <span> - </span>
					            <Field
						            type="time"
						            name="clinicscheduleFriEnd"
						            component={time}					            
					            />
				            </div>
				            <div className={styles.cf_form_shedule_day}>
				            	<p className={styles.cf_form_day_add}>Сб:</p>
				            	<Field
						            type="time"
						            name="clinicscheduleSatStart"
						            component={time}					            
					            />
					            <span> - </span>
					            <Field
						            type="time"
						            name="clinicscheduleSatEnd"
						            component={time}					            
					            />
				            </div>
			            </div>
			            <Field
					        name="cliniceservices"
					        component={textarea}
					        label="Описание предоставляемых услуг:"
				        />
			            <button action="submit" className={styles.cf_form_submit}>Зарегистрироваться</button>
    				</Form>
    			</div>				
    		</div>
    	</div>
    	);
	}
}





const form = reduxForm({form: 'signupClinic'});

export default (form(ClinicRegistrationForm));


