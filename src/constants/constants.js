export const alertConstants = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR'
};

export const userConstants = {
  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

  LOGOUT: 'USERS_LOGOUT',

  GETALL_REQUEST: 'USERS_GETALL_REQUEST',
  GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
  GETALL_FAILURE: 'USERS_GETALL_FAILURE',

  DELETE_REQUEST: 'USERS_DELETE_REQUEST',
  DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
  DELETE_FAILURE: 'USERS_DELETE_FAILURE'
};
export const TestDoctorsCards =[
  {
    firstName:'Владимир Николаевич',
    lastName:'Войтенко',
    position:'Педиатр',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShziYt6xgZPa1FJP-5MTIGbzeuge4jrqb9P4Wq60digp3YDSUT4g'
  },
  {
    firstName:'Татьяна Анатольевна',
    lastName:'Долгушина',
    position:'Педиатр',
    image:'https://image.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg'
  },
  {
    firstName:'Елена Игоревна',
    lastName:'Евтушенко',
    position:'Педиатр',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-suGSy7c18MU6PhTpd7wKVPYdXXOrcz3FdijbAByPXUnANsTOg'
  },
  {
    firstName:'Елена Владимировна',
    lastName:'Марчук',
    position:'Педиатр',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9Sf2xYJtQHyFfMHb9IPQ6xm_lRqqlWmFcjOlzDAInE3i1MfnFw'
  }
]

export const TestArticleBlogPost =[
  {
    headline:'Здоровый образ жизни',
    src:'http://v.img.com.ua/b/1100x999999/a/69/d593a9b14049a55ebf66871963fa269a.jpg',
    description:' Здоровый образ жизни человека, направленный на профилактику болезней и укрепление здоровья',
  },
  {
    headline:'Диетология',
    src:'http://aerobika.by/img/direction/dietology/Konsultaciya-dietologa-i-razrabotka-individualnoy-diety.jpg',
    description:'Диетология направлена на рационализацию и индивидуализацию питания, но в первую очередь — на обеспечение безопасности питания.'
  },
  {
    headline:'Косметология',
    src:'https://media.timeout.com/images/103679081/image.jpg',
    description:'Область медицины, изучающая эстетические проблемы организма человека, их этиологии, проявления и методы коррекции'
  }
]

export const TestFeedbacks = [
  {
    doctor: 'Долгушина Елена Анатольевна',
    rate:4,
    text: 'Доктор внимательная, думающяя. Диагноз поставлен и назначено лечение. Окончательный вывод можно будеть сделать только после результата лечения'
  },
  {
    doctor: 'Долгушина Елена Анатольевна',
    rate:3,
    text: 'Доктор внимательная, думающяя. Диагноз поставлен и назначено лечение. Окончательный вывод можно будеть сделать только после результата лечения'
  },
  {
    doctor: 'Долгушина Елена Анатольевна',
    rate:5,
    text: 'Доктор внимательная, думающяя. Диагноз поставлен и назначено лечение. Окончательный вывод можно будеть сделать только после результата лечения'
  },

]
