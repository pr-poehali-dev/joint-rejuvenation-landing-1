export const ScienceDiagram = () => (
  <div className="relative">
    <div className="absolute inset-0 -z-10">
      <svg width="100%" height="100%" viewBox="0 0 800 300">
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path
            d="M 30 0 L 0 0 0 30"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="0.3"
            opacity="0.2"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        <linearGradient id="processLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <line
          x1="50"
          y1="50"
          x2="750"
          y2="50"
          stroke="url(#processLine)"
          strokeWidth="4"
          strokeDasharray="0"
        />

        {[150, 400, 650].map((x, index) => (
          <g key={index}>
            <circle
              cx={x}
              cy="50"
              r="12"
              fill={index === 1 ? "#8b5cf6" : "#3b82f6"}
            />
            <text
              x={x}
              y="54"
              textAnchor="middle"
              fill="white"
              fontWeight="bold"
              fontSize="12"
            >
              {index + 1}
            </text>
          </g>
        ))}
      </svg>
    </div>
  </div>
);
