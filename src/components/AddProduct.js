import React from 'react'

const AddProduct = () => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <div className="row-g3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">Product:</label>
                            <input type="text" className="form-control" name='' />

                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Cost of goods:</label>
                            <input type="text" className="form-control" name='' />

                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">category:</label>
                            <input type="text" className="form-control" name='' />

                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Product id:</label>
                            <input type="text" className="form-control" name='duration' />

                        </div>

                        <br />
                        <button className="btn btn-success">Add</button>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default AddProduct