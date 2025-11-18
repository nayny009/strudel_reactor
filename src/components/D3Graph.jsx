import { useState, useEffect } from "react";
import * as d3 from "d3";

export default function D3Graph() {
    const [data, setData] = useState([]);
    const max = 50;

    useEffect(() => {
        const handleD3Data = (event) => {
            const gains = event.detail;
            if (!Array.isArray(gains) || gains.length === 0) return;

            setData((prev) => {
                const next = [...prev, ...gains];
                if (next.length > max) {
                    next.splice(0, next.length - max);
                }
                return next;
            });
        };
        document.addEventListener("d3Data", handleD3Data);
        return () => document.removeEventListener("d3Data", handleD3Data);
    }, []);

    useEffect(() => {
        const svg = d3.select('svg');
        svg.selectAll("*").remove();

        const width = svg.node().getBoundingClientRect().width;
        const height = svg.node().getBoundingClientRect().height;

        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([0, 1])
            .range([height, 0]);

        const line = d3.line()
            .x((_, i) => xScale(i))
            .y((d) => yScale(d));

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-width", 4)
            .attr("d", line);
    }, [data]);

    return <svg width="100%" height="300px" style={{ background: "black" }} />
}