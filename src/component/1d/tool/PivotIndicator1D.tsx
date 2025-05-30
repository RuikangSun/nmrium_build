import type { CSSProperties } from 'react';

import { useChartData } from '../../context/ChartContext.js';
import { useScaleChecked } from '../../context/ScaleContext.js';
import { useIndicatorLineColor } from '../../hooks/useIndicatorLineColor.js';
import { options } from '../../toolbar/ToolTypes.js';

const styles: CSSProperties = {
  transformOrigin: 'top left',
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '2px',
};

export function PivotIndicator1D() {
  const {
    height,
    toolOptions: {
      selectedTool,
      data: { pivot },
    },
  } = useChartData();
  const { scaleX } = useScaleChecked();

  if (options.phaseCorrection.id !== selectedTool) return null;
  const x = Math.round(scaleX()(pivot.value));
  return <Indicator height={height} x={x} />;
}

interface IndicatorProps {
  x: number;
  height: number;
}

function Indicator(props: IndicatorProps) {
  const indicatorColor = useIndicatorLineColor();

  const { x, height } = props;
  return (
    <div
      style={{
        ...styles,
        transform: `translateX(${x}px) translateX(-50%)`,
        height,
        backgroundColor: indicatorColor,
      }}
    />
  );
}
