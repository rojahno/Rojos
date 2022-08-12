import * as d3 from "d3";
import { axisBottom, axisLeft } from "d3";
import { useEffect, useRef } from "react";
import useWindowDimensions from "../../hooks/UseWindowDimensions";

const data = [2, 3, 62, 24, 64, 73, 96, 42, 32, 12, 43, 32, 12, 23, 72, 54, 43, 32];

export const Linechart = () => {
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
            .scaleLinear()
            .domain([0, data.length - 1])
            .range([0, chartWidth]);
        var scaleY = d3
            .scaleLinear()
            .domain([0, Math.max(...data)])
            .range([chartHeight, 0]);

        drawGrid(chart, scaleX, scaleY, ticks);
        drawAxis(chart, scaleX, scaleY, ticks);
        drawLine(chart, scaleX, scaleY);
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

    const drawLine = (chart: any, scaleX: any, scaleY: any) => {
        // Draw line
        chart
            .append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr(
                "d",
                d3
                    .line()
                    .x((d, i) => {
                        return scaleX(i);
                    })
                    .y((d) => {
                        return scaleY(d);
                    })
            )
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round");
    };

    return <svg ref={svgRef} width={svgWidth} height={svgHeigth} />;
};
