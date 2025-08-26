export const rules={
  "variable-cover":await import (`./package/variable/cover.mjs`),
  "variable-align":await import (`./package/variable/align.mjs`),
  "operator-space":await import (`./package/operator/space.mjs`),
  "imported-order":await import (`./package/imported/order.mjs`),
  "function-place":await import (`./package/function/place.mjs`),
  "exported-order":await import (`./package/exported/order.mjs`),
  "argument-place":await import (`./package/argument/place.mjs`),
  "argument-order":await import (`./package/argument/order.mjs`),
};
