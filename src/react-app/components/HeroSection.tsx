import { ArrowRight, Zap, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

const trustBadges = [
  { icon: Zap, label: "Alta Performance" },
  { icon: Shield, label: "Desenvolvimento Seguro" },
  { icon: TrendingUp, label: "Sistemas Escaláveis" },
];

const highlights = [
  "Soluções sob medida",
  "Arquitetura otimizada para SEO",
  "Design mobile-first",
  "Entrega rápida",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 noise-bg pointer-events-none" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Desenvolvedor Full Stack & Analista de Sistemas
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
              Transforme Seu Negócio com Soluções Web de{" "}
              <span className="text-gradient">Alta Performance</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Sites e sistemas web personalizados, desenvolvidos para velocidade, conversões e 
              crescimento mensurável. Soluções que geram resultados reais para o seu negócio.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow text-lg px-8 py-6 font-semibold group"
              >
                <a href="https://wa.me/5561986389146" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento Grátis
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6 font-semibold"
              >
                <a href="#services">Ver Serviços</a>
              </Button>
            </div>

            {/* Free Consultation Notice */}
            <p className="text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2 mb-8">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Consultoria 100% Gratuita — Sem compromisso
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted text-muted-foreground border border-border"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Image / Visual */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-cyan-500/20 rounded-2xl blur-2xl scale-95" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50 glow">
                <img
                  src="/hero-image.jpg"
                  alt="Ricardo - Desenvolvedor Full Stack & Analista de Sistemas"
                  className="w-full max-w-md lg:max-w-lg object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-md rounded-xl p-4 border border-border">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-center">
                      <div className="font-display font-bold text-2xl text-primary">50+</div>
                      <div className="text-muted-foreground">Projetos</div>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div className="text-center">
                      <div className="font-display font-bold text-2xl text-primary">5+</div>
                      <div className="text-muted-foreground">Anos Exp.</div>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div className="text-center">
                      <div className="font-display font-bold text-2xl text-primary">100%</div>
                      <div className="text-muted-foreground">Satisfação</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 lg:mt-24">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 border border-border backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Role</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
