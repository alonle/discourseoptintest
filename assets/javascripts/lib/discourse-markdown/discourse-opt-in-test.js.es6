import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['discourse-opt-in-test'] = true;
});

export function setup(helper) {
  helper.whiteList([ 'button[id=mytest]' ]);
}
