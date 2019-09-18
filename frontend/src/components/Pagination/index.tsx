import { Pivot, PivotItem } from 'office-ui-fabric-react';
import React, { Fragment } from 'react';

interface IProps {
  numberOfPages: number;
  currentPage: number;
  changeCurrentPage: (page: number) => void;
}

const handleChangePages = (
  cb: (page: number) => void,
  currentPage: number,
  numberOfPages: number
) => (item?: PivotItem, ev?: React.MouseEvent<HTMLElement>) => {
  if (ev) {
    ev.preventDefault();
  }
  if (item) {
    switch (item.props.headerText) {
      case 'First':
        return cb(1);
      case 'Previous':
        if (currentPage !== 1) return cb(currentPage - 1);
        return;
      case 'Next':
        if (currentPage !== numberOfPages) return cb(currentPage + 1);
        return;
      case 'Last':
        return cb(numberOfPages);
      default:
        cb(Number(item.props.headerText));
    }
  }
};

const constructPagination = (count: number, page: number): number[] => {
  const pages = [];
  if (count <= 7) {
    const safeCount = count > 0 ? count : 1;
    return Array.from([...Array(safeCount)].keys());
  }
  if (page <= 3) {
    return Array.from([...Array(7)].keys());
  }
  if (page >= 3) {
    for (let i = page - 3; i < page; i++) {
      pages.push(i);
    }
    if (page + 3 <= count) {
      for (let i = page; i < page + 3; i++) {
        pages.push(i);
      }
    } else {
      for (let i = page; i < count; i++) {
        pages.push(i);
      }
    }
  }

  return pages;
};

const Pagination = ({
  numberOfPages,
  currentPage,
  changeCurrentPage
}: IProps) => (
  <Fragment>
    <Pivot
      selectedKey={currentPage.toString()}
      onLinkClick={handleChangePages(
        changeCurrentPage,
        currentPage,
        numberOfPages
      )}
    >
      <PivotItem headerText={'First'} itemKey={'first'} />
      <PivotItem headerText={'Previous'} itemKey={'previous'} />
      {constructPagination(numberOfPages, currentPage).map(e => (
        <PivotItem
          headerText={(e + 1).toString()}
          itemKey={(e + 1).toString()}
          key={(e + 1).toString()}
        />
      ))}
      <PivotItem headerText={'Next'} itemKey={'next'} />
      <PivotItem headerText={'Last'} itemKey={'last'} />
    </Pivot>
  </Fragment>
);
export default Pagination;
