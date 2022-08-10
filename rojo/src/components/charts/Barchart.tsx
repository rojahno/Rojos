import * as d3 from "d3";
import { axisBottom, axisLeft, select, selectAll } from "d3";
import { useEffect, useRef } from "react";
import useWindowDimensions from "../../hooks/UseWindowDimensions";

interface Props {
    data: any[];
    xAxisLabels: string[];
    yAxisLabels: string[];
}

const data = [
    { name: "data1", value: 2 },
    { name: "data2", value: 5 },
    { name: "data3", value: 6 },
    { name: "data4", value: 1 },
    { name: "data5", value: 2 },
];

export const Barchart = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const { width, height } = useWindowDimensions();
    const svgWidth = width * 0.5;
    const svgHeigth = height * 0.45 + 10;
    const chartWidth = width * 0.45;
    const chartHeight = height * 0.4;
    const chartMarginLeft = 40;
    const chartMarginTop = 10;

    useEffect(() => {
        if (svgRef.current) {
            drawChart();
        }
    }, [svgRef, width, height]);

    const drawChart = () => {
        const chart = drawMainSvg();
        const ticks = data.length;

        // The scales for the x and y axis
        // The domain controls the values shown on the axis
        // "scaleTime" is used for dates
        // "scaleLinear" is used for numbers
        // "scaleOrdinal" is used for categorical data
        // "scaleBand" is used for categorical data with a fixed width
        var scaleX = d3
            .scaleBand()
            .domain(data.map(({ name }) => name))
            .range([0, chartWidth])
            .padding(0.4);
        var scaleY = d3.scaleLinear().domain([0, 10]).range([chartHeight, 0]);

        drawGrid(chart, scaleX, scaleY, ticks);
        drawAxis(chart, scaleX, scaleY, ticks);
        drawbars(chart, scaleX, scaleY);
    };

    const drawMainSvg = () => {
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();
        // Main element
        var chart = svg
            .append("g")
            .classed("graph", true)
            .attr("transform", "translate(" + chartMarginLeft + "," + chartMarginTop + ")");
        return chart;
    };

    const drawAxis = (chart: any, scaleX: any, scaleY: any, ticks: any) => {
        // Draw x axis
        chart
            .append("g")
            .classed("x axis", true)
            .attr("transform", "translate(0," + chartHeight + ")")
            .call(
                d3
                    .axisBottom(scaleX)
                    .tickFormat((d) => {
                        return `${d}`;
                    })
                    .ticks(ticks)
            );
        // Draw y axis
        chart
            .append("g")
            .classed("y axis", true)
            .call(
                d3.axisLeft(scaleY).tickFormat((d) => {
                    return `${d}`;
                })
            );
    };

    const drawGrid = (chart: any, scaleX: any, scaleY: any, ticks: any) => {
        // Draw horizontal grid lines
        chart
            .append("g")
            .classed("x axis-grid", true)
            .attr("transform", "translate(0," + chartHeight + ")")
            .attr("color", "#cccccc")
            .call(
                axisBottom(scaleX)
                    .tickSize(-chartHeight)
                    .tickFormat((domain, number) => {
                        return "";
                    })
                    .ticks(ticks)
            )
            .style("stroke-dasharray", "3,3");
        // Draw vertical grid lines
        chart
            .append("g")
            .classed("y axis-grid", true)
            .attr("transform", "translate(0," + 0 + ")")
            .attr("color", "#cccccc")
            .call(
                axisLeft(scaleY)
                    .tickSize(-chartWidth)
                    .tickFormat((domain, number) => {
                        return "";
                    })
                    .ticks(6)
            )
            .style("stroke-dasharray", "3,3");
    };

    const drawbars = (chart: any, scaleX: any, scaleY: any) => {
        // Select the area where we want to draw the bars.
        let graph = select("g.graph");
        // Appends and draws rect.
        for (let i = 0; i < data.length; i++) {
            let currentData = data[i];
            graph
                .append("rect")
                .attr("key", currentData.name + "bar")
                .attr("x", scaleX(currentData.name))
                .attr("y", scaleY(currentData.value))
                .attr("width", scaleX.bandwidth())
                .attr("height", chartHeight - scaleY(currentData.value))
                .attr("fill", "#3c3c3cee");
        }
    };

    return <svg ref={svgRef} width={svgWidth} height={svgHeigth} />;
};
