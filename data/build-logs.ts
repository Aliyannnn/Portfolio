export type BuildLog = {
  date: string
  title: string
  content: string
  project?: string
  tags: string[]
  status?: 'completed' | 'in-progress' | 'planned'
  impact?: string
  challenges?: string[]
  nextSteps?: string[]
}

export const buildLogs: BuildLog[] = [
  {
    date: "2023-09-15",
    title: "Solving state management in DecentralWatch",
    content: "Today I refactored the state management in DecentralWatch to use Zustand. This simplified a lot of the component logic and fixed several race conditions we were seeing with the previous Redux setup. Need to write tests to make sure everything's solid.",
    project: "DecentralWatch",
    tags: ["Zustand", "Refactor", "State Management"],
    status: "completed",
    impact: "Reduced bundle size by 15% and improved state update performance by 40%",
    challenges: ["Migrating existing Redux state", "Handling async operations"],
    nextSteps: ["Write comprehensive tests", "Document the new state management pattern"]
  },
  {
    date: "2023-09-10",
    title: "Implemented live updates for node health",
    content: "Finally got the WebSocket connection working reliably with automatic reconnection. The node health indicators now update in real-time without polling the API constantly. Reduced server load by ~40% as a bonus.",
    project: "DecentralWatch",
    tags: ["WebSockets", "Performance", "UX"],
    status: "completed",
    impact: "Reduced server load by 40% and improved real-time updates",
    challenges: ["WebSocket reconnection logic", "State synchronization"],
    nextSteps: ["Add error tracking", "Implement fallback mechanism"]
  },
  {
    date: "2023-09-01",
    title: "Started learning Rust for Solana programs",
    content: "Beginning my journey with Rust for Solana program development. The ownership model is challenging but I'm getting the hang of it. Built a simple counter program as a first step.",
    project: undefined,
    tags: ["Rust", "Solana", "Learning"],
    status: "in-progress",
    impact: "Building foundation for Solana program development",
    challenges: ["Rust ownership model", "Solana program architecture"],
    nextSteps: ["Complete Rust fundamentals", "Build more complex programs"]
  },
  {
    date: "2023-08-25",
    title: "First tests with CrowdLens voting mechanism",
    content: "Implemented the initial version of the reputation-weighted voting system for CrowdLens. Next up: adding quadratic voting to prevent whale dominance in the feedback process.",
    project: "CrowdLens",
    tags: ["Voting", "Solana", "Smart Contract"],
    status: "in-progress",
    impact: "Created foundation for decentralized feedback system",
    challenges: ["Vote manipulation prevention", "Gas optimization"],
    nextSteps: ["Implement quadratic voting", "Add vote delegation"]
  },
  {
    date: "2023-08-20",
    title: "Optimizing CanvasChat performance",
    content: "Spent the day optimizing CanvasChat's rendering performance. Implemented virtual scrolling and canvas-based rendering for better handling of large chat histories. The improvements are significant.",
    project: "CanvasChat",
    tags: ["Performance", "Canvas", "Optimization"],
    status: "completed",
    impact: "60% reduction in memory usage and smoother scrolling",
    challenges: ["Canvas rendering optimization", "Memory management"],
    nextSteps: ["Add performance metrics", "Implement progressive loading"]
  },
  {
    date: "2023-08-15",
    title: "Building Claude Wallet MVP",
    content: "Started development on the Claude Wallet MVP. Focused on core custodial functionality and secure key management. The initial prototype is looking promising.",
    project: "Claude Wallet",
    tags: ["Wallet", "Security", "MVP"],
    status: "in-progress",
    impact: "Created secure foundation for wallet development",
    challenges: ["Key security", "Transaction signing"],
    nextSteps: ["Add multi-chain support", "Implement backup system"]
  },
  {
    date: "2023-08-10",
    title: "NFT Marketplace UI improvements",
    content: "Redesigned the NFT marketplace UI to improve user experience and engagement. Added new features like batch listing and improved collection views.",
    project: "NFT Marketplace",
    tags: ["UI/UX", "NFT", "Design"],
    status: "completed",
    impact: "35% increase in user engagement",
    challenges: ["Responsive design", "Performance optimization"],
    nextSteps: ["Add analytics", "Implement social features"]
  },
  {
    date: "2023-08-05",
    title: "DeFi Dashboard analytics",
    content: "Added comprehensive analytics to the DeFi dashboard. Users can now track their portfolio performance, yield farming returns, and gas costs more effectively.",
    project: "DeFi Dashboard",
    tags: ["Analytics", "DeFi", "Data Visualization"],
    status: "completed",
    impact: "Improved portfolio tracking accuracy by 25%",
    challenges: ["Data aggregation", "Real-time updates"],
    nextSteps: ["Add custom alerts", "Implement portfolio optimization"]
  },
  {
    date: "2023-08-01",
    title: "DAO Governance Platform",
    content: "Enhanced the DAO governance platform with better proposal creation and voting mechanisms. Added support for quadratic voting and delegation.",
    project: "DAO Platform",
    tags: ["Governance", "DAO", "Voting"],
    status: "in-progress",
    impact: "Streamlined proposal creation process",
    challenges: ["Vote delegation", "Gas optimization"],
    nextSteps: ["Add proposal templates", "Implement reputation system"]
  },
  {
    date: "2023-07-25",
    title: "Web3 Social Network",
    content: "Started implementing social features for the Web3 social network. Focused on content creation, sharing, and engagement mechanisms.",
    project: "Web3 Social",
    tags: ["Social", "Web3", "Content"],
    status: "in-progress",
    impact: "Created foundation for decentralized social features",
    challenges: ["Content moderation", "User engagement"],
    nextSteps: ["Add content monetization", "Implement reputation system"]
  }
] 