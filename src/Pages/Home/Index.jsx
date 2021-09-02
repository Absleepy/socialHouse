import React from 'react'
import Footer from '../../Components/CommonComponents/Footer/Footer'
import Header from '../../Components/CommonComponents/Header/Header'
import Form from '../../Components/PageComponents/Home/Form/Form'

 const Home = () => {
    return (
        <div className="wrapper">
            <Header />
            <Form />
            <Footer />
        </div>
    )
}
export default Home;