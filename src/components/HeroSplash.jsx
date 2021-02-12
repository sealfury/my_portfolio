import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import Sti1 from '../assets/images/Sti1.jpeg'

const HeroSplash = () => {
  return (
    <>
      <Header as='h2' textAlign='center'>
        <Header.Content>William Höök-Specker</Header.Content>
      </Header>
      <Image centered size='small' circular src={Sti1} />
    </>
  )
}

export default HeroSplash
