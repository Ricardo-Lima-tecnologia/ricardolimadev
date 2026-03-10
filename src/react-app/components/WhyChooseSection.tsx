import { 
  Target, 
  Zap, 
  Shield, 
  MessageSquare, 
  TrendingUp, 
  Clock,
  CheckCircle2,
  Award
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Abordagem Orientada a Resultados",
    description: "Todo projeto começa com seus objetivos de negócio. Foco em resultados mensuráveis — conversões, velocidade, receita — não apenas designs bonitos.",
    highlight: "Foco em ROI",
  },
  {
    icon: Zap,
    title: "Código de Alta Performance",
    description: "Sites de carregamento rápido e otimizados que ranqueiam melhor no Google e mantêm os visitantes engajados. Velocidade não é opcional — é essencial.",
    highlight: "Carregamento < 2s",
  },
  {
    icon: Shield,
    title: "Seguro & Confiável",
    description: "Práticas de segurança de nível empresarial, backups regulares e infraestrutura robusta. Seus dados de negócio e informações de clientes ficam protegidos.",
    highlight: "Padrões da indústria",
  },
  {
    icon: MessageSquare,
    title: "Comunicação Clara",
    description: "Sem jargão técnico, sem sumiços. Você sempre saberá o status do projeto, prazos e próximos passos. Perguntas respondidas em até 24 horas.",
    highlight: "Resposta em 24h",
  },
  {
    icon: TrendingUp,
    title: "Otimização de Conversão",
    description: "Decisões estratégicas de design baseadas em dados de comportamento do usuário. Cada elemento é posicionado para guiar visitantes à ação.",
    highlight: "Design baseado em dados",
  },
  {
    icon: Clock,
    title: "Entrega no Prazo",
    description: "Cronogramas realistas com margem para revisões. Projetos entregues quando prometido, sem surpresas de última hora ou atrasos intermináveis.",
    highlight: "Prazo garantido",
  },
];

const guarantees = [
  "Consultoria gratuita para entender suas necessidades",
  "Proposta detalhada com preços transparentes",
  "30 dias de suporte após entrega do projeto",
  "Revisões ilimitadas durante o desenvolvimento",
  "Propriedade total do código e assets",
  "Treinamento pós-lançamento incluso",
];

export default function WhyChooseSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Por que Escolher o Ricardo
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Seu Sucesso é{" "}
            <span className="text-gradient">Minha Prioridade</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais do que apenas um desenvolvedor — um parceiro estratégico comprometido em entregar 
            soluções que fazem seu negócio crescer e superam expectativas.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map(({ icon: Icon, title, description, highlight }) => (
            <div
              key={title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {title}
                    </h3>
                  </div>
                  <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    {highlight}
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees Box */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card via-card to-primary/5 border border-border overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Meu Compromisso com Você
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Todo projeto inclui estas garantias
                  </p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {guarantees.map((guarantee) => (
                  <div key={guarantee} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
