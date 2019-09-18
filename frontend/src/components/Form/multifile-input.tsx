import {FormikErrors} from 'formik';
import {
  Icon,
  ITag,
  Label,
  PrimaryButton,
  TagItem
} from 'office-ui-fabric-react';
import {Text} from 'office-ui-fabric-react/lib/Text';
import React, {Component, Fragment} from 'react';
import {Layout} from '../../styled';

interface IProps {
  label?: string;
  error?: string | FormikErrors<any>;
  onChange?: IFormikChangeEvent;
  name?: string;
  onBlur?: IFormikBlurEvent;
  placeholder?: string;
  valueKey?: string;
  value?: any;
  multiple?: boolean;
}

interface IState {
  selectedFiles: { key: string; name: string }[];
}

class MultiFileInput extends Component<IProps, IState> {
  _testTags: ITag[];
  _fileUploadRef: React.RefObject<HTMLInputElement> | null | undefined;
  files: any[];

  constructor(props: IProps) {
    super(props);
    this._fileUploadRef = React.createRef();
    this._testTags = [];
    this.files = [];
    this.state = {
      selectedFiles: []
    };
  }

  onRemoveTag = (index: number) => {
    const {value} = this.props;
    if (value) {
      let files = Object.values(value);
      files.splice(index, 1);
      this.uploadFile(files);
    }
  };

  clickUpload = () => {
    if (this._fileUploadRef && this._fileUploadRef.current) {
      this._fileUploadRef.current.click();
    }
  };
  uploadHelper = (clickEvent: any) => {
    if (clickEvent.target && clickEvent.target.files) {
      this.uploadFile(clickEvent.target.files);
    }
  };

  parseValue = (files: any) => {
    if (!files) {
      return [];
    }
    console.log('FILERINOS', files);
    return Object.values(files).map((item: any) => ({
      key: item.name,
      name: item.name
    }));
  };

  uploadFile = (files: any) => {
    console.log('values', files);

    // this.setState({
    // selectedFiles:
    // });

    const {onChange, onBlur, name} = this.props;
    if (onChange) {
      onChange({
        target: {
          value: files,
          name
        }
      } as any);
    }

    if (onBlur) {
      onBlur({
        target: {
          name
        }
      } as any);
    }
  };

  public render(): JSX.Element {
    const {multiple, label} = this.props;
    // const { selectedFiles } = this.state;
    const {value} = this.props;

    const selectedFiles = this.parseValue(value);

    return (
        <Layout displayFlex column>
          <Label>{label}</Label>
          {/* <Layout fontSize={'14'} fontWeight={'600'} style={{ font: 'none' }} >Differen check name</Layout> */}
          <PrimaryButton
              style={{width: '150px', textAlign: 'center'}}
              onClick={this.clickUpload}
          >
            <Icon iconName={'Upload'} /> Upload
          </PrimaryButton>
          <input
              ref={this._fileUploadRef}
              style={{display: 'none'}}
              type="file"
              multiple={multiple}
              onChange={this.uploadHelper}
          />
          {!!selectedFiles &&
          selectedFiles.map((tag, i) => (
              <Layout width={'fit-content'}>
                <TagItem
                    item={{key: tag.key, name: tag.name}}
                    index={i}
                    onRemoveItem={() => this.onRemoveTag(i)}
                    key={tag.key}
                    label={label}
                >
                  {tag.name}
                </TagItem>
              </Layout>
          ))}
        </Layout>
    );
  }
}

export default MultiFileInput;
