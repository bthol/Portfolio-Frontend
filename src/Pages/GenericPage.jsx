import React from 'react';
import { GenericContent as Content } from '../ContentPropModules/GenericContent';

const GenericPage = (props) => {

    return (
        <div className="page-content">
            <div id="section-1" className="content-container shadow-behind container-first">
                <div>
                    <p>First Container Content</p>
                </div>
            </div>
            <div id="section-2" className="content-container shadow-behind">
                {
                    props.mobile
                    ? <p>Is Mobile</p>
                    : <p>Isn't Mobile</p>
                }
                <div>
                    <p>Middle Container Content</p>
                </div>
            </div>
            <div id="section-3" className="content-container shadow-behind container-last">
                <div>
                    <p>Last Container Content</p>
                </div>
            </div>
        </div>
    )
}

export { GenericPage }