import { useState } from 'react';

// ============================================
// CONFIGURAÇÃO DO PORTFÓLIO - EDITE AQUI!
// ============================================

const CONFIG = {
  // Seu nome de usuário do Discord
  discordUsername: "@francez",
  
  // Link do servidor Discord
  discordServerLink: "https://discord.gg/8m2yWgNdKf",
  
  // Itens do portfólio - adicione ou remova aqui!
  portfolio: [
    {
      id: 1,
      type: "image" as const,
      title: "UI Elden Ring",
      url: "http://media.discordapp.net/attachments/1459658814944182292/1459668716215341138/image.png?ex=6980762d&is=697f24ad&hm=0e429b937147a854d55aaba9c4da218c531d9d37a3745a44cc583216d3a2c934&=&format=webp&quality=lossless&width=983&height=552",
      description: "HUD Teste, estilo baseado em Elden Ring."
    },
    {
      id: 2,
      type: "video" as const,
      title: "UI Inventário",
      url: "/src/video/Ui1.mp4",
      description: "Comission pra um jogo de brasilrot."
    },
    {
      id: 3,
      type: "video" as const,
      title: "UI Geral",
      url: "/src/video/Ui2.mp4",
      description: "Update e vou fazer todas UI dessa"
    },
   
  ],
  
  // Projetos que está participando
  projects: [
    {
      id: 1,
      name: "Servidor Principal",
      description: "Servidor de RPG que estou trabalhando",
      discordLink: "https://discord.gg/8m2yWgNdKf",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=300&h=200&fit=crop"
    },
  ]
};

// ============================================

export function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fundo com efeito */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-red-950/20 pointer-events-none" />
      <div className="fixed inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(127, 29, 29, 0.15) 0%, transparent 50%)`
      }} />
      
      {/* Conteúdo */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-red-900/30">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-red-400">Francez</span>
              <div className="flex gap-6">
                {['home', 'portfolio', 'projetos', 'contato'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      setActiveSection(section);
                      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`capitalize text-sm transition-colors hover:text-red-400 ${
                      activeSection === section ? 'text-red-400' : 'text-zinc-400'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero / Bio */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-3xl text-center">
            {/* Avatar */}
            <div className="mb-8 inline-block">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-900 to-red-600 p-1">
                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
                  <span className="text-5xl">♠</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Opa, sou o </span>
              <span className="text-red-400">Francez</span>
            </h1>
            
            <div className="bg-zinc-900/50 border border-red-900/30 rounded-2xl p-6 md:p-8 mb-8">
              <p className="text-zinc-300 text-lg leading-relaxed">
                Sou <span className="text-red-400 font-semibold">UI Maker</span> faz há 2 meses e estou a cada dia tentando aprender mais e mais. 
                Faço vários tipos de UI, mas prefiro <span className="text-red-400">RPG</span> e entre outros.
              </p>
              <p className="text-zinc-400 mt-4">
                Não sou muito bom, mas posso tentar kk
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-red-900/50 hover:bg-red-800/50 border border-red-700/50 rounded-xl transition-all hover:scale-105"
              >
                Ver Portfólio
              </a>
              <a 
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700/50 rounded-xl transition-all hover:scale-105"
              >
                Contato
              </a>
            </div>
          </div>
        </section>

        {/* Portfólio */}
        <section id="portfolio" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="text-red-400">Portfólio</span>
            </h2>
            <p className="text-zinc-500 text-center mb-12">Alguns dos meus trabalhos</p>
            
            {/* Comentário para ajudar a editar */}
            <div className="hidden">
              {/* Para adicionar mais itens, edite o array CONFIG.portfolio no início do arquivo */}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CONFIG.portfolio.map((item) => (
                <div 
                  key={item.id}
                  className="group bg-zinc-900/50 border border-red-900/20 rounded-2xl overflow-hidden hover:border-red-700/40 transition-all"
                >
                  {item.type === 'image' ? (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={item.url} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video">
                      <iframe
                        src={item.url}
                        title={item.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.type === 'video' 
                          ? 'bg-red-900/50 text-red-300' 
                          : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        {item.type === 'video' ? '🎬 Vídeo' : '🖼️ Imagem'}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-zinc-500 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Instrução para adicionar mais */}
            <div className="mt-8 text-center">
              <p className="text-zinc-600 text-sm">
                Para adicionar mais itens, edite o array <code className="text-red-400/70">CONFIG.portfolio</code> no início do arquivo App.tsx
              </p>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="py-20 px-6 bg-zinc-950/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="text-red-400">Projetos</span>
            </h2>
            <p className="text-zinc-500 text-center mb-12">Projetos que estou participando</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CONFIG.projects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-zinc-900/50 border border-red-900/20 rounded-2xl overflow-hidden hover:border-red-700/40 transition-all group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
                    <p className="text-zinc-500 text-sm mb-4">{project.description}</p>
                    <a 
                      href={project.discordLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2] hover:bg-[#4752c4] rounded-lg text-white text-sm transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                      Entrar no Discord
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Instrução para adicionar mais */}
            <div className="mt-8 text-center">
              <p className="text-zinc-600 text-sm">
                💡 Para adicionar mais projetos, edite o array <code className="text-red-400/70">CONFIG.projects</code> no início do arquivo App.tsx
              </p>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-red-400">Contato</span>
            </h2>
            <p className="text-zinc-500 mb-12">Entre em contato comigo</p>
            
            <div className="space-y-4">
              {/* Discord Username */}
              <div className="bg-zinc-900/50 border border-red-900/20 rounded-2xl p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#5865F2] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-zinc-400 text-sm">Discord</p>
                    <p className="text-white font-semibold">{CONFIG.discordUsername}</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigator.clipboard.writeText(CONFIG.discordUsername)}
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition-colors"
                >
                  Copiar
                </button>
              </div>

              {/* Discord Server */}
              <a 
                href={CONFIG.discordServerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-zinc-900/50 border border-red-900/20 rounded-2xl p-6 hover:border-red-700/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-900 to-red-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-zinc-400 text-sm">Servidor Discord</p>
                      <p className="text-white font-semibold group-hover:text-red-400 transition-colors">Entrar no servidor</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-zinc-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-red-900/20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-zinc-600 text-sm">
              © 2024 <span className="text-red-400">Francez</span> • UI Maker
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
