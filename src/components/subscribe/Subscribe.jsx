import React from 'react'
import { SubscribeModal, ModalContent, LeftContent } from './SubscribeElement'
import TickerWidget from '../Widget/TickerWidget'
function Subscribe() {
  return (
    <>
          <SubscribeModal>
        <ModalContent>
         <h2>Getting Started</h2>
         <h4>Tell me about new features, trending and latest cryptocurrencies in the market</h4>
          <p>
           By submitting this form, i agree that my email address, name and location may be use by Kriptou team for the purpose outlined about. I agree that Kriptou may process said data using third-party-services for these purposes in accordance with the Kriptou Privacy Policy. I understand that i can revoke this consent at anytime. In addition, an unsubscribe link is included in each mail sent.
          </p>
        <form action="/" method="post">
          <input type="email" name="subscriber" id="subscribeMail" placeholder='Enter email' required />
          <button type="submit">Subscribe</button>
        </form>
        </ModalContent>
        <LeftContent>
        <h2>New To Kriptou</h2>
        <p><a href="/">Follow us on instagram</a></p>
        <p><a href="/">Join us on Facebook</a></p>
        <p><a href="/">Subscribe our youtube channel</a></p>
        <p><a href="/">Follow us on Twitter</a></p>
        </LeftContent>
      </SubscribeModal>
      <TickerWidget />
    </>
  )
}

export default Subscribe