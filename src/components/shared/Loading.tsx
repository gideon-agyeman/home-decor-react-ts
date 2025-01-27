const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <style>{`
        .spinner {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .spinner div {
          box-sizing: border-box;
          display: block;
          position: absolute;
          width: 64px;
          height: 64px;
          margin: 8px;
          border: 8px solid #4a90e2;
          border-radius: 50%;
          animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          border-color: #4a90e2 transparent transparent transparent;
        }
        .spinner div:nth-child(1) {
          animation-delay: -0.45s;
        }
        .spinner div:nth-child(2) {
          animation-delay: -0.3s;
        }
        .spinner div:nth-child(3) {
          animation-delay: -0.15s;
        }
        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
