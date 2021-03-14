import '../Card/Card.css'
import faker from 'faker'

const Card = (props) => {
  return <div className="container">
    <img src={props.src} />
    <h1>{faker.lorem.words()}</h1>
    <p>{faker.lorem.words()}</p>
    <div>
      <a href="/">share</a>
      <a href="/">explor</a>
    </div>
  </div>
}

export default Card