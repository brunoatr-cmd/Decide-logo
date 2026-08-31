import React, { useState, useMemo } from 'react';

interface Movie {
  title: string;
  year: number;
  genre: string;
}

const movieDatabase: Movie[] = [
  // --- CINEMA BRASILEIRO ---
  { title: "Cidade de Deus", year: 2002, genre: "Brasileiro" },
  { title: "O Auto da Compadecida", year: 2000, genre: "Brasileiro" },
  { title: "Tropa de Elite", year: 2007, genre: "Brasileiro" },
  { title: "Central do Brasil", year: 1998, genre: "Brasileiro" },
  { title: "Bacurau", year: 2019, genre: "Brasileiro" },
  { title: "Que Horas Ela Volta?", year: 2015, genre: "Brasileiro" },
  { title: "O Palhaço", year: 2011, genre: "Brasileiro" },
  { title: "Estômago", year: 2007, genre: "Brasileiro" },
  { title: "Tropa de Elite 2", year: 2010, genre: "Brasileiro" },
  { title: "O Homem que Copiava", year: 2003, genre: "Brasileiro" },
  { title: "Lisbela e o Prisioneiro", year: 2003, genre: "Brasileiro" },
  { title: "Carandiru", year: 2003, genre: "Brasileiro" },
  { title: "Minha Mãe É uma Peça", year: 2013, genre: "Brasileiro" },
  { title: "Hoje Eu Quero Voltar Sozinho", year: 2014, genre: "Brasileiro" },
  { title: "Bingo: O Rei das Manhãs", year: 2017, genre: "Brasileiro" },
  { title: "Aquarius", year: 2016, genre: "Brasileiro" },
  { title: "O Cheiro do Ralo", year: 2006, genre: "Brasileiro" },
  { title: "Saneamento Básico, O Filme", year: 2007, genre: "Brasileiro" },
  { title: "Ainda Estou Aqui", year: 2024, genre: "Brasileiro" },

  // --- AÇÃO ---
  { title: "Batman: O Cavaleiro das Trevas", year: 2008, genre: "Ação" },
  { title: "Mad Max: Estrada da Fúria", year: 2015, genre: "Ação" },
  { title: "Matrix", year: 1999, genre: "Ação" },
  { title: "John Wick: De Volta ao Jogo", year: 2014, genre: "Ação" },
  { title: "Gladiador", year: 2000, genre: "Ação" },
  { title: "O Resgate do Soldado Ryan", year: 1998, genre: "Ação" },
  { title: "Duro de Matar", year: 1988, genre: "Ação" },
  { title: "O Exterminador do Futuro 2", year: 1991, genre: "Ação" },
  { title: "Top Gun: Maverick", year: 2022, genre: "Ação" },
  { title: "Cassino Royale", year: 2006, genre: "Ação" },
  { title: "Missão Impossível: Efeito Fallout", year: 2018, genre: "Ação" },
  { title: "Vingadores: Ultimato", year: 2019, genre: "Ação" },

  // --- COMÉDIA ---
  { title: "Se Beber, Não Case!", year: 2009, genre: "Comédia" },
  { title: "As Branquelas", year: 2004, genre: "Comédia" },
  { title: "Superbad: É Hoje", year: 2007, genre: "Comédia" },
  { title: "O Grande Lebowski", year: 1998, genre: "Comédia" },
  { title: "Anjos da Lei", year: 2012, genre: "Comédia" },
  { title: "Debi & Lóide", year: 1994, genre: "Comédia" },
  { title: "Todo Mundo Quase Morto", year: 2004, genre: "Comédia" },
  { title: "Escola de Rock", year: 2003, genre: "Comédia" },

  // --- TERROR & SUSPENSE ---
  { title: "O Iluminado", year: 1980, genre: "Terror" },
  { title: "Corra!", year: 2017, genre: "Terror" },
  { title: "Invocação do Mal", year: 2013, genre: "Terror" },
  { title: "Hereditário", year: 2018, genre: "Terror" },
  { title: "O Exorcista", year: 1973, genre: "Terror" },
  { title: "Alien, o Oitavo Passageiro", year: 1979, genre: "Terror" },
  { title: "Um Lugar Silencioso", year: 2018, genre: "Terror" },
  { title: "Pânico", year: 1996, genre: "Terror" },

  // --- FICÇÃO CIENTÍFICA ---
  { title: "Interstellar", year: 2014, genre: "Sci-Fi" },
  { title: "Inception (A Origem)", year: 2010, genre: "Sci-Fi" },
  { title: "Duna: Parte 2", year: 2024, genre: "Sci-Fi" },
  { title: "Blade Runner 2049", year: 2017, genre: "Sci-Fi" },
  { title: "2001: Uma Odisséia no Espaço", year: 1968, genre: "Sci-Fi" },
  { title: "De Volta para o Futuro", year: 1985, genre: "Sci-Fi" },
  { title: "A Chegada", year: 2016, genre: "Sci-Fi" },

  // --- ANIMAÇÃO ---
  { title: "Homem-Aranha: No Aranhaverso", year: 2018, genre: "Animação" },
  { title: "A Viagem de Chihiro", year: 2001, genre: "Animação" },
  { title: "Divertida Mente", year: 2015, genre: "Animação" },
  { title: "Shrek 2", year: 2004, genre: "Animação" },
  { title: "Toy Story", year: 1995, genre: "Animação" },
  { title: "O Rei Leão", year: 1994, genre: "Animação" },
  { title: "WALL-E", year: 2008, genre: "Animação" },

  // --- DRAMA & CULT ---
  { title: "O Poderoso Chefão", year: 1972, genre: "Drama" },
  { title: "Um Sonho de Liberdade", year: 1994, genre: "Drama" },
  { title: "Pulp Fiction", year: 1994, genre: "Drama" },
  { title: "Clube da Luta", year: 1999, genre: "Drama" },
  { title: "Parasita", year: 2019, genre: "Drama" },
  { title: "Whiplash: Em Busca da Perfeição", year: 2014, genre: "Drama" },
  { title: "Forrest Gump", year: 1994, genre: "Drama" }
];

