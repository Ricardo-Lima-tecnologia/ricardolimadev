import { 
  Code2, 
  Database, 
  Shield, 
  Zap, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

const skills = [
  { icon: Code2, label: "Desenvolvimento Full Stack", description: "React, Node.js, TypeScript e frameworks modernos" },
  { icon: Database, label: "Arquitetura de Banco de Dados", description: "SQL, NoSQL e estruturas de dados otimizadas" },
  { icon: Shield, label: "Desenvolvimento Seguro", description: "Melhores práticas de proteção de dados e segurança" },
  { icon: Zap, label: "Otimização de Performance", description: "Aplicações rápidas e eficientes" },
];

const values = [
  "Abordagem estratégica em cada projeto",
  "Comunicação clara durante todo o processo",
  "Foco em resultados mensuráveis",
  "Mentalidade de parceria de longo prazo",
  "Suporte e manutenção contínuos",
  "Gestão de projeto transparente",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Sobre o Desenvolvedor
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Seu Parceiro na{" "}
            <span className="text-gradient">Transformação Digital</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combinando excelência técnica com pensamento estratégico de negócios para 
            entregar soluções que impulsionam o crescimento real.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Story & Values */}
          <div>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Como <strong className="text-foreground">Analista de Sistemas e Desenvolvedor Full Stack</strong>, 
                trago uma combinação única de profundidade técnica e visão de negócios para cada projeto. 
                Com anos de experiência construindo soluções web de alta performance, entendo que 
                tecnologia de ponta só é valiosa quando serve aos objetivos do seu negócio.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Minha abordagem vai além de apenas escrever código. Analiso as necessidades do seu negócio, 
                identifico oportunidades de otimização e projeto soluções que escalam com seu crescimento. 
                De interfaces frontend que convertem visitantes em clientes, a sistemas backend robustos 
                que lidam com lógica de negócio complexa — entrego soluções completas construídas para o sucesso.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seja uma landing page de alta conversão, uma aplicação web completa ou 
                otimização de sistemas existentes, estou comprometido em entregar resultados que excedam 
                as expectativas e proporcionem valor duradouro para o seu negócio.
              </p>
            </div>

            {/* Values List */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm font-semibold group"
              >
                <a href="https://wa.me/5561986389146" target="_blank" rel="noopener noreferrer">
                  Vamos Discutir Seu Projeto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Skills Cards */}
          <div className="space-y-6">
            {skills.map(({ icon: Icon, label, description }, index) => (
              <div
                key={label}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:glow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                      {label}
                    </h3>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/30">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-display font-bold text-3xl text-primary">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projetos Entregues</div>
                </div>
                <div>
                  <div className="font-display font-bold text-3xl text-primary">5+</div>
                  <div className="text-sm text-muted-foreground mt-1">Anos de Experiência</div>
                </div>
                <div>
                  <div className="font-display font-bold text-3xl text-primary">10+</div>
                  <div className="text-sm text-muted-foreground mt-1">Setores Atendidos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
