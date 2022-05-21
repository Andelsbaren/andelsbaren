import React, { Component } from 'react';
import Carousel, {CarouselItem} from './Carousel';

import img1 from './images/bild1.jpg'

import img2 from './images/bild1.jpg'
import img3 from './images/bild3.jpg'
import img4 from './images/aft3.png'
import img6 from './images/bild6.jpg'
import img7 from './images/bild7.jpg'
import img8 from './images/bild8.jpg'
import img5 from './images/bild5.jpg'


class Media extends Component {
    render() {
        return (
            <div className="mediapage">
             <p className="kophome">MEDIA</p>

             <div className='Media'>
                 <Carousel>
                     <CarouselItem><img src={img1}></img></CarouselItem>
                     <CarouselItem><img src={img2}></img></CarouselItem>
                     <CarouselItem><img src={img3}></img></CarouselItem>
                     <CarouselItem><img src={img4}></img></CarouselItem>
                     <CarouselItem><img src={img5}></img></CarouselItem>
                     <CarouselItem><img src={img6}></img></CarouselItem>
                     <CarouselItem><img src={img7}></img></CarouselItem>
                     <CarouselItem><img src={img8}></img></CarouselItem>
               
                 </Carousel>
             </div>






            </div>
            
            )
        }
    }
    
export default Media
    