import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo leva um projeto típico?",
    answer: "Os prazos variam de acordo com a complexidade. Uma landing page geralmente leva 1-2 semanas, um site empresarial 3-4 semanas, e aplicações web personalizadas 6-12 semanas. Durante nossa consulta inicial, fornecerei um cronograma detalhado baseado nos seus requisitos específicos.",
  },
  {
    question: "O que está incluído no preço do projeto?",
    answer: "Todos os projetos incluem: design responsivo (mobile, tablet, desktop), otimização de SEO, otimização de performance, 30 dias de suporte pós-lançamento e propriedade total do código e assets. Custos de hospedagem e domínio são separados, mas ajudo você a configurar tudo.",
  },
  {
    question: "Você oferece manutenção e suporte após o lançamento?",
    answer: "Sim! Ofereço pacotes de manutenção mensal que incluem atualizações de segurança, monitoramento de performance, atualizações de conteúdo, backups e suporte prioritário. Isso garante que seu site permaneça seguro, rápido e atualizado.",
  },
  {
    question: "Como funciona o processo de pagamento?",
    answer: "As condições padrão são 50% na entrada para iniciar o trabalho e 50% na conclusão, antes da entrega final. Para projetos maiores, podemos organizar pagamentos baseados em marcos. Aceito PIX, cartões de crédito/débito, transferência bancária e ofereço parcelamento para projetos qualificados.",
  },
  {
    question: "Você pode trabalhar com meu site existente ou preciso começar do zero?",
    answer: "Ambas as opções estão disponíveis. Posso redesenhar e otimizar seu site existente, migrá-lo para uma plataforma melhor, ou construir algo totalmente novo. Durante nossa consulta, avaliaremos o que faz mais sentido para seus objetivos e orçamento.",
  },
  {
    question: "Vou conseguir atualizar o conteúdo do site sozinho?",
    answer: "Com certeza. Construo sites com sistemas de gerenciamento de conteúdo (CMS) fáceis de usar que permitem atualizar textos, imagens e outros conteúdos sem conhecimento técnico. Também forneço treinamento e documentação para você se sentir confiante fazendo alterações.",
  },
  {
    question: "Quais informações você precisa para começar?",
    answer: "Para fornecer um orçamento preciso, preciso de: seus objetivos de negócio, público-alvo, funcionalidades desejadas, exemplos de sites que você gosta, materiais de marca existentes (logo, cores) e seu cronograma/orçamento. Quanto mais detalhes você compartilhar, melhor posso personalizar a proposta.",
  },
  {
    question: "Você trabalha com clientes fora do Brasil?",
    answer: "Sim! Trabalho com clientes do mundo todo. A comunicação acontece principalmente via email, WhatsApp e videochamadas. Diferenças de fuso horário são facilmente gerenciadas, e já entreguei projetos com sucesso para clientes de vários países.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
      >
        <span className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 mt-1 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-muted-foreground leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 inline mr-2" />
            FAQ
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Perguntas{" "}
            <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem dúvidas? Tenho respostas. Se não encontrar o que procura, 
            sinta-se à vontade para entrar em contato diretamente.
          </p>
        </div>

        {/* FAQ List */}
        <div className="rounded-3xl bg-card border border-border p-6 sm:p-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Ainda tem dúvidas?{" "}
            <a
              href="https://wa.me/5561986389146"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Entre em contato
            </a>{" "}
            e terei prazer em ajudar.
          </p>
        </div>
      </div>
    </section>
  );
}
