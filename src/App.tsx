import {Fragment,} from "react";
import Head from "./components/Header";
import Navigator from "./components/Navigator";
import './App.scss'
import Footer from "./components/Footer";


export default function App(){
    return (
        <Fragment>
            <Head/>
            <div className='Content'>
                <div className='Navigator'>
                    <Navigator/>
                </div>
                <div className='Box'>
                    <div className='Container'>

                    </div>
                    <div className='Footer'>
                        <Footer/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
