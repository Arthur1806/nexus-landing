import React, { useState } from "react";
import {
  Zap,
  ArrowRight,
  Play,
  QrCode,
  Brain,
  Users,
  Workflow,
  Smartphone,
  BarChart3,
  ChevronDown,
  Check,
  X,
  MessageCircle,
  Stethoscope,
  Building2,
  ShoppingBag,
  Megaphone,
  Menu,
} from "lucide-react";

/* ---------------------------------------------------------
   DESIGN TOKENS
   Dark, futurista, premium — grid tecnológico + glow indigo/esmeralda
--------------------------------------------------------- */
const C = {
  bg: "#050505",
  surface: "#0D0D0E",
  surfaceRaised: "#121214",
  border: "rgba(255,255,255,0.08)",
  borderStrong: "rgba(255,255,255,0.14)",
  indigo: "#6366F1",
  indigoDeep: "#4F46E5",
  emerald: "#10B981",
  emeraldSoft: "rgba(16,185,129,0.12)",
  indigoSoft: "rgba(99,102,241,0.12)",
  text: "#F5F5F7",
  textMuted: "rgba(245,245,247,0.62)",
  textFaint: "rgba(245,245,247,0.4)",
};

const heading = { fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif" };
const body = { fontFamily: "Inter, system-ui, sans-serif" };

/* ---------------------------------------------------------
   SHARED BITS
--------------------------------------------------------- */
function GlowOrb({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "9999px",
        filter: "blur(90px)",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

function GridBackdrop() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "52px 52px",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)",
        pointerEvents: "none",
      }}
    />
  );
}

function PrimaryButton({ children, icon: Icon, size = "md", ...rest }) {
  const pad = size === "lg" ? "16px 28px" : "12px 22px";
  const fs = size === "lg" ? 16 : 14.5;
  return (
    <button
      {...rest}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: pad,
        borderRadius: 12,
        border: "none",
        background: `linear-gradient(135deg, ${C.indigo}, ${C.indigoDeep})`,
        color: "#fff",
        fontWeight: 600,
        fontSize: fs,
        cursor: "pointer",
        boxShadow: "0 0 0 1px rgba(99,102,241,0.4), 0 8px 24px -6px rgba(79,70,229,0.55)",
        transition: "transform 0.18s ease, box-shadow 0.18s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow =
          "0 0 0 1px rgba(99,102,241,0.55), 0 12px 32px -6px rgba(79,70,229,0.7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 0 0 1px rgba(99,102,241,0.4), 0 8px 24px -6px rgba(79,70,229,0.55)";
      }}
    >
      {children}
      {Icon && <Icon size={size === "lg" ? 19 : 17} strokeWidth={2} />}
    </button>
  );
}

function SecondaryButton({ children, icon: Icon, ...rest }) {
  return (
    <button
      {...rest}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "12px 22px",
        borderRadius: 12,
        border: `1px solid ${C.border}`,
        background: "rgba(255,255,255,0.03)",
        color: C.text,
        fontWeight: 600,
        fontSize: 14.5,
        cursor: "pointer",
        backdropFilter: "blur(12px)",
        transition: "border-color 0.18s ease, background 0.18s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = C.borderStrong;
        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = C.border;
        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
      }}
    >
      {children}
      {Icon && <Icon size={16} strokeWidth={2} />}
    </button>
  );
}

function SectionLabel({ children }) {
  return (
    <p
      style={{
        ...body,
        color: C.indigo,
        fontSize: 13.5,
        fontWeight: 600,
        letterSpacing: "0.01em",
        marginBottom: 14,
      }}
    >
      {children}
    </p>
  );
}

