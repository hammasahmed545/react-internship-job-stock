import React from "react";

const ManageEmployeeCard = ({pic, name, position}) => {
    return(
        <div className="col-md-4 col-sm-6">
            <div className="jn-employee">
                <a href="#" className="mail-form">
                    <i className="fa fa-envelope"> </i>
                </a>
                <div className="pull-right">
                    <div className="btn-group action-btn">
                        <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-ellipsis-v"> </i>
                        </button>
                        <ul className="dropdown-menu pull-right" role="menu">
                            <li> <a href="#">Favourite</a> </li>
                            <li> <a href="#">Edit</a> </li>
                            <li> <a href="#">Delete</a> </li>
                        </ul>
                    </div>
                </div>
                <div className="employee-caption">
                    <div className="employee-caption-pic">
                        <img src={pic} className="img-responsive" alt=""/>
                    </div>
                    <h4>{name}</h4>
                    <span className="designation">{position}</span>
                    <ul className="employee-social">
                        <li><a href="#" title=""> <i className="fa fa-facebook"> </i></a></li>
                        <li><a href="#" title=""> <i className="fa fa-twitter"> </i></a></li>
                        <li><a href="#" title=""> <i className="fa fa-google-plus"> </i></a></li>
                        <li><a href="#" title=""> <i className="fa fa-linkedin"> </i></a></li>
                        <li><a href="#" title=""> <i className="fa fa-instagram"> </i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ManageEmployeeCard