import React from 'react'
// import { fa-github } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faBehance
// } from "@fortawesome/free-brands-svg-icons";
import './Work.css'
import pro_dep from '../Images/project_dep.jpg'
import graphic from '../Images/graphic.jpg'
import embro from '../Images/embrodary.jpg'
import gc from '../Images/gc.jpg'
import sketch from '../Images/sketch.jpg'
import depression from '../Images/depression.jpg'

function Work() {
  return (
    <>
        <div id='work-space'>
            <div className='projects-table'>
                <div className='right-align-project'>
                  <div className='project-img'><a href='https://www.behance.net/gallery/162486929/Phulia-Internship'><img src={depression} alt='IIHT'/></a></div>
                  <div className='project-body'>
                        <div className='project-highlight'>Internship</div>
                        <div className='project-name'>IIHT (Fulia)</div>
                        <div className='project-des'>
                        Learned about
hole process of
weaving.
Checked out
diffrent types of
it. Also did some
hands on for the same. Details about the internship is documented in the link. Please click on the image to check out.
                        </div>
                        <div className='tools'>
                            <div>Weaving</div>
                            <div>Dyeing</div>
                            <div>Motifs</div>
                            <div>Jacquard</div>
                        </div>
                        {/* <div className='tools'>
                            <div><a href='https://www.behance.net/gallery/162486929/Phulia-Internship'><FontAwesomeIcon icon={faBehance} /></a></div>     
                        </div>  */}
                   </div>  
                </div>

                <div className='left-align-project'>
                  <div className='project-img'><a href='#'><img src={graphic} alt='Graphic'/></a></div>
                  <div className='project-body'>
                        <div className='project-highlight'>Featured Project</div>
                        <div className='project-name'>Graphics</div>
                        <div className='project-des'>
                        I have made some amazing graphities using some of the trending softwares. It is my passion & I have use my own creativity to make something new in the graphics field. Feel free to check out by clicking the images.
                        </div>
                        <div className='tools'>
                            <div>Photoshop</div>
                            <div>Illustrator</div>
                            <div>Canva</div>
                        </div>
                        {/* <div className='tools'>
                            
                            <div><FontAwesomeIcon icon={faBehance} /></div>    
                        </div>  */}
                   </div>  
                </div>

                <div className='right-align-project'>
                <div className='project-img'><a href='https://www.behance.net/gallery/163237407/Whats-inside-your-mind'><img src={pro_dep} alt='Depression'/></a></div>
                  <div className='project-body'>
                        <div className='project-highlight'>Featured Project</div>
                        <div className='project-name'>Depression</div>
                        <div className='project-des'>
                        People who have never dealt with depression think it's just being sad or being in a bad mood. That's not what depression is for me; it's falling into a state of grayness and numbness.
                        </div>
                        {/* <div className='tools'>
                            <div>VS Code</div>
                            <div>React.js</div>
                            <div>Node.js</div>
                            <div>Extension</div>
                        </div> */}
                        {/* <div className='tools'>
                            
                            <div><FontAwesomeIcon icon={faBehance} /></div>    
                        </div>  */}
                   </div>  

                  
                </div>

                <div className='left-align-project'>
                  <div className='project-img'><a href='https://www.behance.net/gallery/162486511/Womens-Jacket-AW2021-Portfolio'><img src={gc} alt='IIHT'/></a></div>
                  <div className='project-body'>
                        <div className='project-highlight'>Featured Project</div>
                        <div className='project-name'>Garment Construction</div>
                        <div className='project-des'>
                        Designing is not the end task for a designer. We also have to make the design in reality & then comes Garment construction into picture. I have converted my imaginations into reality & you cam check that out by clicking on the side image.
                        </div>
                        {/* <div className='tools'>
                            <div>VS Code</div>
                            <div>React.js</div>
                            <div>Node.js</div>
                            <div>Extension</div>
                        </div> */}
                        {/* <div className='tools'>
                            
                            <div><FontAwesomeIcon icon={faBehance} /></div>    
                        </div>  */}
                   </div>  
                </div>

                <div className='right-align-project'>
                  <div className='project-img'><a href='https://www.behance.net/gallery/162528753/DRAWING'><img src={sketch} alt='IIHT'/></a></div>
                  <div className='project-body'>
                        <div className='project-highlight'>Featured Project</div>
                        <div className='project-name'>Hand Sketch</div>
                        <div className='project-des'>
                        By sketching we can convert our imaginations into reality. It is my passion & I always love to do sketching in my leasure time. Hope you will enjoy my art. To follow please click on the side image.
                        </div>
                        <div className='tools'>
                            <div>Mandala</div>
                            <div>Croquie</div>
                            {/* <div>Node.js</div>
                            <div>Extension</div> */}
                        </div>
                        {/* <div className='tools'>
                        
                            <div><FontAwesomeIcon icon={faBehance} /></div>    
                        </div>  */}
                   </div>  
                </div>
                        
                <div className='left-align-project'>
                <div className='project-img'><a href='https://www.behance.net/gallery/162511799/EMBROIDERY'><img src={embro} alt='IIHT'/></a></div>
                  <div className='project-body'>
                        <div className='project-highlight'>Featured Project</div>
                        <div className='project-name'>Embroidery</div>
                        <div className='project-des'>
                        From ancent days hand stiching is an art & we Indians always carries the legacy of this art with us. I have also tried my hands in it. Please click the iamge to give a look. 
                        </div>
                        <div className='tools'>
                            <div>Phulkari</div>
                            <div>Kantha</div>
                            <div>Kutch</div>
                        </div>
                        {/* <div className='tools'>
                        
                            <div><FontAwesomeIcon icon={faBehance} /></div>    
                        </div>  */}
                   </div>  
                </div>
            </div>
        </div>
    </>
  )
}

export default Work