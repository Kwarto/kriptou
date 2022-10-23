import React from 'react'
import { WhyKriptouWrapper, WhyContent, WhySideImg, WhySideTxt } from './WhyKriptouElement'
import { FaQuestionCircle } from 'react-icons/fa'
import mockupImg from '../../images/mockup.png'
function WhyKriptou() {
  return (
      <>
        <WhyKriptouWrapper>
          <h1 className='head'>Why Kriptou <span><FaQuestionCircle /></span></h1>
        <WhyContent>
            <WhySideImg>
                    <div>
                    <img src={mockupImg} alt="mobile design" />
                    <img src={mockupImg} alt="mobile design"/>
                    </div>
            </WhySideImg>
            <WhySideTxt>
             <div>
                       <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae corporis itaque maxime porro labore temporibus dolore, deserunt doloribus laborum consectetur, minima ipsum! Delectus ipsum error perferendis suscipit! Voluptates necessitatibus, eligendi architecto expedita unde earum. Eligendi cumque recusandae minus deserunt iure!
                       </p>
             </div>
             <div>
                       <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae corporis itaque maxime porro labore temporibus dolore, deserunt doloribus laborum consectetur, minima ipsum! Delectus ipsum error perferendis suscipit! Voluptates necessitatibus, eligendi architecto expedita unde earum. Eligendi cumque recusandae minus deserunt iure!
                       </p>
             </div>
             <div>
                       <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae corporis itaque maxime porro labore temporibus dolore, deserunt doloribus laborum consectetur, minima ipsum! Delectus ipsum error perferendis suscipit! Voluptates necessitatibus, eligendi architecto expedita unde earum. Eligendi cumque recusandae minus deserunt iure!
                       </p>
             </div>
             <div>
                       <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae corporis itaque maxime porro labore temporibus dolore, deserunt doloribus laborum consectetur, minima ipsum! Delectus ipsum error perferendis suscipit! Voluptates necessitatibus, eligendi architecto expedita unde earum. Eligendi cumque recusandae minus deserunt iure!
                       </p>
             </div>
            </WhySideTxt>
 
          </WhyContent>
        </WhyKriptouWrapper>
      </>
  )
}

export default WhyKriptou