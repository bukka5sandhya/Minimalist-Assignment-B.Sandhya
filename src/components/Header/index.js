import './index.css'

const Header=()=>{
    return(
        <div className="bg-container">
            <img src="https://i.ibb.co/BrQYc1D/Frame.png" alt="Firefly" border="0" className="firefly-image"/>
            <div className="header-container">
                <h1 className="main-heading">The choice is yours <br />
                Because they dont have one</h1>
                <button type="button" className="quickview-button" >QUICK VIEW</button> 
                
            </div>
            
        </div>
    )

}
export default Header;