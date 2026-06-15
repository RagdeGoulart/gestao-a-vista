export default function PrizmCheckbox({ checked, onClick }) {
  return (
    <div className={`prizm-checkbox ${checked ? 'checked' : ''}`} onClick={onClick}>
      {checked && (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"
          strokeLinecap="round" strokeLinejoin="round" style={{ width: 10, height: 10 }}>
          <path d="M20 6 9 17l-5-5"/>
        </svg>
      )}
    </div>
  )
}
