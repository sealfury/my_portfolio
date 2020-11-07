import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Accordion, Icon} from "semantic-ui-react";

export default class JobAccordion extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index
        
        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <Accordion fluid styled>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <Icon name='dropdown' />
                  What is a dog
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <p>
                        A dog is a type of domesticated animal
                    </p>
                </Accordion.Content>
            </Accordion>
        )
    }
}
