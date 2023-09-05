import React from 'react';
import { GenericContent as Content } from '../ContentPropModules/GenericContent';

const GenericPage = (props) => {

    return (
        <div className="page-content">
            <div id="generic-section-1" className="content-container shadow-behind container-first">
                <h3 className="underline text-x-large">Section Title</h3>
                {
                    props.mobile
                        ? <div>
                            <p>First Container Content</p>
                            <p>Is Mobile</p>
                        </div>
                        : <div>
                            <p>First Container Content</p>
                            <p>Isn't Mobile</p>
                        </div>
                }
            </div>
            <div id="generic-section-2" className="content-container shadow-behind">
                <h3 className="underline text-x-large">Section Title</h3>
                {
                    props.mobile
                        ? <div>
                            <p>Middle Container Content</p>
                            <p>Is Mobile</p>
                        </div>
                        : <div>
                            <p>Middle Container Content</p>
                            <p>Isn't Mobile</p>
                        </div>
                }
            </div>
            <div id="generic-section-3" className="content-container shadow-behind container-last">
                <h3 className="underline text-x-large">Section Title</h3>
                {props.mobile
                    ? <div>
                        <p>Last Container Content</p>
                        <p>Is Mobile</p>
                    </div>
                    : <div>
                        <p>Last Container Content</p>
                        <p>Isn't Mobile</p>
                    </div>
                }
            </div>
        </div>
    )
}

export { GenericPage }