// Simple theme toggle using data-theme on <html>
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  function applyTheme(t){
    root.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
    if(btn) btn.textContent = t === 'dark' ? '🌙' : '🌓';
  }
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));
  if(btn){
    btn.addEventListener('click', ()=>{
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }
})();
