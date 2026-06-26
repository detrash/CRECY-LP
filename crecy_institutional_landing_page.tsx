import React, { useState, useEffect } from 'react';

// Ícones como componentes SVG para evitar dependências externas
const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
);
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
);

const translations = {
  en: {
    navThesis: "The Thesis",
    navAsset: "The Asset",
    navInsights: "Insights & Solutions",
    login: "Login",
    contactDesk: "Contact Desk",
    heroTag: "Impact Investment Asset",
    heroTitle1: "Allocate 1% to the",
    heroTitle2: "Future of the Planet.",
    heroSubtitle: "cRECY is an institutional-grade digital asset backed by cryptographically verified environmental regeneration. We provide smart capital with the ultimate hedge against climate risk.",
    btnProspectus: "Request Prospectus",
    btnWhitepaper: "Read Whitepaper",
    thesisTitle: "The Strategic Allocation Thesis",
    thesisP1: "In an era defined by climate risk and shifting global regulations, an optimized portfolio requires exposure to verifiable regenerative assets.",
    thesisP2: "Allocating a long-term 1% position to cRECY provides essential diversification while capturing the asymmetric upside of the rapidly expanding tokenized ESG sector.",
    arg1Title: "Asymmetric Upside",
    arg1Desc: "Programmatic scarcity tied to real-world sustainable waste transformation creates deflationary pressure as global demand for ESG compliance skyrockets.",
    arg2Title: "Uncorrelated Diversification",
    arg2Desc: "Performance driven by environmental metrics and Impact Investment adoption, completely independent of traditional fiat monetary policy and equities.",
    arg3Title: "Verifiable ESG Compliance",
    arg3Desc: "Backed by audited, real-world data on the Recy Network. Zero greenwashing risk. Cryptographic proof of impact.",
    assetTag: "Asset Architecture",
    assetTitle: "The Gold Standard of Impact Investment",
    assetSubtitle: "cRECY is meticulously minted through a rigorous protocol of real-world environmental auditing.",
    step1Title: "Physical Action",
    step1Desc: "Sustainable waste treatment is executed globally by partners within the Recy Network ecosystem, establishing the underlying effort tokenized as proof of impact.",
    step2Title: "Audited Verification",
    step2Desc: "Reports are cryptographically verified and rigorously audited, guaranteeing absolute authenticity of impact.",
    step3Title: "Asset Minting",
    step3Desc: "cRECY is issued as a high-grade digital asset, inherently scarce and permanently, immutably linked to real-world clean-up.",
    solTitle: "Solutions for Smart Capital",
    tabRetail: "Retail & HNWI",
    tabInst: "Institutional Investors",
    tabCorp: "Corporate Treasuries",
    retTitle: "Generational Wealth.",
    retDesc: "Build long-term, generational wealth by taking a 1% position in the definitive protocol for global waste management.",
    retLi1: "Web3 Wallet Native",
    retLi2: "Deflationary Tokenomics",
    retLink: "Acquire on Open Market",
    retStat1: "Minted cRECY",
    retStat2: "Current Price Range",
    instTitle: "Fulfill Mandates. Preserve Wealth.",
    instDesc: "Satisfy stringent ESG mandates with absolute cryptographic proof. cRECY offers a verifiable audit trail of environmental impact, eliminating the reputational risks of traditional \"greenwashing\" assets.",
    instLi1: "Transparent On-Chain Auditing",
    instLi2: "Regulatory Compliant Architecture",
    instLi3: "OTC Desk",
    instLink: "Contact Institutional Desk",
    instQuote: "\"cRECY represents the maturation of Impact Investment—transforming ecological impact from a philanthropic cost into a secure, verifiable asset class on the balance sheet.\"",
    corpTitle: "Transform Idle Capital.",
    corpDesc: "Convert corporate treasury reserves into high-performing impact assets. Hold cRECY to meet board-level sustainability targets, and align your balance sheet with a regenerative future.",
    corpLi1: "Enterprise ESG Reporting API",
    corpLink: "Explore Corporate Solutions",
    corpCardTitle: "Circularity Protocol",
    corpCardDesc: "Seamlessly integrating treasury management with global sustainability directives.",
    ctaTitle: "Ready to Allocate?",
    ctaDesc: "Join the smart capital leading the transition to a regenerative economy. Secure your strategic position today.",
    ctaBtn1: "Contact Institutional Desk",
    ctaBtn2: "Download Investor Deck",
    footDesc: "Detrash Tecnologia Ltda. Building regenerative finance for a prosperous world. The premier digital asset accelerating global cleanup.",
    footLoc: "Lauro de Freitas, BA, Brazil",
    footCol1: "The Asset",
    footCol1Li1: "cRECY Tokenomics",
    footCol1Li2: "Auditing Protocol",
    footCol1Li3: "Whitepaper",
    footCol1Li4: "Network Data",
    footCol2: "Compliance",
    footCol2Li1: "Terms of Service",
    footCol2Li2: "Privacy Policy",
    footCol2Li3: "Risk Disclosures",
    footCol2Li4: "ESG Certification",
    footCol3: "Contact",
    footCol3Li1: "phil@detrash.io",
    footCol3Li2: "Media Inquiries",
    footCol3Li3: "Institutional Support",
    footNotice: "Important Notice: Digital assets are highly volatile. cRECY is an environmental asset; please review all risk disclosures before allocating capital. This website is for informational purposes only and does not constitute financial advice."
  },
  pt: {
    navThesis: "A Tese",
    navAsset: "O Ativo",
    navInsights: "Insights e Soluções",
    login: "Entrar",
    contactDesk: "Falar com Mesa",
    heroTag: "Ativo de Investimento de Impacto",
    heroTitle1: "Aloque 1% no",
    heroTitle2: "Futuro do Planeta.",
    heroSubtitle: "O cRECY é um ativo digital de nível institucional lastreado pela regeneração ambiental verificada criptograficamente. Fornecemos ao capital inteligente a proteção definitiva contra o risco climático.",
    btnProspectus: "Solicitar Prospecto",
    btnWhitepaper: "Ler Whitepaper",
    thesisTitle: "A Tese de Alocação Estratégica",
    thesisP1: "Numa era definida pelo risco climático e por mudanças regulatórias globais, um portfólio otimizado exige exposição a ativos regenerativos verificáveis.",
    thesisP2: "Alocar uma posição de 1% a longo prazo no cRECY oferece uma diversificação essencial ao capturar o potencial de valorização assimétrica do setor ESG tokenizado em rápida expansão.",
    arg1Title: "Upside Assimétrico",
    arg1Desc: "A escassez programática atrelada à transformação sustentável de resíduos no mundo real cria pressão deflacionária à medida que a demanda global por conformidade ESG dispara.",
    arg2Title: "Diversificação Descorrelacionada",
    arg2Desc: "Desempenho impulsionado por métricas ambientais e pela adoção de Investimento de Impacto, completamente independente das políticas monetárias fiduciárias tradicionais e ações.",
    arg3Title: "Conformidade ESG Verificável",
    arg3Desc: "Lastreado por dados reais e auditados na Rede Recy. Risco zero de greenwashing. Prova criptográfica de impacto.",
    assetTag: "Arquitetura do Ativo",
    assetTitle: "O Padrão Ouro em Investimento de Impacto",
    assetSubtitle: "O cRECY é meticulosamente cunhado por meio de um rigoroso protocolo de auditoria ambiental no mundo real.",
    step1Title: "Ação Física",
    step1Desc: "O tratamento sustentável de resíduos é executado globalmente por parceiros no ecossistema da Rede Recy, estabelecendo o esforço subjacente tokenizado como prova de impacto.",
    step2Title: "Verificação Auditada",
    step2Desc: "Os relatórios são verificados criptograficamente e rigorosamente auditados, garantindo a autenticidade absoluta do impacto.",
    step3Title: "Originação do Ativo",
    step3Desc: "O cRECY é emitido como um ativo digital de alto padrão, inerentemente escasso e permanentemente, de forma imutável, atrelado à limpeza do mundo real.",
    solTitle: "Soluções para Capital Inteligente",
    tabRetail: "Varejo e HNWI",
    tabInst: "Investidores Institucionais",
    tabCorp: "Tesourarias Corporativas",
    retTitle: "Patrimônio Geracional.",
    retDesc: "Construa patrimônio geracional de longo prazo assumindo uma posição de 1% no protocolo definitivo para gestão global de resíduos.",
    retLi1: "Nativo para Carteiras Web3",
    retLi2: "Tokenomics Deflacionários",
    retLink: "Adquirir no Mercado Aberto",
    retStat1: "cRECY Cunhados",
    retStat2: "Faixa de Preço Atual",
    instTitle: "Cumpra Mandatos. Preserve Patrimônio.",
    instDesc: "Satisfaça rigorosos mandatos ESG com prova criptográfica absoluta. O cRECY oferece uma trilha de auditoria verificável do impacto ambiental, eliminando os riscos reputacionais dos ativos tradicionais de \"greenwashing\".",
    instLi1: "Auditoria On-Chain Transparente",
    instLi2: "Arquitetura em Conformidade Regulatória",
    instLi3: "Mesa OTC",
    instLink: "Falar com Mesa Institucional",
    instQuote: "\"O cRECY representa o amadurecimento dos Investimentos de Impacto—transformando o impacto ecológico de um custo filantrópico em uma classe de ativos segura e verificável no balanço patrimonial.\"",
    corpTitle: "Transforme Capital Ocioso.",
    corpDesc: "Converta reservas de tesouraria corporativa em ativos de impacto de alto desempenho. Mantenha cRECY para atingir metas de sustentabilidade da diretoria e alinhar seu balanço patrimonial a um futuro regenerativo.",
    corpLi1: "API Corporativa de Relatórios ESG",
    corpLink: "Explorar Soluções Corporativas",
    corpCardTitle: "Protocolo de Circularidade",
    corpCardDesc: "Integrando perfeitamente a gestão de tesouraria às diretrizes globais de sustentabilidade.",
    ctaTitle: "Pronto para Alocar?",
    ctaDesc: "Junte-se ao capital inteligente que lidera a transição para uma economia regenerativa. Garanta sua posição estratégica hoje.",
    ctaBtn1: "Falar com a Mesa Institucional",
    ctaBtn2: "Baixar Apresentação para Investidores",
    footDesc: "Detrash Tecnologia Ltda. Construindo finanças regenerativas para um mundo próspero. O principal ativo digital que acelera a limpeza global.",
    footLoc: "Lauro de Freitas, BA, Brasil",
    footCol1: "O Ativo",
    footCol1Li1: "Tokenomics cRECY",
    footCol1Li2: "Protocolo de Auditoria",
    footCol1Li3: "Whitepaper",
    footCol1Li4: "Dados da Rede",
    footCol2: "Conformidade",
    footCol2Li1: "Termos de Serviço",
    footCol2Li2: "Política de Privacidade",
    footCol2Li3: "Divulgação de Riscos",
    footCol2Li4: "Certificação ESG",
    footCol3: "Contato",
    footCol3Li1: "phil@detrash.io",
    footCol3Li2: "Imprensa",
    footCol3Li3: "Suporte Institucional",
    footNotice: "Aviso Importante: Ativos digitais são altamente voláteis. cRECY é um ativo ambiental; revise todas as divulgações de risco antes de alocar capital. Este site é apenas para fins informativos e não constitui aconselhamento financeiro."
  }
};

