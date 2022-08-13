function postFormData(form, headers = {}) {
  const COMMON_FORM_HEADERS = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };
  headers = { ...COMMON_FORM_HEADERS, ...headers };
  const URL = form.attr('action');
  const method = form.attr('method');
  const body = form.serialize();
  return fetch(URL, {
    headers,
    method,
    body,
  });
}

function debounce(func, timeout=300) {
  let timer;
  return (...args) => {
    if (timer)
      clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  }
}

(() => {
  let css = 'font-size: 2rem; color: #5D3FD3; background-color: hsl(252, 63%, 54%, 10%); text-shadow: 3px 2px teal;';
  let name = `
<!-- ░█░█░█▀█░█▀▄░█▀▀░█░█░█▀█ -->
<!-- ░█▀█░█▀█░█▀▄░▀▀█░█▀█░█▀█ -->
<!-- ░▀░▀░▀░▀░▀░▀░▀▀▀░▀░▀░▀░▀ -->
`;
  console.log(`%c${name}`, css);
})();
