import propTypes from 'prop-types';
import React from 'react';
import {SectionContainer, Title} from './Section.styled'

export const Section = ({ title, children }) => {
    <SectionContainer>
        <Title>{title}</Title>
        {children}
    </SectionContainer>
}

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
};

export default Section;