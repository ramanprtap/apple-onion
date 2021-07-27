import React from 'react'

const Footer = () => {
  return(
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="links-item">
                <h4>EXPLORE</h4>
                <ul> 
                    <li><a target="_blank" href="https://www.indiaistore.com/iphone">iPhone</a></li> 
                    <li><a target="_blank" href="https://www.indiaistore.com/mac">Mac</a></li> 
                    <li><a target="_blank" href="https://www.indiaistore.com/ipad">iPad</a></li> 
                    <li><a target="_blank" href="https://www.indiaistore.com/watch">Watch</a></li> 
                    <li><a target="_blank" href="https://www.indiaistore.com/tv">TV</a></li> 
                    <li><a target="_blank" href="https://www.indiaistore.com/airpods">AirPods</a></li> 
                    <li><a target="_blank" href="https://www.indiaistore.com/homepod">HomePod</a></li> 
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="links-item">
                <h4>OFFERS</h4>
                <ul> 
                   <li><a target="_blank" href="https://www.indiaistore.com/consumer-loan-offers">Consumer Loan Offers</a></li> 
                   <li><a target="_blank" href="https://www.indiaistore.com/hsbc-offers">HSBC Offers</a></li> 
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="links-item">
                <h4><a target="_blank" href="https://www.indiaistore.com/about-us"> ABOUT US</a></h4>
               
              </div>
            </div>
          </div>
        </div>
       
      </footer>
      <div className="privacyDetails">
          <div className=""><p>&copy;2021 IndiaiStore. All rights reserved.</p></div>
        </div>
    </>
  )
}

export default Footer;