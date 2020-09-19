import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
import { useSelector } from 'react-redux';
const DirectoryItem=()=>{
   
    const sections=useSelector((state)=>state.directory.sections)
        return(
            <div className='directory-menu'>
               { sections.map(({id,...otherSectionProps})=>(
                <MenuItem  id={id} {...otherSectionProps} />
                
                 ) )}

            </div>
        )
    
};
export default DirectoryItem;