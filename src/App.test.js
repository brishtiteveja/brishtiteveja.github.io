import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders the current portfolio content', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.textContent).toContain(
    'I build AI systems that make complex worlds legible.'
  );
  expect(div.textContent).toContain('Perspectivity');
  expect(div.textContent).toContain('Recent signals.');
  expect(div.textContent).toContain('Motionfold');
  expect(div.textContent).toContain('Olympia Topology MCP Server');
  expect(div.textContent).toContain('BanglaLlama: LLaMA for Bangla Language');
  expect(
    div.querySelector('a[href="https://perspectivity.co/"]')
  ).not.toBeNull();
  expect(div.querySelector('a[href="https://ciroos.ai/"]')).not.toBeNull();
  expect(
    div.querySelector('img[alt="Abdullah Khan Zehady"]')
  ).not.toBeNull();
  expect(div.textContent).not.toContain('Matthew Thorry');
});
