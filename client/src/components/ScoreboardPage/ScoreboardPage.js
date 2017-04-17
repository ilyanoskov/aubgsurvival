import React from 'react';
import Header from '../common/Header';
import Scores from './Scores';

class ScoreboardPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Scores />    

            </div>
        );
    }
}

export default ScoreboardPage;
