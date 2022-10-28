import React from 'react'
import questions from '../../faq.json'
import Banner from "../../components/banner/Banner";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
const FAQs = () => {
  return (
      <>
      <Navbar />
      <Banner>
      <Banner.Header>Frequently Asked Questions</Banner.Header>
      {questions.map((question) => (
        <Banner.Entity key={question.id}>
          <Banner.Question>{question.question}</Banner.Question>
          <Banner.Text>{question.answer}</Banner.Text>
        </Banner.Entity>
      ))}
      </Banner>
      <Footer />
      </>
  )
}

export default FAQs