const CrecyLogo = ({ className = "h-8" }) => {
  const [imgError, setImgError] = useState(false);
  if (imgError) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-white tracking-tight font-heading">
          cRECY<span className="text-[#00A950]">.</span>
        </span>
      </div>
    );
  }
  return (
    <img 
      src="https://i.postimg.cc/zXMJsdT2/2.png" 
      alt="cRECY Logo" 
      className={`object-contain ${className}`}
      onError={() => setImgError(true)} 
    />
  );
};

const App = () => {
  const [lang, setLang] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('retail');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const langKey = lang === 'pt' ? 'pt' : 'en';
  const t = translations[langKey];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'pt' : 'en');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-body selection:bg-[#002766] selection:text-white">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');
        .font-heading { font-family: 'Atkinson Hyperlegible', sans-serif; }
        .font-body { font-family: 'Red Hat Display', sans-serif; }
      `}} />

      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent border-slate-800/50 py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center"><CrecyLogo className="h-16 md:h-20" /></a>
          <div className="hidden md:flex items-center gap-10 text-[13px] font-semibold tracking-wide uppercase text-slate-300 font-body">
            <a href="#thesis" className="hover:text-white transition-colors">{t.navThesis}</a>
            <a href="#asset" className="hover:text-white transition-colors">{t.navAsset}</a>
            <a href="#investors" className="hover:text-white transition-colors">{t.navInsights}</a>
          </div>
          <div className="hidden md:flex items-center gap-6 font-body">
            <button onClick={toggleLang} className="flex items-center gap-2 text-[12px] font-bold tracking-wide uppercase text-slate-500 hover:text-white transition-colors">
              {lang === 'en' ? 'PT-BR' : 'EN'}
            </button>
            <a href="https://app.crecy.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold tracking-wide uppercase hover:text-white transition-colors">{t.login}</a>
            <a href="mailto:phil@detrash.io" className="bg-white text-black text-[13px] font-bold uppercase tracking-wide py-3 px-8 hover:bg-slate-200 transition-all duration-300 inline-block">{t.contactDesk}</a>
          </div>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-slate-800 p-6 flex flex-col gap-6">
            <a href="#thesis" onClick={() => setMobileMenuOpen(false)} className="text-xl font-heading font-bold text-white">{t.navThesis}</a>
            <a href="#asset" onClick={() => setMobileMenuOpen(false)} className="text-xl font-heading font-bold text-white">{t.navAsset}</a>
            <a href="#investors" onClick={() => setMobileMenuOpen(false)} className="text-xl font-heading font-bold text-white">{t.navInsights}</a>
            <div className="h-[1px] w-full bg-slate-800 my-2"></div>
            <button onClick={() => { toggleLang(); setMobileMenuOpen(false); }} className="text-lg font-heading font-bold text-slate-400 hover:text-white">
              {lang === 'en' ? 'Mudar para Português' : 'Switch to English'}
            </button>
            <a href="https://app.crecy.workers.dev/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-slate-700 transition-colors text-white text-center text-sm font-bold uppercase py-4 px-6 mt-4 w-full block">{t.login}</a>
            <a href="mailto:phil@detrash.io" className="bg-white text-black text-center text-sm font-bold uppercase py-4 px-6 mt-2 w-full block">{t.contactDesk}</a>
          </div>
        )}
      </nav>

      <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="border-l-4 border-[#00A950] pl-6 mb-12"><span className="text-[#00A950] text-sm font-bold uppercase tracking-widest font-body">{t.heroTag}</span></div>
          <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-10 font-heading max-w-5xl">{t.heroTitle1} <br /> {t.heroTitle2}</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mb-16 leading-relaxed font-body font-light">{t.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row items-center gap-6 font-body">
            <button className="w-full sm:w-auto flex items-center justify-between gap-6 bg-white hover:bg-slate-200 text-black font-bold uppercase tracking-wide py-4 px-8 transition-all duration-300 text-sm">
              <span>{t.btnProspectus}</span> <ArrowRightIcon />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-between gap-6 bg-transparent hover:bg-slate-900 text-white border border-slate-700 font-bold uppercase tracking-wide py-4 px-8 transition-all duration-300 text-sm"><span>{t.btnWhitepaper}</span></button>
          </div>
        </div>
      </section>

      <section id="thesis" className="py-32 bg-[#0a0a0a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-white md:text-6xl font-bold mb-8 font-heading tracking-tight leading-tight">{t.thesisTitle}</h2>
              <p className="text-xl text-white leading-relaxed mb-10 font-body font-light">{t.thesisP1}</p>
              <div className="h-[1px] w-full bg-slate-200 mb-10"></div>
              <p className="text-lg text-[#00A950] leading-relaxed font-body font-bold">{t.thesisP2}</p>
            </div>
            <div className="lg:col-span-7 lg:pl-12">
              <div className="space-y-12">
                {[{ title: t.arg1Title, desc: t.arg1Desc }, { title: t.arg2Title, desc: t.arg2Desc }, { title: t.arg3Title, desc: t.arg3Desc }].map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex items-baseline gap-6 mb-3">
                      <span className="text-[#00A950] font-mono text-sm font-bold">0{i + 1}</span>
                      <h3 className="text-2xl font-bold font-heading text-white group-hover:text-[#00A950] transition-colors">{item.title}</h3>
                    </div>
                    <p className="text-slate-50 ml-11 text-lg font-body font-light leading-relaxed">{item.desc}</p>
                    <div className="h-[1px] w-full bg-slate-100 mt-8 ml-11 transition-colors group-hover:bg-slate-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="asset" className="py-32 bg-[#040D1A] border-y border-slate-800 relative">
        <div className="max-w-[1400px] mx-auto px-12 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <span className="text-[#00A950] text-sm font-bold uppercase tracking-widest font-body block mb-4">{t.assetTag}</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white font-heading tracking-tight">{t.assetTitle}</h2>
            </div>
            <p className="text-slate-200 max-w-lg text-lg font-body font-light mt-6 md:mt-0">{t.assetSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800">
            {[ { step: "01", title: t.step1Title, desc: t.step1Desc }, { step: "02", title: t.step2Title, desc: t.step2Desc }, { step: "03", title: t.step3Title, desc: t.step3Desc } ].map((item, i) => (
              <div key={i} className="bg-[#040D1A] p-12 hover:bg-[#081525] transition-colors duration-300">
                <div className="text-[#00A950] font-mono text-sm font-bold mb-6">{item.step}</div>
                <h3 className="text-2xl text-white font-bold mb-6 font-heading">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-body font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="investors" className="py-32 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-heading tracking-tight text-center md:text-left">{t.solTitle}</h2>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex flex-row lg:flex-col gap-4 lg:w-1/4 overflow-x-auto pb-4 lg:pb-0 font-body border-b lg:border-b-0 lg:border-r border-slate-800">
              {[{ id: 'retail', label: t.tabRetail }, { id: 'institutional', label: t.tabInst }, { id: 'corporate', label: t.tabCorp }].map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`text-left px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 border-b-2 lg:border-b-0 lg:border-r-2 whitespace-nowrap ${activeTab === tab.id ? 'text-white border-white bg-slate-900/50' : 'text-slate-500 border-transparent hover:text-slate-300'}`}>
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="lg:w-3/4 min-h-[200px]">
              {activeTab === 'retail' && (
                <div className="animate-in fade-in duration-500">
                  <div className="grid md:grid-cols-2 gap-16">
                    <div>
                      <h3 className="text-3xl text-white font-bold mb-6 font-heading">{t.retTitle}</h3>
                      <p className="text-slate-200 mb-8 leading-relaxed font-body font-light text-lg">{t.retDesc}</p>
                      <ul className="space-y-4 mb-10 font-body border-t border-slate-800 pt-8">
                        <li className="flex items-center justify-between text-slate-300"><span>{t.retLi1}</span> <ArrowRightIcon /></li>
                        <li className="flex items-center justify-between text-slate-300 border-t border-slate-800/50 pt-4"><span>{t.retLi2}</span> <ArrowRightIcon /></li>
                      </ul>
                      <a href="#" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-wider text-sm font-body hover:text-[#00A950] transition-colors">{t.retLink} <ArrowRightIcon /></a>
                    </div>
                    <div className="bg-slate-900/30 border border-slate-800 p-10 flex flex-col justify-center">
                       <div className="space-y-6 font-body">
                         <div className="border-b border-slate-800 pb-4">
                           <div className="flex justify-between items-center mb-2"><span className="text-white font-bold">{t.retStat1}</span><span className="text-[#00A950] font-mono">2%</span></div>
                           <div className="w-full bg-slate-800 h-1"><div className="bg-[#00A950] w-[2%] h-1"></div></div>
                         </div>
                         <div className="pt-2">
                           <div className="text-sm text-slate-500 mb-2 font-bold uppercase tracking-wider font-body">{t.retStat2}</div>
                           <div className="text-3xl text-white font-heading font-bold tracking-tighter mt-1">$0.86 - $1.15</div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'institutional' && (
                <div className="animate-in fade-in duration-500">
                  <div className="grid md:grid-cols-2 gap-16">
                    <div>
                      <h3 className="text-3xl text-white font-bold mb-6 font-heading">{t.instTitle}</h3>
                      <p className="text-slate-200 mb-8 leading-relaxed font-body font-light text-lg">{t.instDesc}</p>
                      <ul className="space-y-4 mb-10 font-body border-t border-slate-800 pt-8">
                        <li className="flex items-center justify-between text-slate-300"><span>{t.instLi1}</span> <ArrowRightIcon /></li>
                        <li className="flex items-center justify-between text-slate-300 border-t border-slate-800/50 pt-4"><span>{t.instLi2}</span> <ArrowRightIcon /></li>
                        <li className="flex items-center justify-between text-slate-300 border-t border-slate-800/50 pt-4"><span>{t.instLi3}</span> <ArrowRightIcon /></li>
                      </ul>
                      <a href="mailto:phil@detrash.io" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-wider text-sm font-body hover:text-[#00A950] transition-colors">{t.instLink} <ArrowRightIcon /></a>
                    </div>
                    <div className="bg-slate-900/30 border border-slate-800 p-10 flex flex-col justify-center">
                       <div><div className="text-sm text-slate-500 mb-0 font-bold uppercase tracking-wider font-body justify-center">{t.retStat2}</div><div className="text-5xl text-white font-heading font-bold tracking-tighter">$0.86 - $1.15</div></div>
                       <div className="mt-2 border-t border-slate-800 pt-8"><p className="text-slate-400 font-body font-light leading-relaxed">{t.instQuote}</p></div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'corporate' && (
                <div className="animate-in fade-in duration-500">
                  <div className="grid md:grid-cols-2 gap-16">
                    <div>
                      <h3 className="text-3xl text-white font-bold mb-6 font-heading">{t.corpTitle}</h3>
                      <p className="text-slate-200 mb-8 leading-relaxed font-body font-light text-lg">{t.corpDesc}</p>
                      <ul className="space-y-4 mb-10 font-body border-t border-slate-800 pt-8">
                        <li className="flex items-center justify-between text-slate-300"><span>{t.corpLi1}</span> <ArrowRightIcon /></li>
                      </ul>
                      <a href="#" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-wider text-sm font-body hover:text-[#00A950] transition-colors">{t.corpLink} <ArrowRightIcon /></a>
                    </div>
                    <div className="bg-slate-900/30 border border-slate-800 p-10 flex flex-col justify-center text-center">
                       <div className="w-16 h-16 border border-[#00A950]/30 rounded-full flex items-center justify-center mx-auto mb-6"><div className="w-2 h-2 bg-[#00A950] rounded-full"></div></div>
                       <div className="text-2xl text-white font-heading font-bold mb-4">{t.corpCardTitle}</div>
                       <p className="text-slate-400 font-body font-light">{t.corpCardDesc}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white text-black border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-heading tracking-tight">{t.ctaTitle}</h2>
          <p className="text-xl text-slate-600 mb-12 font-body font-light max-w-2xl mx-auto">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 font-body">
            <a href="mailto:phil@detrash.io" className="bg-black hover:bg-slate-800 text-white text-center font-bold uppercase tracking-wide py-5 px-12 transition-all text-sm">{t.ctaBtn1}</a>
            <button className="bg-transparent hover:bg-slate-100 text-black border border-black font-bold uppercase tracking-wide py-5 px-12 transition-all text-sm">{t.ctaBtn2}</button>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] pt-24 pb-12 border-t border-slate-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-4">
              <div className="mb-8"><CrecyLogo className="h-24" /></div>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed font-body font-light mb-8">{t.footDesc}</p>
              <div className="text-sm text-white font-body font-bold uppercase tracking-widest">{t.footLoc}</div>
            </div>
            <div className="md:col-span-2 md:col-start-7 font-body">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-8 border-b border-slate-800 pb-4">{t.footCol1}</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-light">
                <li><a href="#" className="hover:text-white transition-colors">{t.footCol1Li1}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footCol1Li2}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footCol1Li3}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footCol1Li4}</a></li>
              </ul>
            </div>
            <div className="md:col-span-2 font-body">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-8 border-b border-slate-800 pb-4">{t.footCol2}</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-light">
                <li><a href="#" className="hover:text-white transition-colors">{t.footCol2Li1}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footCol2Li2}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footCol2Li3}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footCol2Li4}</a></li>
              </ul>
            </div>
            <div className="md:col-span-2 font-body">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-8 border-b border-slate-800 pb-4">{t.footCol3}</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-light">
                <li><a href="#" className="hover:text-white transition-colors">{t.footCol3Li1}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footCol3Li2}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footCol3Li3}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-xs text-slate-600 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-body">
            <p className="font-light max-w-3xl leading-relaxed">{t.footNotice}</p>
            <p className="whitespace-nowrap font-bold uppercase tracking-widest">© 2026 Detrash.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;