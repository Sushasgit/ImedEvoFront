import React, {Component, Fragment} from 'react';
import ProfileMap from '../Map/ProfileMap';
import styles from './clinic-profile.scss';
import RatingStars from '../customComponents/RatingStars';
import WidjetsClinic from '../WidjetsClinic/WidjetsClinic';
import WidjetsDoctors from '../WidjetsDoctors/WidjetsDoctors';
import ActivityTable from './ActivityTable';

class ClinicProfileData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clinic: [],
            coordinatesLatitude: null,
            coordinatesLongitude: null,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            clinic: nextProps,
        })
    }

    render() {
        //TODO CREATE WIDJETS (top clinic and doctors)
        //TODO Change image when it will return from server
        let clinic = this.state;
        return (
            <Fragment>
                <div className={styles.profile}>
                    <div className={styles.container_clinic_card}>
                        <section className={styles.clinic}>
                            <article className={styles.clinic__info}>
                                <img src={`${clinic.clinic.logo}`} alt={`clinic ${clinic.clinic.clinicName}`}/>
                                <div className={styles.clinic__description}>
                                    <div className={styles.h_container_rate}>
                                        <div className={styles.clinic__name}>
                                            <h2 className={styles.name}>{clinic.clinic.clinicName}</h2>
                                            <RatingStars
                                                starSelectingHoverColor="rgb(249, 215, 73)"
                                                starRatedColor="rgb(249, 215, 73)"
                                                starWidthAndHeight="30px"
                                                starSpacing='0px'
                                                isSelectable={true}
                                                rating={clinic.clinic.rating}
                                            />
                                        </div>
                                    </div>
                                    <p>Про клинику</p>
                                    <p>
                                        {clinic.clinic.description}
                                    </p>
                                </div>
                            </article>
                        </section>
                        <section className={styles.clinic}>
                            <section className={styles.clinic__rating}>
                                <div>
                                    <h3>Комфорт:</h3>
                                    <RatingStars
                                        starSelectingHoverColor="rgb(249, 215, 73)"
                                        starRatedColor="#4775d1"
                                        starWidthAndHeight="25px"
                                        starSpacing='0px'
                                        isSelectable={true}
                                        rating={this.state.range}
                                    />
                                    <h3>Специалисты:</h3>
                                    <RatingStars
                                        starSelectingHoverColor="rgb(249, 215, 73)"
                                        starRatedColor="#4775d1"
                                        starWidthAndHeight="25px"
                                        starSpacing='0px'
                                        isSelectable={true}
                                        rating={this.state.range}
                                    />
                                </div>
                                <div>
                                    <h3>Доброжелательность:</h3>
                                    <RatingStars
                                        starSelectingHoverColor="rgb(249, 215, 73)"
                                        starRatedColor="#4775d1"
                                        starWidthAndHeight="25px"
                                        starSpacing='0px'
                                        isSelectable={true}
                                        rating={this.state.range}
                                    />
                                    <h3>Оборудование:</h3>
                                    <RatingStars
                                        starSelectingHoverColor="rgb(249, 215, 73)"
                                        starRatedColor="#4775d1"
                                        starWidthAndHeight="25px"
                                        starSpacing='0px'
                                        isSelectable={true}
                                        rating={this.state.range}
                                    />
                                </div>
                            </section>
                        </section>

                        <section className={styles.clinic}>
                            <div className={styles.clinic__main_info}>
                                <div className={styles.directions}>
                                    {/*<ul className={styles.clinic__contacts}>*/}
                                    {/*<li><FontAwesome.FaMapMarker />г. Одесса, ул. Варненская, 2</li>*/}
                                    {/*<li><FontAwesome.FaPhone />(0482) 307-500, (0482) 343 -062</li>*/}
                                    {/*<li><FontAwesome.FaEnvelope /> into-sana@ukr.net</li>*/}
                                    {/*<li><FontAwesome.FaClockO />Пн-Вск: 08.00-20.00</li>*/}
                                    {/*</ul>*/}
                                    <div className={styles.clinic__area}>
                                        <ActivityTable/>
                                    </div>
                                </div>

                                <div className={styles.clinic__map}>
                                    <ProfileMap {...this.state.clinic} />
                                </div>
                            </div>
                        </section>

                        <section className={styles.clinic}>
                            <section className={styles.clinic__feedback}>
                                <h2 className={styles.clinic__title}>Отзывы</h2>
                                <div className={styles.feedback}>

                                    {/*<section className={styles.feedback__card}>*/}
                                    {/*<div className={styles.h_row}>*/}
                                    {/*<div className={styles.feedback__range}>*/}
                                    {/*<div className={styles.feedback__range_item}>*/}
                                    {/*<FontAwesome.FaTrash/> <span>5</span>*/}
                                    {/*<p>Комфорт</p>*/}
                                    {/*</div>*/}

                                    {/*<div className={styles.feedback__range_item}>*/}
                                    {/*<FontAwesome.FaAmbulance/><span>5</span>*/}
                                    {/*<p>Специалисты</p>*/}
                                    {/*</div>*/}

                                    {/*<div className={styles.feedback__range_item}>*/}
                                    {/*<FontAwesome.FaDollar/><span>5</span>*/}
                                    {/*<p>Доброжелательность</p>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<RatingStars*/}
                                    {/*starSelectingHoverColor="rgb(249, 215, 73)"*/}
                                    {/*starRatedColor="rgb(249, 215, 73)"*/}
                                    {/*starWidthAndHeight="30px"*/}
                                    {/*starSpacing='0px'*/}
                                    {/*isSelectable={true}*/}
                                    {/*rating={this.state.range}*/}
                                    {/*/>*/}
                                    {/*</div>*/}
                                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet consequuntur error eum*/}
                                    {/*iste omnis pariatur quia ut. Adipisci distinctio enim ipsum obcaecati sint soluta tempora*/}
                                    {/*velit. Dolore, eaque, illum!*/}
                                    {/*</p>*/}
                                    {/*<time>*/}
                                    {/*Оставлен: Январь 2018*/}
                                    {/*</time>*/}
                                    {/*</section>*/}
                                </div>
                            </section>
                        </section>
                    </div>
                    <div className={styles.h_widjets}>
                        <div className={styles.top__rated}>
                            <h3 className={styles.widjet_info_title}>ТОП клиники:</h3>
                            <WidjetsClinic/>
                        </div>
                        <div className={styles.top__rated}>
                            <h3 className={styles.widjet_info_title}>ТОП врачей:</h3>
                            <WidjetsDoctors/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )

    }
}

export default ClinicProfileData

