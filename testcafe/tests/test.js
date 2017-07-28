import {Selector} from 'testcafe';

fixture`html`
  .page`http://koa:3000`;

test('<h1/> text is Hello', async t => {
  const h1 = Selector('h1');
  await t.expect(h1.innerText).eql('Hello');
});
