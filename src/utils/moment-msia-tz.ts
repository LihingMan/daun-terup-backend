import moment, { Moment } from "moment";

const momentMYT = (
  inp?: moment.MomentInput,
  format?: moment.MomentFormatSpecification,
  strict?: boolean
): Moment => {
  return moment(inp, format, strict).utcOffset("+0800");
};

export default momentMYT;
