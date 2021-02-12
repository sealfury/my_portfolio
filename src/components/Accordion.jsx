import React from 'react'
import { Accordion } from 'semantic-ui-react'
const CvAccordion = () => {
  const AccordionContent = content => <div>{content}</div>

  const SubAccordionPanels = [
    {
      title: 'Work Experience',
      content: { content: WorkSubAccordionContent, key: 'work-content' },
      key: 'work-content',
    },
    {
      title: 'Education',
      content: { content: EducationSubAccContent, key: 'edu-content' },
      key: 'edu-content',
    },
  ]

  const WorkSubAccordionPanels = [
    {
      title: 'Regeringsgatan 21',
      content: { content: AccordionContent('Sous Chef'), key: 'rg21content' },
      key: 'rg21',
    },
    {
      title: 'Geronimos FGT',
      content: { content: AccordionContent('Head Chef'), key: 'gmoscontent' },
      key: 'gmos',
    },
  ]

  const EducationSubAccPanels = [
    {
      title: 'Stockholms Universitet',
      content: {
        content: AccordionContent('Masters Linguistics'),
        key: 'su-content',
      },
      key: 'su-content',
    },
    {
      title: 'University Of Richmond',
      content: {
        content: AccordionContent('Bachelors English Literature/Prelaw'),
        key: 'ur-content',
      },
      key: 'ur-content',
    },
  ]

  const WorkSubAccordionContent = (
    <div>
      <Accordion.Accordion
        style={{ marginLeft: '20px' }}
        panels={WorkSubAccordionPanels}
      />
    </div>
  )

  const EducationSubAccContent = (
    <div>
      <Accordion.Accordion
        style={{ marginLeft: '20px' }}
        panels={EducationSubAccPanels}
      />
    </div>
  )

  const SubAccordions = (
    <div>
      <Accordion.Accordion panels={SubAccordionPanels} />
    </div>
  )

  const AccordionPanels = [
    {
      title: 'Work Experience & Education',
      content: SubAccordions,
      key: 'sub-accordions',
    },
  ]

  const NestedAccordion = () => {
    ;<Accordion defaultActiveIndex={0} panels={AccordionPanels} />
  }
}

export default CvAccordion

// import React, { useState, useRef } from 'react'
// import '../Accordion.css'

// function Accordion(props) {
//   const [setActive, setActiveState] = useState('')
//   const [setHeight, setHeightState] = useState('0px')
//   const [setRotate, setRotateState] = useState('accordion_icon')

//   const content = useRef(null)

//   function toggleAccordion() {
//     setActiveState(setActive === '' ? 'active' : '')
//     setHeightState(
//       setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
//     )
//     setRotateState(
//       setActive === 'active' ? 'accordion_icon' : 'accordion_icon rotate'
//     )
//   }

//   return (
//     <div className='accordion_section'>
//       <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
//         <i
//           className={`${setRotate}`}
//           aria-hidden='true'
//           class='dropdown icon'
//         ></i>
//         <p className='accordion_title'>{props.name}</p>
//       </button>
//       <div
//         ref={content}
//         style={{ maxHeight: `${setHeight}` }}
//         className='accordion_content'
//       >
//         <div
//           className='accordion_text'
//           dangerouslySetInnerHTML={{ __html: props.description }}
//         />
//       </div>
//     </div>
//   )
// }
// export default Accordion
