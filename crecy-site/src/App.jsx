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

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
);

const translations = {
  en: {
    navThesis: "The Thesis",
    navAsset: "The Asset",
    navInsights: "Solutions",
    login: "Login",
    contactDesk: "Contact Desk",
    
    heroTag: "Impact Investment Asset",
    heroTitle1: "The next Institutional-Grade",
    heroTitle2: "Impact Asset",
    heroSubtitle: "cRECY is a digital asset minted through cryptographically registered and verified sustainable waste treatment data. Built on audited real-world data with a hard-capped supply to become a hedge for climate risk.",
    btnProspectus: "Request Prospectus",
    btnWhitepaper: "Read the complete Whitepaper",
    
    thesisTitle: "The Strategic Allocation Thesis",
    thesisP1: "In an era of increasing climate-related risks and shifting global regulations, an optimized portfolio benefits from exposure to assets with verifiable environmental impact.",
    thesisP2: "cRECY is designed to be a strategic allocation within a diversified portfolio for investors seeking long-term alignment with environmental outcomes alongside traditional portfolio construction. This approach aims to provide:",
    
    arg1Title: "Sector Exposure",
    arg1Desc: "Exposure to the growing tokenized impact sector.",
    arg2Title: "Verified Activity",
    arg2Desc: "Participation in a system where token issuance is linked to verified sustainable activity.",
    arg3Title: "Programmable Scarcity",
    arg3Desc: "Potential for scarcity as adoption increases.",
    
    asset1Tag: "ASSET ARCHITECTURE",
    asset1Title: "The Asset",
    asset1Subtitle: "cRECY is the native digital asset of the Recy Network. It is issued after sustainable waste treatment is verified through the protocol.",
    a1Point1: "Maximum Supply",
    a1Desc1: "22 million cRECY",
    a1Point2: "Issuance",
    a1Desc2: "Tied exclusively to audited and verified sustainable waste treatment reports",
    a1Point3: "Scarcity Mechanism",
    a1Desc3: "Minting difficulty increases as cumulative verified volume grows",
    a1Point4: "Transparency",
    a1Desc4: "All reports and verifications are recorded on the Ethereum ecosystem",
    asset1Footer: "cRECY combines real-world environmental activity with programmable scarcity features.",

    asset2Title: "Origination Flow",
    asset2Subtitle: "The creation of cRECY follows a clear process:",
    step1Title: "Physical Action",
    step1Desc: "Partners within the Recy Network perform sustainable waste treatment.",
    step2Title: "Audited Verification",
    step2Desc: "Independent auditors review and validate the treatment reports.",
    step3Title: "Asset Minting",
    step3Desc: "Upon successful verification and review, cRECY is minted and distributed according to the protocol’s allocation rules.",
    asset2Footer: "This flow ensures that new supply enters circulation only in connection with verified environmental outcomes.",
    
    impactTitle: "Verifiable Impact",
    impactP1: "cRECY is backed by cryptographically recorded and audited data from the Recy Network. The system is built to provide transparency regarding the origin of each token through on-chain reporting and the possibility of third-party verification.",
    impactP2: "The protocol includes a dedicated review period after auditor validation, allowing for additional oversight before rewards are distributed.",

    solTitle: "Solutions for Smart Capital",
    tabRetail: "Retail & HNWI",
    tabInst: "Institutional Investors",
    tabCorp: "Corporate Treasuries",
    
    retTitle: "Rarity and Impact.",
    retDesc: "A straightforward way to gain exposure to a capped digital asset linked to real environmental activity.",
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
    corpDesc: "Align treasury strategy with verifiable sustainability metrics.",
    corpLi1: "Enterprise ESG Reporting API",
    corpLink: "Explore Corporate Solutions",
    corpCardTitle: "Circularity Protocol",
    corpCardDesc: "Seamlessly integrating treasury management with global sustainability directives.",
    
    ctaTitle: "Ready to Allocate?",
    ctaDesc: "cRECY is available for acquisition on exchanges, directly with Recy Network users or our OTC Desk.",
    ctaExtra: "For those interested in longer-term positioning, the Impact Investment Certificate (2-year lock) is available. Join other participants building exposure to verifiable circular economy activity.",
    ctaBtn1: "Acquire cRECY",
    
    footNotice: "cRECY is a digital asset associated with environmental activity. Digital assets involve significant risk, including the potential for loss of capital. This website is for informational purposes only and does not constitute financial, investment, or legal advice. Please conduct your own due diligence.",
    footLoc: "Lauro de Freitas, BA, Brazil",
    
    footCol2: "Compliance",
    footCol2Li1: "Terms of Service",
    footCol2Li2: "Privacy Policy",
    footCol2Li3: "Risk Considerations",
    footCol3: "Contact",
    footCol3Li1: "phil@detrash.io",
    footCol3Li2: "Media Inquiries",
    footCopyright: "© 2026 Detrash",

    // Modals Content
    riskTitle: "Risk Considerations",
    riskLi1: "The protocol and asset is still in an early stage of development and adoption.",
    riskLi2: "Liquidity is currently limited.",
    riskLi3: "Performance depends on continued growth in verified waste treatment volume and network participation.",
    riskLi4: "As with all digital assets, cRECY may be subject to price volatility and regulatory risks.",
    riskFooter: "Investors should conduct their own due diligence and consider their risk tolerance before accumulating.",

    privacyTitle: "Privacy Policy",
    privacyText: [
      "This Privacy Policy outlines how Detrash (\"we\", \"our\", or \"us\") handles information in connection with the cRECY platform. We are strongly committed to protecting your privacy and operate in strict accordance with the Brazilian General Data Protection Law (LGPD).",
      "Data Collection & Usage: We do not actively collect, store, or commercialize any personally identifiable information (PII) from our website visitors. Any data generated through on-chain blockchain interactions is public by its cryptographic nature and governed by the respective network protocols rather than this website.",
      "Cookies & Tracking: We prioritize your privacy. This website may use only strictly necessary technical cookies required for basic functionality. We do not use third-party tracking cookies, analytics pixels, or marketing trackers.",
      "Third-Party Sharing: Because we do not collect personal data, we do not share, sell, or rent any personal information to third parties.",
      "Your Rights (LGPD): Under the LGPD, you possess rights including access, correction, anonymization, and deletion of your data. Should you have any concerns regarding how these rights apply to your interaction with our protocol, you may exercise them by contacting our data protection officer.",
      "Contact: For any privacy-related inquiries or to exercise your rights under the LGPD, please contact us at phil@detrash.io."
    ]
  },
  pt: {
    navThesis: "A Tese",
    navAsset: "O Ativo",
    navInsights: "Soluções",
    login: "Entrar",
    contactDesk: "Falar com Mesa",
    
    heroTag: "Ativo de Investimento de Impacto",
    heroTitle1: "O próximo Ativo de Impacto",
    heroTitle2: "de Nível Institucional",
    heroSubtitle: "cRECY é um ativo digital emitido através de dados de tratamento sustentável de resíduos registados e verificados criptograficamente. Construído sobre dados do mundo real auditados e com limite máximo fixo para se tornar uma proteção contra o risco climático.",
    btnProspectus: "Solicitar Prospecto",
    btnWhitepaper: "Ler o Whitepaper completo",
    
    thesisTitle: "A Tese de Alocação Estratégica",
    thesisP1: "Numa era de crescentes riscos climáticos e mudanças regulatórias globais, um portfólio otimizado beneficia da exposição a ativos com impacto ambiental verificável.",
    thesisP2: "O cRECY foi desenhado como uma alocação estratégica num portfólio diversificado para investidores que procuram alinhamento de longo prazo com resultados ambientais, paralelamente à construção tradicional de portfólios. Esta abordagem visa fornecer:",
    
    arg1Title: "Exposição ao Setor",
    arg1Desc: "Exposição ao crescente setor de impacto tokenizado.",
    arg2Title: "Atividade Verificada",
    arg2Desc: "Participação num sistema onde a emissão de tokens está ligada à atividade sustentável verificada.",
    arg3Title: "Escassez Programável",
    arg3Desc: "Potencial de escassez à medida que a adoção aumenta.",
    
    asset1Tag: "ARQUITETURA DO ATIVO",
    asset1Title: "O Ativo",
    asset1Subtitle: "cRECY é o ativo digital nativo da Rede Recy. É emitido após a verificação do tratamento sustentável de resíduos através do protocolo.",
    a1Point1: "Fornecimento Máximo",
    a1Desc1: "22 milhões de cRECY",
    a1Point2: "Emissão",
    a1Desc2: "Atrelada exclusivamente a relatórios de tratamento sustentável de resíduos auditados e verificados",
    a1Point3: "Mecanismo de Escassez",
    a1Desc3: "A dificuldade de emissão aumenta à medida que o volume verificado cumulativo cresce",
    a1Point4: "Transparência",
    a1Desc4: "Todos os relatórios e verificações são registados no ecossistema Ethereum",
    asset1Footer: "O cRECY combina atividade ambiental no mundo real com características de escassez programável.",

    asset2Title: "Fluxo de Originação",
    asset2Subtitle: "A criação do cRECY segue um processo claro:",
    step1Title: "Ação Física",
    step1Desc: "Parceiros dentro da Rede Recy realizam o tratamento sustentável de resíduos.",
    step2Title: "Verificação Auditada",
    step2Desc: "Auditores independentes analisam e validam os relatórios de tratamento.",
    step3Title: "Originação do Ativo",
    step3Desc: "Após verificação e revisão bem-sucedidas, o cRECY é emitido e distribuído de acordo com as regras de alocação do protocolo.",
    asset2Footer: "Este fluxo garante que o novo fornecimento entra em circulação apenas em ligação com resultados ambientais verificados.",
    
    impactTitle: "Impacto Verificável",
    impactP1: "O cRECY é lastreado por dados registados criptograficamente e auditados da Rede Recy. O sistema foi construído para fornecer transparência sobre a origem de cada token através de relatórios on-chain e da possibilidade de verificação por terceiros.",
    impactP2: "O protocolo inclui um período de revisão dedicado após a validação do auditor, permitindo supervisão adicional antes da distribuição das recompensas.",

    solTitle: "Soluções para Capital Inteligente",
    tabRetail: "Varejo e HNWI",
    tabInst: "Investidores Institucionais",
    tabCorp: "Tesourarias Corporativas",
    
    retTitle: "Raridade e Impacto.",
    retDesc: "Uma forma direta de obter exposição a um ativo digital com fornecimento limitado ligado à atividade ambiental real.",
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
    corpDesc: "Alinhe a estratégia de tesouraria a métricas de sustentabilidade verificáveis.",
    corpLi1: "API Corporativa de Relatórios ESG",
    corpLink: "Explorar Soluções Corporativas",
    corpCardTitle: "Protocolo de Circularidade",
    corpCardDesc: "Integrando perfeitamente a gestão de tesouraria às diretrizes globais de sustentabilidade.",
    
    ctaTitle: "Pronto para Alocar?",
    ctaDesc: "O cRECY está disponível para aquisição em exchanges, diretamente com utilizadores da Rede Recy ou na nossa Mesa OTC.",
    ctaExtra: "Para interessados em posicionamento de longo prazo, o Certificado de Investimento de Impacto (bloqueio de 2 anos) está disponível. Junte-se a outros participantes que constroem exposição à atividade verificável da economia circular.",
    ctaBtn1: "Adquirir cRECY",
    
    footNotice: "cRECY é um ativo digital associado à atividade ambiental. Ativos digitais envolvem riscos significativos, incluindo o potencial de perda de capital. Este site é apenas para fins informativos e não constitui aconselhamento financeiro, de investimento ou legal. Por favor, conduza a sua própria devida diligência.",
    footLoc: "Lauro de Freitas, BA, Brasil",
    
    footCol2: "Conformidade",
    footCol2Li1: "Termos de Serviço",
    footCol2Li2: "Política de Privacidade",
    footCol2Li3: "Considerações de Risco",
    footCol3: "Contato",
    footCol3Li1: "phil@detrash.io",
    footCol3Li2: "Imprensa",
    footCopyright: "© 2026 Detrash",

    // Modais
    riskTitle: "Considerações de Risco",
    riskLi1: "O protocolo e o ativo ainda estão num estágio inicial de desenvolvimento e adoção.",
    riskLi2: "A liquidez é atualmente limitada.",
    riskLi3: "O desempenho depende do crescimento contínuo do volume de tratamento de resíduos verificado e da participação na rede.",
    riskLi4: "Como todos os ativos digitais, o cRECY pode estar sujeito a volatilidade de preços e riscos regulatórios.",
    riskFooter: "Os investidores devem conduzir a sua própria devida diligência e considerar a sua tolerância ao risco antes de acumular.",

    privacyTitle: "Política de Privacidade",
    privacyText: [
      "Esta Política de Privacidade descreve como a Detrash (\"nós\" ou \"nosso\") lida com as informações em relação à plataforma cRECY. Estamos fortemente comprometidos em proteger a sua privacidade e operamos em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD) do Brasil.",
      "Coleta e Uso de Dados: Não coletamos, armazenamos ou comercializamos ativamente nenhuma informação de identificação pessoal (PII) dos visitantes do nosso site. Quaisquer dados gerados através de interações on-chain em blockchain são públicos pela sua natureza criptográfica e regidos pelos respectivos protocolos de rede e não por este site.",
      "Cookies e Rastreamento: Priorizamos a sua privacidade. Este site pode utilizar apenas cookies técnicos estritamente necessários para o funcionamento básico. Não utilizamos cookies de rastreamento de terceiros, pixels de análise ou rastreadores de marketing.",
      "Compartilhamento com Terceiros: Como não coletamos dados pessoais, não compartilhamos, vendemos ou alugamos nenhuma informação pessoal a terceiros.",
      "Os Seus Direitos (LGPD): Nos termos da LGPD, o utilizador possui direitos que incluem o acesso, correção, anonimização e exclusão dos seus dados. Caso tenha alguma dúvida sobre como estes direitos se aplicam à sua interação com o nosso protocolo, poderá exercê-los contatando a nossa equipa.",
      "Contato: Para quaisquer questões relacionadas com a privacidade ou para exercer os seus direitos ao abrigo da LGPD, por favor contate-nos através de phil@detrash.io."
    ]
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
  const [copied, setCopied] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // null | 'risk' | 'privacy'

  const langKey = lang === 'pt' ? 'pt' : 'en';
  const t = translations[langKey];
  const contractAddress = "0x34c11a932853ae24e845ad4b633e3cef91afe583";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeModal]);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'pt' : 'en');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-body selection:bg-[#002766] selection:text-white">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');
        .font-heading { font-family: 'Atkinson Hyperlegible', sans-serif; }
        .font-body { font-family: 'Red Hat Display', sans-serif; }
      `}} />

      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300" onClick={() => setActiveModal(null)}>
          <div className="bg-[#0a0a0a] border border-slate-800 p-8 md:p-12 max-w-2xl w-full text-left relative shadow-2xl animate-in fade-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors">
              <XIcon />
            </button>
            
            {activeModal === 'risk' && (
              <>
                <h3 className="text-3xl text-white font-bold mb-8 font-heading tracking-tight">{t.riskTitle}</h3>
                <ul className="space-y-4 mb-8 text-slate-300 font-body font-light text-lg">
                  <li className="flex items-start"><span className="text-[#00A950] mr-4 font-bold">-</span><span>{t.riskLi1}</span></li>
                  <li className="flex items-start"><span className="text-[#00A950] mr-4 font-bold">-</span><span>{t.riskLi2}</span></li>
                  <li className="flex items-start"><span className="text-[#00A950] mr-4 font-bold">-</span><span>{t.riskLi3}</span></li>
                  <li className="flex items-start"><span className="text-[#00A950] mr-4 font-bold">-</span><span>{t.riskLi4}</span></li>
                </ul>
                <p className="text-slate-400 font-body font-light pt-6 border-t border-slate-800">{t.riskFooter}</p>
              </>
            )}

            {activeModal === 'privacy' && (
              <>
                <h3 className="text-3xl text-white font-bold mb-8 font-heading tracking-tight">{t.privacyTitle}</h3>
                <div className="space-y-4">
                  {t.privacyText.map((paragraph, index) => (
                    <p key={index} className="text-slate-300 font-body font-light text-lg leading-relaxed">
                      {paragraph.includes(':') ? (
                        <>
                          <strong className="text-white font-bold">{paragraph.split(':')[0]}:</strong>
                          {paragraph.split(':')[1]}
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

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
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-10 font-heading max-w-5xl">{t.heroTitle1} <br /> {t.heroTitle2}</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mb-16 leading-relaxed font-body font-light">{t.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row items-center gap-6 font-body">
            <a href="mailto:phil@detrash.io" className="w-full sm:w-auto flex items-center justify-between gap-6 bg-white hover:bg-slate-200 text-black font-bold uppercase tracking-wide py-4 px-8 transition-all duration-300 text-sm">
              <span>{t.btnProspectus}</span> <ArrowRightIcon />
            </a>
            <a href="https://drive.proton.me/urls/RFCZCEX6T0#WED3vv4h57yn" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-between gap-6 bg-transparent hover:bg-slate-900 text-white border border-slate-700 font-bold uppercase tracking-wide py-4 px-8 transition-all duration-300 text-sm">
              <span>{t.btnWhitepaper}</span>
            </a>
          </div>
        </div>
      </section>

      <section id="thesis" className="py-32 bg-[#0a0a0a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-white md:text-6xl font-bold mb-8 font-heading tracking-tight leading-tight">{t.thesisTitle}</h2>
              <p className="text-xl text-slate-200 leading-relaxed mb-12 font-body font-light">{t.thesisP1}</p>
              <p className="text-xl text-[#00A950] leading-relaxed font-body font-bold">{t.thesisP2}</p>
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

      {/* Seção: The Asset (4 colunas) */}
      <section id="asset" className="py-32 bg-[#040D1A] border-t border-slate-800 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 lg:gap-32 mb-20">
            <div className="md:w-1/2">
              <span className="text-[#00A950] text-sm font-bold uppercase tracking-widest font-body block mb-4">{t.asset1Tag}</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white font-heading tracking-tight">{t.asset1Title}</h2>
            </div>
            <div className="md:w-1/2 flex md:justify-end">
              <p className="text-slate-200 max-w-lg text-xl font-body font-light mt-6 md:mt-0">{t.asset1Subtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 mb-12">
            {[ { step: "1", title: t.a1Point1, desc: t.a1Desc1 }, { step: "2", title: t.a1Point2, desc: t.a1Desc2 }, { step: "3", title: t.a1Point3, desc: t.a1Desc3 }, { step: "4", title: t.a1Point4, desc: t.a1Desc4 } ].map((item, i) => (
              <div key={i} className="bg-[#040D1A] p-10 hover:bg-[#081525] transition-colors duration-300">
                <div className="text-[#00A950] font-mono text-sm font-bold mb-6">0{item.step}</div>
                <h3 className="text-xl text-white font-bold mb-4 font-heading">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-body font-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-slate-300 font-body font-light max-w-3xl border-l-2 border-[#00A950] pl-6">{t.asset1Footer}</p>
        </div>
      </section>

      {/* Seção: Origination Flow (3 colunas) */}
      <section className="py-32 bg-[#0a0a0a] border-t border-slate-800 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-heading tracking-tight">{t.asset2Title}</h2>
            </div>
            <p className="text-slate-200 max-w-lg text-xl font-body font-light mt-6 md:mt-0">{t.asset2Subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800 mb-12">
            {[ { step: "1", title: t.step1Title, desc: t.step1Desc }, { step: "2", title: t.step2Title, desc: t.step2Desc }, { step: "3", title: t.step3Title, desc: t.step3Desc } ].map((item, i) => (
              <div key={i} className="bg-[#0a0a0a] p-12 hover:bg-[#111111] transition-colors duration-300">
                <div className="text-[#00A950] font-mono text-sm font-bold mb-6">0{item.step}</div>
                <h3 className="text-2xl text-white font-bold mb-6 font-heading">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-body font-light">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-slate-300 font-body font-light max-w-3xl border-l-2 border-[#00A950] pl-6">{t.asset2Footer}</p>
        </div>
      </section>

      {/* Seção: Verifiable Impact */}
      <section className="py-32 bg-[#040D1A] text-white border-t border-slate-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-white md:text-5xl font-bold mb-8 font-heading tracking-tight leading-tight">{t.impactTitle}</h2>
            </div>
            <div className="lg:col-span-7 lg:pl-12">
              <div className="space-y-12">
                 <p className="text-xl text-slate-200 font-body font-light leading-relaxed">{t.impactP1}</p>
                 <p className="text-xl text-[#00A950] font-body font-bold leading-relaxed">{t.impactP2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="investors" className="py-32 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-heading tracking-tight text-center md:text-left">{t.solTitle}</h2>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex flex-row lg:flex-col gap-4 lg:w-1/4 overflow-x-auto pb-4 lg:pb-0 font-body border-b lg:border-b-0 lg:border-r border-slate-800">
              {[{ id: 'retail', label: t.tabRetail }, { id: 'institutional', label: t.tabInst }, { id: 'corporate', label: t.tabCorp }].map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`text-left px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-300 border-b-2 lg:border-b-0 lg:border-r-2 whitespace-nowrap ${activeTab === tab.id ? 'text-white border-white bg-slate-900/50' : 'text-slate-500 border-transparent hover:text-slate-300'}`}>
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
                        <li className="flex items-center justify-between text-slate-300"><span>{t.retLi1}</span></li>
                        <li className="flex items-center justify-between text-slate-300 border-t border-slate-800/50 pt-4"><span>{t.retLi2}</span></li>
                      </ul>
                      <a href="https://app.uniswap.org/explore/tokens/celo/0x34c11a932853ae24e845ad4b633e3cef91afe583" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-wider text-sm font-body hover:text-[#00A950] transition-colors">{t.retLink} <ArrowRightIcon /></a>
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
                        <li className="flex items-center justify-between text-slate-300"><span>{t.instLi1}</span></li>
                        <li className="flex items-center justify-between text-slate-300 border-t border-slate-800/50 pt-4"><span>{t.instLi2}</span></li>
                        <li className="flex items-center justify-between text-slate-300 border-t border-slate-800/50 pt-4"><span>{t.instLi3}</span></li>
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
                        <li className="flex items-center justify-between text-slate-300"><span>{t.corpLi1}</span></li>
                      </ul>
                      <a href="mailto:adriano@detrash.io" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-wider text-sm font-body hover:text-[#00A950] transition-colors">{t.corpLink} <ArrowRightIcon /></a>
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

      <section className="py-32 bg-white text-[#040D1A] border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-heading tracking-tight text-black">{t.ctaTitle}</h2>
          <p className="text-xl text-[#040D1A] mb-6 font-body font-light max-w-2xl mx-auto">{t.ctaDesc}</p>
          <p className="text-lg text-[#040D1A] mb-12 font-body font-light max-w-3xl mx-auto">{t.ctaExtra}</p>
          
          <div className="flex flex-col items-center mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-[#040D1A]/60 mb-3 font-body">Token Contract</span>
            <button 
              onClick={copyToClipboard}
              className="flex items-center gap-3 bg-slate-100 hover:bg-slate-200 text-[#040D1A] font-mono text-sm py-3 px-6 rounded-lg transition-colors border border-slate-300"
            >
              <span>{contractAddress}</span>
              <CopyIcon />
              {copied && <span className="text-[#00A950] font-bold ml-2 text-xs uppercase tracking-wide">Copied!</span>}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 font-body">
            <a href="https://app.uniswap.org/explore/tokens/celo/0x34c11a932853ae24e845ad4b633e3cef91afe583" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-slate-800 text-white text-center font-bold uppercase tracking-wide py-5 px-12 transition-all text-sm">{t.ctaBtn1}</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] pt-24 pb-12 border-t border-slate-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Footer agora tem a marca na esquerda e 2 colunas à direita para espalhar melhor o espaço */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-6">
              <div className="mb-8"><CrecyLogo className="h-24" /></div>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed font-body font-light mb-8">{t.footNotice}</p>
              <div className="text-sm text-slate-500 font-body font-bold uppercase tracking-widest">{t.footLoc}</div>
            </div>
            
            <div className="md:col-span-3 font-body">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-8 border-b border-slate-800 pb-4">{t.footCol2}</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-light">
                <li><a href="#" className="hover:text-white transition-colors">{t.footCol2Li1}</a></li>
                <li><button onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors cursor-pointer text-left">{t.footCol2Li2}</button></li>
                <li><button onClick={() => setActiveModal('risk')} className="hover:text-white transition-colors cursor-pointer text-left">{t.footCol2Li3}</button></li>
              </ul>
            </div>
            
            <div className="md:col-span-3 font-body">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-8 border-b border-slate-800 pb-4">{t.footCol3}</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-light">
                <li><a href="mailto:phil@detrash.io" className="hover:text-white transition-colors">{t.footCol3Li1}</a></li>
                <li><a href="mailto:adriano@detrash.io" className="hover:text-white transition-colors">{t.footCol3Li2}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-xs text-slate-600 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-body">
            <p className="whitespace-nowrap font-bold uppercase tracking-widest">{t.footCopyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;