import SectionHead from "./SectionHead"
import { FaQuestion } from "react-icons/fa"
import { faqs } from "../data"
import FAQ  from "./FAQ"


const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs_container">
        <SectionHead icon={FaQuestion} title="FAQs" />
      </div>
    </section>
  )
}

export default FAQs