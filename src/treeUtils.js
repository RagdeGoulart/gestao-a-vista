export function cloneTree(tree) {
  return JSON.parse(JSON.stringify(tree))
}

export function findNode(nodes, id) {
  for (const n of nodes) {
    if (n.id === id) return n
    if (n.children) {
      const r = findNode(n.children, id)
      if (r) return r
    }
  }
  return null
}

export function removeFrom(nodes, id) {
  return nodes
    .filter(n => n.id !== id)
    .map(n => n.children ? { ...n, children: removeFrom(n.children, id) } : n)
}

export function leavesOf(node) {
  const out = []
  const walk = n => {
    if (Array.isArray(n.children)) n.children.forEach(walk)
    else out.push(n.id)
  }
  walk(node)
  return out
}

export function findLeaf(nodes, id) {
  for (const n of nodes) {
    if (n.id === id && !Array.isArray(n.children)) return n
    if (n.children) {
      const r = findLeaf(n.children, id)
      if (r) return r
    }
  }
  return null
}

export function allLeaves(nodes) {
  const out = []
  const walk = n => {
    if (Array.isArray(n.children)) n.children.forEach(walk)
    else out.push(n.id)
  }
  nodes.forEach(walk)
  return out
}

export function intervalMs(state) {
  const k = state.intervalUnit === 'Segundos' ? 1000
    : state.intervalUnit === 'Minutos' ? 60000
    : 3600000
  return Math.max(1, state.intervalNum) * k
}
