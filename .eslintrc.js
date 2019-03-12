module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "import/extensions": 0,
        "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 5 }],
        "react/jsx-filename-extension": 0,
        "no-confusing-arrow": ["error", {"allowParens": true }],
        "react/jsx-one-expression-per-line": [0, { "allow": "single-child" }],
        "max-len": 0,
        "import/no-unresolved": 0,
        "import/prefer-default-export": 0,
        "no-console": 0,
        "react/forbid-prop-types": 0,
        "object-curly-newline": 0,
        "implicit-arrow-linebreak": 0,
        "no-underscore-dangle": 0
    },
};
