const RadarVisual = () => {
  const nodes = [
    { x: 30, y: 25, label: "SaaS Founder", delay: "0s" },
    { x: 70, y: 35, label: "Angel Investor", delay: "0.5s" },
    { x: 45, y: 65, label: "CTO", delay: "1s" },
    { x: 20, y: 55, label: "Growth Lead", delay: "1.5s" },
    { x: 75, y: 70, label: "Dev Agency", delay: "0.8s" },
  ];

  return (
    <div className="relative w-72 h-72 mx-auto">
      {/* Rings */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-border"
          style={{
            width: `${i * 33}%`,
            height: `${i * 33}%`,
            top: `${50 - (i * 33) / 2}%`,
            left: `${50 - (i * 33) / 2}%`,
          }}
        />
      ))}

      {/* Sweep line */}
      <div className="absolute inset-0 animate-radar-sweep" style={{ transformOrigin: "50% 50%" }}>
        <div
          className="absolute top-1/2 left-1/2 w-1/2 h-px origin-left"
          style={{
            background: "linear-gradient(90deg, hsl(43 100% 50% / 0.8), transparent)",
          }}
        />
      </div>

      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />

      {/* Pulse rings from center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-primary/40 animate-pulse-ring" />

      {/* Nodes */}
      {nodes.map((node, i) => (
        <div
          key={i}
          className="absolute flex items-center gap-1.5 group"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            animation: `pulse-ring 3s ease-out infinite`,
            animationDelay: node.delay,
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
          <span className="font-mono-ui text-[10px] text-muted-foreground opacity-70 whitespace-nowrap">
            {node.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RadarVisual;
