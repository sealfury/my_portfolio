import React from 'react'
import { Accordion } from 'semantic-ui-react'

const AccordionContent = content => (
  <div className='accordionContent'>{content}</div>
)

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

const WorkSubAccordionContent = (
  <div className='accordionIndent'>
    <Accordion.Accordion
      style={{ marginLeft: '10px', marginTop: '4px' }}
      className='accordionPadding'
      panels={WorkSubAccordionPanels}
    />
  </div>
)

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
const EducationSubAccContent = (
  <div className='accordionIndent'>
    <Accordion.Accordion
      style={{ marginLeft: '10px', marginTop: '4px' }}
      className='accordionPadding'
      panels={EducationSubAccPanels}
    />
  </div>
)
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
const SubAccordions = (
  <div className='accordionIndent'>
    <Accordion.Accordion
      className='accordionPadding'
      panels={SubAccordionPanels}
    />
  </div>
)

const AccordionPanels = [
  {
    title: 'Work Experience & Education',
    content: { content: SubAccordions, key: 'sub-accordions' },
  },
]

const CvAccordion = () => {
  return (
    <Accordion
      className='CvAccordion'
      defaultActiveIndex={0}
      panels={AccordionPanels}
      fluid
      styled
    />
  )
}

export default CvAccordion
