export default function PrizmSwitch({ checked, onChange }) {
  return (
    <label className={`prizm-switch ${checked ? 'on' : 'off'}`}>
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
      <span className="prizm-switch-track" />
      <span className="prizm-switch-thumb" />
    </label>
  )
}
