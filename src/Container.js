import React from 'react';
//import Comp from './newComp';


export const Forward  = (Comp) => {
   class Hoc extends React.Component{
       render(){
           console.log("hi");
        return <Comp />;
       }
  //   const arr=[];
  //   const ga = {push:function(){
  //    // arr.push(a);
  //     console.log('('+arr+')');
  //     console.log(arr);
  //   }};
  // const registerEvent = ga.push(a);
  // return class extends React.Component{
  //   render(){
      
  //   }
  // }
    }
    return Hoc;
  };