import React from 'react';
import PhotoCard from '../Components/PhotoCard';
import teSynth from '../Images/teenage-engineering-op1.jpg';
import niDJController from '../Images/native-instruments-traktor-kontrols2.jpg';

class Gallery extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PhotoCard photo={{imgURL:teSynth, altText:"op1 synth", imgDescription:"If I could afford it, I'd buy this Teenage Engineering OP-1 synth." }} />
                <PhotoCard photo={{imgURL:niDJController, altText:"dj controller", imgDescription:"If I could afford it, I'd buy this Native Instruments DJ Controller."}} />
            </React.Fragment>
        );
    }
}

export default Gallery;