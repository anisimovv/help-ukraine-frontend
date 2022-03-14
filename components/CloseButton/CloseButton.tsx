import React from 'react'

type Props = {
    onClose: () => void;
}

function CloseButton({onClose}: Props) {
    return (
        <div onClick={onClose}>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99998 9.00645L12.039 14.0455L13.5454 12.539L8.50642 7.50001L13.5454 2.46099L12.039 0.954559L6.99998 5.99358L1.96096 0.954559L0.454529 2.46099L5.49355 7.50001L0.454529 12.539L1.96096 14.0455L6.99998 9.00645Z" fill="#455AF7" />
            </svg>
        </div>
    );
};

export default CloseButton;