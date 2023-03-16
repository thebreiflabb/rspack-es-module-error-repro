# rspack-es-module-error-repro

This repo demonstrates that rspack does not output ES Modules when setting `library.type = module`.

The outputted bundle does not contain any `export { }` declaration.

## Reproduction steps

```bash
pnpm install
pnpm build
pnpm test
```

## Expected behaviour

The test [test/test-bundle.js](test/test-bundle.js) tries to import the built bundle as an ES Module and execute the add function, this test should pass if the bundle is bundled as an ES Module.

The test passes if the original source code (ES Module) is copy directly to the `dist/add.bundle.mjs` file
