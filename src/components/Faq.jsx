import React from 'react'
import Footer from './Footer'

function Faq() {
  return (
    <>
    <div>
      <h2 className='text-center mt-5 '>Faqs </h2>
      <div style={{marginBottom:"50px"}} className="accordion " id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <b>1. What is counselling, and how can it help me?</b> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Counselling is a professional service where a trained counselor provides support, guidance, and strategies to help individuals manage personal challenges, improve mental health, and enhance well-being. It offers a safe and confidential space to explore your feelings, identify issues, and work towards positive changes in your life. Whether you're dealing with stress, anxiety, relationship issues, or life transitions, counselling can help you gain clarity and develop coping mechanisms.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <b>2. How do I know if I need counselling?</b> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      You might consider counselling if you're feeling overwhelmed, stuck, or unable to cope with emotions or situations on your own. Signs you could benefit from counselling include persistent feelings of sadness, anxiety, or anger; difficulty managing stress; trouble in relationships; or challenges at work or school. Counselling is also beneficial for anyone seeking personal growth, improved self-awareness, or support during significant life changes.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <b>3. Is online counselling as effective as in-person sessions?</b>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, online counselling can be just as effective as in-person sessions for many individuals. It offers the added convenience of accessing support from the comfort of your home, saving time and reducing travel stress. Licensed therapists use secure platforms to ensure privacy and deliver the same professional care through video, chat, or voice calls. Online counselling is particularly helpful for those with busy schedules, limited mobility, or who live in remote areas.
      </div>
    </div>
  </div>
</div>
    </div>
    <Footer></Footer>
    </>
    
  )
}

export default Faq
