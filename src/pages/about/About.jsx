import Header from '../../components/Header'
import HeaderImage from '../../images/header.png'
import StoryImage from '../../images/hull.png'
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
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about_section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quis corporis amet, neque provident culpa dolorum voluptatum libero quasi voluptate aspernatur debitis numquam consequatur mollitia. Unde rerum velit blanditiis accusamus corrupti nobis et, deserunt odio dolorem id eveniet dignissimos cum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit et rerum cupiditate dolores earum voluptates pariatur debitis porro eveniet consequatur quis corrupti, impedit quibusdam, sapiente ut? Provident, facere laudantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur nulla, porro quidem molestias suscipit.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About