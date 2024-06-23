import './index.css'

const OurProducts = () => {
    return(
        <div className="product-container">

            <div className="ourproducts-container">
            <img src="https://i.ibb.co/RjhfzNZ/Frame-1.png" className="ourproducts-line" alt="lines" border="0"/>
           <h1 className="about-heading">Our Products</h1>
           <img src="https://i.ibb.co/RjhfzNZ/Frame-1.png" className="ourproducts-line" alt="lines" border="0"/>
            </div>
            <div className="two-products-container">
                <div className="first-product-container">
                <img src="https://i.ibb.co/cYHTNQG/Beej-Patakha-3-1.png" className="product-one-image" alt="Beej-Patakha-3-1" border="0"/>
                <div className="inner-first-product-container">
                    <h1 className="first-product-heading">Raju RasiBomb</h1>
                    <button type="button" className="first-quick-view-button">Quick View</button>
                </div>

                </div>
                <div className="first-product-container">
                <img src="https://i.ibb.co/cYHTNQG/Beej-Patakha-3-1.png" className="product-one-image" alt="Beej-Patakha-3-1" border="0"/>
                <div className="inner-first-product-container">
                    <h1 className="first-product-heading">Ladiyon ki Rani Chani</h1>
                    <button type="button" className="first-quick-view-button">Quick View</button>
                </div>

                </div>
            </div>
            <div className="line-container">
            <img src="https://i.ibb.co/X5QdCtM/Frame-2.png" className="horizontal-line" alt="Frame-2" border="0"/>
            </div>
       </div>

        
    )


}
export default OurProducts