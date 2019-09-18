import * as moment from 'moment';
export interface IMailOption {
  from: string;
  subject: string;
  text: string;
  html?: string;
}

const url = 'http://localhost:5001/api/v1/case/id/';
const URL = 'http://localhost:5001/api/v1/case/';

const MAIL_OPTIONS = {

CASE_WEEK_BEFORE_PROCESS: (groomFullName: string, processTime: Date, subject: string) => ({
    from: 'secerlama@secerlama.com',
    subject: `One week before process  ${moment().format('DD.MM.YYYY')}`,
    text: `Hi there, this email is automatically sent to you.`,
    html: `${groomFullName} We thank you for choosing our service.
    Estimated finish ${processTime}.
    Here is a link for you to check your case progress. <a href="${url}${subject}">Case info</a>`,
  }),
  CASE_3DAYS_BEFORE_PROCESS: (brideFullName: string, processTime: Date, subject: string) => ({
    from: 'secerlama@secerlama.com',
    subject: `One week before wedding completed ${moment().format('DD.MM.YYYY')}`,
    text: `Hi there, this email is automatically sent to you.`,
    html: `${brideFullName} We thank you for choosing our service.
    Estimated finish ${processTime}.
    Here is a link for you to check your wedding progress. <a href="${url}${subject}">Case info</a>`,
  }),

  

};

export default MAIL_OPTIONS;
