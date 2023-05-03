---
to: src/examples/<%= h.changeCase.param(name) %>/style.module.scss
---
@import 'assets/styles/init.scss';

.<%= h.changeCase.param(name) %> {
  color: colors('black');
}
