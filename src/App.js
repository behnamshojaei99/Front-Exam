import logo from './logo.svg';
import React, { PureComponent } from 'react'
import Clock from 'react-clock'

import {Layout, Divider, Col, Row} from 'antd'
import './App.css';
import Header from './Shared/Header/Header'
import Aside from './Shared/Sidebar/Aside'
import Content from './Shared/Content'
import Title from './Shared/ContentTitle/Title'
import classes from './Shared/Sidebar/Aside.module.css'


function App() {
  // const [SideBarOpen, setSideBarOpen] = useState(true)


  // toggle=()=>{
  //   setIsLoginMode(prevMode => !prevMode);
  // }
  // let sidebarClassname = sidebarOpen ? 'sidebar open' : 'sidebar';
  // let contentClassname = sidebarOpen ? 'content open' : 'content';

  return (
    <React.Fragment>
      
      <Layout className="container" style={{height:'100vh'}}>
      <Aside></Aside>
      <Layout className="site-layout">  
        <Header></Header>
        <Title/>
        <Content></Content>
        </Layout>
          
      </Layout>
      
    </React.Fragment>
  );
}

export default App;
