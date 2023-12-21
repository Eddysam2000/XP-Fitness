import Image from '../images/values.png'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'


const Values = () => {
  return (
    <section className='values'>
        <div className="container values_container">
            <div className="values_left">
                <div className="values_image">
                    <img src={Image} alt="Values Image" />
                </div>
            </div>
            <div className="values_right">
                <SectionHead icon={<GiCutDiamond/>} title="Values"/>
            </div>
        </div>
    </section>
  )
}

export default Values