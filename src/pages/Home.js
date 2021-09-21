import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {View} from 'react-native';
import Articles from "../components/Articles";
// import Login from "../components/Login";

const Home: (props)  =>Node = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        setArticles([
            {
                title: 'آموزش React',
                imageUrl: {uri: './../assets/images/React.png'},
                body: 'React یک کتابخانه جاوا اسکریپت رایگان و منبع باز برای ایجاد واسط کاربر یا اجزای UI است. این توسط فیس بوک و جامعه ای از توسعه دهندگان و شرکت های جداگانه نگهداری می شود. React می تواند به عنوان پایه ای در توسعه برنامه های تک صفحه ای یا تلفن همراه استفاده شود.'
            },
            {
                title: 'آموزش Redux',
                imageUrl: {uri: './../assets/images/Redux.png'},
                body: 'Redux یک کتابخانه جاوا اسکریپت منبع باز برای مدیریت و متمرکز کردن حالت برنامه است. بیشتر برای کتابخانه هایی مانند React یا Angular برای ایجاد رابط کاربری استفاده می شود. مشابه معماری Flux فیس بوک ، توسط Dan Abramov و Andrew Clark ایجاد شد.'
            },
            {
                title: 'آموزش Next.js',
                imageUrl: {uri: './../assets/images/NextJs.png'},
                body: 'Next.js یک چارچوب توسعه منبع باز است که در بالای Node.js ساخته شده است و قابلیت های برنامه های کاربردی تحت وب React مانند رندر سمت سرور و ایجاد وب سایت های ایستا را قادر می سازد.'
            },
            {
                title: 'آموزش React Native',
                imageUrl: {uri: './../assets/images/ReactNative.png'},
                body: 'React Native یک چارچوب نرم افزاری UI منبع باز است که توسط Facebook ، Inc ایجاد شده است. این برنامه برای توسعه برنامه های کاربردی برای Android ، Android TV ، iOS ، macOS ، tvOS ، Web ، Windows و UWP استفاده می شود و توسعه دهندگان می توانند از چارچوب React در کنار بومی استفاده کنند. قابلیت های پلتفرم'
            },
            {
                title: 'آموزش Progressive Web Apps',
                imageUrl: {uri: './../assets/images/ProgressiveWebApps.png'},
                body: 'یک برنامه کاربردی تحت وب نوعی نرم افزار کاربردی است که از طریق وب ارائه می شود و با استفاده از فن آوری های رایج وب از جمله HTML ، CSS و JavaScript ساخته شده است. این برنامه برای کار بر روی هر پلتفرمی که از مرورگرهای سازگار با استانداردها ، از جمله دستگاه های رومیزی و تلفن همراه استفاده می کند ، در نظر گرفته شده است.'
            },
        ]);
    }, []);
    return (
        <View>
            {/*<Login/>*/}
            <Articles articles={articles} navigation={props.navigation}/>
        </View>
    );
}

export default Home;

