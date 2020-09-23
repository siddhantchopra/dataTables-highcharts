import React, { useEffect } from 'react'
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

export const Table = (props) => {

    // const handleClick = (e) => {
    //     let sortType = e.target.getAttribute('data-sorttype')
    //     let sort = e.target.getAttribute('data-sort')
    //     props.sortData(sortType, sort)

    // }
    useEffect(()=>{
        $(document).ready(function () {
            $('#example').DataTable({"paging": false,"info": false});
        });  
    },[])
    return (<table className="table" id="example">
            <thead>
                <tr >
                    <th scope="col">RISK CATEGORY</th>
                    <th scope="col">IMPACT</th>
                    <th scope="col">OCCURENCES</th>
                    <th scope="col">HIGH</th>
                    <th scope="col">MEDIUM</th>
                    <th scope="col">lOW</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.table.map((data, index) => <tr key={index}>
                        <td>{data.category}</td>
                        <td>{data.impactPercent}</td>
                        <td>{data.occurences}</td>
                        <td>{data.high}</td>
                        <td>{data.medium}</td>
                        <td>{data.low}</td>
                    </tr>)
                }
            </tbody>
        </table>

    )
}

{/* <th scope="col">RISK CATEGORY</th>
                    <th scope="col">IMPACT<button data-sorttype="impactPercent" data-sort="desc"><i className="fa fa-angle-up"></i></button><button data-sorttype="impactPercent" data-sort="asc"><i className="fa fa-angle-down"></i></button></th>
                    <th scope="col">OCCURENCES<button data-sorttype="occurences" data-sort="desc"><i className="fa fa-angle-up"></i></button><button data-sorttype="occurences" data-sort="asc"><i className="fa fa-angle-down"></i></button></th>
                    <th scope="col">HIGH<button data-sorttype="high" data-sort="desc"><i className="fa fa-angle-up"></i></button><button  data-sorttype="high" data-sort="asc"><i className="fa fa-angle-down"></i></button></th>
                    <th scope="col">MEDIUM<button button data-sorttype="medium" data-sort="desc"><i className="fa fa-angle-up"></i></button><button data-sorttype="medium" data-sort="asc"><i className="fa fa-angle-down"></i></button></th>
                    <th scope="col">lOW<button data-sorttype="low" data-sort="desc"><i className="fa fa-angle-up"></i></button><button data-sorttype="low" data-sort="asc"><i className="fa fa-angle-down"></i></button></th> */}