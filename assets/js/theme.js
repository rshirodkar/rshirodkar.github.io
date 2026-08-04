// Theme toggle using data-theme on <html> with ARIA and preference handling
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const storageKey = 'theme';
  function setButtonState(t){
    if(!btn) return;
    btn.textContent = t === 'dark' ? '🌙' : '🌓';
    btn.setAttribute('aria-pressed', String(t === 'dark'));
  }
  function applyTheme(t){
    root.setAttribute('data-theme', t);
    try{ localStorage.setItem(storageKey, t); }catch(e){}
    setButtonState(t);
  }
  // determine initial theme
  const saved = (()=>{ try{ return localStorage.getItem(storageKey) }catch(e){return null} })();
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  if(btn){
    btn.addEventListener('click', ()=>{
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }
})();
