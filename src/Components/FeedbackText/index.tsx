import React, { FC } from 'react';

import './FeedbackText.styles.scss';

type FeedbackTextProps = {
    message: string;
    white?: boolean;
}

const FeedbackText: FC<FeedbackTextProps> = ({ message, white }) => {
    return (
        <div className={`feedback__text ${white ? 'white' : ''}`}>
            {message}
        </div>
    );
}

export default FeedbackText;
