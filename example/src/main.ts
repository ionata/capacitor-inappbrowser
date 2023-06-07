import './style.css'
import { InAppBrowser } from '@capgo/inappbrowser';

setup(document.querySelector<HTMLButtonElement>('button'));

function setup(element: HTMLButtonElement | null) {
  if (!element) return;
  element.addEventListener('click', () => {
    InAppBrowser.openWebView({
      url: 'https://capacitorjs.com/',
      title: 'Example',
    });
  });
}