/* ---------------------------------------------------------
   NAVBAR
--------------------------------------------------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Recursos", id: "recursos" },
    { label: "Como Funciona", id: "como-funciona" },
    { label: "Demonstração", id: "demonstracao" },
    { label: "Preços", id: "pricing" },
    { label: "FAQ", id: "faq" },
  ];

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(16px)",
        background: "rgba(5,5,5,0.72)",
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 9,
              background: `linear-gradient(135deg, ${C.indigo}, ${C.emerald})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Zap size={16} color="#050505" strokeWidth={2.5} />
          </div>
          <span style={{ ...heading, fontSize: 19, fontWeight: 800, color: C.text }}>
            Nexus
            <span
              style={{
                background: `linear-gradient(135deg, ${C.indigo}, ${C.emerald})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CX
            </span>
          </span>
        </div>

        <nav
          className="hidden md:flex"
          style={{ display: "none", alignItems: "center", gap: 30 }}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={scrollTo(l.id)}
              style={{
                ...body,
                fontSize: 14.5,
                color: C.textMuted,
                textDecoration: "none",
                transition: "color 0.15s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex" style={{ display: "none", alignItems: "center", gap: 14 }}>
          <PrimaryButton>Começar Teste Grátis</PrimaryButton>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: C.text, cursor: "pointer" }}
        >
          <Menu size={22} />
        </button>
      </div>

      <style>{`
        @media (min-width: 768px) {
          header nav.md\\:flex { display: flex !important; }
          header div.md\\:flex { display: flex !important; }
          header button.md\\:hidden { display: none !important; }
        }
      `}</style>

      {open && (
        <div
          style={{
            borderTop: `1px solid ${C.border}`,
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={scrollTo(l.id)}
              style={{ ...body, color: C.textMuted, textDecoration: "none", fontSize: 15, cursor: "pointer" }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 6 }}>
            <PrimaryButton>Começar Teste Grátis</PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------------------------------------------------
   HERO
--------------------------------------------------------- */
function ConversationRow({ name, msg, tag, tagColor, active }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        borderRadius: 10,
        background: active ? "rgba(255,255,255,0.05)" : "transparent",
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          flexShrink: 0,
        }}
      />
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ ...body, fontSize: 12.5, fontWeight: 600, color: C.text }}>{name}</div>
        <div
          style={{
            ...body,
            fontSize: 11.5,
            color: C.textFaint,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {msg}
        </div>
      </div>
      <span
        style={{
          ...body,
          fontSize: 9.5,
          fontWeight: 700,
          padding: "3px 7px",
          borderRadius: 999,
          color: tagColor,
          background: `${tagColor}1a`,
          whiteSpace: "nowrap",
        }}
      >
        {tag}
      </span>
    </div>
  );
}

