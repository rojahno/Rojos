import * as d3 from "d3";
import { axisBottom, axisLeft, transition } from "d3";
import { useEffect, useRef } from "react";
import useWindowDimensions from "../../hooks/UseWindowDimensions";

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
    const yTicks = 5;
    const Xticks = data.length;

    useEffect(() => {
        if (svgRef.current) {
            drawChart();
        }
    }, [svgRef, width, height]);

    const drawChart = () => {
        const chart = drawMainSvg();

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

        drawGrid(chart, scaleX, scaleY);
        drawAxis(chart, scaleX, scaleY);
        drawBars(chart, scaleX, scaleY);
        transitionBars(chart, scaleY);
        addTooltip();
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

    const drawAxis = (
        chart: d3.Selection<SVGGElement, unknown, null, undefined>,
        scaleX: d3.ScaleBand<string>,
        scaleY: d3.ScaleLinear<number, number, never>
    ) => {
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
                    .ticks(Xticks)
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

    const drawGrid = (
        chart: d3.Selection<SVGGElement, unknown, null, undefined>,
        scaleX: d3.ScaleBand<string>,
        scaleY: d3.ScaleLinear<number, number, never>
    ) => {
        // Draw horizontal grid lines
        chart
            .append("g")
            .classed("x-axis-grid", true)
            .attr("transform", "translate(0," + chartHeight + ")")
            .attr("color", "#cccccc")
            .call(
                axisBottom(scaleX)
                    .tickSize(-chartHeight)
                    .tickFormat((domain, number) => {
                        return "";
                    })
                    .ticks(Xticks)
            )
            .style("stroke-dasharray", "3,3");
        // Draw vertical grid lines
        chart
            .append("g")
            .classed("y-axis-grid", true)
            .attr("transform", "translate(0," + 0 + ")")
            .attr("color", "#cccccc")
            .call(
                axisLeft(scaleY)
                    .tickSize(-chartWidth)
                    .tickFormat((domain, number) => {
                        return "";
                    })
                    .ticks(yTicks)
            )
            .style("stroke-dasharray", "3,3");
    };
    // FIXME: Change type from any to scaleband.
    const drawBars = (
        chart: d3.Selection<SVGGElement, unknown, null, undefined>,
        scaleX: any,
        scaleY: d3.ScaleLinear<number, number, never>
    ) => {
        // Appends and draws rect.
        chart
            .selectAll("mybar")
            .data(data)
            .join("rect")
            .attr("x", (d) => scaleX(d.name))
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("width", scaleX.bandwidth())
            .attr("fill", "steelblue")
            // no bar at the beginning thus:
            .attr("height", (d) => chartHeight - scaleY(0)) // always equal to 0
            .attr("y", (d) => scaleY(0))
            .on("mouseover", (d) => mouseover(d.value))
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave);
    };

    const transitionBars = (chart: any, scaleY: any) => {
        chart
            .selectAll("rect")
            .transition()
            .duration(800)
            .attr("y", function (d: any) {
                return scaleY(d.value);
            })
            .attr("height", function (d: any) {
                return chartHeight - scaleY(d.value);
            })
            .delay(function (d: any, i: any) {
                console.log(i);
                return i * 100;
            });
    };

    const addTooltip = () => {
        // create a tooltip
        d3.select("#div_template")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "#3c3c3c")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("position", "absolute")
            .style("padding", "5px");
    };

    const mouseover = (d: any) => {
        d3.select(".tooltip").style("opacity", 1);
    };
    const mousemove = (d: MouseEvent, data: any) => {
        let tooltip = d3.select(".tooltip");
        tooltip
            .html("The exact value of<br>this cell is: " + data.value)
            .style("left", d.x + 20 + "px")
            .style("z-index", "10")
            .style("top", d.y - 10 + "px");
    };
    const mouseleave = (d: any) => {
        let tooltip = d3.select(".tooltip");
        tooltip.style("opacity", 0);
    };

    return (
        <div id={"div_template"}>
            <svg ref={svgRef} width={svgWidth} height={svgHeigth} />
        </div>
    );
};
