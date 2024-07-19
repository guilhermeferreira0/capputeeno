export function formatHref(href: string) {
  const url = href.replace(/\s/g, '-');
  return url.toLocaleLowerCase();
}
