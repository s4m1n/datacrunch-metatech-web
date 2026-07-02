import type { Feature } from '../types/index.js'

export const features: Feature[] = [
  {
    id: 'ingest',
    icon: 'database',
    title: 'Unified ingestion',
    description:
      'Connect any source in minutes with managed connectors and automatic schema detection.',
  },
  {
    id: 'models',
    icon: 'sparkles',
    title: 'AI models built in',
    description:
      'Train, evaluate, and deploy models next to your data without stitching tools together.',
  },
  {
    id: 'governance',
    icon: 'shield',
    title: 'Governance by default',
    description:
      'Row-level access, audit trails, and lineage keep your data compliant and secure.',
  },
  {
    id: 'realtime',
    icon: 'bolt',
    title: 'Real-time insights',
    description:
      'Streaming pipelines surface changes as they happen, not hours later.',
  },
]
