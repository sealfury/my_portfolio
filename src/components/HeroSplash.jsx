import React from 'react'
import { Image, Header, Divider, Container } from 'semantic-ui-react'
import Sti1 from '../assets/images/Sti1.jpeg'

const HeroSplash = () => {
  return (
    <>
      <Header as='h2' textAlign='center'>
        <Header.Content className='header-text'>
          William Höök-Specker
        </Header.Content>

        <Divider color='blue' fitted horizontal>
          <Container text textAlign='center'>
            <Image
              size='medium'
              bordered='true'
              inline='true'
              circular
              src={Sti1}
              as='a'
              href='https://github.com/sealfury'
            />
          </Container>
        </Divider>
      </Header>
    </>
  )
}

export default HeroSplash
