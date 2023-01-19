import propTypes from 'prop-types';
import React from 'react';
import {Container, Title, Text} from './Section.styled'

const Section = ({ title, children }) => (
    <Container>
        <Title>
            <Text>{title}</Text>
        </Title>
        {children}
    </Container>
);

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
};

export default Section;