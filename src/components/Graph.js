import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const Graph = (props) => {

    let [repData, updateRepData] = useState({
        options: {
            chart: {
                type: 'column'
            },
            credits: {
                enabled: false
              },
              title: {
                text: null,
              },
            yAxis: {
                min: 0,
                tickInterval: 100,
                title: {
                    text: 'No. of occurences'
                },
                labels: {
                    formatter: function () {
                         return this.value+'K'
                    }
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: ( // theme
                            Highcharts.defaultOptions.title.style &&
                            Highcharts.defaultOptions.title.style.color
                        ) || 'gray'
                    }
                }
            },
            
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false
                    }
                }
            },
    
        }
    })

    useEffect(() => {
        let { xAxis, series } = updateGraph();
        let options = {
            ...repData.options,
            xAxis,
            series,
        };
   
        updateRepData({
            ...repData,
            ...options
        })

    },[])

    const updateGraph = () => {
        let series = []
        let cat = []
        let categories = []
        props.graphData.forEach((data) => {
            let milliseconds = data.dateTime * 1000
            const dateObject = new Date(milliseconds)
            let day = dateObject.toLocaleString("en-US", { day: "numeric" }) + '/' + (dateObject.getMonth() + 1);
            categories.push(day)
        })
        for (const key in props.tableData) {
            cat.push(props.tableData[key].category)
        }
        cat.forEach((element, ind) => {
            for (const key in props.graphData) {
                if (series.length === 0) {
                    series.push({ name: element, data: [] })
                }
                series.forEach((data, index) => {
                    if (data.name === element) {
                        series[index].data.push(props.graphData[key][element])
                    }
                    else if (series.length === ind) {
                        series.push({ name: element, data: [props.graphData[key][element]] })
                    }
                })
            }
        });
        return {
            xAxis: {
                categories
            },
            series
        }
    }
    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={repData} />
        </>
    )
}
