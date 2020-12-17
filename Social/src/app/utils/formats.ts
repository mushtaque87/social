import { FormattedNumber } from "react-intl";

enum NumberFormat {
  Absolute = "absolute",
  Money = "money",
  Percentage = "percentage"
}

interface INumberFormats {
  [id: string]: FormattedNumber.PropsBase;
}

const formats: { [type: string]: INumberFormats } = {
  number: {
    [NumberFormat.Money]: {
      currencyDisplay: "code",
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      style: "currency",
      useGrouping: true
    },
    [NumberFormat.Absolute]: {
      maximumFractionDigits: 1,
      minimumFractionDigits: 0,
      useGrouping: true
    },
    [NumberFormat.Percentage]: {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
      style: "percent",
      useGrouping: true
    }
  }
};

export { NumberFormat };
export default formats;
