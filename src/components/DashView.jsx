const COMERCIAL_KPIS = [
  { label: 'Recebimentos (Ano)',  value: '6,5M',     note: 'Acumulado 2025' },
  { label: 'Total Inadimplência', value: '17,3M',    note: 'Em aberto' },
  { label: 'Cancelamentos (Ano)', value: '558',      note: 'Acumulado 2025' },
  { label: 'Ticket Médio Pago',   value: '269,40',   note: 'Por associado' },
  { label: 'Recebimentos (Mês)',  value: '918.976',  note: 'Junho · 2025' },
  { label: 'Inadimplência (Mês)', value: '2.445',    note: 'Junho · 2025' },
  { label: 'Cancelamentos (Mês)', value: '—',        note: 'Junho · 2025' },
  { label: 'Ticket Médio (Mês)',  value: '247,87',   note: 'Junho · 2025' },
]

const RAW_BARS = [
  ['Academia',                   119395,  '119.395'],
  ['Arrecadações de parcerias',     400,     '400'],
  ['Contribuições Associativas', 673909, '673.909'],
  ['Devoluções e estornos',           9,    '9,04'],
  ['Entradas operacionais',        8895,   '8.895'],
  ['Esportes',                    78248,  '78.248'],
  ['Eventos',                     37510,  '37.510'],
  ['Uniformes',                     610,     '610'],
]

const YTICKS = ['700.000','600.000','500.000','400.000','300.000','200.000','100.000','0']

const FBGS = ['var(--blue-700)','var(--blue-600)','var(--blue-500)','var(--blue-400)','oklch(0.78 0.12 254)']

const FUNNEL_STAGES = [
  { label: 'Leads gerados', value: '12.480', conv: '100%',  w: '100%', bg: FBGS[0] },
  { label: 'MQLs',          value: '6.240',  conv: '50,0%', w: '82%',  bg: FBGS[1] },
  { label: 'SQLs',          value: '2.980',  conv: '47,8%', w: '64%',  bg: FBGS[2] },
  { label: 'Propostas',     value: '1.120',  conv: '37,6%', w: '46%',  bg: FBGS[3] },
  { label: 'Fechados',      value: '430',    conv: '38,4%', w: '30%',  bg: FBGS[4] },
]

const FUNNEL_KPIS = [
  { label: 'Taxa de conversão', value: '3,4%' },
  { label: 'Ticket médio',      value: 'R$ 4.250' },
  { label: 'Ciclo de venda',    value: '28 dias' },
]

const INAD_KPIS = [
  { label: 'Total Inadimplência',     value: '17,3M',  note: 'Em aberto' },
  { label: 'Inadimplência (Mês)',     value: '2.445',  note: 'Junho · 2025' },
  { label: 'Taxa de inadimplência',   value: '8,2%',   note: 'Sobre faturado' },
  { label: 'Recuperado (Mês)',        value: '312,4K', note: 'Junho · 2025' },
]

const AGING = [
  { label: '1–30 dias',  value: 'R$ 842.100',   w: '70%' },
  { label: '31–60 dias', value: 'R$ 514.300',   w: '43%' },
  { label: '61–90 dias', value: 'R$ 388.700',   w: '32%' },
  { label: '+90 dias',   value: 'R$ 1.204.900', w: '100%' },
]

