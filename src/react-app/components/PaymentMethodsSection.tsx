import { 
  CreditCard, 
  Banknote, 
  Building2, 
  CalendarCheck,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const paymentMethods = [
  {
    icon: Sparkles,
    title: "PIX",
    description: "Pagamento instantâneo sem taxas. Comece imediatamente com o método de pagamento mais popular do Brasil.",
    benefits: ["Confirmação instantânea", "Sem taxas de transação", "Disponível 24/7"],
    highlight: "Mais Popular",
  },
  {
    icon: CreditCard,
    title: "Cartões de Crédito e Débito",
    description: "Pague com segurança com Visa, Mastercard, Elo e outros cartões principais. Pagamento à vista ou parcelado disponível.",
    benefits: ["Todos os cartões principais aceitos", "Processamento seguro", "Confirmação instantânea"],
    highlight: null,
  },
  {
    icon: Building2,
    title: "Transferência Bancária",
    description: "Transferência bancária tradicional para contas corporativas. TED ou DOC aceitos de qualquer banco brasileiro.",
    benefits: ["Faturamento corporativo", "Todos os bancos aceitos", "Comprovante fornecido"],
    highlight: null,
  },
  {
    icon: CalendarCheck,
    title: "Parcelamento",
    description: "Divida seu investimento no projeto em parcelas mensais gerenciáveis. Condições flexíveis disponíveis para projetos maiores.",
    benefits: ["Até 12x parcelas", "Condições flexíveis", "Sem análise de crédito"],
    highlight: "Flexível",
  },
];

export default function PaymentMethodsSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            <Banknote className="w-4 h-4 inline mr-2" />
            Formas de Pagamento
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Métodos de{" "}
            <span className="text-gradient">Pagamento Flexíveis</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha a opção de pagamento que funciona melhor para o seu negócio. 
            Preços transparentes sem taxas ocultas.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentMethods.map(({ icon: Icon, title, description, benefits, highlight }) => (
            <div
              key={title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-sm"
            >
              {/* Highlight Badge */}
              {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {highlight}
                  </span>
                </div>
              )}
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {description}
              </p>
              
              {/* Benefits */}
              <ul className="space-y-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">50% na entrada, 50% na entrega</span>
            {" "}— condições padrão para a maioria dos projetos. Arranjos personalizados disponíveis para clientes empresariais.
          </p>
        </div>
      </div>
    </section>
  );
}
