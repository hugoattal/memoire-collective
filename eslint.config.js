import lpConfigVue from "@luna-park/eslint-config/vue";
import tseslint from "typescript-eslint";

export default tseslint.config(
    ...lpConfigVue,
    {
        rules: {
            "sort-keys-custom-order/object-keys": ["error", {
                orderedKeys: ["id", "name", "title", "label", "icon"]
            }],
            "sort-keys-custom-order/type-keys": ["error", {
                orderedKeys: ["id", "name", "title", "label", "icon"]
            }]
        }
    }
);
