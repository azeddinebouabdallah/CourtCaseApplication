interface IEndpoints {
  [key: string]: IEndpoint;
}
export const endpoints: IEndpoints = {
  get_test: {
    method: "GET",
    uri: "/"
  },
  get_users: {
    method: "GET",
    uri: "/users"
  },
  post_login: {
    method: "POST",
    uri: "/api/users/login"
  },
  post_user: {
    method: "POST",
    uri: "/api/users/create"
  },
  post_reset_password: {
    method: "POST",
    uri: "/api/users/reset-password"
  },
  post_forgot_password: {
    method: "POST",
    uri: "/api/users/forgot-password"
  },
  new_test_form: {
    method: "POST",
    uri: "/api/users/forgot-password"
  },
  new_case_form: {
    method: "POST",
    uri: "/api/cases/new"
  },
  get_parties: {
    method: "GET",
    uri: "/api/cases/parties"
  },
  attachments_form: {
    method: "POST",
    uri: "/api/cases/upload?type=party"
  },
  petitionsAttachments_form: {
    method: "POST",
    uri: "/api/cases/upload?type=petititon"
  },
  exhibits_form: {
    method: "POST",
    uri: "/api/cases/exhibit"
  },
  notices_form: {
    method: "POST",
    uri: "/api/cases/notice"
  },
  decisions_form: {
    method: "POST",
    uri: "/api/cases/decision"
  },
  petitions_form: {
    method: "POST",
    uri: "/api/cases/petition"
  },
  verdicts_form: {
    method: "POST",
    uri: "/api/cases/verdict"
  },
  deposit_vouchers_form: {
    method: "POST",
    uri: "/api/cases/deposit-voucher"
  },
  claims_form: {
    method: "POST",
    uri: "/api/cases/claim"
  },
  get_cases: {
    method: "GET",
    uri: "/api/cases"
  },
  get_case: {
    method: "GET",
    uri: "/api/cases/resource"
  }
};
