import React from "react";
import { DetailsList, IColumn } from "office-ui-fabric-react";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { Layout, FabricButton } from "../styled";
import Loader from "./Loader/index";
import ErrorBar from "./MessageBar";
type TableProps = {
  [key: string]: string;
};

interface IProps {
  items: TableProps[];
  onItemClick?: (e: number) => void;
  columns: IColumn[];
  loading: boolean;
  error: any;
  responseError: string;
  itemsPerPage?: number;
  query?: object;
}

interface IState {
  currentPage: number;
  numberOfPages: number;
  searchValue?: string;
  modal?: (e: any) => void;
  items?: object[];
}

interface IMyComponentState {
  rows: TableProps[];
}

export function createTableProps(items: any[]): TableProps[] {
  let tableItems: TableProps[] = [{}];
  const keysOfProps = Object.keys(items[0]);
  tableItems = items.map(el => {
    let item: TableProps = {};
    keysOfProps.forEach((element: string, index: number) => {
      item[keysOfProps[index]] = el[element];
    });
    return item;
  });
  return tableItems;
}
type Itest = IProps & IMyComponentState
class Table extends React.Component<Itest, IState> {
  constructor(props: Itest & IState) {
    super(props);
    this.setState({ 
      numberOfPages : 1,
      currentPage: 1,
    });
    this.fire = this.fire.bind(this);
  }

  fire(newValue: any) {
    const { items } = this.props;
    var rows = items.filter(function(element, index, array) {
      if (
        element.case_number == newValue ||
        element.subject.includes(newValue) ||
        element.claimed_amount == newValue ||
        element.registration_date.includes(newValue) ||
        element.case_status.includes(newValue)
      ) {
        return element;
      }
    });
    //this.setState({
    //  rows: rows
    //});
  }

  componentWillMount() {
    this.fire("");
  }
  public handleActiveItem = (e: any) => {
    const { onItemClick } = this.props;
    if (onItemClick) onItemClick(e.numberId);
  };
  public render(): JSX.Element {
    const { items, columns, loading, error, responseError } = this.props;
    console.log('huhhuhuhuhuh', this);

    return (
      <Layout
        margin={"20px auto"}
        displayFlex
        justifyCenter
        width={"85%"}
        alignCenter
      >
        <SearchBox
          styles={{ root: { width: 200 } }}
          placeholder="Search"
          onChange={(_, newValue) => this.fire(newValue)}
        />

        <DetailsList
          items={items || []}
          columns={columns}
          setKey="set"
          onActiveItemChanged={e => this.handleActiveItem(e)}
          ariaLabel="lalalalalalallaa"
          checkButtonAriaLabel="check"
        />
        {loading && <Loader />}
        {error && ErrorBar(responseError)}

      </Layout>
    );
  }
}

// export default Table;
