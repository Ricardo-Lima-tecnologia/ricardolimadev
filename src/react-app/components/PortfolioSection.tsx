import { 
  TrendingUp, 
  Users, 
  ArrowRight,
  Clock
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

const projects = [
  {
    title: "Coffee Shops - Site Institucional",
    category: "Website Responsivo",
    image: "/coffee-shops.png",
    description: "Site de uma cafeteria com vários materiais informativos, ideal para tornar o negócio mais presente no mundo digital.",
    challenge: "A cafeteria precisava de presença digital profissional para atrair mais clientes e compartilhar informações sobre produtos e serviços.",
    solution: "Desenvolvi um site totalmente responsivo, ou seja, o conteúdo da página se adapta ao tamanho da tela do dispositivo, tal característica é fundamental para as páginas da web, pois atualmente grande parte das pessoas consome conteúdo online por smartphones ou tablets.",
    results: [
      { icon: Users, label: "Acesso Mobile", value: "78%", improvement: "dos visitantes" },
      { icon: TrendingUp, label: "Engajamento", value: "+45%", improvement: "aumento" },
      { icon: Clock, label: "Tempo no Site", value: "3min", improvement: "média" },
    ],
  },
  {
    title: "Odontolima - Clínica Odontológica",
    category: "Website Institucional",
    image: "/odontolima.png",
    description: "Site moderno e responsivo desenvolvido para uma clínica de odontologia se inserir no mundo digital.",
    challenge: "A clínica não possuía presença digital e precisava de uma plataforma profissional para atrair novos pacientes online.",
    solution: "A clínica conseguiu captar mais clientes para o seu negócio através do seu site moderno responsivo, com design profissional e otimizado para conversão.",
    results: [
      { icon: Users, label: "Novos Pacientes", value: "+65%", improvement: "via online" },
      { icon: TrendingUp, label: "Presença Digital", value: "100%", improvement: "estabelecida" },
      { icon: Clock, label: "Agendamentos", value: "24/7", improvement: "disponível" },
    ],
  },
  {
    title: "Modernização de Portal de Saúde",
    category: "Modernização de Sistema",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    description: "Modernização completa de um sistema legado de agendamento de saúde com portal do paciente e responsividade mobile.",
    challenge: "Sistema desatualizado causando frustração dos pacientes, alto volume de ligações para agendamentos e preocupações com conformidade de segurança.",
    solution: "Construí um portal moderno do paciente com agendamento online, mensagens seguras e design mobile-first.",
    results: [
      { icon: Users, label: "Agendamentos Online", value: "78%", improvement: "das consultas" },
      { icon: Clock, label: "Volume de Ligações", value: "-45%", improvement: "redução" },
      { icon: TrendingUp, label: "Satisfação do Paciente", value: "4,8/5", improvement: "avaliação" },
    ],
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Portfólio
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Projetos Reais,{" "}
            <span className="text-gradient">Resultados Reais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como soluções web personalizadas transformaram negócios e entregaram 
            melhorias mensuráveis em performance, conversões e receita.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative group rounded-2xl overflow-hidden border border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm border border-border text-sm font-medium text-foreground">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Results Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-4">
                      {project.results.map(({ icon: Icon, label, value, improvement }) => (
                        <div
                          key={label}
                          className="flex items-center gap-3 px-4 py-2 rounded-xl bg-card/90 backdrop-blur-sm border border-border"
                        >
                          <Icon className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-display font-bold text-lg text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground">{improvement}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {project.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30">
                    <span className="text-sm font-medium text-destructive">O Desafio</span>
                    <p className="text-foreground mt-1">{project.challenge}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                    <span className="text-sm font-medium text-primary">A Solução</span>
                    <p className="text-foreground mt-1">{project.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para ver resultados semelhantes no seu negócio?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm font-semibold group"
          >
            <a href="https://wa.me/5561986389146" target="_blank" rel="noopener noreferrer">
              Iniciar Seu Projeto
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
