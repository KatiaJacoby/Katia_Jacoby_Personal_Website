// A tiny pixel-art cat that bops next to the "Lately" card.
// Each character in the maps below is one pixel; "." is transparent.

const COLORS = {
  o: '#2b2620', // outline
  b: '#e9a15b', // fur
  d: '#c97b3c', // tabby stripe
  l: '#f8dcb0', // belly
  p: '#ef9a9a', // ears + cheeks
  n: '#d9606a', // nose
  m: '#7a4a2a', // mouth
  e: '#2b2620', // eyes
}

// 14 × 16, eyes drawn as fur here and layered on top separately (so they can blink)
const BODY = [
  '.o..........o.',
  '.oo........oo.',
  '.opo......opo.',
  '.obboooooobbo.',
  '.obbbdbbdbbbo.',
  'obbebbbbbbebbo',
  'obbebbbbbbebbo',
  'obpbbbnnbbbpbo',
  '.obbbmbbmbbbo.',
  '..obllllllbo..',
  '.obllllllllbo.',
  '.obllllllllbo.',
  '.obbllllllbbo.',
  '.obbbbbbbbbbo.',
  '.obboooooobbo.',
  '..oo......oo..',
]

// two tail frames, swapped back and forth to "wag"
const TAIL_A = ['..oo', '.obo', '.obo', 'obo.', 'obo.', 'oo..']
const TAIL_B = ['oo..', 'obo.', 'obo.', '.obo', 'obo.', 'oo..']

const NOTE = ['..oo', '..o.', '..o.', 'ooo.', 'oo..']

function pixels(map, { x: ox = 0, y: oy = 0, only, swap = {}, fill } = {}) {
  const out = []
  map.forEach((row, y) =>
    [...row].forEach((ch, x) => {
      if (ch === '.' || (only && !only.includes(ch))) return
      const key = swap[ch] ?? ch
      out.push(<rect key={`${x}-${y}`} x={x + ox} y={y + oy} width="1.02" height="1.02" fill={fill ?? COLORS[key]} />)
    }),
  )
  return out
}

export default function PixelCat() {
  return (
    <svg className="fn-cat" viewBox="-3.5 -1 22 19" shapeRendering="crispEdges" aria-hidden="true">
      {/* floor shadow */}
      <rect className="fn-cat-shadow" x="1" y="16" width="12" height="1" fill="#2b2620" />

      {/* music notes */}
      <g className="fn-cat-note fn-cat-note-1">{pixels(NOTE, { x: 14, y: -5, fill: '#c0532d' })}</g>
      <g className="fn-cat-note fn-cat-note-2">{pixels(NOTE, { x: -3, y: -3, fill: '#3d6aa0' })}</g>

      <g className="fn-cat-dancer">
        <g className="fn-cat-tail fn-cat-tail-a">{pixels(TAIL_A, { x: 12, y: 7, swap: {} })}</g>
        <g className="fn-cat-tail fn-cat-tail-b">{pixels(TAIL_B, { x: 12, y: 7 })}</g>
        <g>{pixels(BODY, { swap: { e: 'b' } })}</g>
        <g className="fn-cat-eyes">{pixels(BODY, { only: 'e' })}</g>
      </g>
    </svg>
  )
}
