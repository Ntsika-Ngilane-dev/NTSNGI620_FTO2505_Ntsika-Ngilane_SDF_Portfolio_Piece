// Minimal JS for potential interactions
document.addEventListener('DOMContentLoaded', ()=>{
  // animate any bars that have a data-percent attribute and set ARIA + labels
  const fills = Array.from(document.querySelectorAll('[data-percent]'));
  fills.forEach((el, i) => {
    const pct = parseInt(el.getAttribute('data-percent')) || 0;
    // set ARIA attributes on the fill element
    try{
      el.setAttribute('role','progressbar');
      el.setAttribute('aria-valuemin','0');
      el.setAttribute('aria-valuemax','100');
      el.setAttribute('aria-valuenow',String(pct));
    } catch(e){}
    // update label (if present) and animate width; stagger for nicer effect
    const parent = el.parentElement;
    const label = parent ? parent.querySelector('.pct-label') : null;
    if(label) label.textContent = pct + '%';
    setTimeout(() => { el.style.width = pct + '%'; }, i * 80);
  });
});
