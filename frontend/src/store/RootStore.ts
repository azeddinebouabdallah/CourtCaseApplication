import { endpoints } from "../lib/endpoints";
import PromiseStore from "./PromiseStore";
import UserStore from "./UserStore";
import NotificationStore from "./NotificationStore";
import CaseStore from "./CaseStore";
import { extendObservableObjectWithProperties } from "mobx/lib/internal";
import { RouterStore } from "mobx-react-router";
import StepperStore from "./StepperStore";

export const routingStore = new RouterStore();
class RootStore {
  router: RouterStore;
  notification: NotificationStore;
  test: PromiseStore;
  getUsers: UserStore;
  loginUser: UserStore;
  postUser: UserStore;
  resetPassword: UserStore;
  forgotPassword: UserStore;
  newTestForm: PromiseStore;
  newCaseForm: PromiseStore;
  getCaseParties: CaseStore;
  getCaseAttachments: CaseStore;
  getPetitionsAttachments: CaseStore;
  getCaseExhibits: CaseStore;
  getCaseNotices: CaseStore;
  getCaseDecisions: CaseStore;
  getCasePetitions: CaseStore;
  getCaseVerdicts: CaseStore;
  getCaseDepositVouchers: CaseStore;
  getCaseClaims: CaseStore;
  attachmentsForm: PromiseStore;
  petitionsAttachmentsForm: PromiseStore;
  exhibitsForm: PromiseStore;
  noticesForm: PromiseStore;
  decisionsForm: PromiseStore;
  petitionsForm: PromiseStore;
  verdictsForm: PromiseStore;
  depositVouchersForm: PromiseStore;
  claimsForm: PromiseStore;
  form: { [key: string]: PromiseStore };
  getStepper: StepperStore;
  getAllCases: PromiseStore;

  constructor() {
    this.router = routingStore;
    this.notification = new NotificationStore(endpoints.get_test, null, this);
    this.test = new PromiseStore(endpoints.get_test, null, this);
    this.getUsers = new UserStore(endpoints.get_users, null, this);
    this.loginUser = new UserStore(endpoints.post_login, null, this);
    this.postUser = new UserStore(endpoints.post_user, null, this);
    this.resetPassword = new UserStore(
      endpoints.post_reset_password,
      null,
      this
    );
    this.forgotPassword = new UserStore(
      endpoints.post_forgot_password,
      null,
      this
    );

    this.getStepper = new StepperStore();
    this.getAllCases = new PromiseStore(endpoints.get_cases, null, this);
    this.form = {
      newTestForm: this.newTestForm = new PromiseStore(
        endpoints.new_test_form,
        null,
        this
      ),
      newCaseForm: this.newCaseForm = new PromiseStore(
        endpoints.new_case_form,
        null,
        this
      ),
      attachmentsForm: this.attachmentsForm = new PromiseStore(
        endpoints.attachments_form,
        null,
        this
      ),
      petitionsAttachmentsForm: this.petitionsAttachmentsForm = new PromiseStore(
        endpoints.petitionsAttachments_form,
        null,
        this
      ),
      exhibitsForm: this.exhibitsForm = new PromiseStore(
        endpoints.exhibits_form,
        null,
        this
      ),
      noticesForm: this.noticesForm = new PromiseStore(
        endpoints.notices_form,
        null,
        this
      ),
      decisionsForm: this.decisionsForm = new PromiseStore(
        endpoints.decisions_form,
        null,
        this
      ),
      petitionsForm: this.petitionsForm = new PromiseStore(
        endpoints.petitions_form,
        null,
        this
      ),
      verdictsForm: this.verdictsForm = new PromiseStore(
        endpoints.verdicts_form,
        null,
        this
      ),
      depositVouchersForm: this.depositVouchersForm = new PromiseStore(
        endpoints.deposit_vouchers_form,
        null,
        this
      ),
      claimsForm: this.claimsForm = new PromiseStore(
        endpoints.claims_form,
        null,
        this
      )
    };
    this.getCaseParties = new CaseStore(endpoints.get_parties, null, this);
    this.getCaseAttachments = new CaseStore(endpoints.get_parties, null, this);
    this.getPetitionsAttachments = new CaseStore(endpoints.get_parties, null, this);
    this.getCaseExhibits = new CaseStore(endpoints.get_parties, null, this);
    this.getCaseNotices = new CaseStore(endpoints.get_parties, null, this);
    this.getCaseDecisions = new CaseStore(endpoints.get_parties, null, this);
    this.getCasePetitions = new CaseStore(endpoints.get_parties, null, this);
    this.getCaseVerdicts = new CaseStore(endpoints.get_parties, null, this);
    this.getCaseDepositVouchers = new CaseStore(
      endpoints.get_parties,
      null,
      this
    );
    this.getCaseClaims = new CaseStore(endpoints.get_parties, null, this);
  }

  init = () => {
    console.log("APP Init");
  };
}
export default RootStore;
