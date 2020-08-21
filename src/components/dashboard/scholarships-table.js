import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import {Table} from 'semantic-ui-react';
import './scholarships-table.scss';
import moment from 'moment';

const MoreDetailsLink = ({link, text}) => <a href={link} target="_blank" rel="noopener noreferrer">{text}</a>;
MoreDetailsLink.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string
};

const getFormattedAmount = (amount, link) => {
  if (!amount) {
    return <MoreDetailsLink link={link} text="View more details"/>;
  }
  return `$${amount}`;
};

const getFormattedDate = (date, link) => {
  if (!date) {
    return <MoreDetailsLink link={link} text="View more details"/>;
  }
  return moment(date).format('MMM Do YYYY');
};

export default class ScholarshipTable extends React.Component {
  getRows = () => {
    const {isTopScholarships, scholarships} = this.props;
    return scholarships.map((s, i) => {
      return (
        <Table.Row key={i}>
          {!isTopScholarships ? <Table.Cell>{s.category}</Table.Cell> : null}
          {!isTopScholarships ? <Table.Cell>{s.subcategory}</Table.Cell> : null}
          <Table.Cell>{s.scholarship_name}</Table.Cell>
          <Table.Cell>{getFormattedAmount(s.amount, s.link)}</Table.Cell>
          <Table.Cell>{getFormattedDate(s.due_date, s.link)}</Table.Cell>
          <Table.Cell><MoreDetailsLink link={s.link} text="Apply Now"/></Table.Cell>
        </Table.Row>
      );
    });
  };

  render() {
    const {isTopScholarships, children, className} = this.props;
    return (
      <div
        className={ClassNames(`scholarships-table-wrapper`, isTopScholarships ? 'scholarships-table-top' : null, this.props.wrapperClassName)}>
        {children ? children : null}
        <Table celled className={ClassNames('scholarships-table', className)}>
          <Table.Header>
            <Table.Row className="text-gray-title">
              {!isTopScholarships ? <Table.HeaderCell>CATEGORY</Table.HeaderCell> : null}
              {!isTopScholarships ? <Table.HeaderCell>SUB CATEGORY</Table.HeaderCell> : null}
              <Table.HeaderCell>SCHOLARSHIP NAME</Table.HeaderCell>
              <Table.HeaderCell>AMOUNT</Table.HeaderCell>
              <Table.HeaderCell>DUE DATE</Table.HeaderCell>
              <Table.HeaderCell>APPLICATION</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.getRows()}
          </Table.Body>
        </Table>
      </div>
    );
  };
}
ScholarshipTable.propTypes = {
  scholarships: PropTypes.array,
  isTopScholarships: PropTypes.bool
};
