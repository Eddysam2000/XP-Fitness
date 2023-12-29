import Header from '../../components/Header'
import HeaderImage from '../../images/header.png'
import StoryImage from '../../images/about.png'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quos ipsam quisquam ipsa aut doloribus voluptate reiciendis! Sapiente, molestiae hic?
    </Header>

    <section className="about_story">
      <div className="container about_story-container">
        <div className="about_section-image">
          <img src="" alt="" />
        </div>
      </div>
    </section>
    </>
  )
}

export default About