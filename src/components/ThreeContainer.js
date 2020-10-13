import React, {Component, useEffect, useState} from 'react'
import ThreeEntryPoint from '../threejs/ThreeEntryPoint';
import '../css/canvas.scss'

export default class ThreeContainer extends Component{

  componentDidMount() {
    this.width = getComputedStyle(this.scene).width.slice(0, -2)
    this.height = getComputedStyle(this.scene).height.slice(0, -2)
    ThreeEntryPoint(this.scene, this.width, this.height);
  }

  // const [scene,setScene] = useState(null)
  // const [width,setWidth] = useState('')
  // const [height,setHeight] = useState('')

  // useEffect(()=>{
  //   console.log(scene)
  //   if (scene) {
  //
  //   }
  //   // setWidth(getComputedStyle(scene).width.slice(0, -2))
  //   // setHeight( getComputedStyle(scene).height.slice(0, -2))
  //   // ThreeEntryPoint(scene, width, height);
  // })

  // return (
  //   <div className='canvas' id='canvas' ref={element => this.scene = element} />
  //   // <div className='canvas' id='canvas' ref={element => setScene( element)} />
  // );

  render() {
    return (
        <div className='canvas' id='canvas' ref={element => this.scene = element} />
    );
  }
}
