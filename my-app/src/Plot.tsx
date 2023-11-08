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

  const pValues = [0.5, 0.7, 0.9, 0.95, 0.99]
  const sValues = [2,4,8,16,32,64]


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
  }, [])

  const plotData = latencyData.map(item => ({
    x: sValues,
    y: item.point.map(point => point.latency),
    type: 'scatter',
    mode: 'lines+markers',
    name: `p = ${item.p}`,
  }));
  
  const layout = {
    width: 1200,
    height: 900,
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
  //Plotly.newPlot('myDiv', data);

  //return <div id="xy-graph"></div>;
};

export default PlotXY;
