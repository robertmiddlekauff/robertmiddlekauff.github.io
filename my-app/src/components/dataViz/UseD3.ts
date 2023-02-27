import { useRef, useEffect } from 'react';

import { select, Selection } from 'd3';

const UseD3 = (
  renderChartFn: (arg0: Selection<null, unknown, null, undefined>) => void,
  dependencies: number
) => {
  const ref = useRef(null);

  useEffect(() => {
    renderChartFn(select(ref.current));
  }, [dependencies]);

  return ref;
};

export default UseD3;
