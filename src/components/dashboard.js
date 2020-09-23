import React, { useState } from 'react'
import { TableData, GraphData } from './constant'
import { Graph } from './Graph'
import { Table } from './Table'

export const Dashboard = () => {
    let [tableData] = useState(TableData.aggregated.items)
    let [graphData] = useState(GraphData.aggregated.items)
    
    // const handleSorting = (type, sort) => {
    //     if (sort === 'desc') {
    //         let dataDesc = tableData.sort((a, b) => b[type] - a[type])
    //         setTableData([...dataDesc])
    //     } if (sort === 'asc') {
    //         let dataAsc = tableData.sort((a, b) => a[type] - b[type])
    //         setTableData([...dataAsc])
    //     }
    // }
    
    return (
        <div className="container">
            <h3>Timeline Details</h3>
            <Graph graphData={graphData} tableData={tableData}/>
           <h3>Risk Category Summary</h3>
            <Table table={tableData} 
            // sortData={handleSorting}
             />
        </div>
    )
}
