import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';


interface Point {
  s: number
  latency: any
}

interface Latency {
  p: number,
  point: Point[]
}

export const calculateLatency = (p: number, s: number): Point => {
  const latency = 1 / ((1 - p) + p / s);
  return {s, latency}
}

const PlotXY: React.FC<any> = () => {
  const [latencyData, setLatencyData] = useState<Latency[]>([]);
  const [plotWidth, setPlotWidth] = React.useState(1200);
  const [plotHeight, setPlotHeight] = React.useState(900);

  const pValues = [0.5, 0.7, 0.9, 0.95, 0.99]
  const sValues = [2,4,8,16,32,64]

  const updatePlotSize = () => {
    setPlotWidth(window.innerWidth * 0.65)
    setPlotHeight(window.innerHeight * 0.80)
  }

  useEffect(() => {
    const results: any = []

    for (const p of pValues) {
      const latencyValues = sValues.map(s => calculateLatency(p, s))
      results.push({
        p: p,
        point: latencyValues
      })
    }
    setLatencyData(results);

    updatePlotSize();
    window.addEventListener('resize', updatePlotSize);
    return () => {
      window.removeEventListener('resize', updatePlotSize);
    };
  }, [])

  const plotData = latencyData.map(item => ({
    x: sValues,
    y: item.point.map(point => point.latency),
    type: 'scatter',
    mode: 'lines+markers',
    name: `p = ${item.p}`,
  }));
  
  const layout = {
    width: plotWidth,
    height: plotHeight,
    title: 'Latenssi',
    xaxis: {
      title: 'Rinnakkaisten suorittimien lukumäärä (s)',
    },
    yaxis: {
      title: 'Nopeuskertoimet',
    },
  };
  
  const plotlyData = plotData as any;
  return (
    <div>
      <Plot data={plotlyData} layout={layout} />
    </div>
    );
};

export default PlotXY;
