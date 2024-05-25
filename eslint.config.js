import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  rules: {
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 1 },
        multiline: { max: 1 },
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'TWO_WAY_BINDING',
          'RENDER_MODIFIERS',
          'OTHER_DIRECTIVES',
          'UNIQUE',
          'SLOT',
          'GLOBAL',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
    'style/array-bracket-spacing': [
      'error',
      'always',
    ],
    'array-bracket-spacing': [
      'error',
      'always',
    ],
    'max-len': 'off',
    'no-console': 'warn',
    'no-shadow': [
      'error',
      { ignoreOnInitialization: true },
    ],
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
  },
})
