module.exports = {
  plugins: ["react"],
  extends: ["./index", "plugin:react/recommended"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "strict": 0,
    "no-underscore-dangle": 0,
    "no-mixed-requires": 0,
    "no-process-exit": 0,
    "no-warning-comments": 0,
    "curly": 0,
    "no-multi-spaces": 0,
    "no-alert": 0,
    "consistent-return": 0,
    "consistent-this": [0, "self"],
    "func-style": 0,
    "max-nested-callbacks": 0,
    "camelcase": 0,
    "no-debugger": 1,
    "no-empty": 1,
    "no-invalid-regexp": 1,
    "no-unused-expressions": 0,
    "no-native-reassign": 1,
    "no-fallthrough": 1,
    "sonarjs/cognitive-complexity": 1,
    "eqeqeq": 2,
    "no-undef": 2,
    "no-dupe-keys": 2,
    "no-empty-character-class": 2,
    "no-self-compare": 2,
    "valid-typeof": 2,
    "no-unused-vars": [
      2,
      {
        "args": "none"
      }
    ],
    "handle-callback-err": 2,
    "no-shadow-restricted-names": 2,
    "no-new-require": 2,
    "no-mixed-spaces-and-tabs": 2,
    "block-scoped-var": 2,
    "no-else-return": 2,
    "no-throw-literal": 2,
    "no-void": 2,
    "radix": 2,
    "wrap-iife": [2, "outside"],
    "no-shadow": 0,
    "no-path-concat": 2,
    "valid-jsdoc": [
      0,
      {
        "requireReturn": false,
        "requireParamDescription": false,
        "requireReturnDescription": false
      }
    ],
    "no-spaced-func": 2,
    "semi-spacing": 2,
    "quotes": [2, "single"],
    "key-spacing": [
      2,
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "indent": [2, 2],
    "no-lonely-if": 2,
    "no-floating-decimal": 2,
    "brace-style": [
      2,
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "comma-style": [2, "last"],
    "no-multiple-empty-lines": [
      2,
      {
        "max": 1
      }
    ],
    "no-nested-ternary": 2,
    "operator-assignment": [2, "always"],
    "padded-blocks": [2, "never"],
    "quote-props": [2, "as-needed"],
    "keyword-spacing": [
      2,
      {
        "before": true,
        "after": true,
        "overrides": {}
      }
    ],
    "space-before-blocks": [2, "always"],
    "array-bracket-spacing": [2, "never"],
    "computed-property-spacing": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-unary-ops": [
      2,
      {
        "words": true,
        "nonwords": false
      }
    ],
    "wrap-regex": 2,
    "linebreak-style": 0,
    "arrow-spacing": [
      2,
      {
        "before": true,
        "after": true
      }
    ],
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "object-shorthand": [2, "always"],
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-this-alias": "off",
    "security/detect-object-injection": "off"
  },
  "overrides": [
    {
      "files": ["*.spec.ts", "*.spec.tsx", "*.test.ts", "*.test.tsx"],
      "rules": {
        "no-undef": "off",
        "no-console": "off",
        "prefer-arrow-callback": 1,
        "sonarjs/no-duplicate-string": 0,
        "security/detect-object-injection": 0
      }
    }
  ]
}
