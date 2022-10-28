import React from 'react'
import { AiFillApi } from 'react-icons/ai'
import {GrSystem, GrUserWorker} from 'react-icons/gr'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { DonateWrapper, DonateContent } from './DonateElement'
function Donate() {
  return (
    <>
      <Navbar />
       <DonateWrapper>
      <DonateContent>
        <div className="support">
          <h1>Support My Works</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores rerum, blanditiis id, quasi repellat et cum ea libero fuga dolorem similique ad distinctio obcaecati quam incidunt molestias optio? Repellat.</p>
        </div>
      </DonateContent>
      <div className="give">
        <h2>GIVING</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt sit blanditiis ratione eaque dolores expedita accusamus officiis tempora provident pariatur, unde quo omnis veniam.</p>
      </div>

      <div className="donate-with-purpose">
        <div className="card">
          <GrSystem className='s-ico'/>
          <h3>System Management</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit dolore voluptatem. Aliquid fugiat doloremque ipsum itaque dolores quae in.</p>
        </div>
        <div className="card">
          <AiFillApi className='s-ico'/>
          <h3>Get Paid APIs</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit dolore voluptatem. Aliquid fugiat doloremque ipsum itaque dolores quae in.</p>
        </div>
        <div className="card">
          <GrUserWorker className='s-ico'/>
          <h3>Recruit Workers</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit dolore voluptatem. Aliquid fugiat doloremque ipsum itaque dolores quae in.</p>
        </div>
      </div>
      <DonateContent>
        <div className="cta">
        <h1>Wants the best for kriptou ?</h1>
        <div className='btn'>
          <a href="https://donorbox.org/donate-kriptou">Donate Now</a>
        </div>
        </div>
      </DonateContent>
       </DonateWrapper>
      <Footer />
    </>
  )
}

export default Donate