import { Star, Quote, CheckCircle2, Building2, Users, Calendar } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Oliveira",
    role: "CEO",
    company: "TechStart Soluções",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    content: "Trabalhar com o Ricardo transformou completamente nossa presença online. Nosso novo site carrega em menos de 2 segundos, e vimos um aumento de 180% em leads qualificados. Sua abordagem estratégica de desenvolvimento fez toda a diferença.",
    rating: 5,
    highlight: "180% mais leads",
  },
  {
    name: "Sarah Chen",
    role: "Diretora de Marketing",
    company: "GrowthWave Agency",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    content: "As landing pages que o Ricardo construiu para nossas campanhas de Google Ads consistentemente superam os benchmarks do setor. Nosso custo por aquisição caiu 45%, e a qualidade dos leads melhorou dramaticamente. Super recomendo!",
    rating: 5,
    highlight: "45% menor CPA",
  },
  {
    name: "David Santos",
    role: "Fundador",
    company: "LogiTrade Logística",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    content: "O Ricardo desenvolveu um sistema de gestão logística personalizado que automatizou 70% dos nossos processos manuais. O sistema se pagou em 3 meses através de ganhos de eficiência. Profissional, responsivo e entrega além das expectativas.",
    rating: 5,
    highlight: "70% automação",
  },
];

const stats = [
  { icon: CheckCircle2, value: "50+", label: "Projetos Concluídos" },
  { icon: Building2, value: "10+", label: "Setores Atendidos" },
  { icon: Users, value: "100%", label: "Satisfação dos Clientes" },
  { icon: Calendar, value: "5+", label: "Anos de Experiência" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            A Confiança de{" "}
            <span className="text-gradient">Líderes de Negócios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Não acredite apenas na minha palavra — ouça clientes que experimentaram 
            transformação real e resultados mensuráveis.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="text-center p-6 rounded-2xl bg-card border border-border"
            >
              <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-display font-bold text-3xl text-foreground mb-1">
                {value}
              </div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-sm"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Highlight Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium mb-4">
                {testimonial.highlight}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <img
                  key={t.name}
                  src={t.image}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-background object-cover"
                  style={{ zIndex: 4 - i }}
                />
              ))}
            </div>
            <span className="text-muted-foreground">
              Junte-se a <span className="text-foreground font-semibold">50+ clientes satisfeitos</span> que transformaram seus negócios
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