export default function DashView({
  type = 'comercial',
  title = 'Dashboard',
  subtitle = '',
  fill = false,
  showStop = false,
  onStop,
  stopLabel = 'Parar',
}) {
  const F = (a, b) => fill ? a : b

  const bars = RAW_BARS.map(([label, v, display]) => ({
    label, display,
    h: Math.max(Math.round((v / 700000) * 100), 1) + '%',
  }))

  const rootStyle = {
    fontFamily: 'var(--font-sans)', color: 'var(--foreground)', width: '100%',
    ...F({ height: '100%', display: 'flex', flexDirection: 'column', padding: '24px 32px 20px' },
       { padding: 16 }),
  }
  const headStyle = {
    display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
    gap: 16, flexWrap: 'wrap',
    ...F({ flex: 'none', marginBottom: 18 }, { marginBottom: 22 }),
  }
  const sectionStyle = F({ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }, {})

  return (
    <div style={rootStyle}>
      {/* Header */}
      <div style={headStyle}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--gray-900)', lineHeight: 1.2 }}>
            {title}
          </div>
          <div style={{ fontSize: 14, color: 'var(--muted-foreground)', marginTop: 5 }}>
            {subtitle}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 'none' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'var(--muted-foreground)', fontWeight: 500, whiteSpace: 'nowrap' }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--success)', display: 'inline-block' }} />
            Atualizado agora
          </span>
          {showStop && (
            <button
              onClick={onStop}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, height: 32,
                padding: '0 9px 0 11px', border: '1px solid var(--border)',
                background: 'var(--background)', color: 'var(--gray-700)',
                borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-sans)',
                fontSize: 13, fontWeight: 500, cursor: 'pointer',
                boxShadow: 'var(--shadow-2xs)', whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--background)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
              {stopLabel}
              <kbd style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
                color: 'var(--muted-foreground)', background: 'var(--gray-100)',
                border: '1px solid var(--border)', borderRadius: 5, padding: '1px 6px', lineHeight: 1.5,
              }}>
                Esc
              </kbd>
            </button>
          )}
        </div>
      </div>

      {/* Comercial */}
      {type === 'comercial' && (
        <div style={sectionStyle}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: F('repeat(4,1fr)', 'repeat(auto-fit,minmax(208px,1fr))'),
            gap: 16,
            ...F({ flex: 'none' }, {}),
          }}>
            {COMERCIAL_KPIS.map((kpi, i) => (
              <div key={i} style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)',
                padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--muted-foreground)', lineHeight: 1.25 }}>{kpi.label}</span>
                  <span style={{ color: 'var(--gray-300)', fontSize: 18, lineHeight: 1, letterSpacing: 1 }}>···</span>
                </div>
                <span style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--gray-900)' }}>{kpi.value}</span>
                <span style={{ fontSize: 12, color: 'var(--muted-foreground)', fontWeight: 500 }}>{kpi.note}</span>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)', padding: '22px 26px 18px',
            ...F({ marginTop: 16, flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }, { marginTop: 18 }),
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 'none' }}>
              <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--gray-900)' }}>
                Receitas por Conta Contábil (Mês Atual)
              </span>
              <span style={{ color: 'var(--gray-300)', fontSize: 18, letterSpacing: 1 }}>···</span>
            </div>

            <div style={{
              display: 'flex', alignItems: 'flex-end', gap: 14,
              ...F({ flex: 1, minHeight: 0, marginTop: 24 }, { marginTop: 30 }),
            }}>
              <div style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                textAlign: 'right', fontSize: 11, color: 'var(--muted-foreground)',
                fontFamily: 'var(--font-mono)', minWidth: 56,
                ...F({ height: '100%' }, { height: 200 }),
              }}>
                {YTICKS.map((t, i) => <span key={i} style={{ lineHeight: 1, transform: 'translateY(-5px)' }}>{t}</span>)}
              </div>

              <div style={{ flex: 1, position: 'relative', height: '100%' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: 0 }}>
                  {YTICKS.map((_, i) => <div key={i} style={{ height: 1, background: 'var(--gray-100)' }} />)}
                </div>
                <div style={{
                  position: 'relative', zIndex: 1, display: 'flex', alignItems: 'flex-end', gap: 14,
                  ...F({ height: '100%' }, { height: 200 }),
                }}>
                  {bars.map((bar, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--gray-700)', marginBottom: 5, fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>{bar.display}</span>
                      <div style={{ width: '100%', maxWidth: 54, height: bar.h, background: 'var(--blue-600)', borderRadius: '5px 5px 0 0' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14, paddingLeft: 70, marginTop: 8, height: 78, flex: 'none' }}>
              {bars.map((bar, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                  <span style={{ fontSize: 11, color: 'var(--muted-foreground)', transform: 'rotate(-32deg)', transformOrigin: 'top center', whiteSpace: 'nowrap', display: 'inline-block' }}>
                    {bar.label}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--muted-foreground)', fontWeight: 500, marginTop: 6, flex: 'none' }}>
              Conta Contábil
            </div>
          </div>
        </div>
      )}

      {/* Funil */}
      {type === 'funil' && (
        <div style={sectionStyle}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: F('repeat(3,1fr)', 'repeat(auto-fit,minmax(190px,1fr))'),
            gap: 16,
            ...F({ flex: 'none', marginBottom: 18 }, { marginBottom: 26 }),
          }}>
            {FUNNEL_KPIS.map((kpi, i) => (
              <div key={i} style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)',
                padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--muted-foreground)' }}>{kpi.label}</span>
                <span style={{ fontSize: 42, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--gray-900)' }}>{kpi.value}</span>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)', padding: '30px 32px 34px',
            ...F({ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }, {}),
          }}>
            <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--gray-900)', marginBottom: 26, flex: 'none' }}>
              Funil de Vendas — Junho 2025
            </div>
            <div style={{
              maxWidth: 780, margin: '0 auto', width: '100%',
              display: 'flex', flexDirection: 'column', gap: 12,
              ...F({ flex: 1, justifyContent: 'center' }, {}),
            }}>
              {FUNNEL_STAGES.map((stage, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                  <div style={{ width: 150, textAlign: 'right', fontSize: 15, fontWeight: 600, color: 'var(--gray-700)', flex: 'none' }}>
                    {stage.label}
                  </div>
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                      width: stage.w, minWidth: 180, background: stage.bg, color: '#fff',
                      borderRadius: 10, padding: '18px 24px', display: 'flex',
                      alignItems: 'center', justifyContent: 'space-between', gap: 16, boxShadow: 'var(--shadow-sm)',
                    }}>
                      <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em' }}>{stage.value}</span>
                      <span style={{ fontSize: 14, opacity: 0.9, fontWeight: 500 }}>{stage.conv}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Inadimplência */}
      {type === 'inadimplencia' && (
        <div style={sectionStyle}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: F('repeat(4,1fr)', 'repeat(auto-fit,minmax(208px,1fr))'),
            gap: 16,
            ...F({ flex: 'none' }, {}),
          }}>
            {INAD_KPIS.map((kpi, i) => (
              <div key={i} style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)',
                padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--muted-foreground)', lineHeight: 1.25 }}>{kpi.label}</span>
                <span style={{ fontSize: 46, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--gray-900)' }}>{kpi.value}</span>
                <span style={{ fontSize: 12, color: 'var(--muted-foreground)', fontWeight: 500 }}>{kpi.note}</span>
              </div>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: F('repeat(2,1fr)', 'repeat(auto-fit,minmax(320px,1fr))'),
            gap: 16,
            ...F({ flex: 1, minHeight: 0, marginTop: 16 }, { marginTop: 18 }),
          }}>
            <div style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)', padding: '24px 26px',
              ...F({ display: 'flex', flexDirection: 'column', minHeight: 0 }, {}),
            }}>
              <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--gray-900)', marginBottom: 22, flex: 'none' }}>
                Inadimplência por faixa de atraso
              </div>
              <div style={F({ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }, {})}>
                {AGING.map((a, i) => (
                  <div key={i} style={F({}, { marginBottom: 18 })}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                      <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--gray-700)' }}>{a.label}</span>
                      <span style={{ fontSize: 15, fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--gray-900)' }}>{a.value}</span>
                    </div>
                    <div style={{ height: 14, background: 'var(--gray-100)', borderRadius: 999, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: a.w, background: 'var(--blue-600)', borderRadius: 999 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)', padding: '24px 26px',
              ...F({ display: 'flex', flexDirection: 'column', minHeight: 0 }, {}),
            }}>
              <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--gray-900)', marginBottom: 6, flex: 'none' }}>
                Evolução da inadimplência (12 meses)
              </div>
              <div style={{ fontSize: 13, color: 'var(--muted-foreground)', marginBottom: 18, flex: 'none' }}>
                Valor em aberto · R$ milhões
              </div>
              <svg viewBox="0 0 720 240"
                style={{ width: '100%', display: 'block', ...F({ flex: 1, minHeight: 0, height: '100%' }, { height: 'auto' }) }}
                preserveAspectRatio="none">
                <line x1="0" y1="40" x2="720" y2="40" stroke="var(--gray-100)" strokeWidth="1"/>
                <line x1="0" y1="100" x2="720" y2="100" stroke="var(--gray-100)" strokeWidth="1"/>
                <line x1="0" y1="160" x2="720" y2="160" stroke="var(--gray-100)" strokeWidth="1"/>
                <line x1="0" y1="220" x2="720" y2="220" stroke="var(--gray-200)" strokeWidth="1"/>
                <path d="M0,150 L65,162 L131,140 L196,128 L262,135 L327,110 L393,118 L458,95 L524,104 L589,78 L655,70 L720,52 L720,240 L0,240 Z"
                  fill="color-mix(in oklch,var(--blue-600) 12%,transparent)"/>
                <polyline points="0,150 65,162 131,140 196,128 262,135 327,110 393,118 458,95 524,104 589,78 655,70 720,52"
                  fill="none" stroke="var(--blue-600)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)', marginTop: 8, flex: 'none' }}>
                <span>Jul</span><span>Set</span><span>Nov</span><span>Jan</span><span>Mar</span><span>Mai</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
