import React from 'react';
import List from '../List/List.jsx';
import './Board.css';


const Board = (props) => {
    return (
        <section className=''>
            <div className='container'>
                <div className="row Board">
                    Tablero
                    <List></List>
                </div>
            </div>
        </section>
    )
}
export default Board