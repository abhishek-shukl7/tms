/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
interface ContentGroupProps {
   activeIndex: number;
 }

const About: React.FC<ContentGroupProps> = ({ activeIndex }) => {
    
return (
    <div id="profile5" className={activeIndex === 4 ? 'tab-pane fade active show' : 'tab-pane fade'}>
                                 <p>I'm Web Developer from California. I code and design websites worldwide. Mauris variustellus vitae 
                                    tristique sagittis. Sed aliquet, est nec auctor aliquet, orci ex vestibulum ex, non pharetra lacus
                                    erat ac nulla.</p>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis mattis nam ipsum pharetra porttitor eu 
                                    orci, nisi. Magnis elementum vitae eu, dui et. Tempus etiam feugiat sem augue sed sed. Tristique 
                                    feugiat mi feugiat integer consectetur sit enim penatibus. Quis sagittis proin fermentum tempus 
                                    uspendisse ultricies. Tellus sapien, convallis proin pretium.</p>
                                 <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis mattis nam ipsum pharetra porttitor eu.
                                    Tristique feugiat mi feugiat integer consectetur sit enim penatibus. Quis sagittis proin fermentum tempus 
                                    uspendisse ultricies. Tellus sapien, convallis proin pretium.</p>
                              </div>
  );
};

export default About;