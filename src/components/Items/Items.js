// import { findAllByTitle} from '@testing-library/react'
import React from 'react'
import Button from '../Button/Button'
import './Items.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = ({title,desc,desc2,backgroundImg,leftBtnTxt,leftBtnLink,rightBtnTxt,rightBtnLink,twoButtons,first}) => {
    return (
        <div className='item' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item-container">
                <div className="item-text">
                    <p>{title}</p>
                    <div className="itemDesc">
                        <p>{desc}</p>
                        <div>{desc2}</div>
                    </div>
                </div>
                <div className="item-lowerThird">
                    <div className="item-buttons">
                        <Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />
                        {twoButtons &&(
                        <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
                        )}
                    </div>
                {first && (
                <div className="item-expand">
                    <ExpandMoreIcon/>
                </div>
                )}
            </div>
        </div>
        </div>
    )
}

export default Item