import { useState } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  Building2, 
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

const projectTypes = [
  "Site Empresarial",
  "Landing Page",
  "E-commerce",
  "Aplicação Web",
  "Desenvolvimento de Sistema/API",
  "Redesign de Site",
  "Otimização de Performance",
  "Manutenção & Suporte",
  "Outro",
];

const budgetRanges = [
  "R$ 2.000 - R$ 5.000",
  "R$ 5.000 - R$ 10.000",
  "R$ 10.000 - R$ 20.000",
  "R$ 20.000 - R$ 50.000",
  "R$ 50.000+",
  "Ainda não sei",
];

export default function QuoteFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section id="quote" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 rounded-3xl bg-card border border-primary/30 glow-sm">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
              Obrigado!
            </h3>
            <p className="text-muted-foreground mb-6">
              Sua solicitação de orçamento foi recebida. Vou analisar os detalhes do seu projeto e 
              retornarei em até 24 horas com uma proposta personalizada.
            </p>
            <p className="text-sm text-muted-foreground">
              Enquanto isso, sinta-se à vontade para conferir meu{" "}
              <a href="#portfolio" className="text-primary hover:underline">
                portfólio
              </a>{" "}
              para mais exemplos do meu trabalho.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Info */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Orçamento Grátis
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              Vamos Construir{" "}
              <span className="text-gradient">Algo Incrível</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Conte-me sobre seu projeto e enviarei uma proposta detalhada em até 24 horas. 
              Sem compromisso, sem pressão — apenas conselhos honestos e preços transparentes.
            </p>

            {/* What to Expect */}
            <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-foreground">O que acontece depois?</h3>
              <div className="space-y-3">
                {[
                  { step: "1", text: "Vou analisar os detalhes do seu projeto cuidadosamente" },
                  { step: "2", text: "Agendaremos uma consultoria gratuita de 30 minutos" },
                  { step: "3", text: "Você receberá uma proposta detalhada com cronograma e preços" },
                  { step: "4", text: "Se formos um bom match, começamos a construir!" },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{step}</span>
                    </div>
                    <span className="text-foreground">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-4">Prefere falar diretamente?</h3>
              <div className="space-y-3">
                <a
                  href="mailto:contato@ricardodev.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  contato@ricardodev.com
                </a>
                <a
                  href="https://wa.me/5561986389146"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp: +55 61 98638-9146
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-card border border-border"
            >
              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="João Silva"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="joao@empresa.com"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      WhatsApp / Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Building2 className="w-4 h-4 inline mr-2" />
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Sua Empresa Ltda"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Projeto *
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Selecione um tipo de projeto...</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Faixa de Orçamento
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Selecione sua faixa de orçamento...</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Detalhes do Projeto *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-me sobre seu projeto, objetivos e quaisquer requisitos específicos..."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-sm font-semibold group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar Orçamento Grátis
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Suas informações estão seguras e nunca serão compartilhadas. 
                  Espere uma resposta em até 24 horas.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
