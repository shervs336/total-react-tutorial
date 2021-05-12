import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './header';
import { CustomDate } from './custom-date';
import { FruitLoops } from './fruit-loops';

let fruit : Array<string> = [
    'red',
    'green',
    'blue',
    'yellow',
    'pink',
    'orange'
];

ReactDOM.render(
    <div>
        <Header text="Your dogs jank"/>
        <CustomDate />
        <p>This is a paragraph</p>
        <a href="#">Click me</a>
        <FruitLoops fruit={fruit} />
    </div>,
    document.querySelector('#root')
);
