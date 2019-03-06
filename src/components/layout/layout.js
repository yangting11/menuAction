import React from 'react'
import './layout.less'

class Layout extends React.Component{
    state={
        chooseListStyle:{},
        sideStyle:{},
        sideflag:false,
        enterChooseFlag:false,
        menu:[
            {icon:'images/menu.png',title:'1111111111111'},
            {icon:'images/func.png',title:'2222222222222'},
            {icon:'images/intro.png',title:'3333333333333'},
            {icon:'images/device.png',title:'4444444444444'},
            {icon:'images/icon_pub.png',title:'5555555555555'}
        ]
    }
    Sidehide(){
        console.log(1)
        this.setState({
            sideflag:false
        })
    }
    Sideshow(){
        let newSideStyle={
            width:'240px'
        }
        this.setState({
            sideStyle:newSideStyle
        })
    }
    headerHover(){
        if(this.state.sideflag==false){
            console.log('header')
            let newStyle={};
            this.setState({
                chooseListStyle:newStyle,
                sideStyle:{}
            })
        }
    }
    contentHover(){
        if(this.state.sideflag==false){
            console.log('body')
            let newStyle={};
            this.setState({
                chooseListStyle:newStyle,
                sideStyle:{}
            })
        }
    }
    enterAllList(){
        let newStyle={
            width: '500px',
            overflow: 'hidden',
            left: '240px',
            position: 'absolute',
        }
        this.setState({
            chooseListStyle:newStyle
        })
    }
    OnlyLiShow(){
        let newStyle={
        };
        this.setState({
            chooseListStyle:newStyle
        })
    }
    showListAction(){
        let newStyle={
            width: '500px',
            overflow: 'hidden',
            left: '240px',
            position: 'absolute',
        }
        setTimeout(()=>{
            this.setState({
                chooseListStyle:newStyle
            })
        },200);
    }
    render(){
        return(
            <div className="layout">
                <div className="header" onMouseOver={e=>this.headerHover(e)}>
                    <div className="logo">
                        <img src="/images/logo.png"/>
                    </div>
                    <div className="title">
                        宁波弘泰水利信息
                    </div>
                </div>
                <div className="body">
                    <div className="side" style={this.state.sideStyle} onMouseOut={e=>this.Sidehide(e)} onMouseOver={e=>this.Sideshow(e)}>
                        {this.state.menu.map((item,index)=>{
                            if(index===0){
                                return (
                                    <li onMouseOver={e=>{this.showListAction(e)}} style={{backgroundImage:`url(${item.icon})`}}>
                                        {item.title}
                                    </li>
                                )
                            }else{
                                return (
                                    <li style={{backgroundImage:`url(${item.icon})`}} onMouseOver={e=>this.OnlyLiShow(e)}>
                                        {item.title}
                                    </li>
                                )
                            }
                        })}
                        
                    </div>
                    <div className="content" onMouseOver={e=>this.contentHover(e)}>
                        111111111111111111111111111111111111111111111111111111111111111
                    </div>
                    <div className="chooseList" style={this.state.chooseListStyle}>
                        <div className="choosecontent" onMouseOver={e=>this.enterAllList(e)}>11111111111111111111</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Layout