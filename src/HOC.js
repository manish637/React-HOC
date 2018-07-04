import React from 'react';


export const withGA = (EventName) => (OurBaseComp)=>{
    return class extends React.Component{
        constructor(props){
            super(props);
                this.state={
                count:0,
                arr:[]
                }
                this.registerEvent = this.registerEvent.bind(this);
        }
        registerEvent(){
            //arr.push(EventName);
            this.setState(prevState =>({
                arr: prevState.arr.concat(EventName),
                count : this.state.count+1
               }));
            console.log(this.state.arr);
        }
        render(){
            return <OurBaseComp registerEvent = {this.registerEvent}
                                                {...this.state}
                                                {...this.props}/>
        }
    }
}