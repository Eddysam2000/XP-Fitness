import { useState } from "react"
import SectionHead from "./SectionHead"
import { ImQuotesLeft } from 'react-icons/im'
import Card from "../UI/Card"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { testimonials } from "../data"



const Testimonials = () => {
    const [index, setIndex] = useState(3)
    const {name,quote, job, avatar} = testimonials[index]
  return (
    <section className="testimonials">
        <div className="container testimonials_container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials_head"/>
            <Card className="testimonial">
                <div className="testimonial_avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="testimonial_quote">{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className="testimonial_title">{job}</small>
            </Card>
            <div className="testimonials_btn-container">
                <button className="testimonials_btn"><IoIosArrowDropleftCircle/></button>
                <button className="testimonials_btn"><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials