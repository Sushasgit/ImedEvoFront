import React, { Component } from 'react';
import './doctors-registration-form.scss'


class DoctorsRegistrationForm extends Component {
  render() {
    return (
    	<div className="doctors-registration-form border">
    		<p>Форма регистрации Врача</p>
    		<div className="doctors-registration-form_personal-info">
    			<div className="doctors-registration-form_personal-info_left-block">
    				<div className="doctors-registration-form_personal-info_left-block_cap"></div>
    				<div className="doctors-registration-form_personal-info_left-block_picture">
    					<img src={require('../../images/profile-picture.png')} alt="Profile" />
    					<p>1</p>	
    				</div>
    			</div>
    			<div className="doctors-registration-form_personal-info_right-block">
    				<p>Личные данные</p>
    				<div className="doctors-registration-form_personal-info_right-block_form">
    					<form metod="post" className="">
    						<div className="doctors-registration-form_personal-info_right-block_names">
    							<label for="name" className=" "> 
    								<span>Фамилия Имя Отчество<sup>*</sup>:</span>
    								<input type="text" id="name"></input>
    							</label>
    							<div className="doctors-registration-form_personal-info_right-block_choose">
	    							<span>Cпециальность<sup>*</sup>:</span>
	    							<select name="specialization" className="doctors-registration-form_personal-info_right-block_form_specialization">
	    								<option value="S1" selected>Педиатр</option>
	    								<option value="S2">Уролог</option>
	    								<option value="S3">Лор</option>
	    								<option value="S4">Стоматолог</option>
	    							</select>
    							</div>
    							<div className="doctors-registration-form_personal-info_right-block_add-speciality">
    							    <i className="fa fa-plus" aria-hidden="true"></i>
                                	<p>Добавить специальность</p>
    							</div>
    						</div>
                            <div className="doctors-registration-form_personal-info_right-block_rank">
                                <div className="doctors-registration-form_personal-info_right-block_rank_category">
                                    <span>Категория<sup>*</sup>:</span>
                                    <select name="category" className="doctors-registration-form_personal-info_right-block_rank_category-choose">
                                        <option value="С1" selected>1-я Категория</option>
                                        <option value="С2">2-я Категория</option>
                                        <option value="С3">3-я Категория</option>
                                        <option value="С4">4-я Категория</option>
                                    </select>
                                </div>
                                <label for="experience" className=""> 
                                    <span>Стаж, лет<sup>*</sup>:</span>
                                    <input type="text" id="experience"></input>
                                </label>
                                <label for="gender" className=""> 
                                    <span>Пол<sup>*</sup>:</span>
                                    <input type="text" id="gender"></input>
                                </label>
                            </div>
                            <label for="education" className="doctors-registration-form_personal-info_right-block_education"> 
                                Образование:
                                <input type="text" id="education"></input>
                            </label>
                            <label className="doctors-registration-form_personal-info_right-block_services"> 
                                Описание предоставляемых услуг:
                                <textarea maxLength="2000" ></textarea>
                            </label>
                            <div className="doctors-registration-form_personal-info_right-block_contacts">
                                <label for="experience" className=""> 
                                    <span>Телефон<sup>*</sup>:</span>
                                    <input type="text" id="experience"></input>
                                </label>
                                <label for="gender" className=""> 
                                    <span>E-mail<sup>*</sup>:</span>
                                    <input type="text" id="gender"></input>
                                </label>
                            </div>
    					</form>
    				</div>
    			</div>				
    		</div>
            <div className="doctors-registration-form_work-place">
                <div className="doctors-registration-form_work-place_left-block">
                    <div className="doctors-registration-form_work-place_left-block_cap"></div>
                    <p>2</p>                             
                </div>
                <div className="doctors-registration-form_work-place_right-block">
                    <p>Место работы</p>
                    <div className="doctors-registration-form_work-place_right-block_form">
                        <form metod="post" className="">
                            <div className="doctors-registration-form_work-place_right-block_form_clinic">
                                <div className="doctors-registration-form_work-place_right-block_form_clinic_names">
                                    <span>Название Клиники<sup>*</sup>:</span>
                                    <select name="category" className="doctors-registration-form_work-place_right-block_form_clinic_names_choose">
                                        <option value="С1" selected>Самиздат</option>
                                        <option value="С2">Ахмадит</option>
                                        <option value="С3">Детская</option>
                                        <option value="С4">Взрослая</option>
                                    </select>
                                </div>
                                <label for="address" className="">
                                    <span>Адрес Клиники<sup>*</sup>:</span>
                                    <input type="text" id="address"></input>
                                </label>
                            </div>
                            <label for="clinic-price" className="doctors-registration-form_work-place_right-block_form_price">
                                <span>Цена первичного осмотра, грн<sup>*</sup>:</span>
                                <input type="text" id="clinic-price"></input>
                            </label>
                            <div className="doctors-registration-form_work-place_right-block_form_schedule">
                                <span>График приема<sup>*</sup>:</span>
                                <label className=""> 
                                    <span>Пн:</span>                                  
                                    <input type="time" id="clinic-schedule_monday-start"></input>
                                    <span>-</span>
                                    <input type="time" id="clinic-schedule_monday-end"></input>
                                </label>
                                <label className=""> 
                                    <span>Вт:</span>                                  
                                    <input type="time" id="clinic-schedule_tuesday-start"></input>
                                    <span>-</span>
                                    <input type="time" id="clinic-schedule_tuesday-end"></input>
                                </label>
                                <label className=""> 
                                    <span>Ср:</span>                                  
                                    <input type="time" id="clinic-schedule_wednesday-start"></input>
                                    <span>-</span>
                                    <input type="time" id="clinic-schedule_wednesday-end"></input>
                                </label>
                                <label className=""> 
                                    <span>Чт:</span>                                  
                                    <input type="time" id="clinic-schedule_thursday-start"></input>
                                    <span>-</span>
                                    <input type="time" id="clinic-schedule_thursday-end"></input>
                                </label>
                                <label className=""> 
                                    <span>Пт:</span>                                  
                                    <input type="time" id="clinic-schedule_friday-start"></input>
                                    <span>-</span>
                                    <input type="time" id="clinic-schedule_friday-end"></input>
                                </label>
                                <label className=""> 
                                    <span>Сб:</span>                                  
                                    <input type="time" id="clinic-schedule_saturday-start"></input>
                                    <span>-</span>
                                    <input type="time" id="clinic-schedule_saturday-end"></input>
                                </label>
                            </div>
                            <div className="doctors-registration-form_work-place_right-block_form_add-workplace">
                                <i className="fa fa-plus" aria-hidden="true"></i>
                                <p>Добавить дополнительное место работы</p>
                            </div>
                            <input type="submit" name="submit" value="Зарегистрироваться"></input>
                        </form>
                    </div>
                </div>
            </div>
    	</div>
    );
  }
}

export default DoctorsRegistrationForm;