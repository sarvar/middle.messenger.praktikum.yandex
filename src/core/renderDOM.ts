import Block from './Block';

export function renderDOM(query: string, block: Block): void {
  const root = document.querySelector(query);

  if (!root) {
    throw new Error(`Не найден элемент по селектору ${query}`);
  }

  const content = block.getContent();

  if (content) {
    root.append(content);
  }

  block.dispatchComponentDidMount();
}
