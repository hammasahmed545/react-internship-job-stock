import React from "react"

const SearchFilter = () => {
    return (
        <div className="row">
            <div className="col-md-12 col-sm-12">
                <div className="search-filter">
                    <div className="col-md-4 col-sm-5">
                        <div className="filter-form">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search…"/>
                                <span className="input-group-btn">
                                    <button type="button" className="btn btn-default">Go</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-7">
                        <div className="short-by pull-right">
                            Short By
                            <div className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown<i className="fa fa-angle-down" aria-hidden="true"> </i></a>
                                <ul className="dropdown-menu">
                                    <li> <a href="#">Short By Date</a> </li>
                                    <li> <a href="#">Short By Views</a> </li>
                                    <li> <a href="#">Short By Popular</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchFilter