import React from 'react';
// import './costom-buttom.style.scss';
import {CostomButtonContainer} from './costom-button-styledcomponent'

const CostomButtom=({children,...props})=>(
    <CostomButtonContainer {...props}>
        {children}

    </CostomButtonContainer>
)


export default CostomButtom;