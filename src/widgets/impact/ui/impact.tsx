import { SectionReveal } from '@/shared/ui/section-reveal';
import { MotionCard } from '@/shared/ui/motion-card';

const metrics = [
  [
    '32%',
    'Presenteísmo médio',
    'Um terço da produtividade se perde com o time presente, mas esgotado.',
  ],
  ['6%', 'Da folha de pagamento', 'É o custo estimado das doenças mentais para o empregador.'],
  [
    '3x',
    'Mais que o afastamento',
    'O presenteísmo custa até três vezes mais — e quase ninguém percebe.',
  ],
];

export function Impact() {
  return (
    <section className="section-gelo section-pad impact-section">
      <div className="container">
        <SectionReveal>
          <p className="eyebrow section-kicker-space">O impacto para a empresa</p>
          <h2 className="display section-title impact-title">
            O silêncio tem um custo. E ele aparece no balanço.
          </h2>
          <p className="section-copy copy-muted impact-copy">
            Quando a fase silenciosa passa despercebida, o prejuízo não some — ele migra para a
            folha, para a produtividade e para a rotatividade.
          </p>
        </SectionReveal>
        <div className="impact-grid">
          {metrics.map(([value, label, detail], index) => (
            <MotionCard
              key={label}
              className={`impact-card glass-card glass-card--light impact-card-${index + 1}`}
            >
              <p className="impact-value">{value}</p>
              <span className="impact-rule" />
              <h3 className="impact-label">{label}</h3>
              <p className="impact-detail">{detail}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
