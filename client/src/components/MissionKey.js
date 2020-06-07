import React from 'react';

export default function MissionKey() {

    return (
        // Bootstrap class for margin on the top and the bottom
        <div className="my-3">
            {/* Padding on left and right, margin right 2 */}
            <p>
                <span className="px-3 mr-2 bg-success"/>  = Success
            </p>
            <p>
                <span className="px-3 mr-2 bg-danger"/>  = Fail
            </p>
        </div>
    )
}