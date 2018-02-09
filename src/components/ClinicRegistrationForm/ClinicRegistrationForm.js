import React, { Component } from 'react';
import styles from './clinic-reg.scss'
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form';

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
										<input  type="text" />
									</label>
								</Field>
								<Field model="regClinic.clinicaddress">
									<label className={styles.cf_form_address}> Адрес Клиники*:
										<input  type="text" />
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
							<p className={styles.cf_form_schedule_tit}>График работы:	</p>
							<div className={styles.cf_form_shedule_day}>
								<p className={styles.cf_form_day}>Пн:</p>
								<Field model="regClinic.clinicscheduleMnStart">
									<label>
										<input  type="time" />
									</label>
								</Field>
								<span> - </span>
								<Field model="regClinic.clinicscheduleMnEnd">
									<label>
										<input  type="time" />
									</label>
								</Field>
							</div>
							<div className={styles.cf_form_shedule_day}>
								<p className={styles.cf_form_day_add}>Вт:</p>
								<Field model="regClinic.clinicscheduleTueStart">
									<label>
										<input  type="time" />
									</label>
								</Field>
								<span> - </span>
								<Field model="regClinic.clinicscheduleTueEnd">
									<label>
										<input  type="time" />
									</label>
								</Field>
							</div>
							<div className={styles.cf_form_shedule_day}>
								<p className={styles.cf_form_day_add}>Ср:</p>
								<Field model="regClinic.clinicscheduleWedStart">
									<label>
										<input  type="time" />
									</label>
								</Field>
								<span> - </span>
								<Field model="regClinic.clinicscheduleWedEnd">
									<label>
										<input  type="time" />
									</label>
								</Field>
							</div>
							<div className={styles.cf_form_shedule_day}>
								<p className={styles.cf_form_day_add}>Чт:</p>
								<Field model="regClinic.clinicscheduleThuStart">
									<label>
										<input  type="time" />
									</label>
								</Field>
								<span> - </span>
								<Field model="regClinic.clinicscheduleThuEnd">
									<label>
										<input  type="time" />
									</label>
								</Field>
							</div>
							<div className={styles.cf_form_shedule_day}>
								<p className={styles.cf_form_day_add}>Пт:</p>
								<Field model="regClinic.clinicscheduleFriStart">
									<label>
										<input  type="time" />
									</label>
								</Field>
								<span> - </span>
								<Field model="regClinic.clinicscheduleFriEnd">
									<label>
										<input  type="time" />
									</label>
								</Field>
							</div>
							<div className={styles.cf_form_shedule_day}>
								<p className={styles.cf_form_day_add}>Сб:</p>
								<Field model="regClinic.clinicscheduleSatStart">
									<label>
										<input  type="time" />
									</label>
								</Field>
								<span> - </span>
								<Field model="regClinic.clinicscheduleSatEnd">
									<label>
										<input  type="time" />
									</label>
								</Field>
							</div>
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

