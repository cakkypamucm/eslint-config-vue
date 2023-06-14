/* eslint sort-keys/sort-keys-fix: "error" */
/* eslint-disable sort-keys/sort-keys-fix */

/* eslint-enable sort-keys/sort-keys-fix */
const errorRules = {
    "vue-scoped-css/require-selector-used-inside": "error",
    "vue-scoped-css/v-deep-pseudo-style": ["error", ":deep"],
    "vue-scoped-css/v-global-pseudo-style": ["error", ":global"],
    "vue-scoped-css/v-slotted-pseudo-style": ["error", ":slotted"],
    "vue/block-tag-newline": "error",
    "vue/html-button-has-type": "error",
    "vue/html-comment-content-newline": "error",
    "vue/html-comment-content-spacing": "error",
    "vue/html-comment-indent": "error",
    "vue/next-tick-style": ["error", "promise"],
    "vue/no-duplicate-attr-inheritance": "error",
    "vue/no-irregular-whitespace": "error",
    "vue/no-multiple-objects-in-class": "error",
    "vue/no-potential-component-option-typo": [
        "error",
        {
            presets: ["all"]
        }
    ],
    "vue/no-static-inline-styles": [
        "error",
        {
            allowBinding: true
        }
    ],
    "vue/no-template-target-blank": "error",
    "vue/no-useless-mustaches": "error",
    "vue/padding-line-between-blocks": "error",
    "vue/require-explicit-emits": "error"
};
/* eslint-disable sort-keys/sort-keys-fix */

/* eslint-enable sort-keys/sort-keys-fix */
const offRules = {
    "vue/html-indent": "off",
    "vue/multi-word-component-names": "off"
};
/* eslint-disable sort-keys/sort-keys-fix */

module.exports = {
    extends: ["eslint-config-cakkypamucm", "plugin:vue-scoped-css/vue3-recommended", "plugin:vue/recommended"],
    rules: {
        ...errorRules,
        ...offRules
    }
};
