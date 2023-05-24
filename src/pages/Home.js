import { Link, useNavigate } from 'react-router-dom';


const HomePage = () => {

    // igy tudjuk programozva hasznalni a navigaciot
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }

    return (
        <>
            <h1>My HOME PAGE!</h1>
            <p>Go to <Link to="/products">List of products</Link></p>
            <p><button onClick={navigateHandler}>Navigate</button></p>
        </>
    )
}

export default HomePage;