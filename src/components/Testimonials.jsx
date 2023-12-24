import SectionHead from "./SectionHead"
import { ImQuotesLeft } from 'react-icons/im'
import Card from "../UI/Card"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { testimonials } from "../data"



const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="container testimonials_container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials"/>
            <Card className="testimonial">
                <div className="testimonial_avatar">
                    <img src={avatar} alt={name} />
                </div>
            </Card>
        </div>
    </section>
  )
}

export default Testimonials