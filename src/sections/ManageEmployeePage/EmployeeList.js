import React from "react"

import SearchFilter from "../../components/ManageEmployeePage/SearchFilter";
import ManageEmployeeCard from "../../components/ManageEmployeePage/ManageEmployeeCard";

import {EData} from "../../data/employee_data";

const EmployeeList = () => {
    return (
        <section className="manage-employee gray">
            < div className="container">
                <SearchFilter/>
                <div className="row">
                    <ManageEmployeeCard pic ={EData[0].pic} name ={EData[0].name} position={EData[0].position}/>
                    <ManageEmployeeCard pic ={EData[1].pic} name ={EData[1].name} position={EData[1].position}/>
                    <ManageEmployeeCard pic ={EData[2].pic} name ={EData[2].name} position={EData[2].position}/>

                    <ManageEmployeeCard pic ={EData[3].pic} name ={EData[3].name} position={EData[3].position}/>
                    <ManageEmployeeCard pic ={EData[4].pic} name ={EData[4].name} position={EData[4].position}/>
                    <ManageEmployeeCard pic ={EData[0].pic} name ={EData[0].name} position={EData[0].position}/>

                    <ManageEmployeeCard pic ={EData[1].pic} name ={EData[1].name} position={EData[1].position}/>
                    <ManageEmployeeCard pic ={EData[2].pic} name ={EData[2].name} position={EData[2].position}/>
                    <ManageEmployeeCard pic ={EData[3].pic} name ={EData[3].name} position={EData[3].position}/>
                </div>
                <div className="row">
                    <ul className="pagination">
                        <li> <a href="#">&laquo;</a></li>
                        <li className="active"><a href="#">1</a></li>
                        <li> <a href="#">2</a></li>
                        <li> <a href="#">3</a></li>
                        <li> <a href="#">4</a></li>
                        <li> <a href="#"><i className="fa fa-ellipsis-h"> </i> </a> </li>
                        <li> <a href="#">&raquo;</a></li>
                    </ul>
                </div>
            </div>
        </section>

    )
}
export default EmployeeList