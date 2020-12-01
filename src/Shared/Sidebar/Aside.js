import React, { Component } from 'react'
import { Card, Col, Divider, Row } from 'antd';
import 'antd/dist/antd.css';
import classes from './Aside.module.css';
import {Layout, Menu} from 'antd'
import { DashboardRounded } from '@material-ui/icons';
import './ClockCard.css'


class Aside extends Component {
    
    onCollapse = () =>{
                 this.setState(prevState => ({
                    collapsed: !prevState.collapsed
               }))
            }


    render(){
        const {Sider} = Layout;
        const { SubMenu } = Menu;
        return(
            <Sider className= {classes.aside} theme="light" 
            >
            <Row>
                <Col span={24}>
                    <Card 
                    className={ classes.profileCard}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" className={classes.circle}/>}>
                    {/* <div className={classes.topContent}></div> */}
                    <div className={classes.content}>
                        <h2 style={{fontWeight:"bold"}}>بهنام شجاعی</h2>
                        <span style={{fontWeight:"500",
                    borderBottom:"2px solid silver"}}>963613054</span>
                    </div>
                        
                        
                    </Card>
                </Col>
                <Col span={24}>
                <Menu style={{backgroundColor:" #f0f2f5" , marginTop:"20px"}} theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item className={classes.asideItem} key="1" >
              آزمون های اخیر
            </Menu.Item>
            <Menu.Item  className={classes.asideItem} key="2" >
              لیست دروس
            </Menu.Item>
            
          </Menu>
                <div class="courses-container">
                    <div class="course">
                        <div class="course-preview">
                            
                        </div>
                        <div class="course-info">
                            <div class="progress-container">
                            
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div class="social-panel-container">
                    
                </div>
                
                </Col>
            </Row>
            
                
                
            </Sider>
            
        );
    }
}

export default Aside;