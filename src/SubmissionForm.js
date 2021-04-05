import React from "react";
import PropTypes from "prop-types";

import {lastNameValidator, emailValidator, uuidValidator} from './custom-validators';

/** Component for displaying university personal information */
const SubmissionForm = ({
  firstName, lastName, uuid,
  email, role, currency
}) => {
  return (
    <form id="answers">
      <label><span> First Name :</span> {firstName}</label>
      <label><span> Last Name :</span>{lastName}</label>
      <label><span> Id :</span>{uuid}</label>
      <label><span> Email :</span>{email}</label>
      <label><span> Role :</span>{role}</label>
      <label><span> Currency :</span>{currency}</label>
    </form>
  );
};



// const customProp = (props, propName, componentName) => {

// };




/** allowed currencies */
const currencies ={
    USD:'USD',
    CAD:'CAD'
}

/** allowed roles for user */
const roles = {
    STUDENT: 'student',
    INSTRUCTOR: 'instructor',
    ADMIN: 'admin'
}

  SubmissionForm.propTypes = {
    /** first name of the university personal */
    firstName: PropTypes.string.isRequired,
    /** last name of the university personal, must have more than one letter */
    lastName: lastNameValidator.isRequired,
    /** valid id of the university personal in UUID format */
    uuid: uuidValidator.isRequired,
    /** valid email id of the university personal */
    email: emailValidator.isRequired,
    /** valid role of the university personal ( student, instrcutor or admin ) */
    role: PropTypes.oneOf([roles.ADMIN, roles.INSTRUCTOR, roles.STUDENT]).isRequired,
    /** valid curreny used in the university ( USD or CAD ) */
    currency:PropTypes.oneOf([currencies.USD, currencies.CAD])
};

SubmissionForm.defaultProps = {
    /** default current used if not provided */
    currency: currencies.USD,
};

export default SubmissionForm;
