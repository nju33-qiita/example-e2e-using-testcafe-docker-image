import {Selector} from 'testcafe';

fixture`HTMLテスト`
  .page`http://koa:3000`;

test('<h1/>のテキストはハロー', async t => {
  const h1 = Selector('h1');
  await t.expect(h1.innerText).eql('ハロー');
});
