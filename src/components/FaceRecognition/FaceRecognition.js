import React from "react";

const FaceRecognition = ( { imageUrl } ) => {
    return (
        <div className="center w-50">
            <img alt="detect subject " src={ imageUrl } />

        </div>
    );

}

export default FaceRecognition;