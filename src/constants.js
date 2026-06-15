export const CONNECTOR_ICONS = {
  'Metabase': '/assets/conn-metabase.webp',
  'Power BI': '/assets/conn-powerbi.webp',
  'Looker':   '/assets/conn-looker.webp',
  'SuperSet': '/assets/conn-superset.webp',
  'Grafana':  '/assets/conn-grafana.webp',
}

export const CONNECTORS = ['Metabase', 'Power BI', 'Looker', 'SuperSet', 'Grafana']

export const CONNECTOR_FIELDS = {
  'Metabase': [
    { label: 'URL base do Metabase', ph: 'https://metabase.suaempresa.com', type: 'text' },
    { label: 'Secret key (JWT)', ph: '••••••••••••••••', type: 'password' },
    { label: 'ID do dashboard', ph: 'Ex: 42', type: 'number' },
    { label: 'Parâmetros de embed (opcional)', ph: 'theme=transparent&bordered=false', type: 'text' },
  ],
  'Power BI': [
    { label: 'ID do workspace', ph: '00000000-0000-0000-0000-000000000000', type: 'text' },
    { label: 'ID do relatório', ph: 'Ex: f6bfd6...', type: 'text' },
    { label: 'URL de embed', ph: 'https://app.powerbi.com/reportEmbed?...', type: 'text' },
    { label: 'Token de acesso', ph: '••••••••••••••••', type: 'password' },
  ],
  'Looker': [
    { label: 'Host do Looker', ph: 'suaempresa.looker.com', type: 'text' },
    { label: 'URL de embed (SSO)', ph: '/embed/dashboards/123', type: 'text' },
    { label: 'Client ID', ph: 'Ex: abcd1234', type: 'text' },
    { label: 'Client secret', ph: '••••••••••••••••', type: 'password' },
  ],
  'SuperSet': [
    { label: 'Domínio do Superset', ph: 'https://superset.suaempresa.com', type: 'text' },
    { label: 'ID do dashboard (UUID)', ph: 'abf1c2d3-...', type: 'text' },
    { label: 'Guest token', ph: '••••••••••••••••', type: 'password' },
    { label: 'Domínio permitido (RLS) — opcional', ph: 'rls: { dataset: vendas }', type: 'text' },
  ],
  'Grafana': [
    { label: 'URL do Grafana', ph: 'https://grafana.suaempresa.com', type: 'text' },
    { label: 'UID do dashboard', ph: 'Ex: ceabc123', type: 'text' },
    { label: 'Painel / variáveis (opcional)', ph: 'panelId=2&var-ambiente=prod', type: 'text' },
    { label: 'API token', ph: '••••••••••••••••', type: 'password' },
  ],
}

export const STATIC_LEAF_META = {
  leads:      { type: 'funil',         conn: 'Metabase' },
  mqls:       { type: 'funil',         conn: 'Metabase' },
  sqls:       { type: 'funil',         conn: 'Power BI' },
  canais:     { type: 'comercial',     conn: 'Looker' },
  acoes:      { type: 'comercial',     conn: 'Metabase' },
  agendas:    { type: 'inadimplencia', conn: 'SuperSet' },
  funil:      { type: 'funil',         conn: 'Metabase' },
  forecast:   { type: 'inadimplencia', conn: 'Power BI' },
  vendedores: { type: 'comercial',     conn: 'Metabase' },
  regiao:     { type: 'comercial',     conn: 'Looker' },
  infra:      { type: 'inadimplencia', conn: 'Grafana' },
}

export const INITIAL_TREE = [
  { id: 'marketing', label: 'Marketing', children: [
    { id: 'leads',  label: 'Leads Gerados' },
    { id: 'mqls',   label: 'MQLs' },
    { id: 'sqls',   label: 'SQLs' },
    { id: 'canais', label: 'Canais' },
  ]},
  { id: 'prospec', label: 'Prospecção', children: [
    { id: 'acoes',   label: 'Ações Realizadas' },
    { id: 'agendas', label: 'Agendas' },
  ]},
  { id: 'vendas', label: 'Vendas', children: [
    { id: 'funil',    label: 'Funil de Vendas' },
    { id: 'forecast', label: 'Forecast' },
    { id: 'desempenho', label: 'Desempenho', children: [
      { id: 'vendedores', label: 'Vendedores' },
      { id: 'regiao',     label: 'Região' },
    ]},
  ]},
  { id: 'operacoes', label: 'Operações', children: [
    { id: 'infra', label: 'Monitoramento de Infra' },
  ]},
]

export const PRESET_DEFS = [
  ['10s',    10, 'Segundos'],
  ['30s',    30, 'Segundos'],
  ['1 min',   1, 'Minutos'],
  ['5 min',   5, 'Minutos'],
  ['10 min', 10, 'Minutos'],
]
