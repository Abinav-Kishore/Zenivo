"use client";

import { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
} from "reactflow";

const initialNodes: Node[] = [
  {
    id: "1",
    data: { label: "Kickoff" },
    position: { x: 0, y: 0 },
    style: {
      background: "#151528",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      padding: 12,
      width: 130,
      textAlign: "center",
    },
  },
  {
    id: "2",
    data: { label: "Strategy" },
    position: { x: 220, y: -60 },
    style: {
      background: "#151528",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      padding: 12,
      width: 130,
      textAlign: "center",
    },
  },
  {
    id: "3",
    data: { label: "Design" },
    position: { x: 220, y: 80 },
    style: {
      background: "#151528",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      padding: 12,
      width: 130,
      textAlign: "center",
    },
  },
  {
    id: "4",
    data: { label: "Build" },
    position: { x: 460, y: -10 },
    style: {
      background: "#151528",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      padding: 12,
      width: 130,
      textAlign: "center",
    },
  },
  {
    id: "5",
    data: { label: "Launch" },
    position: { x: 680, y: -10 },
    style: {
      background: "#151528",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      padding: 12,
      width: 130,
      textAlign: "center",
    },
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e2-4", source: "2", target: "4", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true },
];

export function FlowSection() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="h-[380px] w-full rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap className="bg-neutral-900" />
        <Controls />
        <Background gap={18} size={1} color="rgba(255,255,255,0.08)" />
      </ReactFlow>
    </div>
  );
}
