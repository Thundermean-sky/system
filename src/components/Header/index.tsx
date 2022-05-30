import {Fragment} from "react";
import {Image} from "antd";
import './index.scss'
import Logo from '../../assets/logo.png'

// const Logo = img


export default function Head() {
    return (
        <Fragment>
            <div className='Header'>
                <div className='Logo'>
                    <Image
                        width={150}
                        height={100}
                        src={Logo}
                        preview={false}
                    />
                </div>
                <div className='User'>
                    用户名
                </div>
            </div>
        </Fragment>
    )
}
