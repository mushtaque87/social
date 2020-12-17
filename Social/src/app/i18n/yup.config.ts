export const yupLocale = {
  mixed: {
    required: 'errors.empty',
    notType: function notType(_ref) {
      switch (_ref.type) {
        case 'number':
          return 'errors.shouldBeNumber';
        case 'string':
          return 'errors.shouldBeString';
        default:
          return 'errors.wrongType';
      }
    }
  },
  number: {
    max: "errors.amountExceeded",
    min: "errors.shouldBeMoreThanMinimum",
    integer: "errors.integer",
    positive: "errors.positiveNumber",
    negative: "errors.negativeNumber",
  },
  string: {
    email: 'errors.invalidEmail',
  },
}