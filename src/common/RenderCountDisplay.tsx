import { useEffect, useRef } from 'react';

const RenderCountDisplay = () => {
  const renderCount = useRef(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  renderCount.current += 1;
  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.style.color = 'red';
      setTimeout(() => {
        if (spanRef.current) {
          spanRef.current.style.color = 'black';
        }
      }, 500);
    }
  });
  return (
    <div>
      Render Count:{' '}
      <span
        style={{
          transition: 'color 0.2s ease',
        }}
        ref={spanRef}
      >
        {renderCount.current}
      </span>
    </div>
  );
};

export default RenderCountDisplay;
