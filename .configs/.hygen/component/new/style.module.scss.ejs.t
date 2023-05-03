---
to: src/components/<%= h.changeCase.param(name) %>/style.module.scss
---
@import 'assets/styles/init.scss';

.<%= h.changeCase.param(name) %> {
  color: colors('black');

  &--xx {
    background-color: colors('white');
  }
}