const genres = ["Todos", "Brasileiro", "Ação", "Comédia", "Terror", "Sci-Fi", "Animação", "Drama"];

export default function App() {
  const [movies, setMovies] = useState<Movie[]>(movieDatabase);
  const [selectedGenre, setSelectedGenre] = useState<string>("Todos");
  const [picked, setPicked] = useState<Movie | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("Brasileiro");

  const filteredMovies = useMemo(() => {
    return selectedGenre === "Todos" 
      ? movies 
      : movies.filter(m => m.genre === selectedGenre);
  }, [movies, selectedGenre]);

  const handlePick = () => {
    if (filteredMovies.length === 0) return;
    setIsSpinning(true);
    setPicked(null);

    let counter = 0;
    const interval = setInterval(() => {
      const randomTmp = filteredMovies[Math.floor(Math.random() * filteredMovies.length)];
      setPicked(randomTmp);
      counter++;
      if (counter > 12) {
        clearInterval(interval);
        const finalPick = filteredMovies[Math.floor(Math.random() * filteredMovies.length)];
        setPicked(finalPick);
        setIsSpinning(false);
      }
    }, 80);
  };

  const handleAddMovie = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setMovies(prev => [{ title: newTitle.trim(), year: new Date().getFullYear(), genre: newGenre }, ...prev]);
    setNewTitle("");
  };

  const handleRemove = (title: string) => {
    setMovies(prev => prev.filter(m => m.title !== title));
  };

  return (
    <div style={{
      backgroundColor: '#000000',
      color: '#e2e8f0',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '24px 16px',
      maxWidth: '480px',
      margin: '0 auto',
      boxSizing: 'border-box'
    }}>
      {/* Header com ícone de Cadeira de Diretor + Claquete */}
      <header style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 3H5v4h14V3z"/>
            <path d="M4 7h16v3H4z"/>
            <path d="M5 10l2 11"/>
            <path d="M19 10l-2 11"/>
            <path d="M7 16h10"/>
          </svg>
          <span style={{ fontSize: '24px' }}>🎬</span>
        </div>
        
        <h1 style={{
          fontSize: '26px',
          fontWeight: '900',
          letterSpacing: '2px',
          color: '#ffffff',
          margin: 0,
          textTransform: 'uppercase'
        }}>
          CinePicker
        </h1>
        <p style={{ color: '#71717a', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '6px' }}>
          Sorteador Minimalista de Filmes
        </p>
      </header>

      {/* Display do Sorteio */}
      <div style={{
        backgroundColor: '#09090b',
        border: isSpinning ? '1px solid #e11d48' : '1px solid #27272a',
        borderRadius: '16px',
        padding: '28px 20px',
        textAlign: 'center',
        marginBottom: '24px',
        minHeight: '140px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.2s ease',
        boxShadow: isSpinning ? '0 0 20px rgba(225, 29, 72, 0.2)' : 'none'
      }}>
        {isSpinning ? (
          <div>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🪑 🎬</div>
            <p style={{ color: '#e11d48', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
              RODANDO A CENA...
            </p>
            {picked && (
              <p style={{ color: '#a1a1aa', fontSize: '16px', margin: '4px 0 0 0', opacity: 0.7 }}>
                {picked.title}
              </p>
            )}
          </div>
        ) : picked ? (
          <div>
            <span style={{
              backgroundColor: '#e11d48',
              color: '#ffffff',
              fontSize: '10px',
              fontWeight: '800',
              padding: '4px 10px',
              borderRadius: '20px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {picked.genre} • {picked.year}
            </span>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '800',
              color: '#ffffff',
              margin: '12px 0 0 0',
              lineHeight: '1.2'
            }}>
              {picked.title}
            </h2>
          </div>
        ) : (
          <div>
            <p style={{ color: '#52525b', fontSize: '14px', margin: 0 }}>
              Escolha uma categoria e toque no botão para sortear.
            </p>
          </div>
        )}
      </div>

      {/* Botão Ação Principal */}
      <button
        onClick={handlePick}
        disabled={filteredMovies.length === 0 || isSpinning}
        style={{
          width: '100%',
          padding: '18px',
          backgroundColor: filteredMovies.length > 0 ? '#ffffff' : '#27272a',
          color: filteredMovies.length > 0 ? '#000000' : '#52525b',
          border: 'none',
          borderRadius: '12px',
          fontSize: '15px',
          fontWeight: '900',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          cursor: filteredMovies.length > 0 ? 'pointer' : 'not-allowed',
          marginBottom: '28px'
        }}
      >
        {isSpinning ? 'SORTEANDO...' : 'SORTEAR FILME 🎬'}
      </button>

      {/* Filtros por Categorias */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '11px', color: '#71717a', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Categorias
          </span>
          <span style={{ fontSize: '11px', color: '#e11d48', fontWeight: 'bold' }}>
            {filteredMovies.length} disponíveis
          </span>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '6px'
        }}>
          {genres.map(g => {
            const active = selectedGenre === g;
            return (
              <button
                key={g}
                onClick={() => setSelectedGenre(g)}
                style={{
                  padding: '10px 16px',
                  borderRadius: '24px',
                  border: active ? '1px solid #ffffff' : '1px solid #27272a',
                  backgroundColor: active ? '#ffffff' : '#09090b',
                  color: active ? '#000000' : '#a1a1aa',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {g === "Brasileiro" ? "🇧🇷 " + g : g}
              </button>
            );
          })}
        </div>
      </div>

      {/* Adicionar Filme Próprio */}
      <form onSubmit={handleAddMovie} style={{
        backgroundColor: '#09090b',
        border: '1px solid #27272a',
        borderRadius: '12px',
        padding: '14px',
        marginBottom: '24px'
      }}>
        <label style={{ fontSize: '11px', color: '#71717a', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
          + Adicionar à Lista
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            placeholder="Nome do filme..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{
              flex: 1,
              backgroundColor: '#000000',
              border: '1px solid #27272a',
              borderRadius: '8px',
              padding: '10px 12px',
              color: '#ffffff',
              fontSize: '13px',
              outline: 'none'
            }}
          />
          <select
            value={newGenre}
            onChange={(e) => setNewGenre(e.target.value)}
            style={{
              backgroundColor: '#000000',
              border: '1px solid #27272a',
              borderRadius: '8px',
              padding: '10px',
              color: '#ffffff',
              fontSize: '13px',
              outline: 'none'
            }}
          >
            {genres.filter(g => g !== "Todos").map(g => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
          <button
            type="submit"
            style={{
              backgroundColor: '#e11d48',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '0 16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            +
          </button>
        </div>
      </form>

      {/* Catálogo Listagem */}
      <div>
        <span style={{ fontSize: '11px', color: '#71717a', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
          Catálogo ({filteredMovies.length})
        </span>
        <div style={{
          maxHeight: '200px',
          overflowY: 'auto',
          backgroundColor: '#09090b',
          border: '1px solid #27272a',
          borderRadius: '12px',
          padding: '8px 12px'
        }}>
          {filteredMovies.map((m, idx) => (
            <div key={idx} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: idx === filteredMovies.length - 1 ? 'none' : '1px solid #18181b'
            }}>
              <div>
                <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: '#f4f4f5' }}>{m.title}</p>
                <span style={{ fontSize: '10px', color: '#71717a' }}>{m.genre} • {m.year}</span>
              </div>
              <button
                onClick={() => handleRemove(m.title)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#52525b',
                  cursor: 'pointer',
                  fontSize: '14px',
                  padding: '4px 8px'
                }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