function HeroMockup() {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: 980,
        margin: "0 auto",
        borderRadius: 20,
        border: `1px solid ${C.borderStrong}`,
        background: "rgba(13,13,14,0.75)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 30px 90px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          padding: "13px 16px",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        {["#EF4444", "#EAB308", "#22C55E"].map((c) => (
          <span key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.6 }} />
        ))}
        <span style={{ ...body, fontSize: 11.5, color: C.textFaint, marginLeft: 10 }}>
          app.nexuscx.com/inbox
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 0,
        }}
        className="hero-grid"
      >
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr 200px" }} className="hero-inner">
          {/* conversations */}
          <div style={{ borderRight: `1px solid ${C.border}`, padding: 12 }}>
            <ConversationRow name="Marina Costa" msg="Qual o valor do procedimento?" tag="QUENTE" tagColor="#F97316" active />
            <ConversationRow name="Rafael Lima" msg="Perfeito, confirmado!" tag="AGENDADO" tagColor={C.emerald} />
            <ConversationRow name="Studio Bela" msg="Vocês têm horário sábado?" tag="LEAD QUALIFICADO" tagColor={C.indigo} />
            <ConversationRow name="João Pedro" msg="Obrigado pelo retorno" tag="AGENDADO" tagColor={C.emerald} />
          </div>

          {/* chat */}
          <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            <div
              style={{
                alignSelf: "flex-start",
                maxWidth: "78%",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "4px 14px 14px 14px",
                padding: "9px 13px",
              }}
            >
              <p style={{ ...body, fontSize: 12.5, color: C.text, margin: 0 }}>
                Oi! Vi o anúncio de vocês, qual o valor do procedimento estético completo?
              </p>
            </div>
            <div
              style={{
                alignSelf: "flex-end",
                maxWidth: "78%",
                background: `linear-gradient(135deg, ${C.indigo}, ${C.indigoDeep})`,
                borderRadius: "14px 4px 14px 14px",
                padding: "9px 13px",
              }}
            >
              <p style={{ ...body, fontSize: 12.5, color: "#fff", margin: 0, lineHeight: 1.5 }}>
                Oi, Marina! O pacote completo sai por 12x sem juros. Consigo te encaixar
                nesta quinta às 15h — te reservo o horário?
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: C.emerald,
                  boxShadow: `0 0 8px ${C.emerald}`,
                }}
              />
              <span style={{ ...body, fontSize: 10.5, color: C.textFaint }}>
                Respondido pela IA em 3s
              </span>
            </div>
          </div>

          {/* stats */}
          <div style={{ borderLeft: `1px solid ${C.border}`, padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <p style={{ ...body, fontSize: 10.5, color: C.textFaint, margin: "0 0 4px" }}>Taxa de resposta</p>
              <p style={{ ...heading, fontSize: 22, fontWeight: 800, color: C.emerald, margin: 0 }}>99.8%</p>
            </div>
            <div>
              <p style={{ ...body, fontSize: 10.5, color: C.textFaint, margin: "0 0 4px" }}>Economia de tempo</p>
              <p style={{ ...heading, fontSize: 22, fontWeight: 800, color: C.text, margin: 0 }}>42h/sem</p>
            </div>
            <div
              style={{
                marginTop: "auto",
                padding: "10px 12px",
                borderRadius: 10,
                background: C.emeraldSoft,
                border: `1px solid rgba(16,185,129,0.25)`,
              }}
            >
              <p style={{ ...body, fontSize: 11, color: C.emerald, margin: 0, fontWeight: 600 }}>
                ● Conexão ativa via QR Code
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .hero-inner { grid-template-columns: 1fr !important; }
          .hero-inner > div:nth-child(1), .hero-inner > div:nth-child(3) { display: none; }
        }
      `}</style>
    </div>
  );
}

function Hero() {
  return (
    <section id="demonstracao" style={{ position: "relative", overflow: "hidden", padding: "96px 24px 110px" }}>
      <GridBackdrop />
      <GlowOrb style={{ width: 560, height: 560, top: -220, left: "50%", transform: "translateX(-60%)", background: C.indigo, opacity: 0.22 }} />
      <GlowOrb style={{ width: 420, height: 420, top: 40, right: "10%", background: C.emerald, opacity: 0.14 }} />

      <div style={{ position: "relative", maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "7px 16px",
            borderRadius: 999,
            border: `1px solid rgba(99,102,241,0.35)`,
            background: C.indigoSoft,
            marginBottom: 28,
          }}
        >
          <Zap size={13.5} color={C.indigo} strokeWidth={2.5} />
          <span style={{ ...body, fontSize: 13, color: C.text, fontWeight: 500 }}>
            NexusCX 2.0 — Atendimento autônomo com IA lançado
          </span>
        </div>

        <h1
          style={{
            ...heading,
            fontSize: "clamp(2.4rem, 5.2vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: C.text,
            margin: "0 0 22px",
          }}
        >
          Pare de perder vendas no WhatsApp. Atenda em 3 segundos, 24 horas por dia.
        </h1>

        <p
          style={{
            ...body,
            fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
            color: C.textMuted,
            lineHeight: 1.65,
            maxWidth: 620,
            margin: "0 auto 38px",
          }}
        >
          Centralize múltiplos atendentes no mesmo número, qualifique clientes
          instantaneamente e coloque um agente de IA treinado para vender enquanto
          você dorme. Sem burocracia, pronto em 2 minutos.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
          <PrimaryButton icon={ArrowRight} size="lg">
            Criar Conta Grátis por 7 Dias
          </PrimaryButton>
          <SecondaryButton icon={Play}>Assistir Demonstração (2 min)</SecondaryButton>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 22,
            flexWrap: "wrap",
            marginBottom: 64,
          }}
        >
          {["Sem cartão de crédito", "Conexão instantânea via QR Code", "Cancele quando quiser"].map((t) => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: 6, ...body, fontSize: 13, color: C.textFaint }}>
              <Check size={14} color={C.emerald} /> {t}
            </span>
          ))}
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <HeroMockup />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   SOCIAL PROOF / METRICS
--------------------------------------------------------- */
function Metrics() {
  const stats = [
    { value: "+2.5M", label: "Mensagens processadas" },
    { value: "3s", label: "Tempo médio de 1ª resposta" },
    { value: "+45%", label: "Aumento médio em conversão" },
    { value: "99.9%", label: "Uptime de conexão" },
  ];
  return (
    <section style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "48px 24px" }}>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}
        className="metrics-grid"
      >
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <p style={{ ...heading, fontSize: 34, fontWeight: 800, color: C.text, margin: "0 0 6px" }}>{s.value}</p>
            <p style={{ ...body, fontSize: 13, color: C.textFaint, margin: 0 }}>{s.label}</p>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) {
          .metrics-grid { grid-template-columns: repeat(2, 1fr) !important; row-gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------------------------------------------------------
   PROBLEM SECTION
--------------------------------------------------------- */
function ProblemSection() {
  const before = [
    "1 celular passando de mão em mão pela equipe",
    "Mensagens do fim de semana só respondidas na segunda (o lead já comprou no concorrente)",
    "Atendentes esquecem de dar retorno e perdem o histórico da conversa",
    "Dono da empresa sobrecarregado, sem saber o que a equipe está falando",
  ];
  const after = [
    "Toda a equipe atende pelo mesmo número, do computador ou do celular",
    "Resposta imediata, 24 horas por dia, 7 dias por semana",
    "IA treinada com seu catálogo tira dúvidas, contorna objeções e agenda",
    "Dashboard em tempo real com métricas completas de cada atendente",
  ];
  return (
    <section id="como-funciona" style={{ padding: "100px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 56px" }}>
          <SectionLabel>O problema</SectionLabel>
          <h2 style={{ ...heading, fontSize: "clamp(1.8rem, 3.4vw, 2.5rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.015em", margin: 0 }}>
            A hemorragia silenciosa do seu WhatsApp
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="problem-grid">
          <div
            style={{
              borderRadius: 18,
              border: `1px solid ${C.border}`,
              background: C.surface,
              padding: "28px 26px",
            }}
          >
            <p style={{ ...body, fontSize: 13, fontWeight: 600, color: "#F87171", margin: "0 0 20px" }}>
              Como as empresas atendem hoje
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {before.map((t) => (
                <div key={t} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                  <X size={16} color="#F87171" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ ...body, fontSize: 14, color: C.textMuted, lineHeight: 1.55 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderRadius: 18,
              border: `1px solid rgba(16,185,129,0.25)`,
              background: `linear-gradient(180deg, ${C.emeraldSoft}, transparent 60%), ${C.surface}`,
              padding: "28px 26px",
            }}
          >
            <p style={{ ...body, fontSize: 13, fontWeight: 600, color: C.emerald, margin: "0 0 20px" }}>
              Com o NexusCX
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {after.map((t) => (
                <div key={t} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                  <Zap size={16} color={C.emerald} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ ...body, fontSize: 14, color: C.text, lineHeight: 1.55 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .problem-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------------------------------------------------------
   BENTO FEATURES
--------------------------------------------------------- */
function FeatureCard({ icon: Icon, title, desc, span }) {
  return (
    <div
      style={{
        gridColumn: span ? "span 2" : "span 1",
        borderRadius: 18,
        border: `1px solid ${C.border}`,
        background: C.surface,
        padding: 26,
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.2s ease, transform 0.2s ease",
      }}
      className="feature-card"
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 11,
          background: C.indigoSoft,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 18,
        }}
      >
        <Icon size={20} color={C.indigo} strokeWidth={1.6} />
      </div>
      <h3 style={{ ...heading, fontSize: 17, fontWeight: 700, color: C.text, margin: "0 0 8px" }}>{title}</h3>
      <p style={{ ...body, fontSize: 13.5, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </div>
  );
}

function FeaturesBento() {
  const features = [
    { icon: QrCode, title: "Conexão instantânea via QR Code", desc: "Sem burocracia de aprovação do Facebook Business. Escaneie e comece a rodar em segundos.", span: true },
    { icon: Brain, title: "Cérebro de IA customizado", desc: "Defina tom de voz, regras de desconto e horários — a IA atende com perfeição humanizada." },
    { icon: Users, title: "Múltiplos atendentes e departamentos", desc: "Distribua conversas entre Vendas, Suporte e Financeiro com permissões isoladas." },
    { icon: Workflow, title: "Motor de automações e gatilhos", desc: "Fluxos automáticos por palavra-chave, etiqueta de status e funis de nutrição." },
    { icon: Smartphone, title: "Multi-dispositivo e multi-número", desc: "Conecte 1, 5 ou 20 números de WhatsApp no mesmo painel da empresa." },
    { icon: BarChart3, title: "Métricas e relatórios de CX", desc: "Volume diário de mensagens, horários de pico e taxas de leitura em um só lugar.", span: true },
  ];
  return (
    <section id="recursos" style={{ padding: "40px 24px 100px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 56px" }}>
          <SectionLabel>Recursos</SectionLabel>
          <h2 style={{ ...heading, fontSize: "clamp(1.8rem, 3.4vw, 2.5rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.015em", margin: 0 }}>
            Tudo que sua operação de atendimento precisa
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="bento-grid">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
      <style>{`
        .feature-card:hover { border-color: ${C.borderStrong}; transform: translateY(-2px); }
        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .bento-grid > div { grid-column: span 2 !important; }
        }
        @media (max-width: 560px) {
          .bento-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------------------------------------------------------
   USE CASES (TABS)
--------------------------------------------------------- */
function UseCases() {
  const tabs = [
    {
      icon: Stethoscope,
      title: "Clínicas & Consultórios",
      desc: "Agendamento automático de consultas e confirmação de presença para evitar faltas.",
      points: ["Confirmação automática 24h antes da consulta", "Reagendamento sem intervenção humana", "Lista de espera preenchida automaticamente"],
    },
    {
      icon: Building2,
      title: "Imobiliárias & Corretores",
      desc: "Triagem instantânea do perfil do comprador — bairro desejado, orçamento e número de quartos.",
      points: ["Qualificação de lead em menos de 1 minuto", "Envio automático de imóveis compatíveis", "Encaminhamento direto ao corretor certo"],
    },
    {
      icon: ShoppingBag,
      title: "E-commerces & Varejo",
      desc: "Rastreio de pedidos, tira-dúvidas de produtos e recuperação de boletos e PIX.",
      points: ["Rastreamento de pedido em tempo real", "Recuperação automática de carrinho abandonado", "Catálogo de produtos direto na conversa"],
    },
    {
      icon: Megaphone,
      title: "Prestadores & Agências",
      desc: "Qualificação de leads recebidos de anúncios pagos em tempo real.",
      points: ["Resposta a leads de Meta Ads em segundos", "Roteamento por orçamento e urgência", "Relatório de origem de cada conversa"],
    },
  ];
  const [active, setActive] = useState(0);
  const T = tabs[active];

  return (
    <section style={{ padding: "40px 24px 110px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 44px" }}>
          <SectionLabel>Casos de uso</SectionLabel>
          <h2 style={{ ...heading, fontSize: "clamp(1.8rem, 3.4vw, 2.5rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.015em", margin: 0 }}>
            Feito para o seu tipo de negócio
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          {tabs.map((t, i) => (
            <button
              key={t.title}
              onClick={() => setActive(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                borderRadius: 10,
                border: `1px solid ${i === active ? "rgba(99,102,241,0.4)" : C.border}`,
                background: i === active ? C.indigoSoft : "transparent",
                color: i === active ? C.text : C.textMuted,
                fontSize: 13.5,
                fontWeight: 600,
                cursor: "pointer",
                ...body,
                transition: "all 0.15s ease",
              }}
            >
              <t.icon size={15} strokeWidth={1.8} />
              {t.title}
            </button>
          ))}
        </div>

        <div
          style={{
            borderRadius: 20,
            border: `1px solid ${C.border}`,
            background: C.surface,
            padding: "40px 36px",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 28,
            alignItems: "flex-start",
          }}
          className="usecase-panel"
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: `linear-gradient(135deg, ${C.indigo}, ${C.emerald})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <T.icon size={26} color="#050505" strokeWidth={1.8} />
          </div>
          <div>
            <h3 style={{ ...heading, fontSize: 21, fontWeight: 700, color: C.text, margin: "0 0 10px" }}>{T.title}</h3>
            <p style={{ ...body, fontSize: 14.5, color: C.textMuted, lineHeight: 1.6, margin: "0 0 20px" }}>{T.desc}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {T.points.map((p) => (
                <div key={p} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                  <Check size={15} color={C.emerald} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ ...body, fontSize: 13.5, color: C.text }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 560px) {
          .usecase-panel { grid-template-columns: 1fr !important; padding: 28px 22px !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------------------------------------------------------
   PRICING
--------------------------------------------------------- */
function PriceCard({ name, price, tag, features, cta, highlighted, annual }) {
  const displayPrice = annual ? Math.round(price * 0.8) : price;
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 20,
        padding: "30px 26px",
        border: highlighted ? `1px solid rgba(99,102,241,0.5)` : `1px solid ${C.border}`,
        background: highlighted
          ? `linear-gradient(180deg, ${C.indigoSoft}, transparent 45%), ${C.surfaceRaised}`
          : C.surface,
        boxShadow: highlighted ? "0 20px 60px -20px rgba(79,70,229,0.4)" : "none",
        transform: highlighted ? "scale(1.03)" : "none",
      }}
      className="price-card"
    >
      {tag && (
        <span
          style={{
            position: "absolute",
            top: -13,
            left: 26,
            ...body,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.03em",
            padding: "5px 12px",
            borderRadius: 999,
            background: `linear-gradient(135deg, ${C.indigo}, ${C.emerald})`,
            color: "#050505",
          }}
        >
          {tag}
        </span>
      )}
      <h3 style={{ ...heading, fontSize: 18, fontWeight: 700, color: C.text, margin: "6px 0 4px" }}>{name}</h3>
      <div style={{ display: "flex", alignItems: "baseline", gap: 5, margin: "14px 0 22px" }}>
        <span style={{ ...heading, fontSize: 36, fontWeight: 800, color: C.text }}>
          R$ {displayPrice}
        </span>
        <span style={{ ...body, fontSize: 13.5, color: C.textFaint }}>/mês</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 26 }}>
        {features.map((f) => (
          <div key={f} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
            <Check size={15} color={C.emerald} style={{ flexShrink: 0, marginTop: 2 }} />
            <span style={{ ...body, fontSize: 13.5, color: C.textMuted, lineHeight: 1.4 }}>{f}</span>
          </div>
        ))}
      </div>
      {highlighted ? (
        <PrimaryButton style={{ width: "100%", justifyContent: "center" }}>{cta}</PrimaryButton>
      ) : (
        <SecondaryButton style={{ width: "100%", justifyContent: "center" }}>{cta}</SecondaryButton>
      )}
    </div>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(false);
  const plans = [
    {
      name: "Starter",
      price: 197,
      features: [
        "1 número de WhatsApp conectado",
        "Até 3 atendentes simultâneos",
        "1.500 mensagens/mês",
        "IA básica com respostas automáticas",
        "Histórico e CRM de contatos",
      ],
      cta: "Começar com Starter",
    },
    {
      name: "Growth",
      price: 497,
      tag: "Melhor custo-benefício",
      highlighted: true,
      features: [
        "3 números de WhatsApp conectados",
        "Até 10 atendentes simultâneos",
        "15.000 mensagens/mês",
        "Agente de IA avançado com prompt personalizado",
        "Construtor de workflows e tags ilimitadas",
        "Relatórios e análise de sentimento",
        "Suporte prioritário via WhatsApp",
      ],
      cta: "Assinar Plano Growth",
    },
    {
      name: "Enterprise",
      price: 1290,
      features: [
        "Múltiplos números (até 10 instâncias)",
        "Atendentes ilimitados",
        "Mensagens ilimitadas",
        "IA treinada com base de conhecimento e PDFs",
        "Acesso via API e webhooks",
        "Gerente de contas dedicado e onboarding VIP",
      ],
      cta: "Falar com Especialista",
    },
  ];

  return (
    <section id="pricing" style={{ padding: "40px 24px 110px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 32px" }}>
          <SectionLabel>Preços</SectionLabel>
          <h2 style={{ ...heading, fontSize: "clamp(1.8rem, 3.4vw, 2.5rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.015em", margin: "0 0 14px" }}>
            Um plano para cada estágio do seu atendimento
          </h2>
          <p style={{ ...body, fontSize: 14.5, color: C.textMuted, margin: 0 }}>
            Sem taxa por mensagem da Meta. Você paga só a assinatura da plataforma.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: 4,
              borderRadius: 999,
              border: `1px solid ${C.border}`,
              background: C.surface,
            }}
          >
            {[
              ["Mensal", false],
              ["Anual · 20% off", true],
            ].map(([label, val]) => (
              <button
                key={label}
                onClick={() => setAnnual(val)}
                style={{
                  ...body,
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "8px 16px",
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  color: annual === val ? "#050505" : C.textMuted,
                  background: annual === val ? C.emerald : "transparent",
                  transition: "all 0.15s ease",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }} className="pricing-grid">
          {plans.map((p) => (
            <PriceCard key={p.name} {...p} annual={annual} />
          ))}
        </div>
      </div>
      <style>{`
        .price-card { transition: transform 0.2s ease; }
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 420px; margin: 0 auto; }
          .price-card { transform: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------------------------------------------------------
   FAQ
--------------------------------------------------------- */
function FaqItem({ q, a, isOpen, onClick }) {
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button
        onClick={onClick}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "22px 4px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ ...heading, fontSize: 15.5, fontWeight: 600, color: C.text }}>{q}</span>
        <ChevronDown
          size={19}
          color={C.textFaint}
          style={{ flexShrink: 0, transition: "transform 0.2s ease", transform: isOpen ? "rotate(180deg)" : "none" }}
        />
      </button>
      <div
        style={{
          maxHeight: isOpen ? 220 : 0,
          overflow: "hidden",
          transition: "max-height 0.28s ease",
        }}
      >
        <p style={{ ...body, fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: "0 0 22px", paddingRight: 30 }}>
          {a}
        </p>
      </div>
    </div>
  );
}

function Faq() {
  const items = [
    {
      q: "Preciso pagar taxa por mensagem para o WhatsApp ou a Meta?",
      a: "Não! O NexusCX utiliza conexão direta via WebSocket com QR Code. Você só paga a assinatura da nossa plataforma — sem taxas em dólar cobradas pela API oficial da Meta.",
    },
    {
      q: "A inteligência artificial pode inventar respostas erradas?",
      a: "Você tem controle total. Configuramos travas estritas no prompt da IA para que ela responda apenas com base nas informações e diretrizes que você autorizar.",
    },
    {
      q: "Posso colocar vários atendentes atendendo o mesmo número de WhatsApp?",
      a: "Sim, essa é uma das principais funções. Sua equipe inteira atende pelo computador, com históricos sincronizados e identificação de qual atendente está respondendo.",
    },
    {
      q: "Existe fidelidade ou contrato de longo prazo?",
      a: "Nenhuma fidelidade nos planos mensais. Você pode cancelar com um clique a qualquer momento, direto no seu painel.",
    },
    {
      q: "Como funciona a garantia de 7 dias?",
      a: "Se dentro de 7 dias você achar que o NexusCX não aumentou a velocidade e as vendas do seu atendimento, devolvemos 100% do seu dinheiro, sem perguntas.",
    },
  ];
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={{ padding: "40px 24px 110px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <SectionLabel>Perguntas frequentes</SectionLabel>
          <h2 style={{ ...heading, fontSize: "clamp(1.8rem, 3.4vw, 2.5rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.015em", margin: 0 }}>
            Antes de você começar
          </h2>
        </div>
        <div>
          {items.map((it, i) => (
            <FaqItem key={it.q} q={it.q} a={it.a} isOpen={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   FINAL CTA
--------------------------------------------------------- */
function FinalCta() {
  return (
    <section style={{ padding: "0 24px 110px" }}>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
          borderRadius: 24,
          border: `1px solid ${C.borderStrong}`,
          background: `radial-gradient(ellipse 120% 100% at 50% 0%, rgba(99,102,241,0.28), transparent 65%), ${C.surfaceRaised}`,
          padding: "72px 32px",
          textAlign: "center",
        }}
      >
        <GlowOrb style={{ width: 300, height: 300, bottom: -140, left: -60, background: C.emerald, opacity: 0.18 }} />
        <h2
          style={{
            ...heading,
            fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)",
            fontWeight: 800,
            color: C.text,
            letterSpacing: "-0.015em",
            maxWidth: 640,
            margin: "0 auto 16px",
            position: "relative",
          }}
        >
          Pronto para transformar seu WhatsApp em uma máquina de vendas autônoma?
        </h2>
        <p style={{ ...body, fontSize: 15, color: C.textMuted, maxWidth: 480, margin: "0 auto 34px", position: "relative" }}>
          Junte-se a centenas de empresas que já atendem mais rápido e vendem mais com o NexusCX.
        </p>
        <div style={{ position: "relative" }}>
          <PrimaryButton icon={ArrowRight} size="lg">
            Começar Teste Grátis de 7 Dias Agora
          </PrimaryButton>
        </div>
        <p style={{ ...body, fontSize: 12.5, color: C.textFaint, marginTop: 18, position: "relative" }}>
          Leva menos de 2 minutos para conectar seu WhatsApp.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   FOOTER
--------------------------------------------------------- */
function Footer() {
  const cols = [
    { title: "Produto", links: ["Recursos", "Preços", "Demonstração", "Atualizações"] },
    { title: "Soluções", links: ["Clínicas", "Imobiliárias", "E-commerce", "Agências"] },
    { title: "Empresa", links: ["Sobre", "Carreiras", "Blog", "Contato"] },
  ];
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: "56px 24px 32px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr repeat(3, 1fr)", gap: 32, marginBottom: 48 }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: `linear-gradient(135deg, ${C.indigo}, ${C.emerald})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Zap size={15} color="#050505" strokeWidth={2.5} />
              </div>
              <span style={{ ...heading, fontSize: 17, fontWeight: 800, color: C.text }}>NexusCX</span>
            </div>
            <p style={{ ...body, fontSize: 13, color: C.textFaint, lineHeight: 1.6, maxWidth: 240 }}>
              Atendimento centralizado e inteligência artificial para o WhatsApp da sua empresa.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p style={{ ...body, fontSize: 13, fontWeight: 700, color: C.text, margin: "0 0 14px" }}>{c.title}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {c.links.map((l) => (
                  <a key={l} href="#" style={{ ...body, fontSize: 13, color: C.textFaint, textDecoration: "none" }}>
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 14,
            paddingTop: 24,
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <span style={{ ...body, fontSize: 12.5, color: C.textFaint }}>
            © 2026 NexusCX. Todos os direitos reservados.
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 7, ...body, fontSize: 12.5, color: C.emerald }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.emerald, boxShadow: `0 0 6px ${C.emerald}` }} />
            Todos os sistemas operacionais (99.9% uptime)
          </span>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

/* ---------------------------------------------------------
   ROOT
--------------------------------------------------------- */
export default function NexusCXLanding() {
  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh", ...body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        body, html { margin: 0; padding: 0; }
        ::selection { background: rgba(99,102,241,0.35); }
        section[id] { scroll-margin-top: 84px; }
        a, button { -webkit-tap-highlight-color: transparent; }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <ProblemSection />
        <FeaturesBento />
        <UseCases />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
