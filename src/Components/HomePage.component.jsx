import React from 'react';
import { CardList } from './Card-list.component';

const shopByCategory = [
    {
        category: "Trousers",
        availability: "Shop Now",
        imageUrl:'',
        id:1
    },
    {
        category: "Jackets",
        availability: "Shop Now",
        imageUrl:'',
        id:2
    },
    {
        category: "Hats",
        availability: "Shop Now",
        imageUrl:'',
        id:3
    },
    {
        category: "Womens",
        availability: "Shop Now",
        imageUrl:'',
        id:4
    },
    {
        category: "Mens",
        availability: "Shop Now",
        imageUrl:'',
        id:5
    },
]
export const HomePage = () => {
    return (
        <React.Fragment>
            <div className="homePage">
                <div className="directory-menu">
                    <CardList shopByCategory={shopByCategory} />
                </div>
            </div>
        </React.Fragment>
    )
}