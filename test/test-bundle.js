const assert = require('node:assert/strict')

import('../dist/add.bundle.mjs').then((mod) => {
  assert.equal(mod.add(1, 2), 3, 'Expected mod.add(1, 2) to equal 3')
}).catch((err) => {
  console.error(err)
  process.exit(1)
})
