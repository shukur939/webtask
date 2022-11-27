import React from 'react';
import {TiPencil} from 'react-icons/ti';
import {IoMegaphoneOutline} from 'react-icons/io5';
import {BiLike} from 'react-icons/bi';
import {ImDisplay} from 'react-icons/im';
import Sectionimg from  "../images/section1.png";
import './Section.css';

const Section1 = () => {
  return (
    <>
      <div className=" sections Section_container">
          <div className="w-container">
            <div className="section_content">
              <div className='row'>
              <h1>The work we love</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
              </div>
              <div className="section_details_container">
              <div className="row row-cols-2">
                  <article className='section_details'>
                    <TiPencil  className='details_icon'/>
                    <div>
                      <h5>Suspendisse varius</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit mi quis.</p>
                    </div>
                  </article>
                  <article className='section_details'>
                    <IoMegaphoneOutline className='details_icon'/>
                    <div>
                      <h5>Elementum tris</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit mi quis.</p>
                    </div>
                  </article>
                  <article className='section_details'>
                  <BiLike className='details_icon'/>
                    <div>
                      <h5>Duis cursus vie</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit mi quis.</p>
                    </div>
                  </article>
                  <article className='section_details'>
                  <ImDisplay className='details_icon' />
                    <div>
                      <h5>Viverra duis diam</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit mi quis.</p>
                    </div>
                  </article>
                  </div>
              </div>
            </div>
            <div className="section_image">
            <img src={Sectionimg} alt="" />
          </div>
          </div>
      </div>
    </>
  )
}

export default Section1