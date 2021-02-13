import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import CvAccordion from './Accordion'

const CV = () => {
  return (
    <Container style={{ backgroundColor: 'rgb(112, 72, 212, 0.4)' }}>
      <Segment raised inverted color='blue' className='accordionSegment'>
        <CvAccordion />
      </Segment>
    </Container>
  )
}

export default CV
