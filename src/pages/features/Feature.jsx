import React from 'react'
import {MdMonitor} from "react-icons/md"
import {BiFolderOpen} from "react-icons/bi"
import {FaBicycle} from 'react-icons/fa'
import {HiOutlineCube} from 'react-icons/hi'
import './Feature.scss'

const Feature = () => {
  return (
    <div className='container'>
        <h2>We have built a Amazing <br/> Landing Page Multi purpose kit</h2>
        <div className="row">
            <div class="col-md-3">
                <div className="icon-box text-center">
                    <span><MdMonitor className='icons'/></span>
                    <h4>Responsive</h4>
                    <p>Aliqua minim sunt laborum culpa deserunt adipisicing id occaecat. Non tempor et adipisicing amet proident officia nisi amet dolor quis elit..</p>   
                </div>
            </div>
            <div class="col-md-3">
            <div className="icon-box text-center">
                    <span><BiFolderOpen className='icons'/></span>
                    <h4>Responsive</h4>
                    <p>Aliqua minim sunt laborum culpa deserunt adipisicing id occaecat. Non tempor et adipisicing amet proident officia nisi amet dolor quis elit..</p>   
                </div>
                </div>
            <div class="col-md-3">
            <div className="icon-box text-center">
            <span><FaBicycle className='icons'/></span>
                    <h4>Responsive</h4>
                    <p>Aliqua minim sunt laborum culpa deserunt adipisicing id occaecat. Non tempor et adipisicing amet proident officia nisi amet dolor quis elit..</p>   
            </div>
            </div>
            
            <div class="col-md-3">
            <div className="icon-box text-center">
            <span><HiOutlineCube className='icons'/></span>
                    <h4>Responsive</h4>
                    <p>Aliqua minim sunt laborum culpa deserunt adipisicing id occaecat. Non tempor et adipisicing amet proident officia nisi amet dolor quis elit..</p>   
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Feature