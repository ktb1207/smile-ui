export function setDocumentTheme(theme = 'normal'){
  const docelm = document.documentElement;
  if(!docelm.hasAttribute('theme')){
    docelm.setAttribute('theme', theme)
  }
}