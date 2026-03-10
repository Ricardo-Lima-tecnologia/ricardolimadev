import { 
  Globe, 
  Target, 
  Settings, 
  Server, 
  Database, 
  Zap, 
  RefreshCw, 
  Headphones,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Sites Empresariais de Alta Conversão",
    description: "Sites personalizados projetados para transformar visitantes em clientes. Cada elemento é estrategicamente posicionado para guiar os usuários à ação.",
    benefits: ["Maior geração de leads", "Imagem profissional da marca", "Experiência otimizada para mobile"],
    highlight: "Até 3x mais conversões",
  },
  {
    icon: Target,
    title: "Landing Pages para Google Ads",
    description: "Landing pages de alta performance otimizadas para campanhas de publicidade paga. Maximize seu investimento em anúncios com páginas construídas para converter.",
    benefits: ["Maior Quality Score", "Menor custo por clique", "Melhor ROI em anúncios"],
    highlight: "Otimizado para tráfego pago",
  },
  {
    icon: Settings,
    title: "Sistemas Web Personalizados",
    description: "Aplicações web sob medida que automatizam seus processos de negócio, desde sistemas de CRM até gestão de estoque e muito mais.",
    benefits: ["Automação de processos", "Fluxos de trabalho personalizados", "Arquitetura escalável"],
    highlight: "Feito para suas necessidades",
  },
  {
    icon: Server,
    title: "Desenvolvimento Backend & APIs",
    description: "Soluções server-side robustas e integrações de API que potencializam suas aplicações com confiabilidade e segurança.",
    benefits: ["Manipulação segura de dados", "Integrações de terceiros", "Capacidades em tempo real"],
    highlight: "Segurança empresarial",
  },
  {
    icon: Database,
    title: "Arquitetura de Banco de Dados",
    description: "Design e gestão de banco de dados otimizados que garantem consultas rápidas, integridade de dados e escalabilidade conforme você cresce.",
    benefits: ["Consultas mais rápidas", "Integridade de dados", "Estrutura pronta para crescimento"],
    highlight: "Performance otimizada",
  },
  {
    icon: Zap,
    title: "Otimização de Performance & SEO",
    description: "Acelere seu site existente e melhore o ranking nas buscas. Sites rápidos ranqueiam melhor e convertem mais.",
    benefits: ["Tempos de carregamento menores", "Melhor posicionamento nas buscas", "Melhor experiência do usuário"],
    highlight: "Velocidade + Visibilidade",
  },
  {
    icon: RefreshCw,
    title: "Redesign & Modernização de Sites",
    description: "Transforme seu site desatualizado em um ativo moderno e de alta performance que reflete o verdadeiro potencial da sua marca.",
    benefits: ["Linguagem de design moderna", "Stack tecnológica atualizada", "Funcionalidade melhorada"],
    highlight: "Visual moderno e renovado",
  },
  {
    icon: Headphones,
    title: "Manutenção & Suporte Técnico",
    description: "Suporte contínuo para manter seu site seguro, atualizado e performando no seu melhor. Tranquilidade inclusa.",
    benefits: ["Atualizações regulares", "Monitoramento de segurança", "Suporte prioritário"],
    highlight: "Tranquilidade 24/7",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Serviços
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Soluções que Impulsionam o{" "}
            <span className="text-gradient">Crescimento do Negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Do conceito à implantação, entrego soluções web completas 
            projetadas para aumentar sua receita e otimizar suas operações.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map(({ icon: Icon, title, description, benefits, highlight }) => (
            <div
              key={title}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-sm"
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
                  {highlight}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-xl lg:text-2xl text-foreground mb-3 pr-24">
                {title}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {description}
              </p>

              {/* Benefits */}
              <div className="space-y-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-cyan-500/10 border border-primary/30">
            <div className="text-center sm:text-left">
              <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                Não sabe qual serviço você precisa?
              </h3>
              <p className="text-muted-foreground">
                Vamos conversar sobre seu projeto e encontrar a solução perfeita para o seu negócio.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm font-semibold whitespace-nowrap group"
            >
              <a href="https://wa.me/5561986389146" target="_blank" rel="noopener noreferrer">
                Consultoria Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
