export default function Loom() {
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
      <iframe
        src="https://www.loom.com/embed/af321ba5b4404d5787703a6e01bb209e"
        frameBorder={0}
        webkitallowfullscreen=""
        mozallowfullscreen=""
        allowFullScreen=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
