import { ArrowRight, Mail, Phone, MapPin, Github } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

export default function FinalCTASection() {
  return (
    <>
      {/* Final CTA */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6">
            Pronto para{" "}
            <span className="text-gradient">Transformar</span>
            <br />
            Sua Presença Digital?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Vamos construir algo que gere resultados reais para o seu negócio. 
            Comece com uma consultoria gratuita — sem compromisso, apenas conselhos honestos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm text-lg px-8 py-6 font-semibold group"
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
              className="border-border hover:border-primary/50 text-lg px-8 py-6 group"
            >
              <a
                href="https://wa.me/5561986389146"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span>✓ 50+ Projetos Entregues</span>
            <span>✓ 98% Satisfação dos Clientes</span>
            <span>✓ Resposta em 24h</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">&lt;/&gt;</span>
                </div>
                <span className="font-display font-bold text-xl text-foreground">
                  RicardoDev
                </span>
              </a>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Desenvolvedor Full Stack & Analista de Sistemas especializado em sites 
                e aplicações web de alta performance que geram resultados para negócios.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/ricardodev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">
                Links Rápidos
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Sobre", href: "#about" },
                  { label: "Serviços", href: "#services" },
                  { label: "Portfólio", href: "#portfolio" },
                  { label: "Depoimentos", href: "#testimonials" },
                  { label: "FAQ", href: "#faq" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">
                Contato
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:sites@devricardolima.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    sites@devricardolima.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5561986389146"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +55 61 98638-9146
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    Brasília, Brasil
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RicardoDev. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Projetado & construído com ❤️ para resultados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
