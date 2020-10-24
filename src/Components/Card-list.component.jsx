import React from 'react';
import { Card } from './Card.component';

export const CardList = (props) => {
    return props.shopByCategory.map(({ category, availability ,id}) =>
        (
            <Card category={category} availability={availability} key={id} />
        )
    )
}