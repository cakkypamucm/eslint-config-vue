/* eslint sort-keys/sort-keys-fix: "error" */

const { isVue3 } = require("vue-demi");

module.exports = {
    extends: [
        "eslint-config-cakkypamucm",
        `plugin:vue-scoped-css/${isVue3 ? "vue3-" : ""}recommended`,
        `plugin:vue/${isVue3 ? "vue3-" : ""}recommended`
    ],
    rules: {
        "vue-scoped-css/require-selector-used-inside": "error",
        "vue-scoped-css/v-deep-pseudo-style": ["error", ":deep"],
        "vue-scoped-css/v-global-pseudo-style": ["error", ":global"],
        "vue-scoped-css/v-slotted-pseudo-style": ["error", ":slotted"],

        "vue/block-tag-newline": "error",
        "vue/html-button-has-type": "error",
        "vue/html-comment-content-newline": "error",
        "vue/html-comment-content-spacing": "error",
        "vue/html-comment-indent": "error",
        "vue/html-indent": "off",
        "vue/multi-word-component-names": "off",
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
    }
};
