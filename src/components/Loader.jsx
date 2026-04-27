const Loader = () => (
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "180px",
    width: "100%"
  }}>
    <div style={{
      width: 44,
      height: 44,
      border: "4px solid #f8bbd0",
      borderTop: "4px solid #e91e63",
      borderRadius: "50%",
      animation: "spin 1s linear infinite"
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default Loader;
