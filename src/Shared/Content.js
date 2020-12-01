import React, { Component } from 'react';
import {Layout} from 'antd';
import ColapseTable from './Tables/DataTable'
import str from './Strings'
import classes from './Content.module.css';
import date from './jDate';
import Test from '../Student/Components/ExamDuration/TestQuesions'
class Content extends Component {

    
    render(){
        let time = new Date()
        const {Content} = Layout;
        return (
            <Content className={classes.content}>
                {/* <div className={classes.header}>
                    <h1>سامانه آزمون</h1>
                    <date></date>
                </div> */}

                {/* <Test choices={["a","b","c","d"]}/> */}
                <ColapseTable headcells={str.STUDENTS_RECENT_EXAMS}  />

            </Content>
            
        )
    }
}

export default Content;