import './home.css';
import logo from '../../assets/2.webp';
const Home = () => {
    return (
        <main className="home__container">
            <div className="main__content">
                <h1>Your Skills deserve the best </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam recusandae quos doloribus asperiores quam. Expedita nesciunt quaerat perspiciatis quod.</p>
                <div className="main__content-btns">
                  <button className="btn btn__red">Play Now </button>
                  <button className="btn btn__gray">Explore more </button>
                </div>
            </div>
            <div className="main__img">
                <img src={logo} alt ='logo' />
            </div>
        </main>
    )
}

export default Home