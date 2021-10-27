import React from 'react';
import './PageError.css'
import error from '../../images/error.jpg'

const PageError = () => {
    return (
        <div class="card mb-3 w-50 mx-auto mt-5 ">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={error} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title mt-5"><div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use href="#exclamation-triangle-fill" /></svg>
                            <h3 className="my-3">
                                404! Page Error
                            </h3>
                        </div></h5>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageError;