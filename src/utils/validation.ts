export default {
  label: (label: string): boolean => {
    let res = true;
    if (label.length == 0) res = false;

    return res;
  },
  type: (payload: { value: string; type: number }): boolean => {
    let res = true;

    const value = payload.value;
    const type = payload.type;
    if (value.length == 0 || type < 1) {
      res = false;
    }
    return res;
  },
  email: (email: string): boolean => {
    const pattern = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;;

    return pattern.test(email);

  },
  time: (time: string): boolean => {
    let res = true;
    const time_format = /^([01][0-9]|2[0-3]):([0-5][0-9])$/;

    if (!time_format.test(time)) {
      res = false;
    }

    return res;
  },
  number: (value: string): boolean => {
    let res = true;
    const check_number = /^[0-9]+$/;

    if (!check_number.test(value)) {
      res = false;
    }

    return res;
  },
  phone_no_hypen: (value: string): boolean => {
    let res = true;
    const check_number = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!check_number.test(value)) {
      res = false;
    }

    return res;
  },
  check_length: (values: any[]): boolean => {
    let res = true;
    if (values.length < 0) {
      res = false;
    }

    return res;
  }
};
