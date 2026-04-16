document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggleEmbed');
  const jsEmbed = document.getElementById('jsEmbed');
  const imageEmbed = document.getElementById('imageEmbed');
  const modeLabel = document.getElementById('modeLabel');

  if (!toggle || !jsEmbed || !imageEmbed || !modeLabel) return;

  toggle.addEventListener('click', () => {
    const showingJs = !jsEmbed.classList.contains('hidden');
    jsEmbed.classList.toggle('hidden', showingJs);
    imageEmbed.classList.toggle('hidden', !showingJs);
    modeLabel.textContent = showingJs ? 'Image embed' : 'JavaScript embed';
    toggle.textContent = showingJs ? 'Show JavaScript embed' : 'Show image fallback';
  });
});
