import { useEffect, useState } from 'react';
import { getChartWidth } from './getChartWidth';
import { getChartHeight } from './getChartHeight';

function useChartSizes() {
    const [chartWidth, setChartWidth] = useState<number>(() => getChartWidth());
    const [chartHeight, setChartHeight] = useState<number>(() => getChartHeight());

    useEffect(() => {
        function handleWindowResize() {
            const newWidth: number = getChartWidth();
            if (chartWidth !== newWidth) {
                setChartWidth(newWidth);
                setChartHeight(getChartHeight());
            }
        }
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, [chartWidth]);

    return { chartWidth, chartHeight };
}

export { useChartSizes };
